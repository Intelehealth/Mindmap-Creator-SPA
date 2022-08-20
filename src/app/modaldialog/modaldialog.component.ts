import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modaldialog',
  templateUrl: './modaldialog.component.html',
  styleUrls: ['./modaldialog.component.css'],
})
export class ModaldialogComponent implements OnInit {
  @Input() public title: string = '';
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
