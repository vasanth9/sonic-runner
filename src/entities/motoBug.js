import k from "../kaplayCtx";
export function makeMotoBug(pos){
   return k.add([
        k.sprite("motobug",{anim:"run"}),
        k.anchor("center"),
        k.area({shape: new k.Rect(k.vec2(-5,0),32,32)}),
        k.scale(4),
        k.pos(pos),
        k.offscreen(),
        "enemy"
    ])
}