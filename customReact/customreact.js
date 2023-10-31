//Custom renderer needed two different arguments first whom to inject and second where to inject
function customRender(reactElement, container){
    /*
    //creating an element
    const domElement = document.createElement(reactElement.type)
    //creating children of the element
    domElement.innerHTML = reactElement.children
    //set attribute which we have assigned in the props section of the react element
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    //Here we are the child into the container which we have made in the main container 
    container.appendChild(domElement)
    */
    //Writing the more effective code if there are different numbers of attributes are present in the props section of the react element
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    //Here we taken the key name prop and iterating the props
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    } 
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)