import Header from './component/header/header'
import IconImage from './component/icon-image/icon-image'

const header = new Header()
header.render('Icon')

const iconImage = new IconImage()
iconImage.render()

import('HelloWorldApp/HelloWorldButton')
    .then(HelloWorldButtonModule => {
        const HelloWorldButton = HelloWorldButtonModule.default
        const helloWorldButton = new HelloWorldButton()
        helloWorldButton.render()
    })

