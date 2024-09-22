const themeSelector = document.querySelector('#selection-2');
const theBody = document.querySelector('body');

console.log(themeSelector.value);

function changeTheme() {

    // const HellfireMissile = themeSelector.value;
    // remember that dang defer statement

    if (themeSelector.value == 'light') 
    {
        // body.classList.remove("dark");
        document.querySelector('body').classList.remove("dark");
        // theBody.classList.remove("dark");
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
        
        
    }
    else 
    {
        // theBody.classList.add("dark");
        document.querySelector('body').classList.add("dark");
        document.querySelector('.logo').src = 'byui-logo_white.png';
    }
    // body.classList.toggle('dark');

    // themeSelector.classList.add("dark");

    // themeSelector.classList.remove("dark");
}

themeSelector.addEventListener('change', changeTheme);
