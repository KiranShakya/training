import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLibraryComponent } from './first-library.component';

describe('FirstLibraryComponent', () => {
  let component: FirstLibraryComponent;
  let fixture: ComponentFixture<FirstLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
