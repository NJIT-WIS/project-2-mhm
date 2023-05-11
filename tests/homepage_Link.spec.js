const { test, expect } = require('@playwright/test');

test('Navigate to blog page from HeroBanner', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://njit-wis.github.io/project-2-mhm/');

  // Click on the "Browse Articles" button in the HeroBanner
  const browseArticlesButton = await page.waitForSelector('.heroBanner a');
  await browseArticlesButton.click();

  // Wait for the page to load and verify the URL is correct
  await page.waitForNavigation();
  expect(page.url()).toBe('https://njit-wis.github.io/project-2-mhm/blog');
});
