import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import LazyImage from '@/components/LazyImage';

interface Testimonial {
  id: number;
  name: string;
  country: string;
  rating: number;
  text: string;
  image: string;
  tour: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'Germany',
    rating: 5,
    text: 'Amporn Tour provided an absolutely unforgettable experience in Chiang Mai. The guides were knowledgeable, professional, and genuinely cared about our experience. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    tour: 'Doi Inthanon Trek',
  },
  {
    id: 2,
    name: 'Marco Rossi',
    country: 'Italy',
    rating: 5,
    text: 'The elephant sanctuary tour was the highlight of our Thailand trip. Ethical, educational, and incredibly moving. The team went above and beyond to make it special.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tour: 'Elephant Care Tour',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    country: 'United Kingdom',
    rating: 5,
    text: 'Flexible scheduling, expert guides, and authentic experiences. Amporn Tour truly understands what European travelers want. Worth every baht!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    tour: 'Chiang Rai Day Tour',
  },
  {
    id: 4,
    name: 'Hans Mueller',
    country: 'Switzerland',
    rating: 5,
    text: 'Professional, punctual, and passionate about sharing Northern Thailand. The Doi Suthep temple tour was beautifully organized. Will definitely return!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    tour: 'Doi Suthep Temple Tour',
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    country: 'France',
    rating: 5,
    text: 'Amazing value for money and incredible attention to detail. The guides made us feel safe and welcomed. A truly premium experience at great prices!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    tour: 'Golden Triangle Tour',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!autoPlay || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, isVisible]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            What Our Guests Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from European travelers who experienced the magic of Northern Thailand with Amporn Tour
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed italic">
              "{current.text}"
            </p>

            {/* Author Info */}
            <div>
              <p className="font-semibold text-slate-900 text-lg">{current.name}</p>
              <p className="text-slate-600 text-sm">{current.country}</p>
              <p className="text-primary text-sm font-medium">{current.tour}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Counter */}
          <p className="text-center text-slate-600 text-sm mt-6">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
