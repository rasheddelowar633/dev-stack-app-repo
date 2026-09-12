
import { Suspense, useState } from "react";
import BannerSection from "./components/bannerSection";
import Nav from "./components/nav";
import type { DevStack } from "./devStack";

import Techno from "./techno";
import Technologist from "./Technologist";
import Footer from "./Footer";

const technologistFetch = async (): Promise<DevStack[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

const technologistPromise = technologistFetch();

function App() {
  const [yourStack, setYourStack] = useState<DevStack[]>([]);

  // Add technology
  const handleAddStack = (tech: DevStack) => {
    setYourStack((previousStack) => {
      const alreadyExists = previousStack.some(
        (item) => item.id === tech.id
      );

      if (alreadyExists) {
        return previousStack;
      }

      return [...previousStack, tech];
    });
  };

  // Remove technology
  const handleRemoveStack = (id: number) => {
    setYourStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  // Clear all
  const handleClearStack = () => {
    setYourStack([]);
  };

  return (
    <section className="w-full min-h-screen bg-amber-100">

      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <BannerSection />

      {/* Technology title */}
      <Techno />

      {/* Main Content */}
      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Technology Cards */}
          <main className="w-full lg:flex-1 pt-10">

            <Suspense
              fallback={
                <div className="text-center py-10">
                  <h1 className="text-xl font-bold">
                    Loading...
                  </h1>
                </div>
              }
            >
              <Technologist
                devStack={technologistPromise}
                onAddStack={handleAddStack}
              />
            </Suspense>

          </main>

          {/* Your Stack */}
          <aside
            className="
              w-full
              lg:w-[320px]
              shrink-0
              bg-white
              mt-0
              lg:mt-10
              p-4
              rounded-xl
              border
              border-transparent
              hover:border-red-500
            "
          >

            {/* Stack Header */}
            <div className="flex items-center justify-between gap-2 border-b pb-3">

              <h1 className="text-lg sm:text-xl font-bold text-black">
                Your Stack ({yourStack.length})
              </h1>

              {yourStack.length > 0 && (
                <button
                  onClick={handleClearStack}
                  className="
                    bg-red-500
                    text-white
                    px-3
                    py-1
                    rounded-lg
                    hover:bg-red-600
                    text-sm
                  "
                >
                  Clear All
                </button>
              )}

            </div>

            {/* Stack Items */}
            <div className="mt-4 space-y-3">

              {yourStack.length === 0 ? (
                <p className="text-gray-500 font-bold text-center py-5">
                  Your stack is empty
                </p>
              ) : (
                yourStack.map((tech) => (

                  <div
                    key={tech.id}
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      p-3
                      rounded-lg
                    "
                  >

                    {/* Image */}
                    <img
                      src={tech.image}
                      alt={tech.heading}
                      className="
                        w-10
                        h-10
                        sm:w-[50px]
                        sm:h-[50px]
                        object-cover
                        rounded
                      "
                    />

                    {/* Information */}
                    <div className="flex-1 min-w-0">

                      <h2 className="font-bold text-black truncate">
                        {tech.heading}
                      </h2>

                      <p className="text-sm text-gray-500">
                        ⭐ {tech.rating}
                      </p>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemoveStack(tech.id)}
                      className="
                        bg-red-500
                        text-white
                        px-2
                        sm:px-3
                        py-1
                        rounded
                        text-sm
                        hover:bg-red-600
                      "
                    >
                      Remove
                    </button>

                  </div>

                ))
              )}

            </div>

          </aside>

        </div>
      </div>

      {/* Footer */}
      <Footer />

    </section>
  );
}

export default App;