import { Page } from "@playwright/test";

export class LandingPage{

    landingPageLocators = []

    public async visitUrl():Promise<void>{
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }

    public async goToSale():Promise<void>{
        await this.page.locator("//div[@class='section-item-content nav-sections-item-content']//span[contains(., 'What')]").click();
    }

    public async checkNewYogaAttire():Promise<void>{
        
    }

    constructor(public page: Page){
        this.page = page;
    }
}