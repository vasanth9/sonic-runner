import kaplay from "kaplay";

const k = kaplay({
    width:1980,
    height:1020,
    letterbox: true,
    background: [0,0,0],
    global: false,   
    buttons:{
        jump:{
            keyboard:["space"],
            mouse:"left"
        }
    },
    touchToMouse: true,
    debugKey: "d",
    debug: true,
});

export default k;