import { test, expect } from '@playwright/test';
import type { TestOptions } from './fixtures';

test('MCP interaction with Google', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Get accessibility snapshot of the page
  const snapshot = await page.accessibility.snapshot();
  console.log('Page accessibility structure:', snapshot);

  // Use MCP to interact with search box using accessibility tree
  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('Playwright MCP Testing');

  // Verify search box content using accessibility properties
  const searchBoxValue = await searchBox.inputValue();
  expect(searchBoxValue).toBe('Playwright MCP Testing');

  // Get all clickable elements in accessibility tree
  const clickableElements = await page.locator('[role="button"], [role="link"]').all();
  console.log('Number of clickable elements:', clickableElements.length);

  // Find and click the Google Search button using accessibility role
  const searchButton = page.getByRole('button', { name: 'Google Search' });
  await searchButton.click();

  // Wait for results and verify using accessibility markers
  await page.waitForSelector('[role="main"]');
  const searchResults = await page.locator('[role="main"]').isVisible();
  expect(searchResults).toBeTruthy();
});