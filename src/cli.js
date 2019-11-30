import minimist from 'minimist';
import { config } from "./config";
import { path } from "./path";
import { help } from "./help";

export async function cli(argsArray){
  const args = minimist(argsArray.slice(2));
  let command = args._[0] || 'help' || 'h';

  if(args.config || args.c)
  {
    command = "config";
  }

  if(args.path || args.p)
  {
    command = "path";
  }

  if(args.help || args.h)
  {
    command = "help";
  }

  switch (command) {
    case 'help':
        help(args);
      break;
    
    case 'config':
        config(args);
      break;

    case 'path':
        path(args);
      break;

    default:
        console.error(`"${cmd}" is not a valid command!`);
      break;
  }
}