export interface Register {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface ForgetPassword {
  email: string;
}

export interface ResetPassword {
  password: string;
  password_confirmation: string;
  email: string | null;
  otp: string;
}

export interface Verification {
  email: string | null;
  otp: string;
}

export interface updatePassword {
  email: string | null;
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}
