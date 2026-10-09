export const RPT_PACKAGES = Object.freeze({
  advanced: Object.freeze({
    followUps: 11,
    packagePrice: 1500,
    appointments: 12,
    totalWithInitial: 1725,
  }),
  premium: Object.freeze({
    followUps: 17,
    packagePrice: 2250,
    appointments: 18,
    totalWithInitial: 2475,
  }),
});

const nonNegative = (value) => Math.max(0, Number(value) || 0);

export function standardRPTCost(appointments) {
  const count = Math.max(1, Math.floor(nonNegative(appointments)));
  return 225 + 150 * (count - 1);
}

export function calculateScenario(input) {
  const visits = Math.max(1, Math.floor(nonNegative(input.visits)));
  let serviceCost = 0;
  let modeledVisits = visits;
  let excludedVisits = 0;

  if (input.mode === "copay") {
    serviceCost = nonNegative(input.copay) * visits;
  } else if (input.mode === "cash") {
    serviceCost = nonNegative(input.cashPerVisit) * visits;
  } else if (input.mode === "insurance") {
    modeledVisits = Math.min(
      visits,
      Math.floor(nonNegative(input.remainingCoveredVisits ?? visits)),
    );
    excludedVisits = visits - modeledVisits;
    const allowedTotal = nonNegative(input.allowedAmount) * modeledVisits;
    const deductible = Math.min(
      allowedTotal,
      nonNegative(input.deductibleRemaining),
    );
    const afterDeductible = allowedTotal - deductible;
    const coinsurance =
      Math.min(100, nonNegative(input.coinsurancePercent)) / 100;
    const beforeCap = deductible + afterDeductible * coinsurance;
    const cap =
      input.remainingOutOfPocketMax === "" ||
      input.remainingOutOfPocketMax == null
        ? beforeCap
        : nonNegative(input.remainingOutOfPocketMax);
    serviceCost = Math.min(beforeCap, cap);
  }

  const transportationCost = nonNegative(input.transportationPerVisit) * visits;
  const visitMinutes =
    nonNegative(input.appointmentMinutes) +
    nonNegative(input.travelMinutes) +
    nonNegative(input.waitMinutes);
  const careTimeHours = (visits * visitMinutes) / 60;
  const unpaidWorkHours = nonNegative(input.unpaidWorkHoursPerVisit) * visits;
  const potentialLostEarnings =
    unpaidWorkHours * nonNegative(input.hourlyEarnings);

  return {
    visits,
    modeledVisits,
    excludedVisits,
    serviceCost,
    transportationCost,
    directExpense: serviceCost + transportationCost,
    careTimeHours,
    potentialLostEarnings,
  };
}
