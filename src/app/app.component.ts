import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [CommonService, {provide: /* Abstract Class */, useClass: /* Implementation */}]
})
export class AppComponent implements OnInit {
  title = 'training';

  public name: string;

  public visits: number = 0;

  public list: Array<string> = ['A', 'B', 'C'];
  public listOfObj: Record<string, any> = { id: 'sdsd', name: 'Ram', age: 20 };

  constructor(private commonService: CommonService) {
    this.name = 'angular';
  }

  ngOnInit(): void {
    this.commonService.visitChangeObj.subscribe(visits => {
      this.visits = visits;
    })
    this.commonService.createAuthor({name: 'Teddy Bear', age: 2}).subscribe(response => {
      console.log('Response from createAuthor', response);
    });

  }

  newName(name: string) {
    this.name = name;
  }

  onOutput(param: boolean) {
    console.log('Got', param);
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}