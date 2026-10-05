// src/components/Testimonials.tsx
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface TestimonialsProps {
  videobuttonclass: string;
  headline: string;
  videoTestimonials: VideoTestimonial[];
  textTestimonials: TextTestimonial[];
  gmburl: string;
}

type VideoTestimonial = {
  embedURL: string;
  embedID: string;
  buttonLabel: string;
  location: string;
};

type TextTestimonial = {
  testimonial: string;
  location: string;
};

function TestimonialText({ testimonial }: { testimonial: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const CHAR_LIMIT = 200;

  const needsTruncation = testimonial.length > CHAR_LIMIT;
  const displayText =
    isExpanded || !needsTruncation
      ? testimonial
      : testimonial.slice(0, CHAR_LIMIT) + '...';

  return (
    <div className="text-center px-4 md:px-6">
      <p className="font-semibold text-sm md:text-base text-gray-800 leading-relaxed">
        “{displayText}”
      </p>
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-cyan-600 hover:text-cyan-700 font-bold text-sm mt-3"
        >
          {isExpanded ? 'Show Less ▲' : 'Read More ▼'}
        </button>
      )}
    </div>
  );
}

export default function Testimonials(props: TestimonialsProps) {
  // Provide safe defaults in case parent doesn't pass the arrays
  const videoTestimonials = props.videoTestimonials || [];
  const textTestimonials = props.textTestimonials || [];

  const INITIAL_VIDEO_COUNT = 3;
  const VIDEO_LOAD_STEP = 3;

  const [visibleVideos, setVisibleVideos] = useState(INITIAL_VIDEO_COUNT);
  const hasMoreVideos = visibleVideos < videoTestimonials.length;

  const handleLoadMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + VIDEO_LOAD_STEP, videoTestimonials.length));
  };

  return (
    <section id="testimonials" className="bg-brand-secondary py-16">
      <h1 className="section-headline text-2xl mb-10 text-center">
        {props.headline}
      </h1>

      {/* VIDEO GRID WITH LOAD MORE */}
      {props.videoTestimonials.length > 0 && (
        <div className="container max-w-7xl mx-auto px-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.slice(0, visibleVideos).map((video, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-video border border-neutral-500 rounded-lg overflow-hidden">
                  <iframe
                    src={video.embedURL}
                    title="Testimonial Video"
                    id={video.embedID}
                    className="w-full h-full"
                    allowFullScreen={true}
                  />
                </div>
              </div>
            ))}
          </div>

          {hasMoreVideos && (
            <div className="mt-8 text-center">
              <button
                onClick={handleLoadMoreVideos}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Load more videos
              </button>
            </div>
          )}
        </div>
      )}

      {/* GOOGLE REVIEWS LOGO */}
      <div className="md:container md:max-w-6xl mx-auto mb-12">
        <a href={props.gmburl} target="_blank" rel="noopener noreferrer">
          <img
            src="/health/landing-assets/img/google-reviews.svg"
            alt="Google Reviews"
            className="md:w-52 mx-auto"
          />
        </a>
      </div>

      {/* TEXT TESTIMONIALS SWIPER */}
      {textTestimonials.length > 0 && (
        <div className="container max-w-7xl mx-auto px-4">
          <Swiper
            className="testimonial-swiper testimonial-swiper-text"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {textTestimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="px-2 py-6 flex flex-col items-center">
                  <TestimonialText testimonial={t.testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
