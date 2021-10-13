import HelloWorldButton from './component/hello-world-button/hello-world-button'
import Header from './component/header/header'

const header = new Header()
header.render('Hello World')

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()