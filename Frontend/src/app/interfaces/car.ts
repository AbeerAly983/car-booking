export interface Car {
  id: number;
  model: string;
  type: string;
  first_release: number;
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
  owner_name: string;
  type_owner: string;
  dates: string[];
  photos: any;
  approved: number;
}

export interface BookCar {
  id: any;
  start_date: string;
  end_date: string;
  user_id: number;
  car_id: number;
  num_days: number;
  total_price: number;
  phone: number;
}

export interface Wait_And_Rent_Cars {
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
  created_at: string;
  updated_at: string;
  num_rent: number;
  disable: number;
  approved: number;
  num_waiting_rent: number;
}

export interface Wait_And_Rent_Approval {
  id: number;
  start_date: string;
  end_date: string;
  user_id: string;
  name: string;
  car_id: string;
  total_price: number;
  num_days: number;
  created_at: string;
  updated_at: string;
  phone: string;
}

export interface PaymentInfo{
  paymentMethod: string;
  type: string;
  model: string;
  price: string;
  id: string;
  time: string;
}