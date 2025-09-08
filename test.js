// jobs/test.spec.js
const { test, expect } = require('@playwright/test');

test('Wikipedia search test', async ({ page }) => {
  // Browser aur page automatically handle hota hai Playwright Test me
  await page.goto('https://www.wikipedia.org/');

  // Search input field me text likho
  await page.fill('input[name="search"]', 'Selenium (software)');

  // Search button pe click karo
  await page.click('i[data-jsl10n="search-input-button"]');

  // Page load hone tak rukho
  await page.waitForLoadState('domcontentloaded');

  // Title check karo
  await expect(page).toHaveTitle('Selenium (software) - Wikipedia');
});
