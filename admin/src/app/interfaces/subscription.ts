export interface Subscription {
  id: number;
  start_date: string | null;
  end_date: string | null;
  car_id: number;
  created_at: string | null;
  updated_at: string | null;
  price: number;
  Subscription_period: string | null;
}
export interface Count_Subscription {
  num_all_subscription: number;
  num_one_month_subscription: number;
  num_three_months_subscription: number;
  num_one_year_subscription: number;
}
export interface Count_Paid_Subscription {
  num_subscription_paid_today: number;
  num_subscription_paid_this_month: number;
  num_subscription_paid_this_year: number;
}
export interface Subscription_Profit {
  total_sum_subscription: number;
  sum_subscription_paid_today: number;
  sum_subscription_paid_this_month: number;
  sum_subscription_paid_this_year: number;
}
export interface Count_End_Subscription {
  subscription_end_today: number;
  subscription_end_this_month: number;
}
