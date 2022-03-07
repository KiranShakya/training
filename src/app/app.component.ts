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
