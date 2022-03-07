import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

// Custom Validator
export function forbiddenNameValidator(nameRe: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden =
      nameRe.toLocaleLowerCase() !== control.value.toLocaleLowerCase();
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
  public name: string = 'Angular Training';
  public email: string = '';
  public message: string = '';
  // Reactive Form
  public contactForm: FormGroup = new FormGroup({
    name: new FormControl(this.name, [
      Validators.required,
      Validators.minLength(3),
      forbiddenNameValidator('Angular'),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl(''),
  });

  private eventSub: Subscription | undefined;

  constructor(
    private readonly commonService: CommonService,
    private readonly httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.commonService.registerVisit();
    this.eventSub = fromEvent(document, 'click').subscribe((event) =>
      this.clickHandler(event as MouseEvent)
    );
    // document.addEventListener('click', this.clickHandler);
    this.commonService.createAuthor({name: 'Rick Roller', age: 100}).subscribe(response => {
      console.log('Response from createAuthor', response);
    });

  }

  ngOnDestroy(): void {
    this.eventSub?.unsubscribe();
    // document.removeEventListener('click', this.clickHandler);
  }

  clickHandler(event: MouseEvent) {
    console.log('Hi');
    // this.contactForm.setValue({name: new Date().toTimeString(), email: '', message: ''})
  }

  onSubmitReactive() {
    console.log('Submitted', this.contactForm.getRawValue());
  }
  onSubmit() {
    console.log('Submitted', this.name, this.email, this.message);
  }
}
