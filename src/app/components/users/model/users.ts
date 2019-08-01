export interface UserModel {
  id: string;
  fName: string;
  lName: string;
  email: string;
  username: string;
  password: string;
  manager: {
    fName: string;
  };
  role: Role;
  }

export interface Role {
  id: string;
  name: string;
  enabled: boolean;
}

export interface UserViewModel {
  fName: string;
  lName: string;
  email: string;
  username: string;
  manager: string;
  role: string;
  password: string;
}
