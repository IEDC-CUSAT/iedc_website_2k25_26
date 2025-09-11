import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const HeroSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`flex flex-col custom-lg:flex-row justify-center items-center w-full min-h-[calc(100vh-96px)] px-6 fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ minHeight: 'calc(100vh - 96px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Left: Hero Text */}
      <div className="flex-1 text-left transform -translate-y-4 md:-translate-y-6 lg:-translate-y-8 max-w-2xl">
        <h1 className="font-headline text-6xl md:text-8xl font-medium text-black headline-text mb-8 leading-tight">
          Innovation & Entrepreneurship Development Cell
        </h1>
        <p className="font-serif text-3xl text-coffee-dark leading-relaxed mb-8">
          Entrepreneurship is the bridge between the spark of innovation and the fire of commercialization.
        </p>
      </div>

      {/* Right: Recent Event (Makeaton 7.0) - Clickable Image Only */}
  <div className="flex-1 w-full max-w-2xl mt-8 custom-lg:mt-0 custom-lg:ml-8 flex items-center justify-center">
        <a href="/events" className="block bg-coffee-bg-1 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full focus:outline-none focus:ring-2 focus:ring-coffee-dark">
          <div className="w-full aspect-w-16 aspect-h-9">
            <img
              src="/images/Makeaton (1).jpg"
              alt="Makeaton Event"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;



