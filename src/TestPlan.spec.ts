import { test, expect, chromium, Browser } from '@playwright/test';
import { LandingPage } from './pages/landingPage';
import { WhatsNew } from './pages/whatsNew';

// To run with chromium and headed -> npx playwright test --project chromium --headed

test('User is able to go to the website.', async ({ page }) => {
  let landingPage = new LandingPage(page);
  await landingPage.visitUrl();
  await landingPage.goToSale();
  let whatsNew = new WhatsNew(page);
  await whatsNew.goToShopNewYoga();
  await page.waitForTimeout(2000);
});