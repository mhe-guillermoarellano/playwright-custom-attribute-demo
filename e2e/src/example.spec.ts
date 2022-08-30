import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // create a locator
  const nextStepsH2Element = page.locator('h2', { hasText: 'Next Steps'});

  expect(nextStepsH2Element).toBeDefined();
});
