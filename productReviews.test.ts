import {ajDrop} from "./classObjects";
const drop = new ajDrop()

test('users can look at product reviews', async () => {
    await drop.navigate()
    await drop.click(drop.searchBtn) 
    await drop.click(drop.searchBar)
    await drop.setInput(drop.searchBar, 'headphones\n')
    await drop.click(drop.productTab)
    await drop.click(drop.itemOne)
    await drop.click(drop.reviewTab)
    await drop.driver.sleep(5000)
    await drop.driver.quit()



})