
import { test, expect } from '@playwright/test';

test.describe('Desktop Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Products' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Industries' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Partners' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Company' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Training' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Support' })).toBeVisible();
  });
});

test.describe('Mobile Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should open the mobile menu and display navigation links', async ({ page }) => {
    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await expect(page.getByRole('heading', { name: 'Mobile Navigation Menu' })).toBeVisible();

    await expect(page.getByRole('button', { name: 'Products' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Industries' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Partners' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Company' })).toBeVisible();

    await page.getByRole('button', { name: 'Products' }).click();
    await expect(page.getByRole('link', { name: 'AI Solutions' })).toBeVisible();
  });
});
