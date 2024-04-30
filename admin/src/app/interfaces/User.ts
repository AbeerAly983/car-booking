export class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public password: string,
    public rpassword: string
  ) {}
}

export interface Count_Users {
  num_all_users: number;
  number_company: number;
  num_users: number;
}
export interface Profile {
  email: string;
  name: string;
  id: number;
}
