import Header from '../header/header'
import IconImage from '../icon-image/icon-image'

class IconPage {
    render() {
        const header = new Header()
        header.render('Icon')
        
        const iconImage = new IconImage()
        iconImage.render()
    }
}

export default IconPage