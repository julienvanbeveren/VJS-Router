class Navigate extends HTMLElement {
    connectedCallback() {
        // this.innerHTML = `<h1>Hello World...</h1>`;
        // this.style.color = "red";
        const to = this.attributes.to.value
        this.addEventListener('click', () => {
            window.history.pushState({}, "", to)
            navigate()
        })
    }
}

class Route extends HTMLElement {
    connectedCallback() {
        
        
    }
}

window.addEventListener('load', () => {
    const routes = document.querySelectorAll('router-route')
    let routerStruct = {}
    routes.forEach(route => {
        // TODO: fix dynamic routing
        const page = route.getAttribute('target')
        const path = route.getAttribute('path')
        console.log(path)
        console.log(Array.from(path.matchAll(/{([^}]+)}/g), value => value[1]))

        const routeStruct = {
            page: route.attributes.target + '.html',
            path: route.attributes.path
        }
    })
})

function navigate() {
    // build navigation function
}

customElements.define('router-navigate', Navigate)
customElements.define('router-route', Route)