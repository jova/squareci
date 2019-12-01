import IConfigFile from "./IConfigFile";
import Config from './Config';

export default class YamlFile implements IConfigFile{

  Read(path: string): Config {
    //read yaml and return json
    let config = new Config("from yaml", true);

    return config;
  }

}