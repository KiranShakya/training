import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, switchMap, takeUntil } from 'rxjs';

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

  createAuthor(authorData: Record<string, any>): Observable<Record<string, any>> {
    // const header = { 'api-key': 'ABCD' };
    return this.httpClient
      .post('https://jsonplaceholder.typicode.com/posts', {
        // headers: header,
        // observe: 'body', // 'body' | 'response' | 'events'
        params: authorData
      }).pipe(switchMap((value: Record<string, any>) => {
        // return of(value);
        const response = value['params'];
        response.name = 'Ricky';
        return of({title: response.name, age: response.age});
      }))

  }
}
