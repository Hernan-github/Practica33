function validarAnagrama(){
    const palabra1 = document.getElementById("palabra1").value.toLowerCase().replace(/\s/g, '');
    const palabra2 = document.getElementById("palabra2").value.toLowerCase().replace(/\s/g, '');

    const sorted1 = palabra1.split('').sort().join('');
    const sorted2 = palabra2.split('').sort().join('');
    if (sorted1 === sorted2) {
        alert("SI");
    } else {
        alert("NO");
    }
    
}

function crearBurbuja() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Tamaño aleatorio
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Posición horizontal aleatoria
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // Duración aleatoria
    bubble.style.animationDuration = (Math.random() * 5 + 3) + "s";

    document.getElementById("bubbles").appendChild(bubble);

    // Eliminar burbuja después de animación
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(crearBurbuja, 200); 
