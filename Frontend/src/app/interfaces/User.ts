export class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public password: string,
    public rpassword: string
  ) { }
}

export interface Profile {
  email: string;
  id: number;
  name: string;
  old_password: string,
  new_password: string;
  new_password_confirmation: string;
  roles: [];
}
