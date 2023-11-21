import { Page } from "@playwright/test";
import { pageFixture } from "../Hooks/pageFixture";

export class LandingPage{

    public async visitUrl():Promise<void>{
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }
}