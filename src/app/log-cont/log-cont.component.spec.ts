import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogContComponent } from './log-cont.component';

describe('LogContComponent', () => {
  let component: LogContComponent;
  let fixture: ComponentFixture<LogContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
