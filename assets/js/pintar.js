
/* FUNCIÓN PARA CAMBIAR DE BACKGROUND COLOR DE UN DIV POR SU NOMBRE*/
function pintar(id, color) {
    element = document.getElementById(id)
    element.style.backgroundColor = color
    element.style.color = "white"
}

/* CARGAR COLOR POR DEFECTO EN VERDE*/
const defaulColor = pintar("ele1", "green")
