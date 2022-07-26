import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhealthdataComponent } from './addhealthdata.component';

describe('AddhealthdataComponent', () => {
  let component: AddhealthdataComponent;
  let fixture: ComponentFixture<AddhealthdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhealthdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhealthdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
