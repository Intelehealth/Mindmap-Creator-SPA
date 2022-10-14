import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IHealthData } from '../Interfaces/ihealth-data';
import { IMindMapData } from '../Interfaces/mindmap-interface';
import { MindmapService } from '../services/mindmap.service';
import { Result, Ok, Err } from '@sniptt/monads';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModaldialogComponent } from '../modaldialog/modaldialog.component';
import { ModaladdhealthdataComponent } from '../modaladdhealthdata/modaladdhealthdata.component';
import { ModaledithealthdataComponent } from '../modaledithealthdata/modaledithealthdata.component';
import { FileService } from '../services/file.service';
declare var jsMind: any;
const options = {
  container: 'jsmind_container',
  theme: 'greensea',
  editable: true,
  mode: 'side',
  support_html: true, // Does it support HTML elements in the node?
  view: {
    engine: 'canvas', // engine for drawing lines between nodes in the mindmap
    hmargin: 100, // Minimum horizontal distance of the mindmap from the outer frame of the container
    vmargin: 50, // Minimum vertical distance of the mindmap from the outer frame of the container
    line_width: 1, // thickness of the mindmap line
    line_color: '#555', // Thought mindmap line color
    draggable: true, // Drag the mind map with your mouse, when it's larger that the container
    hide_scrollbars_when_draggable: false, // Hide container scrollbars, when mind map is larger than container and draggable option is true.
  },
  layout: {
    hspace: 100, // horizontal spacing between nodes
    vspace: 25, // vertical spacing between nodes
    pspace: 10, // Horizontal spacing between node and connection line (to place node expander)
  },
  shortcut: {
    enable: true, // whether to enable shortcut
    handles: {
      enable_mousedown_handle: true,
      enable_click_handle: true,
      enable_dblclick_handle: true,
      enable_mousewheel_handle: true,
    },
  },
};
@Component({
  selector: 'app-jsmind',
  templateUrl: './jsmind.component.html',
  styleUrls: ['./jsmind.component.css'],
})
export class JsmindComponent implements OnInit {
  file?: any;
  mindMap: any;
  title = 'example-angular10';
  addData: IHealthData = {
    text: '',
  };
  isShown: boolean = false;
  constructor(
    private dataService: MindmapService,
    private _modalService: NgbModal,
    private _fileService: FileService
  ) {}

  ngOnInit() {
    this.mindMap = new jsMind(options);
  }
  ngAfterViewInit() {
    this.dataService.$data.subscribe((data) => {
      var mind = {
        meta: {
          name: 'sample',
          // author: 'hizzgdev@163.com',
          // version: '0.2',
        },
        format: 'node_tree',
        data: data,
      };
      this.mindMap.show(mind);
    });
  }
  saveData(hdata: IHealthData) {
    let mmData = this.dataService.getMindMapData(hdata);
    let isAdd = this.addNode(mmData);
    if (isAdd.isErr()) {
      alert(isAdd.unwrapErr());
    } else {
      hdata = { text: '' };
      this.isShown = false;
    }
  }
  addShow() {
    //this.isShown = true;
    let selectedNode = this.mindMap.get_selected_node();
    if (!selectedNode) {
      alert('Please Select Node');
      return;
    }

    let modal = this._modalService.open(ModaladdhealthdataComponent, {
      backdrop: true,
      size: 'xl',
    });
    modal.result.then((res: IHealthData) => {
      if (res) {
        let mindmapData = this.dataService.getMindMapData(res);
        let isAdd = this.addNode(mindmapData);
        if (isAdd.isErr()) {
          alert(isAdd.unwrapErr());
        }
      }
    });
  }
  editNodeData() {
    let selectedNode = this.mindMap.get_selected_node();
    if (!selectedNode) {
      alert('Please Select Node');
      return;
    }

    let data = selectedNode.data;
    let modal = this._modalService.open(ModaledithealthdataComponent, {
      backdrop: true,
      size: 'xl',
    });

    modal.componentInstance.healthdata = data;
    modal.result.then((res: IHealthData) => {
      if (res) {
        let isEdit = this.editNode(res);
        if (isEdit.isErr()) {
          alert(isEdit.unwrapErr());
        }
      }
    });
  }
  addNode(mmData: IMindMapData): Result<string, string> {
    let selectedNode = this.mindMap.get_selected_node();
    if (!selectedNode) return Err('Please Select Node');

    this.mindMap.add_node(selectedNode, mmData.id, mmData.topic, mmData);
    return Ok('Node Added');
  }
  editNode(mmData: IHealthData): Result<string, string> {
    let selectedNode = this.mindMap.get_selected_node();
    if (!selectedNode) return Err('Please Select Node');
    selectedNode.data = mmData;
    this.mindMap.update_node(selectedNode.id, mmData.text);
    return Ok('Node Edited');
  }

  deleteNode() {
    let selectedNode = this.mindMap.get_selected_node();
    if (!selectedNode) {
      alert('Please Select Node to delete');
    } else {
      let answer = window.confirm('Are you sure you want to delete node?');
      if (answer) {
        this.mindMap.remove_node(selectedNode);
        // alert('Node deleted');
      }
    }
  }
  getJsonData() {
    var mind_data = this.mindMap.get_data('node_tree');
    var mind_name = mind_data.meta.name;
    var helth_data = this.dataService.getHealthData(mind_data.data);
    this._fileService.writeToFile(helth_data, jsMind.util.file, mind_name);
    //jsMind.util.file.save(mind_str, 'text/json', mind_name + '.json');
  }
  handleFileInput(event: Event) {
    this.file = (event.target as HTMLInputElement).files?.item(0);
    this.readFile(this.file);
  }
  async readFile(file: File) {
    let healthdata = await this._fileService.readFile(file);
    let mmData = this.dataService.getMindMapData(healthdata);
    var mind = {
      meta: {
        name: 'sample',
        // author: 'hizzgdev@163.com',
        // version: '0.2',
      },
      format: 'node_tree',
      data: mmData,
    };
    this.mindMap.show(mind);
  }
  zoomin() {
    this.mindMap.view.zoomIn();
  }
  zoomout() {
    this.mindMap.view.zoomOut();
  }
}
