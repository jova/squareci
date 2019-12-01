export default class Config{
  public image: string;
  public exitOnFailure: boolean;

  constructor(image: string, exitOnFailure: boolean){
    this.image = image;
    this.exitOnFailure = exitOnFailure;
  }
}