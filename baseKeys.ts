import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Drop extends BasePage {
    keysRes: By= By.xpath('/html/body/div[1]/div/div[5]/div/div[1]/div[2]/div[1]/div')
    keysArt: By = By.xpath('/html/body/div[1]/div/div[5]/div/div[2]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div/a')
    keysArtTitle: By = By.xpath('/html/body/div[1]/div/div[5]/div[3]/div[1]/div[2]/div/div/div[3]/h1')
    keysComm: By = By.xpath('/html/body/div[1]/div/div[5]/div[3]/div[1]/div[3]/div/div[1]/div/div[1]/div/div/div/div[3]/div[2]/div[1]/div/div[2]/div[1]/div')
    keysPost: By = By.xpath('/html/body/div[1]/div/div[5]/div[3]/div[1]/div[3]/div/div[1]/div/div[1]/div/div/div/div[3]/div[2]/div[2]/div/button/span')
    signin: By = By.xpath('/html/body/div[1]/div/div[2]/div/div/div/div/header/div/h1')
    close: By = By.xpath('/html/body/div[1]/div/div[2]/div/div/div/div/div[2]/span')

    constructor() {
        super({url: "https://drop.com/mechanical-keyboards"})
    }

    async pageCon() {
        return this.getText(this.keysRes)
    }

    async keyArtPage() {
        this.click(this.keysArt)
    }

    async keystitle() {
        return this.getText(this.keysArtTitle)
    }

    async post() {
        return this.setInput(this.keysComm, 'so cool')
        this.click(this.keysPost)
    }
    
    async signFail(){
        return this.getText(this.signin)
    }

    async closeit() {
        this.click(this.close)
    }
}