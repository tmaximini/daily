// components/HabitItem.tsx
import React from "react";

type HabitItemProps = {
  title: string;
  description: string;
  timeHorizon: string;
  category: string;
  frequency: string;
  relatedGoal?: string;
};

export function HabitItem({
  title,
  description,
  timeHorizon,
  category,
  frequency,
  relatedGoal,
}: HabitItemProps) {
  return (
    <li className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          {timeHorizon}
        </span>
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          {category}
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
          Frequency: {frequency}
        </span>
      </div>
      {relatedGoal && (
        <div className="mt-2">
          <p className="text-sm font-medium">Related Goal:</p>
          <p className="text-sm text-gray-600">{relatedGoal}</p>
        </div>
      )}
    </li>
  );
}
