---
sidebar_position: 2
---

# Callbacks vs Promises

En JavaScript, cuando necesitamos manejar tareas asincrónicas (peticiones a APIs, timers, operaciones en disco, etc.), tenemos varias herramientas:

1. **Callbacks:** el mecanismo más antiguo y básico.
2. **Promises:** una evolución más robusta que permite escribir código más legible.

## ¿Qué es un Callback?

Un **callback** es una función que se pasa como argumento a otra función y se ejecuta cuando la tarea ha terminado.

```ts showLineNumbers
function getData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Datos cargados");
  }, 2000);
}

getData((data) => {
  console.log(data); // "Datos cargados"
});
```

## Flujo asincrónico con Callbacks

Escenario base para callbacks.

```ts
console.log("Inicio");

setTimeout(() => {
  console.log("Callback ejecutado");
}, 2000);

console.log("Fin");
```

```txt
Inicio
Fin
Callback ejecutado
```

```mermaid
sequenceDiagram
    autonumber
    participant CS as Call Stack
    participant API as Web/Node APIs
    participant Q as Task Queue (Callbacks)
    participant EL as Event Loop

    Note over CS: Inicia ejecución del script
    CS->>CS: console.log("Inicio")
    CS->>API: setTimeout(callback, 2000)
    Note right of API: API registra el temporizador

    CS->>CS: console.log("Fin")
    Note over CS: Call Stack se vacía

    Note over API: Timer termina después de 2s
    API->>Q: Encola el callback en la Task Queue

    EL->>Q: Revisa si Call Stack está vacía
    Q-->>CS: Mueve el callback al Call Stack
    CS->>CS: Ejecuta el callback
    Note over CS: Se imprime "Callback ejecutado"
```

## Callback Hell

Cuando se encadenan muchos callbacks, el código se vuelve difícil de leer y mantener:

```ts showLineNumbers
loginUser("user", (user) => {
  getUserOrders(user, (orders) => {
    getOrderDetails(orders[0], (details) => {
      console.log(details);
    });
  });
});
```

Este patrón dificulta:

- **Mantenimiento:** pequeños cambios pueden romper toda la estructura.
- **Manejo de errores:** debes capturar errores en cada nivel.
- **Lectura:** el flujo lógico está invertido y fragmentado.

## ¿Qué es una Promise?

Una **Promise** es un objeto que representa un valor que estará disponible ahora, en el futuro o nunca. Puede estar en tres estados:

1. **Pending** (pendiente)
2. **Fulfilled** (resuelta correctamente)
3. **Rejected** (rechazada)

```ts showLineNumbers
const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Datos cargados");
  }, 2000);
});

promise
   .then((data) => console.log(data))
   .catch((err) => console.error(err));
```

También puedes ejecutar tareas en paralelo o en serie con métodos como:

- `Promise.all([p1, p2, p3])`
- `Promise.race([p1, p2])`
- `Promise.allSettled([p1, p2])`
- `Promise.any([p1, p2])`

## Flujo asincrónico con Promises

Ejemplo de código con Promises para el mismo escenario que antes:

```ts
console.log("Inicio");

Promise.resolve().then(() => {
  console.log("Microtarea de Promise");
});

console.log("Fin");
```

```txt
Inicio
Fin
Microtarea de Promise
```

```mermaid
sequenceDiagram
    autonumber
    participant CS as Call Stack
    participant API as Web/Node APIs
    participant Micro as Microtask Queue (Promises)
    participant EL as Event Loop

    Note over CS: Inicia ejecución del script
    CS->>CS: console.log("Inicio")
    CS->>API: Promise (ej. fetch())

    Note right of API: API realiza la tarea asincrónica

    CS->>CS: console.log("Fin")
    Note over CS: Call Stack se vacía

    Note over API: API resuelve/rechaza la Promise
    API->>Micro: Encola el .then/.catch en la Microtask Queue

    EL->>Micro: Revisa si Call Stack está vacía
    Micro-->>CS: Mueve la microtarea al Call Stack
    CS->>CS: Ejecuta callback .then/.catch
    Note over CS: Se procesa la Promesa resuelta
```

## Encadenamiento de Promesas (Promises Chaining)

Las Promises eliminan el **anidamiento profundo**, o el Callback Hell.

```ts showLineNumbers
loginUser("user")
  .then((user) => getUserOrders(user))
  .then((orders) => getOrderDetails(orders[0]))
  .then((details) => console.log(details))
  .catch((err) => console.error(err));
```

## Diferencias principales

|Característica|Callbacks|Promises|
|--|--|--|
|Legibilidad|Puede degradarse con múltiples niveles (callback hell)|Más lineal con `.then` y `.catch`|
|Manejo de errores|Debes manejar cada error manualmente en cada callback|`catch` captura errores de toda la cadena|
|Encadenamiento|Difícil|Nativo con `.then`|
|Estados intermedios|No|Pending, Fulfilled, Rejected|

![a](img/02_callback_hell_vs_promises_chain.png)

## Ejemplo técnico

Supongamos que tenemos que:

1. Autenticar al usuario.
2. Cargar su perfil.
3. Obtener notificaciones.

Usando solo callbacks llegaríamos al Callback Hell:

```ts showLineNumbers
loginUser("user", (user) => {
  loadProfile(user.id, (profile) => {
    getNotifications(profile.id, (notifications) => {
      console.log("Notificaciones:", notifications);
    });
  });
});
```

Pero, usando Promises, es mucho más claro y manejable.

```ts showLineNumbers
loginUser("user")
  .then(loadProfile)
  .then(getNotifications)
  .then((notifications) => console.log("Notificaciones:", notifications))
  .catch((err) => console.error("Error:", err));
```

## Aplicaciones

1. Llamadas a APIs REST o GraphQL.
2. Lectura de archivos en Node.js.
3. Flujo de autenticación (login → cargar datos de usuario → cargar permisos).

## Buenas prácticas al usar Promises

- Siempre maneja los errores con `.catch` o `try`/`catch`.
- Usa `Promise.all` si las tareas pueden ejecutarse en paralelo.
- Evita mezclar callbacks y Promises innecesariamente.
- Mantén las funciones pequeñas y de responsabilidad única.

## Referencias

- Flanagan, D. (2020). JavaScript: The Definitive Guide (7th ed.). O’Reilly Media.
- Mozilla Developer Network. (s.f.). [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).
- TypeScript Handbook. (s.f.). [Asynchronous Programming](https://www.typescriptlang.org/docs).
- Node.js Docs. (s.f.). [Timers](https://nodejs.org/api/timers.html).
- Singh, K. (2024). [6 JavaScript Callback Pitfalls I Faced and Fixed](https://blog.stackademic.com/6-javascript-callback-pitfalls-i-faced-and-fixed-8932e77fc1c0). Medium.
