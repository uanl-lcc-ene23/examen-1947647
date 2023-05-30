import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playlist3Component } from './playlist3.component';

describe('Playlist3Component', () => {
  let component: Playlist3Component;
  let fixture: ComponentFixture<Playlist3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playlist3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playlist3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
