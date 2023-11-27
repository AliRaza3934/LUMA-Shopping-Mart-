import { Page, expect } from "@playwright/test";

export class WhatsNew{

    whatsNewLocators = {
        whatsNewTab:() => this.page.locator("//div[@class='section-item-content nav-sections-item-content']//span[contains(., 'What')]"),
        shopNewYogaBtn:() => this.page.locator("//span[@class='content']//span[@class='more button']").first(),
       
    }

    public async goToShopNewYoga():Promise<void>{
        await this.whatsNewLocators.whatsNewTab().click();
        await this.whatsNewLocators.shopNewYogaBtn().click();
        await expect(this.page).toHaveURL('https://magento..com/collections/yoga-new.html');
        
    }

    public async findLaylaTee():Promise<void>{
        await this.page.waitForSelector("//div[@class='products wrapper grid products-grid']//li[12]");
        const findAllAttire = await this.page.locator("//div[@class='products wrapper grid products-grid']//li").count();
        console.log('\n' + 'Number of items found: ' + findAllAttire + '\n')
        for(let i=1;i<=findAllAttire;i++){
            const getAllYogaAttire = this.page.locator("//li[placeholder]//div[@class='product details product-item-details']//strong//a".replace('placeholder', i.toString()));
            const text = await getAllYogaAttire.textContent();
            const textOutput = [text]
            process.stdout.write(''+i+' | Name of Product -> '+`${textOutput}`.trim());
        }
}



    constructor(public page: Page){
        this.page = page;
    }
}