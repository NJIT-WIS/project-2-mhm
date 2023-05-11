const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkAccessibility(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  const fontSize = await page.$eval('body', (el) => parseFloat(getComputedStyle(el).fontSize));
  expect(fontSize).toBeGreaterThan(14);

  // Check Facebook link
  const facebookLink = await page.$('[aria-label="facebook"]');
  expect(facebookLink).toBeTruthy();

  // Check linkedin link
  const linkedinLink = await page.$('[aria-label="linkedin"]');
  expect(linkedinLink).toBeTruthy();

  // Check twitter link
  const twitterLink = await page.$('[aria-label="twitter"]');
  expect(twitterLink).toBeTruthy();

  await browser.close();
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have the correct font size and social media`, async () => {
    console.log(page.path);
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkAccessibility(pageUrl);
  });
});
