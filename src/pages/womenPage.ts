import { Page } from "@playwright/test";
import { pageFixture } from "../Hooks/pageFixture";

export class WomenBar{
    womenBarLocator = {
        womenNavBar:() =>pageFixture.page.locator("a[id='ui-id-4'] span:nth-child(2)"),
        topOption:() => pageFixture.page.locator("a[id='ui-id-9'] span:nth-child(2)"),
}

public async womenBar():Promise<void>{
    await this.womenBarLocator.womenNavBar().click();
    await this.womenBarLocator.topOption().selectOption;
    }
    constructor(public page: Page){
        pageFixture.page = page;
    }
}