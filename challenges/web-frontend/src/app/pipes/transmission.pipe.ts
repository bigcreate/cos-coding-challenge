import {Pipe, PipeTransform} from '@angular/core';
import {Transmission} from "@cos/interfaces/auction";
import {transmissions} from "@cos/constants/vehicle";

@Pipe({
  name: 'transmission'
})
export class TransmissionPipe implements PipeTransform {

  transform(value: Transmission | null | undefined): string {
    if (value === null || value === undefined) {
      return transmissions[Transmission.NoInformation];
    }

    return transmissions[value];
  }
}
