import Header from './component/header/header'
import IconImage from './component/icon-image/icon-image'
import _ from 'lodash'

const header = new Header()
header.render(_.upperFirst('Icon'))

const iconImage = new IconImage()
iconImage.render()