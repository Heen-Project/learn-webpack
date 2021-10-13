import NavigationBar from './component/navigation-bar/navigation-bar.js'

const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'Hello World Page'
    },
    {
        url: '/icon-page',
        title: 'Icon Page'
    }
]

const navigationBar = new NavigationBar()
navigationBar.render(navigationItems)

const url = window.location.pathname

if (url === '/hello-world-page'){
    import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
        const HelloWorldPage = HelloWorldPageModule.default
        const helloWorldPage = new HelloWorldPage()
        helloWorldPage.render()
    })
} else if (url === '/icon-page') {
    import('IconApp/IconPage').then(IconPageModule => {
        const IconPage = IconPageModule.default
        const iconPage = new IconPage()
        iconPage.render()
    })
}