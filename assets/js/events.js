/* DEFINICIÓN DE VARIABLES JUNTO A SU COLOR Y COLOR POR DEFECTO*/
let red = "red"
let yellow = "yellow"
let green = "green"
let color = red
/* IMPRIMIR COLOR INICIAL */
console.info('default color: ', color)

/* FUNCIÓN QUE PERMITE CAMBIAR EL COLOR SELECCIONADO ESCUCHANDO EL TECLADO*/
function changeColor(event){
    console.info('event.key: ', event.key)
    if (event.key === 'a') {
        color = red
    } else if (event.key === 's') {
        color = yellow
    } else {
        color = green
    }
    console.info('color: ', color)
}
/* SE AGREGUE ESCUCHA DE EVENTO AL DOCUMENTO */
document.addEventListener('keydown', changeColor)

/* FUNCIÓN QUE PERMITE CAMBIAR EL COLOR DE UN DIV SEGÚN EL COLOR SELECCIONADO HACIENDO CLICK */
function changeDivColor(div){
    console.info('color: ', color)
    console.info('div.id: ', div.id)
    div.style.backgroundColor = color
}
