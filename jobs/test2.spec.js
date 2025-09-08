import { test, expect } from '@playwright/test';

test('Wikipedia search works', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.fill('input[name="search"]', 'Selenium (software)');
  await page.click('i[data-jsl10n="search-input-button"]');

  await expect(page).toHaveTitle('Selenium (software) - Wikipedia');
});