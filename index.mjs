// Remember to run NPM install in your terminal!

import {franc} from 'franc';
import langs from 'langs';
import chalk from 'chalk';

const text = process.argv[2];
const code = franc(text);

if (code === 'und'){
    console.log(chalk.red('Text undetermined. Try a larger sample'));
}
else{
    const name = langs.where("3", code);
    if (name){
        console.log(chalk.green(name.name));
    }
    else{
        console.log(chalk.red("Sorry, your language isn't supported"));
    }
    
}