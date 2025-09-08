const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

async function runWikipediaSearch() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.wikipedia.org/");

    // Search input field pe text likho
    let searchInput = await driver.findElement(By.xpath("//input[@name='search']"));
    await searchInput.sendKeys("Selenium (software)");

    let searchButton = await driver.findElement(By.xpath("//i[@data-jsl10n='search-input-button']"));
    await searchButton.click();

    // Page load hone tak rukho (title me "Selenium" aane tak)
    await driver.wait(until.titleContains("Selenium"), 5000);
    let title = await driver.getTitle();
    console.log("Page title:", title);

    assert.strictEqual(
      title,
      "Selenium (software) - ikipedia",
      "Title did not match"
    );

    console.log("✅ Title matched successfully");
  } catch (error) {
    console.error("❌ Test failed:", error);
  } finally {
    await driver.quit();
  }
}

runWikipediaSearch();
