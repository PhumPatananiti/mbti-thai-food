export interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    text: string;
    value: 1 | -1; // 1 for the first letter (E, S, T, J), -1 for the second (I, N, F, P)
  }[];
}

export const questions: Question[] = [
  // E vs I
  {
    id: 1,
    text: "After a busy week, how do you prefer to recharge?",
    dimension: 'EI',
    options: [
      { text: "Going out with friends to a lively night market", value: 1 },
      { text: "Staying home and relaxing with a good book or movie", value: -1 }
    ]
  },
  {
    id: 2,
    text: "In a social gathering, you usually:",
    dimension: 'EI',
    options: [
      { text: "Initiate conversations and meet new people", value: 1 },
      { text: "Stick with people you already know", value: -1 }
    ]
  },
  {
    id: 3,
    text: "Do you prefer working in a bustling office or a quiet corner?",
    dimension: 'EI',
    options: [
      { text: "A bustling office with lots of collaboration", value: 1 },
      { text: "A quiet corner where I can focus alone", value: -1 }
    ]
  },
  {
    id: 4,
    text: "How do you feel about being the center of attention?",
    dimension: 'EI',
    options: [
      { text: "I enjoy it or don't mind it", value: 1 },
      { text: "I feel uncomfortable and prefer the sidelines", value: -1 }
    ]
  },
  {
    id: 5,
    text: "When you have a problem, you tend to:",
    dimension: 'EI',
    options: [
      { text: "Talk it out with others to find a solution", value: 1 },
      { text: "Think it through privately before sharing", value: -1 }
    ]
  },

  // S vs N
  {
    id: 6,
    text: "When learning a new Thai recipe, you:",
    dimension: 'SN',
    options: [
      { text: "Follow the exact measurements and steps", value: 1 },
      { text: "Experiment with flavors and follow your intuition", value: -1 }
    ]
  },
  {
    id: 7,
    text: "You are more interested in:",
    dimension: 'SN',
    options: [
      { text: "What is actual and present (the facts)", value: 1 },
      { text: "What is possible and future-oriented (the ideas)", value: -1 }
    ]
  },
  {
    id: 8,
    text: "When describing a meal, you focus on:",
    dimension: 'SN',
    options: [
      { text: "The specific ingredients, texture, and price", value: 1 },
      { text: "The mood, the atmosphere, and what it reminded you of", value: -1 }
    ]
  },
  {
    id: 9,
    text: "Do you prefer tasks that are:",
    dimension: 'SN',
    options: [
      { text: "Practical and have immediate results", value: 1 },
      { text: "Theoretical and require creative thinking", value: -1 }
    ]
  },
  {
    id: 10,
    text: "When you travel, you prefer to:",
    dimension: 'SN',
    options: [
      { text: "Visit famous landmarks and try well-known dishes", value: 1 },
      { text: "Wander off the beaten path and discover hidden gems", value: -1 }
    ]
  },

  // T vs F
  {
    id: 11,
    text: "When making a tough decision, you rely more on:",
    dimension: 'TF',
    options: [
      { text: "Logic, objective criteria, and fairness", value: 1 },
      { text: "Values, personal feelings, and impact on others", value: -1 }
    ]
  },
  {
    id: 12,
    text: "In a disagreement, you prioritize:",
    dimension: 'TF',
    options: [
      { text: "Being right and finding the most logical solution", value: 1 },
      { text: "Being kind and maintaining harmony in the group", value: -1 }
    ]
  },
  {
    id: 13,
    text: "Which compliment means more to you?",
    dimension: 'TF',
    options: [
      { text: " 'You are very competent and efficient' ", value: 1 },
      { text: " 'You are very kind and thoughtful' ", value: -1 }
    ]
  },
  {
    id: 14,
    text: "When a friend is upset, you:",
    dimension: 'TF',
    options: [
      { text: "Offer practical advice and solutions", value: 1 },
      { text: "Offer emotional support and empathy", value: -1 }
    ]
  },
  {
    id: 15,
    text: "You tend to be more:",
    dimension: 'TF',
    options: [
      { text: "Firm-minded and direct", value: 1 },
      { text: "Warm-hearted and gentle", value: -1 }
    ]
  },

  // J vs P
  {
    id: 16,
    text: "When planning a trip to Bangkok, you:",
    dimension: 'JP',
    options: [
      { text: "Have a detailed itinerary for every day", value: 1 },
      { text: "Go with the flow and decide what to do each morning", value: -1 }
    ]
  },
  {
    id: 17,
    text: "Your workspace is usually:",
    dimension: 'JP',
    options: [
      { text: "Organized and tidy", value: 1 },
      { text: "A bit messy but I know where everything is", value: -1 }
    ]
  },
  {
    id: 18,
    text: "Do you prefer to:",
    dimension: 'JP',
    options: [
      { text: "Finish things well before the deadline", value: 1 },
      { text: "Work best under pressure near the deadline", value: -1 }
    ]
  },
  {
    id: 19,
    text: "You feel more comfortable when:",
    dimension: 'JP',
    options: [
      { text: "A decision has been made and the plan is set", value: 1 },
      { text: "Options are left open in case something better comes up", value: -1 }
    ]
  },
  {
    id: 20,
    text: "In your daily life, you like to:",
    dimension: 'JP',
    options: [
      { text: "Follow a routine", value: 1 },
      { text: "Be spontaneous and flexible", value: -1 }
    ]
  }
];
