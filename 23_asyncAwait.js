async function test() {
  [1, 2, 3].forEach(async (n) => {
    await Promise.resolve();
    console.log(n);
  });

  console.log("done");
}