export interface AllUsers {
  id: string;
  fName: string;
  lName: string;
  email: string;
  username: string;
  jobTitle: string;
  manager: {
    fName: string;
  };
  role: {
    name: string;
  };

}

export interface OneUser {
  id: string;
  fName: string;
  lName: string;
  email: string;
  username: string;
  jobTitle: string;
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
