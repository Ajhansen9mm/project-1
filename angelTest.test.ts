import {AngelPage} from './angelPageObject'
import { testEnvironment } from './jest.config'
const angel = new AngelPage()

test('log in', async () => {
    await angel.navigate()
    await angel.click(angel.login)
    await angel.setInput(angel.userName, 'toangelc@yahoo.com.tw')
    await angel.setInput(angel.password, '1029')
    await angel.click(angel.loginBtn)
    
})

test('sign up', async () => {
    await angel.navigate()
    await angel.click(angel.signUp)
    await angel.setInput(angel.Email, 'angel@needake.com')
    await angel.setInput(angel.password, '1029')
    await angel.click(angel.continue)

})

test('forgot password', async () => {
    await angel.navigate()
    await angel.click(angel.login)
    await angel.setInput(angel.userName, 'toangelc@yahoo.com.tw')
    await angel.setInput(angel.password, '5555')
    await angel.click(angel.loginBtn) 
    await angel.click(angel.forgotPassword)
    await angel.setInput(angel.userName, 'toangelc@yahoo.com.tw')
    await angel.click(angel.sendResetLink)
    await angel.click(angel.close)
    await angel.driver.sleep(40000)
    await angel.driver.quit()
})