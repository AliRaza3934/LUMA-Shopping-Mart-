import { Page } from "@playwright/test";

export class WomenBar{
    womenBarLocator = {
        womenNavBar:() => this.page.locator("a[id='ui-id-4'] span:nth-child(2)"),
        radianProduct:()=> this.page.locator("img[alt='Radiant Tee']"),
        productItem:() => this.page.locator('//div[@class="products wrapper grid products-grid"]//ol[@class="products list items product-items"]'),
        lightjacket:()=>this.page.locator('//div[@class="products wrapper grid products-grid"]//li[@class="item product product-item"]//span[@class="product-image-container"]').first(),
       // woomenJacket:()=> this.page.locator('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html'),
}

public async womenBar():Promise<void>{
    await this.womenBarLocator.womenNavBar().click();
    await this.page.waitForTimeout(4000);
    const pageDescription = this.page.locator('//div[@class="column main"]//span[@class="info"]').first();
    console.log("Description:" + await pageDescription.textContent());
    await this.page.waitForTimeout(4000);
    await this.womenBarLocator.radianProduct().click();
    await this.page.waitForTimeout(4000);
    await this.page.goto('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
    const jackets = await this.womenBarLocator.productItem().count();
    console.log('\n' + 'Number of items found:' + jackets + '\n');
    await this.page.waitForTimeout(4000);
    await this.womenBarLocator.lightjacket().click();
    //for(let i=1;i<=jackets;i++){
    //await this.page.waitForTimeout(4000);  
    //const getAlljacketsAttire = this.page.locator("//ol[@class='products list items product-items']//strong//a".replace('placeholder', i.toString()));
            //const text = await getAlljacketsAttire.textContent();
            //const textOutput = [text]
            ///process.stdout.write(''+i+' | Name of Product -> '+`${textOutput}`.trim());
    //} 
    }
    constructor(public page: Page){
        this.page = page;
    }
}