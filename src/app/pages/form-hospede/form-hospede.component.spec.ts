import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHospedeComponent } from './form-hospede.component';

describe('FormHospedeComponent', () => {
  let component: FormHospedeComponent;
  let fixture: ComponentFixture<FormHospedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHospedeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormHospedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
