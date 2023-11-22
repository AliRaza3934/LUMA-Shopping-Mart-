import { test, expect, chromium, Browser, Page } from '@playwright/test';
import { LandingPage } from './pages/landingPage';

import { WomenBar } from './pages/womenPage';

// To run with chromium and headed -> npx playwright test --project chromium --headed



test.describe('', () => {
  let page: Page;
  test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    let landingPage = new LandingPage(page);
    await landingPage.visitUrl();
  });

 
  test('User is able to view women collection.', async () => {
    let womenNav = new WomenBar(page);
    await womenNav.womenBar();
});
  

});

