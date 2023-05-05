export const moodCategories: ["happy", "sad", "angry", "neutral"] = [
  "happy",
  "sad",
  "angry",
  "neutral",
];

export type IMood = (typeof moodCategories)[number];
