const { test, expect } = require('@playwright/test');

test('clicking the signup button should take you to the signup page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('a[href="/signup"]');
  await page.waitForNavigation();

  const url = await page.url();
  expect(url).toBe('http://localhost:3000/signup');
});
