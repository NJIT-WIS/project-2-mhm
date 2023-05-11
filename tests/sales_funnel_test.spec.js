const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));

const TIMEOUT = 30000;

test.skip('Sales funnel navigation test', async ({ page }) => {
  // Navigate to the landing page
  await page.goto(config.use.baseURL);

  // Verify that the Home page is loaded
  const homeTitle = await page.title();
  expect(homeTitle).toBe('MyWebClass');

  // Click on the About Us link to navigate to the Story page
  await Promise.all([
    page.waitForNavigation({ timeout: TIMEOUT }),
    page.click('nav ul li:nth-child(3) a')
  ]);

  // Verify that the Story page is loaded
const storyTitle = await page.$eval('title', el => el.textContent);
expect(storyTitle).toBe('About Us - MyWebClass');


  // Click on the Blog link to navigate to the Blog page
  await Promise.all([
    page.waitForNavigation({ timeout: TIMEOUT }),
    page.click('nav ul li:nth-child(2) a')
  ]);

  // Verify that the Blog page is loaded
const blogTitle = await page.$eval('title', el => el.textContent);
expect(blogTitle).toBe('Next.js Blog');


  // Click on the Sign Up link to navigate to the Sign Up page
  await Promise.all([
    page.waitForNavigation({ timeout: TIMEOUT }),
    page.click('nav ul li:nth-child(4) a')
  ]);

  // Verify that the Sign Up page is loaded
const signUpTitle = await page.$eval('title', el => el.textContent);
expect(signUpTitle).toBe('MyWebClass.org - Sign Up for Updates');

});
