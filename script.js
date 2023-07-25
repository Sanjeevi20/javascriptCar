function white(){
    document.getElementById("imd").setAttribute("src",'./white.jpg')
}

function yellow(){
    document.getElementById("imd").setAttribute("src",'./yellow.jpg')
}

function black(){
    document.getElementById("imd").setAttribute("src",'./black.jpg')
}

const clk1=document.querySelector("#clk");
clk1.addEventListener("click",function(){
    clk1.textContent="Added to cart";
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
})
