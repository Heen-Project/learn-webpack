import HelloWorldButton from './component/hello-world-button/hello-world-button'
import Header from './component/header/header'
import _ from 'lodash'

const header = new Header()
header.render(_.upperFirst('Hello World'))

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()