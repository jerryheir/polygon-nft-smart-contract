
async function main() {
  console.log("process.argv", process.argv);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});