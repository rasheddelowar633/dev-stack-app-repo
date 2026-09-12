
import bannerSection from "../assets/banner-stack.png";

export default function BannerSection() {
  return (
    <section className="w-full pt-16">
      <div className="min-h-screen bg-base-200">

        <div className="container mx-auto px-4">

          {/* Banner Content */}
          <div className="flex flex-col items-center text-center py-12">

            {/* Title */}
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your Ideal
                <br />

                <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  Development Stack
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-sm sm:text-base md:text-lg leading-7 text-gray-600 max-w-2xl mx-auto">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack
                that fits your next project.
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 max-w-md mx-auto">

                <button className="btn border-0 bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-blue-600 hover:to-purple-700">
                  Explore Technologies
                </button>

                <button className="btn btn-primary">
                  Learn More
                </button>

              </div>
            </div>

            {/* Image BELOW TITLE / CONTENT */}
            <div className="mt-10 w-full flex justify-center">
              <img
                src={bannerSection}
                alt="Development Stack"
                className="w-64 sm:w-80 md:w-96 lg:w-[450px] max-w-full rounded-lg shadow-2xl"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}