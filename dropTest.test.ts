import {Drop} from './baseDrop'
import {Audio} from './baseAudio'

const drop = new Drop()
const audio = new Audio()

test('keys community page', async() => {
    await drop.navigate()
    let res= drop.getText(drop.keysRes)
    expect(res).toContain('Keyboards')
})

test('keys article', async() => {
    await drop.click(drop.keysArt)
    let artit = drop.keystitle()
    expect(artit).toContain('keep em')
})

test('comment keys',async() => {
    await drop.post()
    let sign = drop.signFail()
    await drop.closeit()
    expect(sign).toContain('GET $10 OFF')
})

test('audio community page', async() =>{
    await audio.navigate()
    let aud = audio.audioCon()
    expect(aud).toContain('AUDIOPHILE')
})

test('audio article', async() =>{
    await audio.audioArtPage()
    let audtit = audio.audiotitle()
    expect(audtit).toContain('french awesomness')
})

test('comment audio', async() => {
    await audio.post()
    let sing = audio.signFail()
    await audio.closeit()
    expect(sing).toContain('GET $10 OFF')
})

afterAll(async() =>{
    await drop.driver.quit()
    await audio.driver.quit()
})