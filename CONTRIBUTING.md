# Guía para Contribuidores

¡Gracias por tu interés en contribuir a este proyecto de documentación educativa! Este repositorio está diseñado para facilitar el acceso a los temas tratados en espacios académicos y puede enriquecerse con la colaboración de otros docentes, estudiantes o entusiastas del conocimiento.

## 📌 Requisitos generales

Antes de comenzar:

- Asegúrate de tener conocimientos básicos en Markdown y Git.
- Respeta la estructura de carpetas y convenciones de nombres del proyecto.
- Si vas a traducir, mantén el formato y contenido original lo más fiel posible.

## 🧾 Tipos de contribuciones aceptadas

Puedes ayudar de muchas formas:

1. 📝 **Agregar nuevos temas** dentro del directorio `/docs`.
2. 🌍 **Traducir contenido** a inglés dentro de `/i18n/en/`.
3. 🛠 **Corregir errores** ortográficos, gramaticales o técnicos.
4. 📷 **Incluir imágenes o diagramas** relevantes (en `/static/img`).
5. 💡 **Proponer mejoras** en la navegación o visualización del portal.
6. 📚 **Sugerir nuevas secciones o temas** para enriquecer el contenido.

## 🚧 Cómo contribuir

### 1. Clona el repositorio

```bash
git clone https://github.com/usuario/espacios-academicos-docs.git
cd espacios-academicos-docs
```

### 2. Crea una rama para tu cambio

```bash
git checkout -b mi-contribucion
```

### 3. Realiza tu cambio

- Si es un nuevo tema: agrégalo en `/docs`
- Si es una traducción: crea o edita el archivo en `/i18n/en/docusaurus-plugin-content-docs/current/`

### 4. Verifica el resultado localmente

```bash
npm install
npm run start
```

### 5. Haz commit siguiendo esta convección

```bash
git commit -m "docs: traducción del archivo 'introduccion.md' al inglés"
```

> Usa prefijos como `docs:`, `fix:`, `feat:`, `refactor:` según corresponda (Sigue la guía [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))

### 6. Sube tu rama y haz el Pull Request

```bash
git push origin mi-contribucion
```

Luego ve a GitHub y abre un Pull Request hacia la rama `main`.

## Buenas prácticas

- Mantén la estructura de encabezados, listas y bloques de código
- Si haces una traducción, asegúrate de mantener el mismo `id` en el front-matter (`---` al inicio)
- Usa lenguaje inclusivo, claro y académico

## ¿Dudas?

Si tienes preguntas, abre un Issue o contacta al administrador del repositorio.

> ✨ *Gracias por contribuir a este esfuerzo educativo. ¡Tu aporte marca la diferencia!*
