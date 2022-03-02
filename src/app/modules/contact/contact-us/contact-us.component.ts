import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
  private eventSub: Subscription | undefined;
  
  constructor(private readonly commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.registerVisit();
    this.eventSub = fromEvent(document, 'click').subscribe((event) => this.clickHandler(event as MouseEvent));
    // document.addEventListener('click', this.clickHandler);
  }

  ngOnDestroy(): void {
    this.eventSub?.unsubscribe();
    // document.removeEventListener('click', this.clickHandler);
  }

  clickHandler(event: MouseEvent) {
    console.log('Hi');
  }
}
