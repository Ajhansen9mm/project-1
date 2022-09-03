import {AngelPage} from './angelPageObject'
import { testEnvironment } from './jest.config'
const angel = new AngelPage()

   
test('log in', async () => {
    await angel.navigate()
    await angel.click(angel.login)
    await angel.setInput(angel.userName, 'toangelc@yahoo.com.tw')
    await angel.setInput(angel.password, '1029')
    await angel.driver.sleep(1000);
    angel.driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('logIn.screenshot.png', image, 'base64')
        });
    await angel.click(angel.loginBtn)
        
})

test('sign up', async () => {
    await angel.navigate()
    await angel.click(angel.signUp)
    await angel.setInput(angel.Email, 'angel@needake.com')
    await angel.setInput(angel.password, '1029')
    await angel.driver.sleep(1000);
    angel.driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('signUp.screenshot.png', image, 'base64')
        });
    await angel.click(angel.continue)
    })

test('forgot password', async () => {
    await angel.navigate()
    await angel.click(angel.login)
    await angel.setInput(angel.userName, 'toangelc@yahoo.com.tw')
    await angel.setInput(angel.password, '5555')
    await angel.click(angel.loginBtn) 
    await angel.click(angel.forgotPassword)
    await angel.click(angel.sendResetLink)
    await angel.driver.sleep(1000);
    angel.driver.takeScreenshot().then(
        function (image) {
            require('fs').writeFileSync('resetLinkSent.screenshot.png', image, 'base64')
        });
    await angel.click(angel.close)
    await angel.driver.quit()
})