import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { MindmapService } from '../services/mindmap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startuppage',
  templateUrl: './startuppage.component.html',
  styleUrls: ['./startuppage.component.css'],
})
export class StartuppageComponent implements OnInit {
  file?: any;
  constructor(
    private _fileService: FileService,
    private dataService: MindmapService,
    private _router: Router
  ) {}

  ngOnInit(): void {}
  handleFileInput(event: Event) {
    this.file = (event.target as HTMLInputElement).files?.item(0);
    this._fileService.readFile(this.file).then(() => {
      this._router.navigateByUrl('jsmind', { state: { isNew: false } });
    });
  }
}
