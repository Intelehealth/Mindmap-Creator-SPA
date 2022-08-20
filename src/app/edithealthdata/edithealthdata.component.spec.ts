import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithealthdataComponent } from './edithealthdata.component';

describe('EdithealthdataComponent', () => {
  let component: EdithealthdataComponent;
  let fixture: ComponentFixture<EdithealthdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithealthdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithealthdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
