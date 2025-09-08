const { chromium } = require('playwright/test');
const assert = require('assert');

(async () => {
  const browser = await chromium.launch({ headless: false }); // headless: false se browser window dikhegi
  const page = await browser.newPage();
  await page.goto('https://www.wikipedia.org/');

  // Search input field me text likho
  await page.fill('input[name="search"]', 'Selenium (software)');

  // Search button pe click karo
  await page.click('i[data-jsl10n="search-input-button"]');

  // Page load hone tak rukho (title me "Selenium" aane tak)
  await page.waitForLoadState('domcontentloaded');
  const title = await page.title();
  console.log('Page title:', title);

  assert.strictEqual(
    title,
    'Selenium (software) - Wikipedia',
    'Title did not match'
  );

  console.log('✅ Title matched successfully');

  await browser.close();
})();
