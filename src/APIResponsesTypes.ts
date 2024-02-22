export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Pet {
  id: number;
  name: string;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
  animal: Animal;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}

export interface BreedListAPIResponse {
  breeds: string[];
  animal: Animal;
}
