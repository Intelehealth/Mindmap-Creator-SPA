import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaledithealthdataComponent } from './modaledithealthdata.component';

describe('ModaledithealthdataComponent', () => {
  let component: ModaledithealthdataComponent;
  let fixture: ComponentFixture<ModaledithealthdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaledithealthdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaledithealthdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
