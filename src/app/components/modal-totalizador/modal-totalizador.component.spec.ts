import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTotalizadorComponent } from './modal-totalizador.component';

describe('ModalTotalizadorComponent', () => {
  let component: ModalTotalizadorComponent;
  let fixture: ComponentFixture<ModalTotalizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalTotalizadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalTotalizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
