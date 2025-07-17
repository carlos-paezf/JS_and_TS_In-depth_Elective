---
sidebar_position: 10
---

# Módulos (import/export)

Un **módulo** es simplemente un archivo que **expone funciones, clases, objetos o constantes** para que otros archivos puedan usarlos mediante `import`. Esto permite organizar el código de forma lógica, **evitar variables globales y reutilizar componentes**.

:::info

JavaScript moderno (ES6+) y TypeScript promueven el uso de módulos como unidad de organización y encapsulamiento.

:::

## Tipos de exportación

### Exportación nombrada (`export`)

```ts title="math.ts" showLineNumbers
export const PI = 3.14;

export function sum(a: number, b: number) {
  return a + b;
}
```

```ts title="main.ts" showLineNumbers
import { PI, sum } from './math';

console.log(PI);           // 3.14
console.log(sum(1, 2));    // 3
```

### Exportación por defecto (`export default`)

```ts title="logger.ts" showLineNumbers
export default function log(message: string) {
  console.log(`[LOG]: ${message}`);
}
```

```ts title="main.ts" showLineNumbers
import log from './logger';

log('Hola mundo');
```

:::warning

Solo puede haber una exportación por defecto por archivo

:::

### Combinación de exportaciones

```ts title="UserService.ts" showLineNumbers
export default class UserService { /* ... */ }
export const MAX_USERS = 100;
```

```ts title="main.ts" showLineNumbers
import UserService, { MAX_USERS } from './UserService';
```

## Estructura recomendada de carpetas

```txt
src/
├── domain/
│   └── entities/
│       └── User.ts          ← exporta clase User
├── application/
│   └── usecases/
│       └── CreateUser.ts    ← importa User y exporta lógica
├── interfaces/
│   └── controllers/
│       └── UserController.ts
└── main.ts                  ← punto de entrada
```

## Tipos de importaciones

### Relativa

Las **importaciones relativas** funcionan, pero pueden llegar a tornarse **ilegibles**.

```ts
import { User } from '../../../../domain/entities/User';
```

### Absoluta

Las **importaciones absolutas** son más **útiles**, pero requieren conocimiento del **path** del archivo y se deben configurar en `tsconfig.json`

```ts
import { User } from 'domain/entities/User';
```

```json title="tsconfig.json" showLineNumbers
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "*": ["*"]
    }
  }
}
```

En caso de que estés usando Vite, debes añadir una configuración adicional:

1. Instala el paquete `vite-tsconfig-paths`
2. Crear o ve el archivo `vite.config.ts` y valida estas líneas:

   ```ts
   import { defineConfig } from 'vite';
   import tsconfigPaths from 'vite-tsconfig-paths';

   export default defineConfig( {
       plugins: [ tsconfigPaths() ]
   } );
   ```

Esto es necesario, porque Vite no usa directamente `tsconfig.json` para resolver rutas de imports, sino que necesita que definas alias explícitamente en `vite.config.ts`.

## Casos reales

- Librerías como Lodash o Axios exportan múltiples funciones (nombradas).
- Frameworks como React exportan una mezcla de `default` y `named`.
- Proyectos Clean Architecture organizan módulos por capa (`domain`, `application`, etc.).
- Paquetes npm: cada archivo `.ts` o `.js` exporta funcionalidades específicas reutilizables.

## Buenas prácticas recomendadas

|Principio|Aplicación|
|--|--|
|**Clean Code**|Código separado por responsabilidad, legible, sin redundancias.|
|**SRP (SOLID)**|Cada archivo contiene solo una clase o función principal.|
|**OCP (SOLID)**|Permite añadir nuevos módulos sin modificar los existentes.|
|**DIP (SOLID)**|Se pueden importar abstracciones (interfaces) sin acoplarse a implementaciones.|

## Referencias

- Flanagan, D. (2020). JavaScript: The Definitive Guide (7th ed.). O’Reilly Media.
- Mozilla Developer Network. (s.f.). [Modules.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [JavaScript Style Guide.](https://google.github.io/styleguide/jsguide.html)
- [NestJS Docs](https://docs.nestjs.com/fundamentals/custom-providers)
