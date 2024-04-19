export interface IHealthData {
  id?: string;
  text: string;
  perform_physical_exam?: string;
  display?: string;
  isRequired?: boolean;
  multi_choice?: boolean;
  exclude_from_multi_choice?: boolean;
  having_nested_question?:boolean;
  compare_duplicate_node?: string;
  enable_exclusive_option?:boolean;
  is_exclusive_option?:boolean;
  display_or?: string;
  display_hi?: string;
  pop_up?: string;
  pop_up_hi?: string;
  pop_up_or?: string;
  language?: string;
  input_type?: string;
  gender?: string;
  age_min?: number;
  age_max?: number;
  pos_condition?: string;
  neg_condition?: string;
  citation?: string;
  snomed?: string;
  icd_10?: string;
  loinc?: string;
  job_aid_type?: string;
  job_aid_file?: string;
  associated_complaint?: string;
  options?: Array<IHealthData>;
}
