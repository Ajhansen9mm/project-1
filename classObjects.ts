import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class ajDrop extends BasePage {
    searchBtn: By = By.xpath('//*[@aria-label="search"]')
    searchBar: By = By.xpath('//*[@id="product__search"]')
    results: By = By.xpath('//*[@id="app"]/div/div[5]/div')
    itemOne: By = By.xpath('//*[@id="app"]/div/div[5]/div/div[2]/div/div[1]/div[1]')
    addCart: By = By.xpath('//*[@id="app"]/div/div[5]/div[1]/div/div[2]/div[1]/div/div[2]/div[10]/div[1]/div/div/button/span')
    productTab: By = By.xpath('//*[@id="app"]/div/div[5]/div/div[1]/header/div/div/div/nav/ul/li[2]/a')
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

