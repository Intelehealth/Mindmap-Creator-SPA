import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IHealthData } from '../Interfaces/ihealth-data';
import { IMindMapData } from '../Interfaces/mindmap-interface';
import { MindmapService } from '../services/mindmap.service';
import { Result, Ok, Err } from '@sniptt/monads';
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
    draggable: false, // Drag the mind map with your mouse, when it's larger that the container
    hide_scrollbars_when_draggable: false, // Hide container scrollbars, when mind map is larger than container and draggable option is true.
  },
  layout: {
    hspace: 100, // horizontal spacing between nodes
    vspace: 20, // vertical spacing between nodes
    pspace: 13, // Horizontal spacing between node and connection line (to place node expander)
  },
};
@Component({
  selector: 'app-jsmind',
  templateUrl: './jsmind.component.html',
  styleUrls: ['./jsmind.component.css'],
})
export class JsmindComponent implements OnInit {
  mindMap: any;
  title = 'example-angular10';
  addData: IHealthData = {
    text: '',
  };
  isShown: boolean = false;
  constructor(private dataService: MindmapService) {}

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
  saveData() {
    this.addData.id = Math.random().toString();
    let mmData = this.dataService.getMindMapData(this.addData);
    let isAdd = this.addNode(mmData);
    if (isAdd.isErr()) {
      alert(isAdd.unwrapErr());
    } else {
      this.addData = { text: '' };
      this.isShown = false;
    }
  }
  addShow() {
    this.isShown = true;
  }
  addNode(mmData: IMindMapData): Result<string, string> {
    let selectedNode = this.mindMap.get_selected_node();
    if (!selectedNode) return Err('Please Select Node');

    this.mindMap.add_node(selectedNode, mmData.id, mmData.topic, mmData);
    return Ok('Node Added');
  }

  deleteNode() {
    let selectedNode = this.mindMap.get_selected_node();
    this.mindMap.remove_node(selectedNode);
  }
  getJsonData() {
    var mind_data = this.mindMap.get_data('node_tree');
    var mind_name = mind_data.meta.name;
    var helth_data = this.dataService.getHealthData(mind_data.data);
    var mind_str = jsMind.util.json.json2string(helth_data);
    jsMind.util.file.save(mind_str, 'text/json', mind_name + '.json');
  }
}
