/*
    BOM [Browser Object Model]
    - stop()
    - print()
    - focus()
    - scrollTo(x, y || Options)
    - scroll(x, y || Options)
    - scrollBy(x, y || Options)
*/

// window.print();
// window.stop();

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// myNewWindow.focus();
// window.scrollTo(500, 200);

window.scrollTo({
    left: 1500,
    top: 1200,
    behavior: "smooth"
})