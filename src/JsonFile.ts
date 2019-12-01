import IConfigFile from "./IConfigFile";
import * as jsonData from "../squareci.json";
import Config from "./Config"

export default class JsonFile implements IConfigFile {
  
  Read(path: string): Config {

    let config = new Config(jsonData.image, jsonData.exitOnFailure);

    return config;
  }

  constructor() {}
}
