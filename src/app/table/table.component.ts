import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnChanges {
  
  @Input('name')
  public name: string = '';
  
  @Input('list')
  public list: Array<string> = [''];

  @Output()
  public outputTest: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      console.log('My name is ', changes['name'].currentValue);
    }
    if (changes['list']) {
      console.log('My list is ', changes['list'].currentValue);
    }
    this.outputTest.emit(true);
  }

}
