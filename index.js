outerLoop:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // if (i === 5 && j === 5) {
    //   continue outerLoop;
    // }
    if (i === 5 && j === 5) {
        break outerLoop;
      }
    console.log(`i = ${i}, j = ${j}`);
  }
}