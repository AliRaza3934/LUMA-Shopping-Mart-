import { Page } from "@playwright/test";

export class WomenBar{
    womenBarLocator = {
        womenNavBar:() => this.page.locator("a[id='ui-id-4'] span:nth-child(2)"),
        assertPageDescription:() =>  this.page.locator('//div[@class="column main"]//span[@class="info"]'),
}

public async womenBar():Promise<void>{
    await this.womenBarLocator.womenNavBar().click();
    await this.page.waitForTimeout(4000);
    const pageDescription = this.page.locator('//div[@class="column main"]//span[@class="info"]').first();
    console.log("Description:" + await pageDescription.textContent());
    
    }
    constructor(public page: Page){
        this.page = page;
    }
}