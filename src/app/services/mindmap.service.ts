import { Injectable } from '@angular/core';
import { IMindMapData } from '../Interfaces/mindmap-interface';
import { BehaviorSubject } from 'rxjs';
import { IHealthData } from '../Interfaces/ihealth-data';

@Injectable({
  providedIn: 'root',
})
export class MindmapService {
  private mockData: IHealthData = {
    id: 'ID_1000991358',
    text: 'Abdominal Pain',
    perform_physical_exam:
      'Abdomen:Scars;Abdomen:Distension;Abdomen:Tenderness;Abdomen:Lumps;Abdomen:Rebound tenderness;Abdomen:Peristaltic sound;Physical Growth:Sexual Maturation;',
    display_or: 'ପେଟଯନ୍ତ୍ରଣା',
    options: [
      {
        id: 'ID_210551359',
        text: 'Site',
        display: 'Which part of the abdomen do you feel pain?',
        display_or: 'କୋଉଯାଗାରେ',
        options: [
          {
            id: 'ID_562710446',
            text: 'Lower (R) - Left Illiac Fossa',
            display_or: 'ବାମ ତଳ',
            display_hi: 'निम्न (R) – बायां इलिएक फोसा',
          },
          {
            id: 'ID_917293565',
            text: 'All over',
            display_or: 'ଚାରିଅାଡ଼େ',
            display_hi: 'हर तरफ',
          },
        ],
        display_hi: 'पेट के किस भाग में आप दर्द महसूस कर रहे हैं?',
      },
      {
        id: 'ID_313791833',
        text: 'Duration',
        display: 'Since when have you had this symptom?',
        display_or: 'କେବେଠାରୁ',
        language: '%',
        options: [
          {
            id: 'ID_826155781',
            text: '[Enter since when]',
            input_type: 'duration',
            language: 'since',
            display_or: 'କେବେ ଠାରୁ ଲେଖ',
            display_hi: '( कब से है- दर्ज करें)',
          },
        ],
        display_hi: 'आपको यह लक्षण कब से है?',
      },
    ],
    display_hi: 'पेट दर्द ',
  };
  private dataSubject = new BehaviorSubject<IMindMapData>(
    this.getMindMapData(this.mockData)
  );
  $data = this.dataSubject.asObservable();
  addData(parentNode: IMindMapData, childNode: IMindMapData) {
    if (parentNode) {
      if (!parentNode.children) {
        parentNode.children = new Array<IMindMapData>();
      }
      parentNode.children.push(childNode);
    }
  }
  getMindMapData(healthdata?: IHealthData): IMindMapData {
    let item: IMindMapData = { topic: '' };
    if (healthdata) {
      item.id = healthdata.id;
      item.topic = healthdata.text;
      item.perform_physical_exam = healthdata.perform_physical_exam;
      item.display = healthdata.display;
      item.display_or = healthdata.display_or;
      item.display_hi = healthdata.display_hi;
      item.language = healthdata.language;
      item.input_type = healthdata.input_type;
      item.gender = healthdata.gender;
      item.age_min = healthdata.age_min;
      item.age_max = healthdata.age_max;
      item.pos_condition = healthdata.pos_condition;
      item.neg_condition = healthdata.neg_condition;
      item.children = [];
      if (healthdata.options && healthdata.options.length > 0) {
        healthdata.options.forEach((element) => {
          item.children?.push(this.getMindMapData(element));
        });
      }
    }
    return item;
  }
  getHealthData(mmdata?: IMindMapData): IHealthData {
    let item: IHealthData = { text: '' };
    if (mmdata) {
      item.id = mmdata.id;
      item.text = mmdata.topic;
      item.perform_physical_exam = mmdata.perform_physical_exam;
      item.display = mmdata.display;
      item.display_or = mmdata.display_or;
      item.display_hi = mmdata.display_hi;
      item.language = mmdata.language;
      item.input_type = mmdata.input_type;
      item.gender = mmdata.gender;
      item.age_min = mmdata.age_min;
      item.age_max = mmdata.age_max;
      item.pos_condition = mmdata.pos_condition;
      item.neg_condition = mmdata.neg_condition;
      item.options = [];
      if (mmdata.children && mmdata.children.length > 0) {
        mmdata.children.forEach((element) => {
          item.options?.push(this.getHealthData(element));
        });
      }
    }
    return item;
  }
}
