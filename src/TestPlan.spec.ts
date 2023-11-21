import { test, expect } from '@playwright/test';
import { LandingPage } from './pages/landingPage';

test('User is able to go to the website.', async ({ page }) => {
  let landingPage = new LandingPage(page);
  await landingPage.visitUrl();
});