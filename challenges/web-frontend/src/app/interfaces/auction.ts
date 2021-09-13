export interface Auction {
  associatedVehicle: AssociatedVehicle;
  amIHighestBidder: boolean;
  currentHighestBidValue: number;
  id: number;
  label: string;
  remainingTimeInSeconds: number;
}

interface AssociatedVehicle {
  ez: string;
  mileageInKm: number;
  fuelType: FuelType;
  transmission: Transmission;
  vehicleImages: VehicleImage[];
}

interface VehicleImage {
  perspective: number;
  url: string;
}

export enum FuelType {
  NoInformation = -1,
  Type1,
  Type2,
  Type3,
  Type4,
  Type5,
  Type6,
  Type7,
  Type8,
}

export enum Transmission {
  NoInformation = -1,
  Manual = 0,
  Auto = 1,
}
