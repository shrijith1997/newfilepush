import { test, expect } from '@playwright/test';

test('fill registration form', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.getByLabel('Name:').fill('john');
  
  await page.getByLabel('Email:').fill('john123@gmail.com');
 
 
  await page.getByPlaceholder("Enter Phone").fill("12345678990");

  
  await expect(page.getByTitle('Issues count')).toHaveText('25 issues');


});