import { test, expect } from '@playwright/test';

test.describe('Angular Ng14 Localhost', () => {
  test('should locate "data-automation-id" attribute for element selection', async ({
    page,
  }) => {
    await page.goto('http://localhost:4200');

    const dataAutomationIdTest = page.locator(
      '[data-automation-id="next-steps-element"]'
    );

    await expect(dataAutomationIdTest).toHaveCount(1);
  });

  test('should locate "data-test-id" attribute for element selection', async ({
    page,
  }) => {
    await page.goto('http://localhost:4200');

    const dataTestId = page.locator('data-test-id=resources-element');

    await expect(dataTestId).toHaveCount(1);
  });

  test('should locate element using "href" attribute value', async ({
    page,
  }) => {

    await page.goto('http://localhost:4200');

    const dataTestId = page.locator('[href="https://angular.io/tutorial"]');

    await expect(dataTestId).toHaveCount(1);
  });
});
