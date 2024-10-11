/*
    BOM [Browser Object Model]
    - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt],
        Hestory Reap..)
    - close()
    - Window Features
    --- width [Num]
    --- height [Num]
    --- left [Num]
    --- top [NUM]

    Search
    - Window.Open Window Features
*/


setTimeout(function () {
    window.open("https://google.com", "_blank", "width=400,height=400,top=100,left=100");
}, 2000);