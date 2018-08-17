//This file contains the team class which contains array of team IDs, team names, and team descriptions
export interface TeamServerInterface {
  id: number;
  teamName: string;
  teamDescription: string;
  ownerEmail: string;
}

export class Team {
  private _id: number = 0; //the unique ID for a team
  private _teamName: string; //the name for a team
  private _teamDescription: string; //the description for a team
  private _ownerEmail: string;

  constructor(team: TeamServerInterface) {
    this._id = team.id;
    this._teamName = team.teamName;
    this._teamDescription = team.teamDescription;
    this._ownerEmail = team.ownerEmail;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get id(): number {
    return this._id;
  }

  public set teamName(name: string) {
    this._teamName = name;
  }

  public get teamName(): string {
    return this._teamName;
  }

  public set teamDescription(description: string) {
    this._teamDescription = description;
  }

  public get teamDescription(): string {
    return this._teamDescription;
  }

  public set ownerEmail(email: string) {
    this._ownerEmail = email;
  }

  public get ownerEmail(): string {
    return this._ownerEmail;
  }
}
