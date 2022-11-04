import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartuppageComponent } from './startuppage.component';

describe('StartuppageComponent', () => {
  let component: StartuppageComponent;
  let fixture: ComponentFixture<StartuppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartuppageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
