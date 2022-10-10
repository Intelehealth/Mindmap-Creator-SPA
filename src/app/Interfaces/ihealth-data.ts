export interface IHealthData {
  id?: string;
  text: string;
  perform_physical_exam?: string;
  display?: string;
  isRequired?: boolean;
  multi_choice?: boolean;
  exclude_from_multi_choice?: boolean;
  display_or?: string;
  display_hi?: string;
  pop_up?: string;
  pop_up_hi?: string;
  language?: string;
  input_type?: string;
  gender?: string;
  age_min?: string;
  age_max?: string;
  pos_condition?: string;
  neg_condition?: string;
  options?: Array<IHealthData>;
}
