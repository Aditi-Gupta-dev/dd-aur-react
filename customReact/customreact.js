const reactElement={
    type:'a',
    proprs:{
        href:'https:google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
const mainContainer=document.querySelector('#root');

CustomRender(reactElement,mainContainer)