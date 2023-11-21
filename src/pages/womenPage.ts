import { Page } from "@playwright/test";

export class WomenBar{
    womenBarLocator = {
        womenNavBar:() => this.page.locator("a[id='ui-id-4'] span:nth-child(2)"),
        topOption:() =>  this.page.locator("a[id='ui-id-9'] span:nth-child(2)"),
}

public async womenBar():Promise<void>{
    await this.womenBarLocator.womenNavBar().click();
    await this.womenBarLocator.topOption().selectOption;
    }
    constructor(public page: Page){
        this.page = page;
    }
}