import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');

   let title:string= await page.title();
   console.log("title of the website:",title);
  await expect(page).toHaveTitle('Automation Testing Practice');


});
