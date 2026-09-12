import { use } from "react";
import { toast } from "react-toastify";
import type { DevStack } from "./devStack";

export interface TechnologistProps {
  devStack: Promise<DevStack[]>;
  onAddStack: (tech: DevStack) => void;
}

export default function Technologist({devStack, onAddStack,}: TechnologistProps) {

  const technologist = use(devStack);

  const handleAdd = (tech: DevStack) => {
    onAddStack(tech);

    toast.success(`${tech.heading} added to Your Stack!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

      {technologist.map((tech) => (
        <div
          key={tech.id}
          className="bg-white rounded-xl shadow-lg p-5 hover:border border-amber-900">
          <img src={tech.image} alt={tech.heading}
            className="w-[50px] h-[50px] object-cover rounded-lg"/>

          <h2 className="text-2xl font-bold text-gray-800 mt-3">
            {tech.heading}
          </h2>

          <p className="text-gray-600 mt-3">
            {tech.paragraph}
          </p>

          <button
            onClick={() => handleAdd(tech)}
            className="w-full mt-5 py-2 px-4 rounded-lg bg-black text-white font-semibold hover:bg-gray-800">
            {tech.button}
          </button>
        </div>
      ))}

    </div>
  );
}