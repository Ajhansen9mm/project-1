import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class ajDrop extends BasePage {
    searchBtn: By = By.xpath('//*[@aria-label="search"]')
    searchBar: By = By.xpath('//*[@id="product__search"]')
    results: By = By.xpath('//*[@id="app"]/div/div[5]/div')
    itemOne: By = By.xpath('//*[@id="app"]/div/div[5]/div/div[2]/div/div[1]/div[1]/div/a')
    addCart: By = By.xpath('//*[@id="app"]/div/div[5]/div[1]/div/div[2]/div[1]/div/div[2]/div[9]/div[1]/div/div/button/span')
    productTab: By = By.xpath('//*[@id="app"]/div/div[5]/div/div[1]/header/div/div/div/nav/ul/li[2]/a')
    pollsTab: By = By.xpath('//*[@id="app"]/div/div[5]/div/div[1]/header/div/div/div/nav/ul/li[3]')
    pollsCard: By = By.xpath('//*[@id="app"]/div/div[5]/div/div[2]/div/div[1]/div/div[2]/div')
    pollResults: By = By.xpath('//*[@id="app"]/div/div[5]/div/section[2]/div[1]/div[2]/div/div/div[2]')
    reviewTab: By = By.xpath('//*[@id="app"]/div/div[5]/div[1]/div/div[2]/div[2]/div/div/div/div/div[3]/a/span')
    constructor() {
        super({url: "https://drop.com/home"})
    }
    async search(searchTerm:string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}

