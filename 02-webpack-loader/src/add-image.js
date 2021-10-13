import Icon from './Icon.png'

const addImage = () => {
    const image = document.createElement('img')
    image.alt = 'icon'
    image.width = 50
    image.src = Icon
    const body = document.querySelector('body')
    body.appendChild(image)
}

export default addImage