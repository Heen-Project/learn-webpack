import Icon from './Icon.png'
import './icon-image.scss'

class IconImage {
    render() {
        const body = document.querySelector('body')
        const image = document.createElement('img')
        image.src = Icon
        image.alt = 'icon'
        image.classList.add('icon-image')
        body.appendChild(image)
    }
}

export default IconImage