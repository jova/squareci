import Config from './Config'

export default interface IConfigFile{
  Read(path: string): Config;
}