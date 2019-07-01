export class User {
  id: number;
  password: string;
  email: string;
  username: string;
  fName: string;
  lName: string;
  jobTitle: string;
  enabled: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  managerId: number;

  constructor(id: number, password: string, email: string, username: string, firstName: string, lastName: string, jobTitle: string, enabled: boolean, accountNonExpired: boolean, credentialsNonExpired: boolean, accountNonLocked: boolean, managerId: number) {
    this.id = id;
    this.password = password;
    this.email = email;
    this.username = username;
    this.fName = firstName;
    this.lName = lastName;
    this.jobTitle = jobTitle;
    this.enabled = enabled;
    this.accountNonExpired = accountNonExpired;
    this.credentialsNonExpired = credentialsNonExpired;
    this.accountNonLocked = accountNonLocked;
    this.managerId = managerId;
  }
}
