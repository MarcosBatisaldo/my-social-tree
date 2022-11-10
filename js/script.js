const inputContainer = document.getElementById("chk-dark")
const rootElement = document.documentElement
const lightTheme = {
    '--light-blue': '#add8e6',
    '--button-bg': '#73f2f734',
    '--hover-color': '#ffffff8a',
    '--background-color': '45deg, #0093E9 0%, #80D0C7 100%',
    '--text-color': '#000000',
}

const darkTheme = {
    '--light-blue': '#add8e6',
    '--button-bg': '#73f2f734',
    '--hover-color': '#ffffff8a',
    '--background-color': '45deg, rgba(0,0,0,1) 0%, rgba(35,35,35,1) 55%',
    '--text-color': '#ffffff',
}

inputContainer.addEventListener('change', function(){
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
    
})

function changeTheme(theme) {
    for (let prop in theme){
        changeProperty(prop, theme[prop])
        console.log(prop, theme[prop])
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property,value)
}