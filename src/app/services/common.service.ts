import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

/*
@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class CommonService {
  public visitChangeObj: Observable<number>;
  private visitChangeSub: Subject<number> = new Subject<number>();
  private keyValuePair: Map<string, any> = new Map<string, any>();

  constructor(private readonly httpClient: HttpClient) {
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

  createAuthor(authorData: Record<string, any>) {
    // const header = { 'api-key': 'ABCD' };
    this.httpClient
      .post('https://jsonplaceholder.typicode.com', {
        // headers: header,
        // observe: 'body', // 'body' | 'response' | 'events'
        params: authorData
      })
      .subscribe((response) => {
        console.log('HttpClient post response', response);
      });
  }
}
