export interface UserModel {
  id: string;
  fName: string;
  lName: string;
  email: string;
  username: string;
  jobTitle: string;
  password: string;
  manager: {
    fName: string;
  };
  role: {
    name: string;
  };

}

export interface Role {
  id: string;
  name: string;
}

export interface UserViewModel {
  fName: string;
  lName: string;
  email: string;
  username: string;
  jobTitle: string;
  manager: string;
  role: string;
  password: string;
}
