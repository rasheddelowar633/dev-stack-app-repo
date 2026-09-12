
import { use } from "react";
import { toast } from "react-toastify";
import type { DevStack } from "./devStack";

export interface TechnologistProps {
  devStack: Promise<DevStack[]>;
  onAddStack: (tech: DevStack) => void;
}

export default function Technologist({
  devStack,
  onAddStack,
}: TechnologistProps) {
  const technologist = use(devStack);

  const handleAdd = (tech: DevStack) => {
    onAddStack(tech);

    toast.success(`${tech.heading} added to Your Stack!`);
  };

  return (
    <section className="container mx-auto px-4">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {technologist.map((tech) => (
          <div
            key={tech.id}
            className="bg-white rounded-xl shadow-lg p-5 
                       border border-transparent
                       hover:border-amber-900
                       transition duration-300"
          >
            {/* Technology Image */}
            <img
              src={tech.image}
              alt={tech.heading}
              className="w-12 h-12 object-cover rounded-lg"
            />

            {/* Technology Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-3">
              {tech.heading}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mt-3">
              {tech.paragraph}
            </p>

            {/* Add Button */}
            <button
              onClick={() => handleAdd(tech)}
              className="w-full mt-5 py-2 px-4 rounded-lg
                         bg-black text-white font-semibold
                         hover:bg-gray-800 transition"
            >
              {tech.button}
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}