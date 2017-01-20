export class Food {
  public isBeingEdited: boolean = false;
  public timeStamp = new Date;
  constructor(public name: string, public details: string, public calories: number){}
}
