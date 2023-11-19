document.addEventListener('DOMContentLoaded', function() {
    mostrarProducto();
})

let productos = [
    {
        id: 1,
        img: './Imagen/Zapatos1.jpg',
        marca: 'Royal County Of Berkshire Polo Club',
        descripcion: 'Tenis Lifestyle Blanco-Negro Royal County of Berkshire Polo Club',
        precio: 99900
    },
    {
        id: 2,
        img: './Imagen/Zapatos2.jpg',
        marca: 'Royal County Of Berkshire Polo Club',
        descripcion: 'Tenis Lifestyle Blanco-Negro Royal County of Berkshire Polo Club',
        precio: 239900
    },
    {
        id: 3,
        img: './Imagen/Zapatos3.jpg',
        marca: 'Skechers',
        descripcion: 'Tenis Training Negro Skechers Dynamight',
        precio: 186900
    },
    {
        id: 4,
        img: './Imagen/Zapatos4.jpg',
        marca: 'Adidas Performance',
        descripcion: 'Tenis Running Gris-Plateado-Negro adidas Performance Response Runner',
        precio: 199900
    },
    {
        id: 5,
        img: './Imagen/Zapatos5.jpg',
        marca: 'Skechers',
        descripcion: 'Tenis Training Negro-Rosa-Blanco Skechers Dynamight 2.0',
        precio: 183900
    },
    {
        id: 6,
        img: './Imagen/Zapatos6.jpg',
        marca: 'Royal County Of Berkshire Polo Club',
        descripcion: 'Tenis Lifestyle Gris-Blanco Royal County of Berkshire Polo Club',
        precio: 89900
    },
    {
        id: 7,
        img: './Imagen/Zapatos7.jpg',
        marca: 'Royal County Of Berkshire Polo Club',
        descripcion: 'Tenis Lifestyle Negro-Blanco Royal County of Berkshire Polo Club',
        precio: 79900
    },
    {
        id: 8,
        img: './Imagen/Zapatos8.jpg',
        marca: 'Royal County Of Berkshire Polo Club',
        descripcion: 'Tenis Lifestyle Negro-Blanco-Lila Royal County of Berkshire Polo Club',
        precio: 89900
    },
    {
        id: 9,
        img: './Imagen/Zapatos9.jpg',
        marca: 'Royal County Of Berkshire Polo Club',
        descripcion: 'Tenis Lifestyle Blanco-Multicolor Royal County of Berkshire Polo Club',
        precio: 79900
    },
    {
        id: 10,
        img: './Imagen/Zapatos10.jpg',
        marca: 'Royal County Of Berkshire Polo Club',
        descripcion: 'Tenis Lifestyle Blanco-Oro Rosa Royal County of Berkshire Polo Club',
        precio: 79900
    },
    {
        id: 11,
        img: './Imagen/Zapatos11.jpg',
        marca: 'Skechers',
        descripcion: "Tenis Lifestyle Palo Rosa-Blanco Skechers D'Lites",
        precio: 307900
    },
    {
        id: 12,
        img: './Imagen/Zapatos12.jpg',
        marca: 'Adidas Performance',
        descripcion: 'Tenis Running Blanco-Gris adidas Performance Duramo RC',
        precio: 234900
    },
    {
        id: 13,
        img: './Imagen/Zapatos13.jpg',
        marca: 'Skechers',
        descripcion: 'Tenis Lifestyle Beige-Multicolor Skechers Uno Trail',
        precio: 342900
    },
    {
        id: 14,
        img: './Imagen/Zapatos14.jpg',
        marca: 'Skechers',
        descripcion: 'Tenis Training Negro-Blanco Skechers Skech-Lite Pro',
        precio: 207900
    },
    {
        id: 15,
        img: './Imagen/Zapatos15.jpg',
        marca: 'Adidas Performance',
        descripcion: 'Tenis Running Aguamarina-Blanco-Gris adidas Performance Galaxy 6',
        precio: 275900
    }
]

function formatoNumerico(numero) {
    if (typeof numero === 'number') {
        numero = numero.toString();
    }

    if (numero.length >= 4 && numero.length <= 9){
        const formatoActualizado = numero.split("");
        formatoActualizado.splice(-3, 0, ".");
        if (numero.length == 7 || numero.length == 8 || numero.length == 9){
            formatoActualizado.splice(-7, 0, ".");
        }
        return formatoActualizado.join("");
    }
}

function mostrarProducto() {
    const zapato = document.createDocumentFragment();

    productos.forEach((producto) => {
        const articulo = document.createElement('article');
        const primerDiv = document.createElement('div');
        const img = document.createElement('img')
        const span = document.createElement('span');
        const primerP = document.createElement('p');
        const segundoDiv = document.createElement('div');
        const segundaP = document.createElement('p');
        const boton = document.createElement('button');

        if (producto.id === 2 || producto.id === 3 || producto.id === 5) {
            img.classList.add('imgZapatos2');
        }else {
            img.classList.add('imgZapatos1');
        }
        primerP.classList.add('descZapato');
        segundoDiv.classList.add('footerArticulo');

        img.src = producto.img;
        span.textContent = producto.marca;
        primerP.textContent = producto.descripcion;
        segundaP.textContent = '$ ' + formatoNumerico(producto.precio);
        boton.textContent = 'Agregar al Carrito';

        primerDiv.appendChild(img);
        segundoDiv.appendChild(segundaP);
        segundoDiv.appendChild(boton);
        articulo.appendChild(primerDiv);
        articulo.appendChild(span);
        articulo.appendChild(primerP);
        articulo.appendChild(segundoDiv)
        zapato.appendChild(articulo)

        boton.addEventListener('click', () => {
            prepararCarrito(producto);
        })
    })

    document.getElementById('productos').appendChild(zapato);
}

let historialProductos = [];

function prepararCarrito(producto) {
    const registro = historialProductos.find(elemento => elemento.id === producto.id);

    if (!registro) {
        historialProductos.push({ ...producto, cantidad: 1, precioTotal: producto.precio});
    }else {
        registro.cantidad += 1;
        registro.precioTotal += registro.precio;
    }
    document.getElementById("listaProductos").innerHTML = "";
    agregarAlCarrito();
}
historialProductos = [];

function agregarAlCarrito() {console.log('si entro a la funcion')
    const carrito = document.createDocumentFragment();

    historialProductos.forEach((elemento, i) => {
        const fila = document.createElement('tr');
        const imgContenedor = document.createElement('td');
        const img = document.createElement('img');
        const marca = document.createElement('td');
        const precio = document.createElement('td');
        const cantidad = document.createElement('td');
        const botonEliminar = document.createElement('button');
        const parteSuperior = document.createElement('div');
        const parteInferior = document.createElement('div');

        imgContenedor.classList.add('imgContenedor')
        img.classList.add('imgProducto')
        marca.classList.add('marca')
        precio.classList.add('divicion');
        botonEliminar.classList.add('eliminar')
        parteInferior.classList.add('precioUnitario');

        img.src = elemento.img;
        marca.textContent = elemento.marca;
        if (elemento.cantidad > 1) {
            parteSuperior.textContent = formatoNumerico(elemento.precioTotal);
            parteInferior.textContent = formatoNumerico(elemento.precio);
        }else {
            parteSuperior.textContent = formatoNumerico(elemento.precioTotal);
        }
        cantidad.textContent = elemento.cantidad;
        botonEliminar.textContent = 'X';

        precio.appendChild(parteSuperior);
        precio.appendChild(parteInferior);
        imgContenedor.appendChild(img);
        fila.appendChild(imgContenedor);
        fila.appendChild(marca);
        fila.appendChild(precio);
        fila.appendChild(cantidad);
        fila.appendChild(botonEliminar);
        carrito.appendChild(fila);

        document.getElementById('listaProductos').appendChild(carrito);

        botonEliminar.addEventListener('click', () => {
            if (elemento.cantidad > 1) {
                elemento.cantidad -= 1;
                elemento.precioTotal -= elemento.precio;

                document.getElementById("listaProductos").innerHTML = '';
                agregarAlCarrito()
            }else {
                historialProductos.splice(i, 1);

                document.getElementById("listaProductos").innerHTML = '';
                agregarAlCarrito()
            }
        })
        valorTotal(elemento)
    })
}

function valorTotal() {
    let valorDeLaCompra = 0;

    if(historialProductos.length) {
        for (let i = 0; i < historialProductos.length; i += 1) {
        valorDeLaCompra += historialProductos[i].precioTotal
        }
    }

    if(historialProductos.length) {
        document.getElementById('valorDeTodo').textContent = formatoNumerico(valorDeLaCompra);
    }else {
        document.getElementById('valorDeTodo').textContent = '0';
    }
    
}

function vaciarCarrito() {
    historialProductos = [];
    document.getElementById("listaProductos").innerHTML = '';
    agregarAlCarrito();
    valorTotal()
}