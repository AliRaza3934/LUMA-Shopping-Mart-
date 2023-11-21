import { Page } from "@playwright/test";

export class LandingPage{

    landingPageLocators = {
    shopNewYogaBtn:() => this.page.locator("//span[@class='content']//span[@class='more button']")
    }

    public async visitUrl():Promise<void>{
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }

    public async goToSale():Promise<void>{
        await this.page.locator("//div[@class='section-item-content nav-sections-item-content']//span[contains(., 'What')]").click();
    }

    constructor(public page: Page){
        this.page = page;
    }
}