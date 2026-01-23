// function CustomRender(reactElement, maincontainer){
//     //render function : insert reactelemnt inside main container
//         const DomElement= document.createElement(reactElement.type) //a
//         DomElement.innerHTML= reactElement.children
//         DomElement.setAttribute('href',reactElement.props.href)
//         DomElement.setAttribute('target',reactElement.props.target)
//         maincontainer.appendChild(DomElement)
// }

function CustomRender(reactElement, maincontainer){
        const DomElement= document.createElement(reactElement.type) //a
        //set attributes from props
        for(const prop in reactElement.props){
            DomElement.setAttribute(prop,reactElement.props[prop])
        }

        maincontainer.appendChild(DomElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target : '_blank'
    },
    children:"click me to visit google"
};


const maincontainer= document.getElementById('root')

CustomRender(reactElement,maincontainer);

