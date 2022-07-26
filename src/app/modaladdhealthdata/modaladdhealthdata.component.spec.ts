import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaladdhealthdataComponent } from './modaladdhealthdata.component';

describe('ModaladdhealthdataComponent', () => {
  let component: ModaladdhealthdataComponent;
  let fixture: ComponentFixture<ModaladdhealthdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaladdhealthdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaladdhealthdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
