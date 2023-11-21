import { test, expect } from '@playwright/test';
import { LandingPage } from './pages/landingPage';
import { WomenBar } from './pages/womenPage';


test('User is able to go to the website.', async ({ page }) => {
  let landingPage = new LandingPage(page);
  await landingPage.visitUrl();
  let womenPage = new WomenBar(page);
  await womenPage.womenBar();
  
});
