// jobs/test.spec.js
import { test, expect } from '@playwright/test';

test('Wikipedia search works', async ({ page }) => {
  // Wikipedia open karo
  await page.goto('https://www.wikipedia.org/');

  // Search input me text likho
  await page.fill('input[name="search"]', 'Selenium (software)');

  // Search button pe click karo
  await page.click('i[data-jsl10n="search-input-button"]');

  // Title verify karo
  await expect(page).toHaveTitle('Selenium (software) - Wikipedia');
});
