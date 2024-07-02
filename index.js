function randColor(){
   const letter = "1234567890ABCDEF"
    let color = "#"

    for (let i=0;i<6;i++){
        color = color + letter[Math.floor(Math.random()*12)];
        console.log(color)


    }

    return color
}

function colorGradient(){

    var col1 = randColor();
    var col2 = randColor();
    var angle = Math.floor(Math.random() * 360);
    console.log(angle)

    document.body.style.background = `linear-gradient(${angle}deg, ${col1}, ${col2})`;
}
