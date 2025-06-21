export interface Park {
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

export interface Activity {
  id: string;
  name: string;
}

export interface Topic {
  id: string;
  name: string;
}

export interface ParkImage {
  credit: string;
  title: string;
  altText: string;
  caption: string;
  url: string;
}

export interface Address {
  postalCode: string;
  city: string;
  stateCode: string;
  line1: string;
  line2?: string;
  line3?: string;
}

export interface OperatingHours {
  description: string;
  standardHours: Record<Weekday, string>;
  name: string;
}

type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
