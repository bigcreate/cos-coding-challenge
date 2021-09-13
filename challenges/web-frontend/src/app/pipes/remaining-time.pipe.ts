import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {Observable, timer} from "rxjs";
import {map, tap} from "rxjs/operators";

@Pipe({
  name: 'remainingTime'
})
export class RemainingTimePipe implements PipeTransform, OnDestroy {
  private currValue: number | null = null;
  private observable$: Observable<string> | null = null;

  transform(remainingTime: undefined | null): null;
  transform(remainingTime: number): Observable<string>;
  transform(remainingTime: number | undefined | null): Observable<string> | null {
    this.currValue = remainingTime ?? null;

    if (this.currValue === null) {
      this.observable$ = null;
      return null;
    }

    if (this.observable$ !== null) {
      return this.observable$;
    }

    this.observable$ = timer(0, 1000).pipe(
      map(() => (this.currValue as number) - 1),
      map((value) => Math.max(value, 0)),
      tap((value) => this.currValue = value),
      map((time) => this.timeToString(time)),
    );

    return this.observable$;
  }

  ngOnDestroy() {
    this.observable$ = null;
  }

  private timeToString(remainingTime: number): string {
    if (remainingTime === 0) {
      return 'Ended';
    }

    let restTime = remainingTime;
    const sec = restTime % 60;
    restTime = (restTime - sec) / 60;
    const min = restTime % 60;
    restTime = (restTime - min) / 60;
    const hours = restTime;
    return `${hours.toString().padStart(2, '0')}h:${min.toString().padStart(2, '0')}m:${sec.toString().padStart(2, '0')}s`;
  }
}
