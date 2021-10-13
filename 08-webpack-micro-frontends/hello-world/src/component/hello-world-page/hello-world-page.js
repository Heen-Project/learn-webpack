import HelloWorldButton from '../hello-world-button/hello-world-button'
import Header from '../header/header'

class HelloWorldPage {
    render() {
        const header = new Header()
        header.render('Hello World')
        
        const helloWorldButton = new HelloWorldButton()
        helloWorldButton.render()
    }
}

export default HelloWorldPage