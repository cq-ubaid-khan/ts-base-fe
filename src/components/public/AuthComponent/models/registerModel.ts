class RegisterModel {
  firstName: string | undefined;

  lastName: string | undefined;

  email: string | undefined;

  password: string | undefined;

  constructor(
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

export default RegisterModel;
