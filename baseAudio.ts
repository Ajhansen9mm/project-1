import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Audio extends BasePage {
    audioRes: By = By.xpath('/html/body/div[1]/div/div[5]/div/div[1]/div[2]/div[1]/div')
    audioArt: By = By.xpath('/html/body/div[1]/div/div[5]/div/div[2]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div/a')
    audioTitle: By = By.xpath('/html/body/div[1]/div/div[5]/div[3]/div[1]/div[2]/div/div/div[3]/h1')
    audioComm: By = By.xpath('/html/body/div[1]/div/div[5]/div[3]/div[1]/div[3]/div/div[1]/div/div[1]/div/div/div/div[3]/div[2]/div/div/div[2]/div[1]/div')
    audioPost: By = By.xpath('/html/body/div[1]/div/div[5]/div[3]/div[1]/div[3]/div/div[1]/div/div[1]/div/div/div/div[3]/div[2]/div[2]/div/button/span')
    signin: By = By.xpath('/html/body/div[1]/div/div[2]/div/div/div/div/header/div/h1')
    close: By = By.xpath('/html/body/div[1]/div/div[2]/div/div/div/div/div[2]/span')

    constructor() {
        super({url: "https://drop.com/audiophile"})
    }

    async audioCon(){
        return this.getText(this.audioRes)
    }

    async audioArtPage() {
        this.click(this.audioArt)
    }

    async audiotitle() {
        return this.getText(this.audioTitle)
    }

    async post() {
        return this.setInput(this.audioComm, 'so cool')
        this.click(this.audioPost)
    }

    async signFail(){
        return this.getText(this.signin)
    }

    async closeit() {
        this.click(this.close)
    }


}