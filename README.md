# Electiva de Profundización: JavaScript y TypeScript

[![wakatime](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/34ed8a63-ab6e-4920-8936-c9d34d789ed2.svg?style=for-the-badge)](https://wakatime.com/badge/user/8ef73281-6d0a-4758-af11-fd880ca3009c/project/34ed8a63-ab6e-4920-8936-c9d34d789ed2)

> 🌟 *El conocimiento no es útil si no se comparte.*

Este proyecto es una plataforma de documentación educativa desarrollada con [Docusaurus](https://docusaurus.io/).

## Objetivo

Brindar tanto a estudiantes cómo docentes, un recurso descentralizado, estructurado y multilingüe, que facilite el acceso a los siguientes temas:

- Módulo 1: Introducción y Fundamentos Modernos
  - Objetivos generales y específicos
  - Metodología y dinámica del curso
  - Herramientas y entorno de desarrollo sugerido
  - let, const, y diferencias con var
  - Arrow functions y contexto del this
  - Destructuring (arrays y objetos)
  - Operador spread y rest
  - Template literals
  - Clases y herencia
  - Módulos (import/export)
  - Operador ternario y nullish coalescing
- Módulo 2: Fundamentos de TypeScript
  - Tipos primitivos y estructuras
  - Inferencia de tipos vs anotación explícita
  - Tipado en funciones y parámetros opcionales
  - Tipado de arreglos, tuplas y objetos
  - Diferencias entre type e interface
  - Union types (|)
  - Intersection types (&)
  - Tipos literales y enums
  - Narrowing y type guards
  - Type alias y interfaces extendidas
  - Modularización en TypeScript
  - Namespaces y espacios de nombres
  - Configuración del compilador (tsconfig.json)
  - Uso de paths y mapeo de módulos
  - Integración con librerías externas (DefinitelyTyped)
- Módulo 3: Conceptos Avanzados
  - Introducción a la asincronía en JS
  - Callbacks vs Promises
  - Encadenamiento de Promises
  - async/await y control de errores
  - Fetch API: peticiones GET, POST y manejo de respuestas
  - Manejo avanzado de errores con try/catch
  - Cancelación de peticiones y AbortController
  - Closures: definición y usos prácticos
  - Funciones de orden superior
  - Currying y composición
  - Contexto de ejecución y scopes
- Módulo 4: POO, Buenas Prácticas y Principios
  - Clases, atributos y métodos
  - Constructores y parámetros
  - Herencia y super()
  - Polimorfismo y abstracción
  - Interfaces como contratos
  - Composición vs herencia
  - Principios SOLID aplicados en TypeScript
  - Refactorización de código con SRP y OCP
  - Código legible y mantenible
  - Comentarios útiles vs innecesarios
  - Nombres significativos y funciones pequeñas
- Módulo 5: Diseño y Arquitectura Empresarial
  - Patrón Factory
  - Patrón Singleton
  - Patrón Repository
  - Aplicación práctica en componentes frontend/backend
  - Capas de una aplicación empresarial
  - Clean Architecture aplicada a frontend y backend
  - Separación de responsabilidades: domain, application, infrastructure, interfaces
  - Inversión de dependencias y testing estructural
- Módulo 6: Persistencia y APIs
  - JSON como formato de intercambio
  - Uso de localStorage y sessionStorage
  - IndexedDB: conceptos básicos y APIs
  - Fundamentos de RESTful APIs
  - Peticiones con Fetch y configuración avanzada
  - Alternativa con Axios: interceptores y cancelaciones
  - Manejo de tokens y autenticación
- Módulo 7: Documentación y DevOps
  - Generación de documentación con TypeDoc
  - Uso de comentarios JSDoc/TSDoc
  - Documentación de endpoints con Swagger y OpenAPI
  - Buenas prácticas en documentación de librerías
  - Integración continua (CI) con GitHub Actions
  - Linters (ESLint) y formatters (Prettier)
  - Medición de cobertura de código (Istanbul / NYC / Vitest)
  - Pre-commits, husky y lint-staged
- Módulo 8: Despliegue y Presentación
  - Preparación del build de producción
  - Hosting en GitHub Pages
  - Uso de Netlify y Vercel para proyectos empresariales
  - Variables de entorno y seguridad en despliegues

## Internacionalización

El portal estará disponible en 2 idiomas:

- 🇪🇸 Español (predeterminado)
- 🇺🇸 Inglés

Puedes cambiar el idioma desde el menú superior del sitio.

## Instalación local

Para trabajar en el sitio de documentación de forma local:

```bash
# Clona el repositorio
git clone https://github.com/carlos-paezf/Software_Construction.git
cd Software_Construction

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run start
```

Abre <http://localhost:3000> en tu navegador.

## Estructura del proyecto

- `/docs` Contenidos originales en español
- `/i18n/en` Traducciones al inglés
- `src` Componentes y páginas personalizadas
- `/static` Archivos estáticos (imágenes, descargas, etc.)

## Contribuciones

Este proyecto está abierto a docentes o estudiantes que deseen colaborar con:

- Traducciones
- Correcciones ortográficas o técnicas
- Mejora en la organización o visualización de los contenidos

Por favor, antes de hacer un Pull Request, revisa el archivo [`CONTRIBUTING.md`](./CONTRIBUTING.md)

## Comandos útiles

|Acción|Comando|
|--|--|
|Ejecutar en modo desarrollo|`npm run start`|
|Compilar para producción|`npm run build`|
|Generar estructura para traducciones|`npm run write-translations`|

## Autor

Proyecto desarrollado por Carlos David Páez Ferreira, Ingeniero de Sistemas y Docente Universitario, como recurso de apoyo para estudiantes y colegas.

## Licencia

Este proyecto está licenciado bajo la MIT License.
