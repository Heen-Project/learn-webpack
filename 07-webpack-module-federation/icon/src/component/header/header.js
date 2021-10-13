import './header.scss'

class Header {
    render(pageName) {
        const h1 = document.createElement('h1')
        const body = document.querySelector('body')
        h1.innerHTML = `Learning Webpack. Currently on "${pageName}" page`
        body.appendChild(h1)
    }
}

export default Header