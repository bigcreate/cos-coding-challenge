import {FuelType, Transmission} from "@cos/interfaces/auction";

export const fuelTypes: Record<FuelType, string> = {
  [FuelType.NoInformation]: 'No Information',
  [FuelType.Type1]: 'Type 1',
  [FuelType.Type2]: 'Type 2',
  [FuelType.Type3]: 'Type 3',
  [FuelType.Type4]: 'Type 4',
  [FuelType.Type5]: 'Type 5',
  [FuelType.Type6]: 'Type 6',
  [FuelType.Type7]: 'Type 7',
  [FuelType.Type8]: 'Type 8',
};

export const transmissions: Record<Transmission, string> = {
  [Transmission.NoInformation]: 'No Information',
  [Transmission.Manual]: 'Manual',
  [Transmission.Auto]: 'Auto',
};
