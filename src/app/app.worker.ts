/// <reference lib="webworker" />

import { delay, of } from "rxjs";

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  of(response).pipe(delay(5000)).subscribe(res => {
    postMessage(res);
  });
});
