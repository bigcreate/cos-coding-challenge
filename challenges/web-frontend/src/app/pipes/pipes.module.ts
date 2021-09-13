import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RemainingTimePipe} from "./remaining-time.pipe";
import {FuelTypePipe} from "./fuel-type.pipe";
import {TransmissionPipe} from './transmission.pipe';

const pipes = [
  RemainingTimePipe,
  FuelTypePipe,
  TransmissionPipe,
]

@NgModule({
  declarations: [pipes],
  exports: [pipes],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
