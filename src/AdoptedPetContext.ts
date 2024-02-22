import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fluffy",
    animal: "cat",
    description: "A very fluffy cat",
    breed: "Persian",
    images: [],
    city: "San Francisco",
    state: "CA",
  },
  () => {},
]);

export default AdoptedPetContext;
