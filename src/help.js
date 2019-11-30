const menus = {
  main: `
${"Usage: squareci [options]\n"}
${"Options:\n"}
${`  -c, --config  Config file to read. It can be a valid yml or json file.
                It it is not provided command tries to read .squareci.yml file or
                .squareci.json file in current working directory. If none of them
                have been provided then it raises an error.
                `}
${`  -p, --path    Current working dir. The folder that mounted to the docker
                container. If it is not provided then cwd is used.
                `}
`
};

export async function help(args){
  console.log(menus.main);
}