import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class AngelPage extends BasePage {
    login: By = By.xpath('//*[@id="app"]/div/div[4]/div[2]/div/div/div[2]/header/div[1]/div[9]/div/div/div[1]/a/span')
    userName: By = By.name('username')
    password: By = By.name('password')
    loginBtn: By = By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div[1]/div/form/div[6]/button')
    signUp: By = By.xpath('//*[@id="app"]/div/div[4]/div[2]/div/div/div[2]/header/div[1]/div[9]/div/div/div[2]/a/span')
    Email: By = By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div/div[1]/div/div/form/div[4]/div/span/input')
    continue: By = By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div/div[1]/div/div/form/div[6]/button/span')
    forgotPassword: By = By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div[1]/div/form/div[7]/a')
    sendResetLink: By = By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div[1]/div/div/div[2]/button')
    close: By = By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div[2]/span')
    searchBar: By = By.name('q')
    results: By = By.id('rso')
    
    constructor() {
        super({url: "https://drop.com/"})
    }
    async search(searchTerm:string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}