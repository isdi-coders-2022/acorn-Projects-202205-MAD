# Análisis inicial del proyecto por grupos - Acorn - Adrián, Fran, Rodrigo

## Temática

Aplicación web que recomienda películas en base al clima.
Permite guardar matches entre película y clima, mostrarlos, crear nuevos, editarlos o borrarlos.

APIs: IMDB, WeatherAPI

=======

## Elementos de la aplicación

### Páginas

- Home
- Login
- Personal playlist
- New match
- Details

### Componentes y responsabilidades

- Comunes

  - Header: Mostrar logo y cabecera. Pintar componente Navigation
  - Footer: Mostrar información de autores y contacto
  - Navigation: Mostrar opciones de navegación, funcionalidad de cambio de página

- Home: Incluye Header, Footer y Navigation

  - Info: Mostrar info estática sobre el funcionamiento de la web
  - Results: Mostrar resultado del algoritmo de recomendaciones (ESTADO)
  - Configuration: Recoger entrada de usuario para cambiar el algoritmo (ESTADO)

- Login

  - Login: Recoger entrada de usuario y cambiar estado guest/logged (ESTADO)

- Personal playlist: Incluye Header, Footer y Navigation

  - Filter: Recoger entrada usuario sobre lo que se mostrará en lista (ESTADO)
  - List: Mostrar API local de favoritos en función de lo que especifique filter (ESTADO)
  - Film: Mostrar información de película y clima asociado. Recoge entrada de usuario para borrar

- New match: Incluye Header, Footer y Navigation

  - Form: Recoger el dato de clima del usuario para crear un nuevo match
  - List: Mostrar API pública, permitiendo filtrado por búsqueda.
  - ListItem: Mostrar información de la película. Recoger entrada de usuario para crear nuevo match

- Details: Incluye Header, Footer y Navigation
  - FilmDetails: Mostrar datos de la película en base a la información de la API pública y la local

## Milestones

### Orden de creación de páginas

- Home
- New match
- Personal playlist
- Details
- Login

### Prioridad de detalles de implementación

**Básico**: Imprescindible, realizar en primeras etapas. Estado por defecto
**Avanzado**: Añadidos de mejora de funcionalidades, añadir una vez completado básico y su testing al 100%
**Avanzado+**: Mejoras complejas, añadir sólo si el proyecto está ya en una etapa funcional completa

- Header
  - Logo-botón
  - Espacio para navigation
- Navigation
  - Botón principal adaptable
  - Añadir botón secundario opcional según estado de login: **Avanzado**
- Footer
  - Tarjetas personales
- Info
  - Imágenes estáticas
  - Panel de descripción
  - Imágenes en carrusel: **Avanzado**
- Results
  - Imágenes (3) estáticas
  - Imágenes en carrusel: **Avanzado**
- Config
  - Selector de clima
  - Ubicación: **Avanzado+**
- Login: **Avanzado**
- Personal playlist
  - Filtro con botones-icono para clima
  - Lista
  - Film clickable para ir a details, botón borrar
- New match
  - Form desplegable con clima
  - List
    - Buscador
    - Lista estática
    - Lista slider: **Avanzado**
    - Ordenar por: **Avanzado+**
  - ListItem con info pelicula
    - Botón añadir match
    - Botón cambiar match a clima seleccionado actualmente
    - Confirmación de cambio de clima: **Avanzado**
- Details
  - Poster
  - Datos
  - Trailer
