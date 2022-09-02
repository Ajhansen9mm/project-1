import {ajDrop} from "./classObjects";
const drop = new ajDrop()

test('Can users view and interact with polls', async () => {
    await drop.navigate()
    await drop.click(drop.searchBtn) 
    await drop.click(drop.searchBar)
    await drop.setInput(drop.searchBar, 'headphones\n')
    await drop.click(drop.pollsTab)
    await drop.click(drop.pollsCard)
    await drop.click(drop.pollsCard)
    await drop.driver.sleep(5000)
    await drop.driver.quit()
    
})