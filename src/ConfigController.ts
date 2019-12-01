import IConfigFile from './IConfigFile';

export default class ConfigController {
  public ConfigFile: IConfigFile;

  constructor(configFile: IConfigFile) {
    this.ConfigFile = configFile;
  }
}
