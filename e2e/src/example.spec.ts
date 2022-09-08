import { test, expect } from '@playwright/test';

test.describe('Angular Ng14 Localhost Playwright Test', () => {
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

  test('should test multiple elements with same data ids when configured', async ({
    page,
  }) => {

    await page.goto('http://localhost:4200');

    const multipleTestIds = page.locator('[data-automation-id="multiple-data-ids-oh-my"]');

    await expect(multipleTestIds).toHaveCount(2); // Works because Playwright Count method knows how to with multiple elements
    // uncomment code below to view Playwright error
    // expect(await multipleTestIds.textContent()).toContain('Here are some links to help you get started'); // Throws because Playwright method can only work with 1 element
  });
});
