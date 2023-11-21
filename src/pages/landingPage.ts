import { Page } from "@playwright/test";

export class LandingPage{

    public async visitUrl():Promise<void>{
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }

    constructor(public page: Page){
        this.page = page;
    }
}