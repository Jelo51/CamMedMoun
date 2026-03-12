const { Builder } = require("selenium-webdriver");

(async function testApp() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:3000");
    console.log("Application opened successfully");
  } catch (err) {
    console.error(err);
  } finally {
    await driver.quit();
  }
})();