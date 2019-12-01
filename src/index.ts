import {Command, flags} from '@oclif/command'
import ConfigController from './ConfigController'
import JsonFile from './JsonFile'
import YamlFile from './YamlFile';
import Docker from './Docker';
import Config from './Config';

class Testcli extends Command {
  static flags = {
    help: flags.help({ char: "h", description: "show squareci help." }),
    config: flags.string({
      char: "c",
      description: `Config file to read. It can be a valid yml or json file.
      It it is not provided command tries to read .squareci.yml file or
      .squareci.json file in current working directory. If none of them
      have been provided then it raises an error.`
    }),
    path: flags.string({
      char: "p",
      description: `Current working dir. The folder that mounted to the docker
      container. If it is not provided then cwd is used.`
    })
  };

  static args = [{ name: "options" }];

  async run() {
    const { args, flags } = this.parse(Testcli);

    let path = ".";
    let config = "./.squareci.json";

    if (flags.path) {
      path = flags.path;
    }

    if (flags.config) {
      config = flags.config;
    }

    let configController = new ConfigController(new JsonFile());
    let configData = configController.ConfigFile.Read(path);

    let docker = new Docker(configData.exitOnFailure);
    docker.RunContainer(configData.image);
    console.log("Running up container");
    

  }

}

export = Testcli
