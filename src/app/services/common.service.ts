import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class CommonService {
  public visitChangeObj: Observable<number>;
  private visitChangeSub: Subject<number> = new Subject<number>();
  private keyValuePair: Map<string, any> = new Map<string, any>();

  constructor() {
    this.visitChangeObj = this.visitChangeSub.asObservable();
  }

  setValue(key: string, value: any) {
    this.keyValuePair.set(key, value);
  }

  getValue<T>(key: string): T {
    return this.keyValuePair.get(key) as T;
  }

  registerVisit() {
    const lastCount = this.getValue<number>('visitCount') || 0;
    const latestCount = lastCount + 1;
    this.setValue('visitCount', latestCount);
    this.visitChangeSub.next(lastCount);
  }
}
