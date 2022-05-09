import chalk from "chalk";

const wilders = ['Laurent', 'Xavier', 'Naim', 'Lisa'];
console.log(wilders);

function wildersNames() {
    console.log(chalk.blue(wilders[0]));
    console.log(chalk.red(wilders[1]));
    console.log(chalk.white(wilders[2]));
    console.log(chalk.green(wilders[3]));
    }
  wildersNames();
