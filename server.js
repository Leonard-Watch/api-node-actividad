const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Repositorio de datos: un array de objetos en memoria.
let productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 75 }
];

// --- Endpoints de la API

// GET: Obtiene todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// POST: Crea un nuevo producto
app.post('/productos', (req, res) => {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// TAREA: Agregar un endpoint PUT para actualizar un producto.
// Deberá recibir el ID del producto y los nuevos datos en el body.
app.put('/productos/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = productos.findIndex(p => p.id === id);

    if (idx === -1) return res.status(404).send('Producto no encontrado');

    const { nombre, precio } = req.body;
    if (nombre !== undefined) productos[idx].nombre = nombre;
    if (precio !== undefined) productos[idx].precio = precio;

    res.json(productos[idx]);
});

// TAREA: Agregar un endpoint DELETE para eliminar un producto.
// Deberá recibir el ID del producto en los parámetros de la URL.
app.delete('/productos/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = productos.findIndex(p => p.id === id);

    if (idx === -1) return res.status(404).send('Producto no encontrado');

    const [eliminado] = productos.splice(idx, 1); // lo sacamos del array
    res.json(eliminado);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


