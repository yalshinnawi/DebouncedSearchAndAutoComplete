export const FruitCategory = {
  Citrus: "Citrus",
  Berry: "Berry",
  Tropical: "Tropical",
  StoneFruit: "Stone Fruit",
  Melon: "Melon",
  Pome: "Pome",
} as const;

export type FruitCategory = (typeof FruitCategory)[keyof typeof FruitCategory];

export interface Fruit {
  id: string;
  name: string;
  category: FruitCategory;
}

export const FRUITS: Fruit[] = [
  // Citrus
  { id: "1", name: "Orange", category: FruitCategory.Citrus },
  { id: "2", name: "Lemon", category: FruitCategory.Citrus },
  { id: "3", name: "Lime", category: FruitCategory.Citrus },
  { id: "4", name: "Grapefruit", category: FruitCategory.Citrus },
  { id: "5", name: "Tangerine", category: FruitCategory.Citrus },
  { id: "6", name: "Kumquat", category: FruitCategory.Citrus },

  // Berry
  { id: "7", name: "Strawberry", category: FruitCategory.Berry },
  { id: "8", name: "Blueberry", category: FruitCategory.Berry },
  { id: "9", name: "Raspberry", category: FruitCategory.Berry },
  { id: "10", name: "Blackberry", category: FruitCategory.Berry },
  { id: "11", name: "Cranberry", category: FruitCategory.Berry },
  { id: "12", name: "Gooseberry", category: FruitCategory.Berry },

  // Tropical
  { id: "13", name: "Mango", category: FruitCategory.Tropical },
  { id: "14", name: "Pineapple", category: FruitCategory.Tropical },
  { id: "15", name: "Banana", category: FruitCategory.Tropical },
  { id: "16", name: "Papaya", category: FruitCategory.Tropical },
  { id: "17", name: "Passion Fruit", category: FruitCategory.Tropical },
  { id: "18", name: "Guava", category: FruitCategory.Tropical },
  { id: "19", name: "Dragon Fruit", category: FruitCategory.Tropical },
  { id: "20", name: "Kiwi", category: FruitCategory.Tropical },

  // Stone Fruit
  { id: "21", name: "Peach", category: FruitCategory.StoneFruit },
  { id: "22", name: "Plum", category: FruitCategory.StoneFruit },
  { id: "23", name: "Cherry", category: FruitCategory.StoneFruit },
  { id: "24", name: "Apricot", category: FruitCategory.StoneFruit },
  { id: "25", name: "Nectarine", category: FruitCategory.StoneFruit },

  // Melon
  { id: "26", name: "Watermelon", category: FruitCategory.Melon },
  { id: "27", name: "Cantaloupe", category: FruitCategory.Melon },
  { id: "28", name: "Honeydew", category: FruitCategory.Melon },

  // Pome
  { id: "29", name: "Apple", category: FruitCategory.Pome },
  { id: "30", name: "Pear", category: FruitCategory.Pome },
  { id: "31", name: "Quince", category: FruitCategory.Pome },
];
