import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IHealthData } from '../Interfaces/ihealth-data';

@Component({
  selector: 'app-modaladdhealthdata',
  templateUrl: './modaladdhealthdata.component.html',
  styleUrls: ['./modaladdhealthdata.component.css'],
})
export class ModaladdhealthdataComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
  saveData(hdata: IHealthData) {
    this.modal.close(hdata);
  }
}
