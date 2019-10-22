const arguments = process.argv.slice(2);
let sortedArg = arguments.sort();
for (const i of sortedArg) {
  if (Number(i) !== NaN && i > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, i * 1000)
  } 
};


