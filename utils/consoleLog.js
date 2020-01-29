const chalk = require('chalk')

exports.log = msg => {
  // dark theme
  console.log(chalk.bgGreen.black(msg))

  // light theme
  // console.log(chalk.bgHex('#fff').green(msg))
}

exports.logError = msg => {
  console.log('💥💥💥', chalk.red('ERROR'), '💥💥💥')
  if (msg instanceof Error) {
    console.log(chalk.red(msg.stack))
  } else {
    console.log(chalk.red(msg))
  }
}
