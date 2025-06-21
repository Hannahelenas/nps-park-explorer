import type {
  Activity,
  Address,
  OperatingHours,
  ParkImage,
  Topic,
} from "./Park";

export interface ApiPark {
  id: string;
  fullName: string;
  parkCode: string;
  description: string;
  activities: Activity[];
  topics: Topic[];
  states: string;
  directionsInfo: string;
  images: ParkImage[];
  weatherInfo: string;
  name: string;
  designation: string;
  addresses: Address[];
  operatingHours: OperatingHours[];
}
