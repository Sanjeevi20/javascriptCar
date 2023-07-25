function white(){
    document.getElementById("imd").setAttribute("src",'https://img.gaadicdn.com/images/car-images/930x620/Audi/Audi-R8/2391/1549274593297/Audi-R8_Ibis-white_9c9e91.jpg')
}

function yellow(){
    document.getElementById("imd").setAttribute("src",'https://img.gaadicdn.com/images/car-images/930x620/Audi/Audi-R8/2391/1549274593297/Audi-R8_Vegas-yellow_ae8b31.jpg')
}

function black(){
    document.getElementById("imd").setAttribute("src",'https://img.gaadicdn.com/images/car-images/930x620/Audi/Audi-R8/2391/1549274593297/Audi-R8_Mythos-black,-metallic_272729.jpg')
}

const clk1=document.querySelector("#clk");
clk1.addEventListener("click",function(){
    clk1.textContent="Added to cart";
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
})
