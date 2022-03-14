import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-firstLibrary',
  template: `
    <p>
      first-library works!
    </p>
  `,
  styles: [
  ]
})
export class FirstLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
