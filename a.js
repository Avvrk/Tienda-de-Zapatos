// // Creamos un diccionario vacío para almacenar los nombres y el número de faltas cometidas
// let alumnos = {};

// // Pedimos el nombre del alumno que ha hablado
// let nombre = prompt("Ingrese el nombre del alumno que ha hablado (0 para salir):");

// // Mientras el nombre sea diferente de '0', continuamos registrando las faltas
// while (nombre !== '0') {
// // Verificamos si el alumno ya tiene faltas registradas
// if (nombre in alumnos) {
// // Incrementamos el número de faltas del alumno en 1
// alumnos[nombre] += 1;
// } else {
// // Creamos una nueva entrada en el diccionario para el alumno con una falta inicial
// alumnos[nombre] = 1;
// }

// // Pedimos el nombre del siguiente alumno que ha hablado
// nombre = prompt("Ingrese el nombre del alumno que ha hablado (0 para salir):");
// }

// // Mostramos el listado de alumnos que han hablado
// console.log("LISTADO DE ALUMNOS QUE HAN ABIERTO LA BOCA");
// for (let alumno in alumnos) {
// console.log(alumno + " | ".repeat(alumnos[alumno]));
// }


// let productos = [
//     {
//         id: 1,
//         img: './Imagen/Zapatos1.jpg',
//         marca: 'Royal County Of Berkshire Polo Club',
//         descripcion: 'Tenis Lifestyle Blanco-Negro Royal County of Berkshire Polo Club',
//         precio: 99900
//     },
//     {
//         id: 2,
//         img: './Imagen/Zapatos2.jpg',
//         marca: 'Royal County Of Berkshire Polo Club',
//         descripcion: 'Tenis Lifestyle Blanco-Negro Royal County of Berkshire Polo Club',
//         precio: 239900
//     },
//     {
//         id: 3,
//         img: './Imagen/Zapatos3.jpg',
//         marca: 'Skechers',
//         descripcion: 'Tenis Training Negro Skechers Dynamight',
//         precio: 186900
//     },
//     {
//         id: 4,
//         img: './Imagen/Zapatos4.jpg',
//         marca: 'Adidas Performance',
//         descripcion: 'Tenis Running Gris-Plateado-Negro adidas Performance Response Runner',
//         precio: 199900
//     },
//     {
//         id: 5,
//         img: './Imagen/Zapatos5.jpg',
//         marca: 'Skechers',
//         descripcion: 'Tenis Training Negro-Rosa-Blanco Skechers Dynamight 2.0',
//         precio: 183900
//     },
//     {
//         id: 6,
//         img: './Imagen/Zapatos6.jpg',
//         marca: 'Royal County Of Berkshire Polo Club',
//         descripcion: 'Tenis Lifestyle Gris-Blanco Royal County of Berkshire Polo Club',
//         precio: 89900
//     },
//     {
//         id: 7,
//         img: './Imagen/Zapatos7.jpg',
//         marca: 'Royal County Of Berkshire Polo Club',
//         descripcion: 'Tenis Lifestyle Negro-Blanco Royal County of Berkshire Polo Club',
//         precio: 79900
//     },
//     {
//         id: 8,
//         img: './Imagen/Zapatos8.jpg',
//         marca: 'Royal County Of Berkshire Polo Club',
//         descripcion: 'Tenis Lifestyle Negro-Blanco-Lila Royal County of Berkshire Polo Club',
//         precio: 89900
//     },
//     {
//         id: 9,
//         img: './Imagen/Zapatos9.jpg',
//         marca: 'Royal County Of Berkshire Polo Club',
//         descripcion: 'Tenis Lifestyle Blanco-Multicolor Royal County of Berkshire Polo Club',
//         precio: 79900
//     },
//     {
//         id: 10,
//         img: './Imagen/Zapatos10.jpg',
//         marca: 'Royal County Of Berkshire Polo Club',
//         descripcion: 'Tenis Lifestyle Blanco-Oro Rosa Royal County of Berkshire Polo Club',
//         precio: 79900
//     },
//     {
//         id: 11,
//         img: './Imagen/Zapatos11.jpg',
//         marca: 'Skechers',
//         descripcion: "Tenis Lifestyle Palo Rosa-Blanco Skechers D'Lites",
//         precio: 307900
//     },
//     {
//         id: 12,
//         img: './Imagen/Zapatos12.jpg',
//         marca: 'Adidas Performance',
//         descripcion: 'Tenis Running Blanco-Gris adidas Performance Duramo RC',
//         precio: 234900
//     },
//     {
//         id: 13,
//         img: './Imagen/Zapatos13.jpg',
//         marca: 'Skechers',
//         descripcion: 'Tenis Lifestyle Beige-Multicolor Skechers Uno Trail',
//         precio: 342900
//     },
//     {
//         id: 14,
//         img: './Imagen/Zapatos14.jpg',
//         marca: 'Skechers',
//         descripcion: 'Tenis Training Negro-Blanco Skechers Skech-Lite Pro',
//         precio: 207900
//     },
//     {
//         id: 15,
//         img: './Imagen/Zapatos15.jpg',
//         marca: 'Adidas Performance',
//         descripcion: 'Tenis Running Aguamarina-Blanco-Gris adidas Performance Galaxy 6',
//         precio: 275900
//     }
// ]


// let prueba = [];

// prueba.push(productos[3]);
// prueba.push(productos[3]);
// prueba.push(productos[2]);
// prueba.push(productos[3]);
// prueba.push(productos[1]);
// prueba.push(productos[0]);
// prueba.push(productos[0]);

// let repetido = prueba.filter(item => item.id ==5)

// console.log(repetido)

// console.log(prueba.length)

if (hProductos.filter(item => item.id == obProducto.id).length >= 2) {
    let carritoExistente = document.querySelector(`#aggProducto #${obProducto.id}`);

    if (carritoExistente) {
        let span3 = carritoExistente.querySelector('.precioSecundario');
        span3.textContent = hProductos.filter(item => item.id == obProducto.id).length;
        estaRepetido = true;
    }

    // Resto de tu lógica
    // ...
}
