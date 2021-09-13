import { Pipe, PipeTransform } from '@angular/core';
import {FuelType} from "@cos/interfaces/auction";
import {fuelTypes} from "@cos/constants/vehicle";

@Pipe({
  name: 'fuelType'
})
export class FuelTypePipe implements PipeTransform {

  transform(value: FuelType | null | undefined): string {
    if (value === null || value === undefined) {
      return fuelTypes[FuelType.NoInformation];
    }

    return fuelTypes[value];
  }
}
