async function deployPortfolio() {
  console.log("🚀 Starting build...");

  await installDependencies();
  console.log("📦 Dependencies ready");

  await runTests();
  console.log("✅ Tests passed");

  await deployToServer();
  console.log("🌐 Live at https://luckeh.dev");
}

deployPortfolio();
