class LoginModel {
  email: string | undefined;

  password: string | undefined;

  constructor(
    email?: string,
    password?: string,
  ) {
    this.email = email;
    this.password = password;
  }
}

export default LoginModel;
