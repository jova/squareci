import { exec } from 'child_process';

export default class Docker {
  private exitOnFailure: boolean;
  constructor(exitOnFailure: boolean) { this.exitOnFailure = exitOnFailure; }

  RunContainer(image: string) {
    exec(
      "docker run -d -p 5005:5005 --name squareci node:latest",
      (error, stdout) => {
        if (error && this.exitOnFailure) process.exit(-1);
      }
    );
  }
}