import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHospedesComponent } from './list-hospedes.component';

describe('ListHospedesComponent', () => {
  let component: ListHospedesComponent;
  let fixture: ComponentFixture<ListHospedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHospedesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListHospedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
