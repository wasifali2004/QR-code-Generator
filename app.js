const img = document.querySelector(".image");
const inp = document.querySelector("input");
const btn = document.querySelector(".btn");
const card = document.querySelector(".box");

async function generate(d) {
    
    const data = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(d);
    img.src = data;
    card.style.height = '400px';
    img.style.margin = '17px';
}

btn.addEventListener("click", () => {
    if(inp.value < 1) {
        console.log("Error!");
    }
    else {
        generate(inp.value);
    }
})