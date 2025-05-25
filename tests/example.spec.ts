import { test, expect } from '@playwright/test';
import { sum } from '../lib/index';

test('basic sum test', async () => {
    expect(sum(1, 2)).toBe(3);
});

test('basic page test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = await page.title();
    expect(title).toContain('Playwright');
});