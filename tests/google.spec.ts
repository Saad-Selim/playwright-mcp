import { test, expect } from '@playwright/test';

test('should open Google', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');
  
  // Verify we're on Google
  const title = await page.title();
  expect(title).toContain('Google');
  
  // Optional: interact with the search box
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright testing');
  
  // Optional: take a screenshot
  await page.screenshot({ path: 'google-search.png' });
});