export interface Car {
  num_all_cars: number;
  num_disable_cars: number;
  num_cars_wait_approve: number;
  num_active_cars: number;
  num_not_pay_cars: number;
}
export interface Wait_Approval_Car {
  id: number;
  model: string;
  type: string;
  first_release: string;
  price_rent: number;
  governorate: string;
  city: string;
  address: string;
  phone: number;
  status: number;
  user_id: number;
  created_at: string | null;
  updated_at: string | null;
  num_rent: number;
  disable: number;
  approved: number;
}
