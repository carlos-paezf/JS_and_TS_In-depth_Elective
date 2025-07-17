---
sidebar_position: 12
---

# Ejercicios propuesto por tema

## let, const, y diferencias con var

### Reto 1: "¿Quién puede cambiar?"

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos
*Participantes:* Individual

*Enunciado:* Declara tres variables para representar la edad de una persona usando `var`, `let` y `const`. Luego intenta modificar su valor. Observa el comportamiento de cada tipo de declaración.

*Resultado esperado:* El código debe demostrar claramente cuál de las variables puede modificarse y cuál lanza error. Ejemplo:

```js
var edad1 = 25;
let edad2 = 30;
const edad3 = 35;

edad1 = 26;
edad2 = 31;
edad3 = 36; // Error
```

*Pistas o ayudas:* Recuerda que `const` define una constante que no puede cambiar su valor.

### Reto 2: "¡Cuidado con el hoisting!"

*Nivel:* Medio

*Tiempo estimado de resolución:* 15 minutos
*Participantes:* Individual

*Enunciado:* Escribe un bloque de código donde declares una variable con `var` y otra con `let` dentro de una función. Intenta acceder a las variables antes de su declaración.

*Resultado esperado:* El código debe mostrar cómo el hoisting afecta a `var` y `let`, reflejando un `undefined` o un error. Ejemplo:

```js
function testScope() {
  console.log(a); // undefined
  console.log(b); // ReferenceError
  var a = 1;
  let b = 2;
}
```

*Pistas o ayudas:*

- JavaScript "mueve" las declaraciones `var` al inicio, pero no sus inicializaciones.
- Las variables `let` y `const` se encuentran en "zona muerta temporal".

### Reto 3: "Área restringida"

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* En parejas

*Enunciado:* Crea una función que reciba un número y retorne si es par o impar. Declara una variable auxiliar dentro del `if` usando `var`, y en otro bloque usa `let`. Analiza cuál variable es visible fuera del bloque.

*Resultado esperado:* Diferencia clara entre el comportamiento de `var` (visible fuera del bloque) y `let` (solo dentro del bloque).

*Pistas o ayudas:*

- Prueba imprimir las variables fuera del `if` o `else`.
- Usa bloques `{}` para delimitar mejor el alcance.

### Reto 4: "¡Congela tus datos!"

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* Individual

*Enunciado:* Declara un objeto con `const` y luego intenta modificar uno de sus atributos. Luego intenta reasignar completamente el objeto. Explica los resultados.

*Resultado esperado:*

- Se permite modificar las propiedades del objeto.
- No se permite reasignar el objeto completo.

Ejemplo:

```js
const persona = { nombre: "Ana", edad: 22 };
persona.edad = 23; // OK
persona = { nombre: "Luis", edad: 30 }; // Error
```

*Pistas o ayudas:*

- `const` evita la reasignación, no la modificación interna de objetos.
- Para evitar modificaciones internas, investiga `Object.freeze()`.

### Reto 5: "Simulando un formulario"

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* En grupo

*Enunciado:* Simula un formulario web que recibe nombre, edad y correo electrónico. Declara variables adecuadas para cada dato, elige entre `let` y `const` justificando tu elección. Luego, simula cambios en los datos por parte del usuario y explica qué datos deben permanecer constantes y cuáles pueden cambiar.

*Resultado esperado:* Un programa que use correctamente let para variables que pueden cambiar y const para referencias estables. Ejemplo (simplificado):

```js
const form = {};
let nombre = "Ana";
let edad = 25;
let correo = "<ana@mail.com>";

// Usuario cambia nombre y edad
nombre = "Laura";
edad = 26;
```

*Pistas o ayudas:*

- Reflexiona qué datos nunca cambian y cuáles sí.
- Justifica el uso de `let` o `const` según el ciclo de vida del dato.

## Arrow functions y contexto del this

### Reto 1: "Tu primera flecha"

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos

*Participantes:* Individual

*Enunciado:* Convierte una función tradicional que suma dos números en una arrow function.

*Resultado esperado:* El código debe funcionar correctamente con la sintaxis de flecha:

```js
const suma = (a, b) => a + b;
console.log(suma(3, 5)); // 8
```

*Pistas o ayudas:*

- Las arrow functions no requieren `return` explícito si es una línea.
- No uses llaves `{}` si el cuerpo de la función es una sola expresión.

### Reto 2: "¿Quién es this?"

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Crea un objeto reloj con un método tradicional que muestre la hora usando `setInterval`. Luego, reescribe el método usando arrow function y analiza el resultado.

*Resultado esperado:* El primer ejemplo no accederá correctamente al `this`.hora, pero el segundo sí lo hará porque las arrow functions no reescriben el `this`.

```js
const reloj = {
  hora: 12,
  iniciar: function () {
    setInterval(() => {
      console.log("Hora actual:", this.hora);
    }, 1000);
  }
};
```

*Pistas o ayudas:*

- Las arrow functions heredan el `this` del contexto donde fueron creadas.
- Usa `console.log(this)` dentro de ambos métodos para comparar.

### Reto 3: "Filtrando favoritos"

*Nivel:* Medio

*Tiempo estimado de resolución:* 15 minutos

*Participantes:* En parejas

*Enunciado:* Dado un array de objetos con películas, filtra solo las que tengan más de 8 puntos de calificación usando arrow functions.

*Resultado esperado:* Un nuevo array con películas que cumplen la condición. Ejemplo:

```js
const peliculas = [
  { titulo: "Inception", puntuacion: 9 },
  { titulo: "Avatar", puntuacion: 7 }
];

const favoritas = peliculas.filter(p => p.puntuacion > 8);
// [{ titulo: "Inception", puntuacion: 9 }]
```

*Pistas o ayudas:*

- Usa `.filter()` con una arrow function como parámetro.
- No uses return si es una condición simple.

### Reto 4: "Comparando contextos"

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* Individual

*Enunciado:* Crea un objeto con un método llamado `mostrarNombre`, que declare una función interna para mostrar el nombre. Hazlo con una función tradicional y luego con una arrow function.

*Resultado esperado:* Solo el segundo ejemplo con arrow function accede correctamente al `this.nombre`.

```js
const persona = {
  nombre: "Luis",
  mostrarNombre: function () {
    const imprimir = () => {
      console.log("Nombre:", this.nombre);
    };
    imprimir();
  }
};
```

*Pistas o ayudas:*

- Recuerda que this en funciones tradicionales depende de cómo se llama la fu- , no de dónde está.
- Las arrow functions heredan this del entorno externo.

### Reto 5: "Mi equipo favorito"

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* En grupo

*Enunciado:* Crea una clase `Equipo` que contenga el nombre del equipo y un arreglo de jugadores. Implementa un método `listarJugadores()` que imprima el nombre del equipo junto con cada jugador. Usa `forEach` y arrow functions para evitar errores con `this`.

*Resultado esperado:* El método imprime correctamente el nombre del equipo y los jugadores, sin errores de contexto.

```js
class Equipo {
  constructor(nombre, jugadores) {
    this.nombre = nombre;
    this.jugadores = jugadores;
  }

  listarJugadores() {
    this.jugadores.forEach(j => {
      console.log(`${this.nombre} - ${j}`);
    });
  }
}
```

*Pistas o ayudas:*

- Intenta hacerlo primero con una función tradicional y observa el error con `this`.
- Luego usa arrow functions para corregirlo.

## Destructuring (arrays y objetos)

### Reto 1: “Intercambio Express”

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos

*Participantes:* Individual

*Enunciado:* Usa destructuring para intercambiar los valores de dos variables `a = 10` y `b = 20`, sin usar una variable temporal.

*Resultado esperado:* Debe mostrar:

```js
a = 20
b = 10
```

*Pistas o ayudas:*

- Recuerda que puedes desestructurar arrays de esta forma: `[x, y] = [y, x];`

### Reto 2: “¡Dame los datos!”

*Nivel:* Medio

*Tiempo estimado de resolución:* 15 minutos

*Participantes:* En parejas

*Enunciado:* Dado un objeto:

```js
const persona = { nombre: "Carlos", edad: 28, ciudad: "Bogotá" };
```

Extrae los valores nombre y ciudad en variables independientes usando destructuring. Luego imprime una frase como:

`Carlos vive en Bogotá.`

*Resultado esperado:* Frase construida con las variables extraídas.

```js
const { nombre, ciudad } = persona;
console.log(`${nombre} vive en ${ciudad}.`);
```

*Pistas o ayudas:*

- Usa `{}` para desestructurar objetos.
- Puedes extraer solo las propiedades que necesitas.

### Reto 3: “Top 3 jugadores”

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Tienes un arreglo con los nombres de los 5 mejores jugadores:

```js
const jugadores = ["Messi", "Mbappé", "Haaland", "Modric", "Salah"];
```

Extrae los tres primeros usando destructuring y almacénalos en variables individuales. Luego imprime una frase tipo:

`El primero es Messi, seguido por Mbappé y Haaland.`

*Resultado esperado:*

```js
const [primero, segundo, tercero] = jugadores;
console.log(`El primero es ${primero}, seguido por ${segundo} y ${tercero}.`);
```

*Pistas o ayudas:*

- Usa `[]` para desestructurar arrays.
- El orden de los elementos es importante.

### Reto 4: “Combinando datos”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* En grupo

*Enunciado:* Dado el siguiente objeto anidado:

```js
const usuario = {
  id: 1,
  perfil: {
    nombre: "Lucía",
    contacto: {
      correo: "<lucia@example.com>",
      telefono: "123456789"
    }
  }
};
```

Extrae en variables independientes: nombre, correo y telefono, usando destructuring anidado.

*Resultado esperado:*

```js
const { perfil: { nombre, contacto: { correo, telefono } } } = usuario;
console.log(nombre, correo, telefono);
```

*Pistas o ayudas:*

- Puedes hacer destructuring dentro de destructuring.
- La sintaxis puede parecer compleja, pero sigue la estructura del objeto.

### Reto 5: “Configuración flexible”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* Individual

*Enunciado:* Crea una función que reciba un objeto con configuración:

```js
const config = { modo: "oscuro", idioma: "es", notificaciones: true };
```

Usa destructuring con valores por defecto dentro del parámetro de la función. Luego imprime un resumen de la configuración.

*Resultado esperado:* La función debe imprimir algo como:

`Modo: oscuro, Idioma: es, Notificaciones: activadas.`

Incluso si se omiten algunas propiedades:

```js
mostrarConfig({ modo: "claro" });
// Modo: claro, Idioma: en, Notificaciones: desactivadas.
```

*Pistas o ayudas:*

- Usa destructuring en los parámetros de la función.
- Usa valores por defecto como `{ idioma = 'en', notificaciones = false }`.

## Operador spread y rest

### Reto 1: “Un nuevo comienzo”

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos

*Participantes:* Individual

*Enunciado:* Tienes el siguiente array:

```js
const numerosOriginales = [1, 2, 3];
```

Crea una nueva lista `nuevosNumeros` que incluya los elementos de `numerosOriginales` seguidos por `4, 5, 6`, sin modificar el array original.

*Resultado esperado:*

```js
[1, 2, 3, 4, 5, 6]
```

*Pistas o ayudas:*

- Usa el operador spread para copiar el contenido del array original.
- No uses `.push()` directamente sobre el array original.

### Reto 2: “Bienvenidos al evento”

*Nivel:* Medio

*Tiempo estimado de resolución:* 15 minutos

*Participantes:* En parejas

*Enunciado:* Tienes dos arrays con listas de invitados:

```js
const invitadosVIP = ["Ana", "Luis"];
const invitadosGenerales = ["Carlos", "María"];
```

Crea un nuevo array `todosLosInvitados` uniendo ambas listas en un solo array, pero asegurándote de que los VIP aparezcan primero.

*Resultado esperado:*

```js
["Ana", "Luis", "Carlos", "María"]
```

*Pistas o ayudas:*

- Usa spread con ambos arrays al crear el nuevo.

### Reto 3: “Sumadora flexible”

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Crea una función `sumarTodo` que reciba cualquier cantidad de números como argumentos y retorne su suma total.

*Resultado esperado:*

```js
sumarTodo(1, 2, 3); // 6
sumarTodo(10, 20, 30, 40); // 100
```

*Pistas o ayudas:*

- Usa el operador rest `...` en los parámetros de la función.
- Recorre el array generado para sumar todos los elementos.

### Reto 4: “Separando al líder”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* En grupo

*Enunciado:* Dado el siguiente array con posiciones en una carrera:

```js
const posiciones = ["Laura", "Pedro", "Marta", "Andrés", "Sofía"];
```

Usa destructuring y el operador rest para separar al primer lugar (ganador) y guardar el resto en `restoDelGrupo`.

*Resultado esperado:*

```js
ganador = "Laura"
restoDelGrupo = ["Pedro", "Marta", "Andrés", "Sofía"]
```

*Pistas o ayudas:*

- Combina destructuring con `...rest` en arrays.
- El operador rest debe ir al final en un array destructurado.

### Reto 5: “Fusionando configuración”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* Individual

*Enunciado:* Tienes una configuración por defecto:

```js
const configDefault = { idioma: "es", modo: "claro", notificaciones: true };
```

Y una configuración del usuario:

```js
const configUsuario = { modo: "oscuro", notificaciones: false };
```

Fusiona ambas en un nuevo objeto `configFinal`, donde los valores de `configUsuario` sobrescriban los de `configDefault`.

*Resultado esperado:*

```js
{ idioma: "es", modo: "oscuro", notificaciones: false }
```

*Pistas o ayudas:*

- El orden de los objetos con spread es importante: el último sobrescribe.
- Usa `{ ...obj1, ...obj2 }` para combinar propiedades.

## Template literals

### Reto 1: “Hola, nombre”

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos

*Participantes:* Individual

*Enunciado:* Declara una variable nombre con tu nombre y usa un template literal para imprimir en consola:

`¡Hola, [nombre]! Bienvenido al curso de JavaScript.`

*Resultado esperado:*

```js
const nombre = "Sofía";
console.log(`¡Hola, ${nombre}! Bienvenido al curso de JavaScript.`);
```

*Pistas o ayudas:*

- Los template literals se escriben con backticks ` `` `.
- Usa `${}` para interpolar variables dentro del texto.

### Reto 2: “Factura rápida”

*Nivel:* Medio

*Tiempo estimado de resolución:* 15 minutos

*Participantes:* En parejas

*Enunciado:* Dado un objeto:

```js
const producto = { nombre: "Mouse", precio: 50000, cantidad: 2 };
```

Usa template literals para imprimir un mensaje como:

`Compraste 2 Mouse(s) por un total de $100000.`

*Resultado esperado:* El total debe calcularse dentro del template literal.

```js
`Compraste ${producto.cantidad} ${producto.nombre}(s) por un total de $${producto.precio * producto.cantidad}.`
```

*Pistas o ayudas:*

- Puedes realizar operaciones matemáticas dentro de `${}`.
- Usa objetos con propiedades bien nombradas para mayor claridad.

### Reto 3: “Currículum en una línea”

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Crea una función que reciba tres parámetros: nombre, carrera y universidad. Devuelve una frase usando template literals:

`Mi nombre es [nombre], estudio [carrera] en la universidad [universidad].`

*Resultado esperado:*

```js
function presentar(nombre, carrera, universidad) {
  return `Mi nombre es ${nombre}, estudio ${carrera} en la universidad ${universidad}.`;
}
```

*Pistas o ayudas:*

- Este reto combina template literals con funciones.
- Usa nombres de parámetros descriptivos.

### Reto 4: “Múltiples líneas con estilo”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* En grupo

*Enunciado:* Crea una plantilla HTML en una variable usando template literals que incluya:

- Título
- Un párrafo de bienvenida
- Una lista de 3 elementos
- El contenido debe estar dentro de una variable `htmlContent`.

*Resultado esperado:* Una estructura como:

```js
const htmlContent = `
  <h1>Bienvenido</h1>
  <p>Gracias por visitar nuestro sitio.</p>
  <ul>
    <li>Inicio</li>
    <li>Servicios</li>
    <li>Contacto</li>
  </ul>
`;
```

*Pistas o ayudas:*

- Los template literals permiten saltos de línea fácilmente.
- Úsalos para crear HTML, emails, y otros textos largos.

### Reto 5: “Resumen de resultados”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* Individual

*Enunciado:* Dado el siguiente array de estudiantes:

```js
const estudiantes = [
  { nombre: "Carlos", nota: 4.5 },
  { nombre: "Luisa", nota: 3.8 },
  { nombre: "Mario", nota: 4.9 }
];
```

Escribe una función que retorne un resumen tipo texto con los resultados de cada estudiante, usando template literals y `.map()`.

*Resultado esperado:* Un string como:

```txt
Carlos obtuvo 4.5
Luisa obtuvo 3.8
Mario obtuvo 4.9
```

*Pistas o ayudas:*

- Usa `.map()` para transformar cada estudiante en un string.
- Une todos los resultados con `.join('\n')` para obtener múltiples líneas.

## Clases y herencia

### Reto 1: “Crea tu primera clase”

*Nivel:* Básico

*Tiempo estimado de resolución:* 15 minutos

*Participantes:* Individual

*Enunciado:* Crea una clase llamada `Persona` con un constructor que reciba nombre y edad. Agrega un método `saludar()` que imprima:

`Hola, mi nombre es [nombre] y tengo [edad] años.`

*Resultado esperado:*

```js
const persona1 = new Persona("Laura", 22);
persona1.saludar(); // Hola, mi nombre es Laura y tengo 22 años.
```

*Pistas o ayudas:*

- Usa `constructor()` dentro de la clase.
- Los métodos no necesitan la palabra `function`.

### Reto 2: “Animal parlante”

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Crea una clase `Animal` con un método `hacerSonido()`. Luego crea una subclase `Perro` que herede de `Animal` y sobrescriba `hacerSonido()` para imprimir:

El perro dice: ¡Guau!

*Resultado esperado:*

```js
const dog = new Perro();
dog.hacerSonido(); // El perro dice: ¡Guau!
```

*Pistas o ayudas:*

- Usa extends para heredar.
- Para sobrescribir un método, usa el mismo nombre en la subclase.
- Si deseas usar el comportamiento de la clase padre también, llama a super.hacerSonido() dentro del hijo.

### Reto 3: “Usuarios registrados”

*Nivel:* Medio

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* En parejas

*Enunciado:* Crea una clase `Usuario` con propiedades usuario y correo. Luego crea una subclase `Admin` que también reciba permisos (array). Agrega un método `mostrarInfo()` que muestre toda la información.

*Resultado esperado:*

```js
const admin = new Admin("jadmin", "<admin@mail.com>", ["modificar", "eliminar"]);
admin.mostrarInfo();
// Usuario: jadmin
// Correo: <admin@mail.com>
// Permisos: modificar, eliminar
```

*Pistas o ayudas:*

- Usa `super()` en el constructor de la subclase para llamar al constructor de `Usuario`.
- Puedes usar `.join(', ')` para mostrar los permisos como texto.

### Reto 4: “Vehículos en acción”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* En grupo

*Enunciado:* Crea una clase `Vehiculo` con métodos `encender()` y `apagar()`. Luego crea subclases `Carro` y `Moto` que tengan su propio método `sonarBocina()` con sonidos distintos. Instancia ambos y simula que se encienden, hacen sonar la bocina y se apagan.

*Resultado esperado:*

```js
const c = new Carro();
c.encender(); // Vehículo encendido.
c.sonarBocina(); // ¡Beep beep!
c.apagar(); // Vehículo apagado.
```

*Pistas o ayudas:*

- Cada subclase puede tener métodos propios además de los heredados.
- Puedes crear un método común en `Vehiculo` y luego extender su funcionalidad en las subclases.

### Reto 5: “Sistema académico”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 35 minutos

*Participantes:* Individual

*Enunciado:* Crea una jerarquía de clases:

- Persona (nombre, documento)
- Estudiante (código, programa)
- Profesor (asignatura, facultad)

Agrega un método `presentarse()` que sea redefinido en cada clase para mostrar información distinta.

*Resultado esperado:*

```js
const profe = new Profesor("Mario", "123", "POO", "Ingeniería");
profe.presentarse(); // Soy Mario, profesor de POO en la facultad de Ingeniería.
```

*Pistas o ayudas:*

- Usa `super()` para reutilizar código del constructor padre.
- Cada clase puede tener su propia versión del método `presentarse()` (polimorfismo).

## Módulos (import/export)

### Reto 1: “Tu primera exportación”

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos

*Participantes:* Individual

*Enunciado:* Crea un archivo llamado `saludo.js` que exporte una función `saludar(nombre)` que imprima:

`¡Hola, [nombre]!`

Luego crea un archivo `app.js` que la importe y la ejecute.

*Resultado esperado:*

```js title="saludo.js"
export function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
```

```js title="app.js"
import { saludar } from "./saludo.js";
saludar("Camila"); // ¡Hola, Camila!
```

*Pistas o ayudas:*

- Usa `export` para funciones y constantes reutilizables.
- Asegúrate de que los archivos usen extensión `.js` y tengan tipo `module` si usas Node o navegador.

### Reto 2: “Calculadora modular”

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* En parejas

*Enunciado:* Crea un archivo `operaciones.js` con funciones `sumar`, `restar`, `multiplicar` y `dividir`. Exporta todas y úsalas desde `main.js`, mostrando los resultados en consola.

*Resultado esperado:*

```js title="operaciones.js"
export function sumar(a, b) { return a + b; }
export function restar(a, b) { return a - b; }
export function multiplicar(a, b) { return a * b; }
export function dividir(a, b) { return a / b; }
```

```js title="main.js"
import { sumar, restar, multiplicar, dividir } from "./operaciones.js";
console.log(sumar(2, 3)); // 5
```

*Pistas o ayudas:*

- Puedes usar `export` por separado o todos juntos al final.
- Los nombres de las funciones deben coincidir al importar.

### Reto 3: “Exportación por defecto”

*Nivel:* Medio

*Tiempo estimado de resolución:* 15 minutos

*Participantes:* Individual

*Enunciado:* Crea una clase `Usuario` en el archivo `usuario.js` y expórtala como default. Luego impórtala desde `app.js` y crea una instancia.

*Resultado esperado:*

```js title="usuario.js"
export default class Usuario {
    constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}
```

```js title="app.js"
import Usuario from "./usuario.js";
const user = new Usuario("Andrés");
user.saludar(); // Hola, soy Andrés
```

*Pistas o ayudas:*

- Solo puede haber una exportación default por archivo.
- No uses llaves `{}` al importar una exportación por defecto.

### Reto 4: “Paquete de utilidades”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 25 minutos

*Participantes:* En grupo

*Enunciado:* Crea un módulo `utilidades.js` que contenga múltiples funciones:

- `capitalizar(str)`: convierte la primera letra en mayúscula.
- `esPar(n)`: retorna true si el número es par.
- `formatearMoneda(valor)`: retorna el valor con `$` y separadores.

Usa estas funciones desde `analisis.js` para procesar un array de usuarios con nombre y saldo.

*Resultado esperado:*

```js
capitalizar("ana"); // "Ana"
esPar(4); // true
formatearMoneda(10000); // "$10,000"
```

*Pistas o ayudas:*

- Usa funciones puras, reutilizables.
- Organiza las exportaciones con `export { ... }`.

### Reto 5: “Proyecto modular”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* Individual

*Enunciado:* Divide un mini proyecto en los siguientes módulos:

- `datos.js`: exporta un array de productos.
- `filtros.js`: exporta funciones `filtrarPorPrecio` y `buscarPorNombre`.
- `app.js`: importa los datos y funciones, y muestra los resultados de los filtros en consola.

*Resultado esperado:*

```js title="datos.js"
export const productos = [
    { nombre: "Mouse", precio: 30000 },
  { nombre: "Teclado", precio: 80000 }
];
```

```js title="filtros.js"
export function filtrarPorPrecio(lista, min) {
    return lista.filter(p => p.precio >= min);
}

export function buscarPorNombre(lista, texto) {
    return lista.find(p => p.nombre === texto);
}
```

```js title="app.js"
import { productos } from "./datos.js";
import { filtrarPorPrecio, buscarPorNombre } from "./filtros.js";

console.log(filtrarPorPrecio(productos, 50000));
console.log(buscarPorNombre(productos, "Mouse"));
```

*Pistas o ayudas:*

- Divide responsabilidades entre archivos.
- Este patrón imita la estructura de proyectos reales.

## Operador ternario y nullish coalescing

### Reto 1: “Edad suficiente”

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos

*Participantes:* Individual

*Enunciado:* Crea una función `esMayorDeEdad(edad)` que devuelva:

- "Mayor de edad" si la edad es 18 o más
-"Menor de edad" en caso contrario.

Usa el operador ternario.

*Resultado esperado:*

```js
esMayorDeEdad(20); // "Mayor de edad"
esMayorDeEdad(15); // "Menor de edad"
```

*Pistas o ayudas:*

- La sintaxis básica es: `condición ? valor_si_true : valor_si_false`.

### Reto 2: “Mostrar nombre de usuario”

*Nivel:* Básico

*Tiempo estimado de resolución:* 10 minutos

*Participantes:* Individual

*Enunciado:* Dado el valor username que puede ser `null`, `undefined` o un string válido, usa el operador nullish coalescing (`??`) para imprimir:

`Bienvenido, [nombre]`

Si no hay nombre, imprime:

`Bienvenido, Invitado`

*Resultado esperado:*

```js
const username = null;
console.log(`Bienvenido, ${username ?? "Invitado"}`);
```

*Pistas o ayudas:*

- A diferencia del `||`, el `??` solo actúa ante `null` o `undefined`, no ante `""` o `0`.

### Reto 3: “¿Con descuento?”

*Nivel:* Medio

*Tiempo estimado de resolución:* 15 minutos

*Participantes:* En parejas

*Enunciado:* Crea una función `calcularPrecio(precio, tieneDescuento)` que retorne:

- Si `tieneDescuento` es true, el precio con 10% de descuento
- Si es false, el precio original

Usa el operador ternario para resolverlo.

*Resultado esperado:*

```js
calcularPrecio(100000, true); // 90000
calcularPrecio(100000, false); // 100000
```

*Pistas o ayudas:*

- Dentro del ternario puedes hacer operaciones matemáticas.
- Evita usar `if`; resuelve todo en una línea.

### Reto 4: “Control de parámetros”

*Nivel:* Medio

*Tiempo estimado de resolución:* 20 minutos

*Participantes:* Individual

*Enunciado:* Crea una función `saludar(nombre)` que imprima:

`¡Hola, [nombre]!`

Si nombre es `null` o `undefined`, usa el operador `??` para reemplazar por "invitado".

*Resultado esperado:*

```js
saludar("Mario"); // ¡Hola, Mario!
saludar(undefined); // ¡Hola, invitado!
```

*Pistas o ayudas:*

- No uses `if`; usa template literals y el operador `??`.

### Reto 5: “Sistema de acceso”

*Nivel:* Avanzado

*Tiempo estimado de resolución:* 30 minutos

*Participantes:* En grupo

*Enunciado:* Crea una función `verificarAcceso(usuario)` que reciba un objeto como:

```js
const usuario = {
    nombre: "Andrea",
  rol: "admin",
  activo: true
};
```

La función debe:

- Imprimir `"Acceso permitido a [nombre]"` si activo es true
- Imprimir `"Acceso denegado"` en caso contrario
- Si nombre está ausente (`null` o `undefined`), usar `"usuario anónimo"`

Usa operador ternario y `??`.

*Resultado esperado:*

```js
verificarAcceso({ nombre: null, rol: "admin", activo: true });
// Acceso permitido a usuario anónimo
verificarAcceso({ nombre: "Laura", activo: false });
// Acceso denegado
```

*Pistas o ayudas:*

- Usa destructuring para simplificar.
- Aplica ternario para la condición y `??` para el nombre.

## Reto General

**Modalidad:** En parejas o grupos de 3

**Duración total estimada:** 90 minutos

**Nivel:** Progresivo (de básico a avanzado)

### Objetivo del reto

Deberán resolver una serie de desafíos interconectados, usando:

- let, const, var
- Arrow functions y el contexto de this
- Destructuring (arrays y objetos)
- Spread y Rest
- Template literals
- Clases y herencia
- Módulos (import/export)
- Operador ternario y nullish coalescing

Cada desafío desbloquea el siguiente, simulando una misión de infiltración digital.

### Desafíos del reto

#### Misión 1: Configuración inicial

*Nivel:* Básico

*Tiempo estimado:* 10 minutos

*Enunciado:* Declara 3 constantes para almacenar tu nombre, tu rol y tu nivel de acceso. Luego imprime:

`"Acceso solicitado por [nombre] como [rol], *nivel:* [nivel]"`

*Conceptos clave:* `let`, `const`, template literals

*Resultado esperado:*

```js
const nombre = "Laura";
const rol = "analista";
const nivel = 3;
console.log(`Acceso solicitado por ${nombre} como ${rol}, *nivel:* ${nivel}`);

```

*Pista:* Usa `const` si los valores no cambian y backticks para imprimir.

#### Misión 2: Infiltración de datos

*Nivel:* Medio

*Tiempo estimado:* 15 minutos

*Enunciado:* Tienes el siguiente objeto:

```js
const agente = {
  nombre: "Zeta",
  habilidades: ["sigilo", "hackeo", "combate"],
  equipo: {
    gadget: "infiltrador",
    acceso: null
  }
};
```

- Usa destructuring para extraer nombre, gadget y la primera habilidad.
- Usa el operador `??` para reemplazar acceso con "limitado" si es `null`.

Imprime:

`El agente Zeta usa el infiltrador y su acceso es limitado.`

*Conceptos clave:* Destructuring, nullish coalescing, template literals

#### Misión 3: Herramientas extendidas

*Nivel:* Medio

*Tiempo estimado:* 15 minutos

*Enunciado:* Tienes una lista de códigos base:

```js
const codigosBase = ["X1", "Y3", "Z5"];
const nuevosCodigos = ["A9", ...codigosBase, "B2"];
```

Crea una función `reporteCodigos(...codigos)` que reciba códigos con rest operator.

Usa una arrow function para recorrer e imprimir:

```txt
Código detectado: X1
Código detectado: Y3
…
```

*Conceptos clave:* Spread, Rest, Arrow function

#### Misión 4: Guardianes del sistema

*Nivel:* Avanzado

*Tiempo estimado:* 20 minutos

*Enunciado:* Crea una clase `Usuario` con propiedades nombre y nivel. Luego, crea una subclase `Administrador` que además tenga un arreglo de permisos. Agrega un método `resumen()` que imprima:

`Admin Laura con nivel 5 tiene permisos: crear, editar, eliminar`

*Conceptos clave:* Clases, herencia, template literals

*Pista:* Usa `super()` para heredar del constructor de la clase base.

#### Misión 5: Centro de control modular

*Nivel:* Avanzado

*Tiempo estimado:* 25 minutos

*Enunciado:* Divide tu programa en 3 módulos:

Usuarios:

```js title="usuarios.js"
export class Usuario { ... }
export class Administrador extends Usuario { ... }
```

Herramientas:

```js title="herramientas.js"
export function reporteCodigos(...codigos) { ... }
export const codigosBase = [ ... ];
```

main.js: Importa todo y crea un flujo que:

- Instancie un Administrador
- Genere un reporte de códigos
- Use un operador ternario para verificar si tiene permisos

*Conceptos clave:* Módulos, ternario, nullish, arrow functions, clases, destructuring
