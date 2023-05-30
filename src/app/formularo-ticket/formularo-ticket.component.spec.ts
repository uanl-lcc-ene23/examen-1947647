import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularoTicketComponent } from './formularo-ticket.component';

describe('FormularoTicketComponent', () => {
  let component: FormularoTicketComponent;
  let fixture: ComponentFixture<FormularoTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularoTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
