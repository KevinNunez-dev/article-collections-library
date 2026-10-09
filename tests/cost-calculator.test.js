import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateScenario,
  RPT_PACKAGES,
  standardRPTCost,
} from "../src/lib/cost-calculator.js";

test("calculates fixed copays and transportation separately", () => {
  const result = calculateScenario({
    visits: 30,
    mode: "copay",
    copay: 40,
    transportationPerVisit: 8,
    appointmentMinutes: 45,
    travelMinutes: 40,
    waitMinutes: 15,
  });

  assert.equal(result.serviceCost, 1200);
  assert.equal(result.transportationCost, 240);
  assert.equal(result.directExpense, 1440);
  assert.equal(result.careTimeHours, 50);
});

test("reports optional unpaid earnings independently from direct expenses", () => {
  const result = calculateScenario({
    visits: 30,
    mode: "cash",
    cashPerVisit: 0,
    transportationPerVisit: 0,
    appointmentMinutes: 0,
    travelMinutes: 0,
    waitMinutes: 0,
    unpaidWorkHoursPerVisit: 1,
    hourlyEarnings: 25,
  });

  assert.equal(result.potentialLostEarnings, 750);
  assert.equal(result.directExpense, 0);
});

test("estimates in-network deductible, coinsurance, and remaining out-of-pocket cap", () => {
  const result = calculateScenario({
    visits: 4,
    mode: "insurance",
    allowedAmount: 100,
    deductibleRemaining: 150,
    coinsurancePercent: 20,
    remainingOutOfPocketMax: 180,
    remainingCoveredVisits: 4,
    transportationPerVisit: 0,
  });

  assert.equal(result.serviceCost, 180);
  assert.equal(result.modeledVisits, 4);
});

test("excludes visits above a stated remaining plan limit instead of pricing them as covered", () => {
  const result = calculateScenario({
    visits: 5,
    mode: "insurance",
    allowedAmount: 100,
    deductibleRemaining: 0,
    coinsurancePercent: 20,
    remainingOutOfPocketMax: "",
    remainingCoveredVisits: 3,
    transportationPerVisit: 0,
  });

  assert.equal(result.modeledVisits, 3);
  assert.equal(result.excludedVisits, 2);
  assert.equal(result.serviceCost, 60);
});

test("uses the stated standard-rate formula and keeps packages distinct", () => {
  assert.equal(standardRPTCost(1), 225);
  assert.equal(standardRPTCost(12), 1875);
  assert.deepEqual(RPT_PACKAGES.advanced, {
    followUps: 11,
    packagePrice: 1500,
    appointments: 12,
    totalWithInitial: 1725,
  });
  assert.deepEqual(RPT_PACKAGES.premium, {
    followUps: 17,
    packagePrice: 2250,
    appointments: 18,
    totalWithInitial: 2475,
  });
});
