import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'training';

  public name: string;

  public list: Array<string> = ['A', 'B', 'C'];
  public listOfObj: Record<string, any> = {id: 'sdsd', name: 'Ram', age: 20};

  constructor() {
    this.name = 'angular';
  }

  ngOnInit(): void {
    setInterval(() => {
      this.list = [...this.list, 'D'];
      this.listOfObj = {...this.listOfObj, age: 30};
    }, 3000);
  }

  newName(name: string) {
    this.name = name;
  }
}
