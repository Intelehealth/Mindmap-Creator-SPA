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
    text: 'Enter Text',
    perform_physical_exam:
      'Abdomen:Scars;Abdomen:Distension;Abdomen:Tenderness;Abdomen:Lumps;Abdomen:Rebound tenderness;Abdomen:Peristaltic sound;Physical Growth:Sexual Maturation;',
    display_or: 'ପେଟଯନ୍ତ୍ରଣା',
    display_hi: 'पेट दर्द '
  };
  private dataSubject = new BehaviorSubject<IMindMapData>(
    this.getMindMapData(this.mockData)
  );
  $data = this.dataSubject.asObservable();

  getMindMapData(healthdata?: IHealthData): IMindMapData {
    let item: IMindMapData = { topic: ''};
    if (healthdata) {
      item.id = healthdata.id;
      item.topic = healthdata.text;
      item.perform_physical_exam = healthdata.perform_physical_exam;
      item.display = healthdata.display;
      item.isRequired = healthdata.isRequired;
      item.multi_choice = healthdata.multi_choice;
      item.exclude_from_multi_choice = healthdata.exclude_from_multi_choice;
      item.display_or = healthdata.display_or;
      item.display_hi = healthdata.display_hi;
      item.pop_up = healthdata.pop_up;
      item.pop_up_hi = healthdata.pop_up_hi;
      item.pop_up_or = healthdata.pop_up_or;
      item.language = healthdata.language;
      item.input_type = healthdata.input_type;
      item.gender = healthdata.gender;
      item.age_min = healthdata.age_min;
      item.age_max = healthdata.age_max;
      item.pos_condition = healthdata.pos_condition;
      item.neg_condition = healthdata.neg_condition;
      item.citation = healthdata.citation;
      item.snomed = healthdata.snomed;
      item.icd_10 = healthdata.icd_10;
      item.loinc = healthdata.loinc;
      item.job_aid_type = healthdata.job_aid_type;
      item.job_aid_file = healthdata.job_aid_file;
      item.associated_complaint = healthdata.associated_complaint;
      item.children = [];
      if (healthdata.options && healthdata.options.length > 0) {
        healthdata.options.forEach((element, index) => {
          let mmdata = this.getMindMapData(element);
          mmdata.direction = index % 2 === 0 ? 'left' : 'right';
          item.children?.push(mmdata);
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
      item.isRequired = mmdata.isRequired;
      item.multi_choice = mmdata.multi_choice;
      item.exclude_from_multi_choice = mmdata.exclude_from_multi_choice;
      item.having_nested_question = mmdata.having_nested_question;
      item.compare_duplicate_node = mmdata.compare_duplicate_node;
      item.enable_exclusive_option = mmdata.enable_exclusive_option;
      item.is_exclusive_option = mmdata.is_exclusive_option;
      item.display_or = mmdata.display_or;
      item.display_hi = mmdata.display_hi;
      item.pop_up = mmdata.pop_up;
      item.pop_up_hi = mmdata.pop_up_hi;
      item.pop_up_or = mmdata.pop_up_or;
      item.language = mmdata.language;
      item.input_type = mmdata.input_type;
      item.gender = mmdata.gender;
      item.age_min = mmdata.age_min;
      item.age_max = mmdata.age_max;
      item.pos_condition = mmdata.pos_condition;
      item.neg_condition = mmdata.neg_condition;
      item.citation = mmdata.citation;
      item.snomed = mmdata.snomed;
      item.icd_10 = mmdata.icd_10;
      item.loinc = mmdata.loinc;
      item.job_aid_type = mmdata.job_aid_type;
      item.job_aid_file = mmdata.job_aid_file;
      item.associated_complaint = mmdata.associated_complaint;
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
