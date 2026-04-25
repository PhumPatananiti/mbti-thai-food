export interface FoodResult {
  name: string;
  mbti: string;
  description: string;
  traits: string[];
  image: string;
}

export const foodMapping: Record<string, FoodResult> = {
  "INTJ": {
    name: "Massaman Curry",
    mbti: "Architect",
    description: "Complex, deep, and highly strategic. Just like Massaman, you are layered with many flavors and take time to reach your peak potential.",
    traits: ["Strategic", "Complex", "Independent"],
    image: "https://images.unsplash.com/photo-1548946522-4a313e8972a4?auto=format&fit=crop&q=80&w=800"
  },
  "INTP": {
    name: "Tom Yum Goong",
    mbti: "Logician",
    description: "Dynamic and explosive. You possess a sharp mind that balances sour, spicy, and salty elements in perfect logical harmony.",
    traits: ["Innovative", "Analytical", "Precise"],
    image: "https://images.unsplash.com/photo-1562607394-580c336ad15b?auto=format&fit=crop&q=80&w=800"
  },
  "ENTJ": {
    name: "Pad Thai",
    mbti: "Commander",
    description: "The global leader of Thai cuisine. Efficient, popular, and capable of taking charge of any table with your strong presence.",
    traits: ["Leader", "Efficient", "Strong-willed"],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
  },
  "ENTP": {
    name: "Pineapple Fried Rice",
    mbti: "Debater",
    description: "Unconventional and colorful. You love mixing different ideas (and ingredients) to create something unexpected and exciting.",
    traits: ["Creative", "Curious", "Spontaneous"],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800"
  },
  "INFJ": {
    name: "Mango Sticky Rice",
    mbti: "Advocate",
    description: "A rare and sweet soul. You offer a unique depth that brings comfort and sweetness to everyone around you.",
    traits: ["Insightful", "Sweet", "Idealistic"],
    image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&q=80&w=800"
  },
  "INFP": {
    name: "Green Curry",
    mbti: "Mediator",
    description: "Soft and harmonious. You have a gentle appearance but carry a complex depth and a spicy spark when it matters.",
    traits: ["Harmonious", "Empathetic", "Creative"],
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800"
  },
  "ENFJ": {
    name: "Tom Kha Gai",
    mbti: "Protagonist",
    description: "Warm and nurturing. Like the creamy coconut broth, you provide comfort and bring people together with your charisma.",
    traits: ["Charismatic", "Nurturing", "Inspiring"],
    image: "https://images.unsplash.com/photo-1637500923483-500e84ec1e19?auto=format&fit=crop&q=80&w=800"
  },
  "ENFP": {
    name: "Nam Tok Moo",
    mbti: "Campaigner",
    description: "Vibrant and zesty. You are full of life and spontaneity, always bringing a burst of energy and flavor to the party.",
    traits: ["Enthusiastic", "Social", "Free-spirited"],
    image: "https://images.unsplash.com/photo-1548946522-4a313e8972a4?auto=format&fit=crop&q=80&w=800" // Placeholder
  },
  "ISTJ": {
    name: "Pad Kra Pao",
    mbti: "Logistician",
    description: "Reliable and direct. The foundation of Thai street food. You are dependable, efficient, and get the job done without fuss.",
    traits: ["Dependable", "Practical", "Organized"],
    image: "https://images.unsplash.com/photo-1617093209121-687258414902?auto=format&fit=crop&q=80&w=800"
  },
  "ISFJ": {
    name: "Khao Man Gai",
    mbti: "Defender",
    description: "Pure comfort. You are the silent supporter who ensures everyone is well-fed and cared for with your steady presence.",
    traits: ["Loyal", "Kind", "Observant"],
    image: "https://images.unsplash.com/photo-1632778149125-965d2954e280?auto=format&fit=crop&q=80&w=800"
  },
  "ESTJ": {
    name: "Moo Ping",
    mbti: "Executive",
    description: "Disciplined and efficient. Like the perfect grilled skewer, you are straightforward, traditional, and highly reliable.",
    traits: ["Direct", "Efficient", "Traditional"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
  },
  "ESFJ": {
    name: "Pad See Ew",
    mbti: "Consul",
    description: "A classic crowd-pleaser. You value tradition and harmony, making sure everyone at the table feels included and satisfied.",
    traits: ["Outgoing", "Harmonious", "Traditional"],
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
  },
  "ISTP": {
    name: "Laab Moo",
    mbti: "Virtuoso",
    description: "Sharp and resourceful. You have a keen sense for the right balance of spices and can handle any situation with cool precision.",
    traits: ["Practical", "Resourceful", "Bold"],
    image: "https://images.unsplash.com/photo-1562607394-580c336ad15b?auto=format&fit=crop&q=80&w=800" // Placeholder
  },
  "ISFP": {
    name: "Khanom Chin Nam Ya",
    mbti: "Adventurer",
    description: "Artistic and colorful. You appreciate the sensory experience of life and bring a unique aesthetic to everything you do.",
    traits: ["Artistic", "Sensitive", "Open-minded"],
    image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&q=80&w=800" // Placeholder
  },
  "ESTP": {
    name: "Gai Yang",
    mbti: "Entrepreneur",
    description: "Bold and energetic. You are the life of the party, always ready for action and direct in your pursuit of excellence.",
    traits: ["Bold", "Direct", "Perceptive"],
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800"
  },
  "ESFP": {
    name: "Roti Sai Mai",
    mbti: "Entertainer",
    description: "Fun and colorful. You bring joy and sweetness to life, always ready to put on a show and share the fun with others.",
    traits: ["Fun", "Spontaneous", "Energetic"],
    image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&q=80&w=800"
  }
};
