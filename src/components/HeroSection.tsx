import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const HeroSection = () => {
  const [ref, isVisible] = useScrollFadeIn<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`flex flex-col custom-lg:flex-row justify-start items-stretch w-full h-screen px-4 py-6 fade-in-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {/* Left: Hero Text */}
      <div className="flex-1 flex flex-col justify-start text-left pr-0 custom-lg:pr-16 min-h-0">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black headline-text mb-8 leading-[0.9] tracking-tight">
          Innovation & Entrepreneurship Development Cell
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-12 font-semibold max-w-4xl leading-relaxed">
          <strong>
            Entrepreneurship is the bridge between the spark of innovation and
            the fire of commercialization.
          </strong>
        </p>
      </div>

      {/* Right: Recent Event - Large Image */}
      <div className="flex-1 flex items-start justify-center mt-6 custom-lg:mt-0 min-h-0">
        <a
          href="/events"
          className="block bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 w-full max-w-md lg:max-w-lg xl:max-w-xl hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
        >
          <div className="relative w-full h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem]">
            <img
              src="/images/founderNextdoor.jpeg"
              alt="Founder Nextdoor Event"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg">
                Latest Event
              </h3>
              <p className="text-sm lg:text-base opacity-90 drop-shadow-lg">
                Discover our recent activities and upcoming events
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs lg:text-sm font-semibold">
              Click to Explore
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
