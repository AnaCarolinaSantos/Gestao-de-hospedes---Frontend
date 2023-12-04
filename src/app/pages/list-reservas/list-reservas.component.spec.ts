import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservasComponent } from './list-reservas.component';

describe('ListReservasComponent', () => {
  let component: ListReservasComponent;
  let fixture: ComponentFixture<ListReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListReservasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
