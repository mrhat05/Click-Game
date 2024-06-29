let v='9999'
let vr
v=parseInt(v)
console.log(typeof(v))
if(v<1000)return `${v}`
else if(v>=1000 && v<1000000){
    for (let i = 0; i < 3; i++){
        v/=10
    }
    vr=Math.round(v)
    return`${vr}`
}
else{
    for (let i = 0; i < 6; i++){
        v/=10
    }
    vr=Math.round(v)
    return`${vr}`

}
