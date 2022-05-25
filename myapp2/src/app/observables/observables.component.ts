import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  Subscriber,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private intervaObs: Subscription;

  private customObserSubs: Subscription;
  constructor() {}

  ngOnInit(): void {
    // this.intervaObs = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;

        if (count == 4) {
          observer.complete();
        }
        if (count > 4) {
          observer.error(new Error('Count is gretaer than 3'));
        }
      }, 2000);
    });

    this.customObserSubs = customIntervalObs
      .pipe(
        filter((data: number) => {
          return data % 2 === 0;
        }),
        map((data: number) => {
          return 'Round' + data;
        })
      )
      .subscribe(
        (count) => {
          console.log(count);
        },
        (error) => {
          console.log('error Occured..');
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy(): void {
    // this.intervaObs.unsubscribe();
    this.customObserSubs.unsubscribe();
  }
}
