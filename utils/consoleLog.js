const chalk = require('chalk')

exports.log = (...inputs) => {
  if (inputs.length === 1 && typeof inputs[0] === 'object') {
    inputs = [JSON.stringify(inputs[0], null, 2)]
  }

  // dark theme
  // console.log(...inputs.map(input => chalk.bgGreen.black(input)))

  // light theme
  console.log(...inputs.map(input => chalk.bgHex('#fff').green(input)))
}

exports.logError = msg => {
  console.error('💥💥💥', chalk.red('ERROR'), '💥💥💥')
  if (msg instanceof Error) {
    console.error(chalk.red(msg.stack))
  } else {
    console.error(chalk.red(msg))
  }
}
