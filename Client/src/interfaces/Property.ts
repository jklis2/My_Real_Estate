export interface Property {
  id: string;
  name: string;
  description: string;
  numberOfRooms: number;
  numberOfPeople: number;
  size: number;
  price: number;
  rentStart: string;
  rentEnd: string;
  state: number;
  userId: string;
  photos?: string[];
  features?: string[];
}
