import './header.scss'
import $ from 'jquery'

class Header {
    render(pageName) {
        const h1 = $('<h1>')
        const body = $('body')
        h1.text(`Learning Webpack. Currently on "${pageName}" page`)
        body.append(h1)
    }
}

export default Header