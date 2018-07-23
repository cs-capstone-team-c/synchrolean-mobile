//  account.ts contains the account class

export class Account {
  private _serverUrl: string;
  private _email: string;
  private _firstname: string;
  private _lastname: string;
  private _password: string; //TESTING ONLY
  private _token: string;

  constructor(
    serverUrl: string,
    email: string,
    firstname: string,
    lastname: string,
    password: string //TESTING ONLY
  ) {
    this._serverUrl = serverUrl;
    this._email = email;
    this._firstname = firstname;
    this._lastname = lastname;
    this._password = password; //TESTING ONLY
  }

  //  Set/get for email
  set email(newEmail: string) {
    this._email = newEmail;
  }

  get email(): string {
    return this._email;
  }

  //  Set/get for firstname
  set firstname(newFirstname: string) {
    this._firstname = newFirstname;
  }

  get firstname(): string {
    return this._firstname;
  }

  //  Set/get for lastname
  set lastname(newLastname: string) {
    this._lastname = newLastname;
  }

  get lastname(): string {
    return this._lastname;
  }

  //  Set/get for password FOR TESTING ONLY
  set password(newPassword: string) {
    //TESTING ONLY, DELETE SOON
    this._password = newPassword;
  }
  get password(): string {
    //TESTING ONLY, DELETE SOON
    return this._password;
  }

  set serverUrl(url: string) {
    this._serverUrl = url;
  }

  get serverUrl(): string {
    return this._serverUrl;
  }

  set token(tok: string) {
    this._token = tok;
  }

  get token(): string {
    return this._token;
  }
}