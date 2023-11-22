import { Page } from "@playwright/test";

export class WomenBar{
    womenBarLocator = {
        womenNavBar:() => this.page.locator("a[id='ui-id-4'] span:nth-child(2)"),
        radianProduct:()=> this.page.locator("img[alt='Radiant Tee']"),
}

public async womenBar():Promise<void>{
    await this.womenBarLocator.womenNavBar().click();
    await this.page.waitForTimeout(4000);
    const pageDescription = this.page.locator('//div[@class="column main"]//span[@class="info"]').first();
    console.log("Description:" + await pageDescription.textContent());
    await this.page.waitForTimeout(4000)
    await this.womenBarLocator.radianProduct().click();
    await this.page.waitForTimeout(4000)
    
    }
    constructor(public page: Page){
        this.page = page;
    }
}