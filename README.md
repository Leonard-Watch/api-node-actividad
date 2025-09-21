# api-node-actividad
Repositorio para los que deseen realizar la actividad de APIs con node/express

# API de Node.js (Express) 

Esta es la plantilla base para la tarea de la clase. Tu objetivo es completar los endpoints `PUT` y `DELETE` para gestionar la lista de productos.

## Guía de Inicio

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/api-nodejs-actividad.git](https://github.com/TU_USUARIO/api-nodejs-actividad.git)
    cd api-nodejs-actividad
    ```
    (Reemplaza TU_USUARIO con tu nombre de usuario de GitHub).

2.  **Instalar dependencias:**
    Asegúrate de tener Node.js instalado y ejecuta:
    ```bash
    npm install
    ```

3.  **Ejecutar la API:**
    ```bash
    node server.js
    ```
    La API se ejecutará en http://localhost:3000.

## Tarea

Completa la lógica de los siguientes endpoints en el archivo `server.js`:

* **PUT /productos/:id:** Actualiza un producto existente por su ID.
* **DELETE /productos/:id:** Elimina un producto por su ID.

Una vez terminada la tarea, sube tu código a un nuevo repositorio en tu propia cuenta de GitHub y envía el enlace.

**Actualizar PUT** Verificar en git bash.
curl -X PUT http://localhost:3000/productos/2 \
     -H "Content-Type: application/json" \
     -d '{"precio":30}'

**Delete** Verificar en git bash.
curl -X DELETE http://localhost:3000/productos/3

