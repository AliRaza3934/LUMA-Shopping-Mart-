import { Page, expect } from "@playwright/test";

export class WhatsNew{

    whatsNewLocators = {
        shopNewYogaBtn:() => this.page.locator("//span[@class='content']//span[contains(., 'Shop New Yoga')]")
    }

    public async goToShopNewYoga():Promise<void>{
        await this.whatsNewLocators.shopNewYogaBtn().click();
        await expect(this.page).toHaveURL('https://magento.softwaretestingboard.com/collections/yoga-new.html');

    }



    constructor(public page: Page){
        this.page = page;
    }
}