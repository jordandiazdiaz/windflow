# Guía de Migración desde Tailwind CSS a WindFlow CSS

## Introducción

WindFlow CSS es un framework CSS moderno que comparte la filosofía utility-first de Tailwind CSS, pero con características adicionales como animaciones avanzadas, temas predefinidos y efectos visuales únicos. Esta guía te ayudará a migrar tu proyecto desde Tailwind CSS a WindFlow CSS de manera eficiente.

## Diferencias Principales

### 1. **Animaciones Avanzadas**
- **Tailwind**: Animaciones básicas con `animate-*`
- **WindFlow**: 50+ animaciones predefinidas incluyendo efectos 3D, glitch, typewriter, etc.

### 2. **Sistema de Temas**
- **Tailwind**: Configuración manual de temas
- **WindFlow**: 8 temas predefinidos con cambio dinámico

### 3. **Efectos Visuales**
- **Tailwind**: Efectos básicos
- **WindFlow**: Glassmorphism, gradientes avanzados, efectos de partículas

### 4. **Tamaño del Bundle**
- **Tailwind**: ~40KB (con PurgeCSS)
- **WindFlow**: ~315KB (incluye todas las características)

## Tabla de Equivalencias de Clases

### Layout

| Tailwind CSS | WindFlow CSS | Notas |
|-------------|--------------|-------|
| `container` | `container` | Idéntico |
| `flex` | `flex` | Idéntico |
| `grid` | `grid` | Idéntico |
| `hidden` | `hidden` | Idéntico |
| `block` | `block` | Idéntico |
| `inline-block` | `inline-block` | Idéntico |

### Espaciado

| Tailwind CSS | WindFlow CSS | Notas |
|-------------|--------------|-------|
| `p-4` | `p-4` | Idéntico |
| `m-4` | `m-4` | Idéntico |
| `space-x-4` | `space-x-4` | Idéntico |
| `gap-4` | `gap-4` | Idéntico |

### Colores

| Tailwind CSS | WindFlow CSS | Notas |
|-------------|--------------|-------|
| `bg-blue-500` | `bg-blue-500` | Idéntico |
| `text-gray-700` | `text-gray-700` | Idéntico |
| `border-red-400` | `border-red-400` | Idéntico |

### Tipografía

| Tailwind CSS | WindFlow CSS | Notas |
|-------------|--------------|-------|
| `text-sm` | `text-sm` | Idéntico |
| `font-bold` | `font-bold` | Idéntico |
| `leading-6` | `leading-6` | Idéntico |

### Animaciones

| Tailwind CSS | WindFlow CSS | Notas |
|-------------|--------------|-------|
| `animate-spin` | `animate-spin` | Idéntico |
| `animate-ping` | `animate-ping` | Idéntico |
| `animate-pulse` | `animate-pulse` | Idéntico |
| `animate-bounce` | `animate-bounce` | Idéntico |
| N/A | `animate-fade-in` | Nuevo en WindFlow |
| N/A | `animate-slide-up` | Nuevo en WindFlow |
| N/A | `animate-rubber-band` | Nuevo en WindFlow |
| N/A | `animate-glitch` | Nuevo en WindFlow |

### Efectos Visuales (Nuevos en WindFlow)

| Característica | WindFlow CSS | Descripción |
|---------------|--------------|-------------|
| Glassmorphism | `glass-light`, `glass-dark` | Efectos de vidrio |
| Gradientes | `gradient-aurora`, `gradient-mesh` | Gradientes avanzados |
| 3D | `transform-3d`, `perspective-1000` | Transformaciones 3D |
| Partículas | `particle-snow`, `particle-stars` | Efectos de partículas |

## Ejemplos Prácticos de Migración

### 1. Card Component

**Tailwind CSS:**
```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here.</p>
</div>
```

**WindFlow CSS:**
```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover-lift transition-all">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here.</p>
</div>
```

### 2. Button con Animación

**Tailwind CSS:**
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
  Click me
</button>
```

**WindFlow CSS:**
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover-pop transition-all">
  Click me
</button>
```

### 3. Hero Section con Gradiente

**Tailwind CSS:**
```html
<section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
  <h1 class="text-4xl font-bold text-center">Welcome</h1>
</section>
```

**WindFlow CSS:**
```html
<section class="gradient-ocean text-white py-20 animate-gradient">
  <h1 class="text-4xl font-bold text-center animate-fade-in">Welcome</h1>
</section>
```

### 4. Modal con Glassmorphism

**Tailwind CSS:**
```html
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white rounded-lg p-8 max-w-md">
    <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
    <p>Modal content</p>
  </div>
</div>
```

**WindFlow CSS:**
```html
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="glass-dark rounded-lg p-8 max-w-md animate-scale-in">
    <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
    <p>Modal content</p>
  </div>
</div>
```

## Proceso de Migración Paso a Paso

### 1. Instalación

```bash
# Desinstalar Tailwind
npm uninstall tailwindcss postcss autoprefixer

# Instalar WindFlow
npm install windflow-css
```

### 2. Actualizar Configuración

**Eliminar `tailwind.config.js` y `postcss.config.js`**

**Crear `windflow.config.js`:**
```javascript
module.exports = {
  input: './src/styles/input.css',
  output: './dist/windflow.css',
  theme: 'default', // o cualquier tema predefinido
  features: {
    animations: true,
    themes: true,
    glassmorphism: true,
    gradients: true
  }
};
```

### 3. Actualizar Imports CSS

**Antes (Tailwind):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Después (WindFlow):**
```css
@import 'windflow-css/dist/windflow.css';

/* Tus estilos personalizados */
```

### 4. Actualizar Scripts en package.json

```json
{
  "scripts": {
    "build-css": "windflow build",
    "watch-css": "windflow watch"
  }
}
```

### 5. Migración de Clases Personalizadas

Si tienes componentes personalizados en Tailwind, puedes migrarlos así:

**Tailwind (con @apply):**
```css
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
```

**WindFlow:**
```css
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}
```

## Script de Migración Automática

Crea un archivo `migrate-to-windflow.js`:

```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Mapa de clases que necesitan cambios
const classMap = {
  // Animaciones mejoradas
  'hover:scale-105': 'hover-scale',
  'hover:shadow-xl': 'hover:shadow-xl hover-lift',
  'transition-all duration-300': 'transition-all',
  
  // Efectos visuales
  'backdrop-blur-sm': 'glass-light',
  'backdrop-blur-md': 'glass-dark',
  
  // Gradientes
  'bg-gradient-to-r from-blue-500 to-purple-600': 'gradient-ocean',
  'bg-gradient-to-r from-green-400 to-blue-500': 'gradient-forest',
};

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Reemplazar clases conocidas
  Object.entries(classMap).forEach(([oldClass, newClass]) => {
    if (content.includes(oldClass)) {
      content = content.replace(new RegExp(oldClass, 'g'), newClass);
      modified = true;
    }
  });
  
  // Agregar animaciones WindFlow a elementos interactivos
  content = content.replace(
    /class="([^"]*\bhover:)[^"]*"/g,
    (match) => {
      if (!match.includes('hover-')) {
        return match.replace('"', ' hover-pop"');
      }
      return match;
    }
  );
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Migrated: ${filePath}`);
  }
}

// Ejecutar migración
const files = glob.sync('src/**/*.{js,jsx,ts,tsx,html}', {
  ignore: ['node_modules/**', 'dist/**']
});

console.log(`🚀 Migrando ${files.length} archivos...`);
files.forEach(migrateFile);
console.log('✨ Migración completada!');
```

**Ejecutar el script:**
```bash
node migrate-to-windflow.js
```

## Características Exclusivas de WindFlow

### 1. Temas Dinámicos

```html
<!-- Cambiar tema dinámicamente -->
<button onclick="document.documentElement.setAttribute('data-theme', 'cyberpunk')">
  Tema Cyberpunk
</button>
```

### 2. Animaciones en Scroll

```html
<div class="scroll-fade-in">
  <h2>Este contenido aparece al hacer scroll</h2>
</div>
```

### 3. Efectos de Texto Avanzados

```html
<h1 class="text-glitch">Texto con efecto glitch</h1>
<p class="text-typewriter">Texto con efecto máquina de escribir</p>
```

### 4. Componentes de Loading

```html
<div class="loading-dots"></div>
<div class="loading-spinner"></div>
<div class="loading-pulse-ring"></div>
```

## Optimización y Mejores Prácticas

### 1. Reducir el Tamaño del Bundle

Si solo necesitas ciertas características:

```javascript
// windflow.config.js
module.exports = {
  features: {
    animations: true,
    themes: false, // Desactivar si no necesitas temas
    glassmorphism: true,
    gradients: false, // Desactivar si no usas gradientes
    particles: false // Desactivar efectos de partículas
  }
};
```

### 2. Modo Producción

```bash
# Construir para producción
windflow build --production
```

### 3. Integración con Frameworks

**React:**
```jsx
import 'windflow-css/dist/windflow.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold animate-fade-in">
        WindFlow + React
      </h1>
    </div>
  );
}
```

**Vue:**
```vue
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold animate-fade-in">
      WindFlow + Vue
    </h1>
  </div>
</template>

<style>
@import 'windflow-css/dist/windflow.css';
</style>
```

## Solución de Problemas Comunes

### 1. Clases que no funcionan

**Problema:** Algunas clases de Tailwind no tienen equivalente directo.

**Solución:** Usa CSS personalizado o busca alternativas en WindFlow:

```css
/* Si necesitas una clase específica de Tailwind */
.tw-backdrop-filter {
  backdrop-filter: blur(10px);
}
```

### 2. Conflictos de estilos

**Problema:** Estilos de WindFlow sobrescriben los personalizados.

**Solución:** Aumenta la especificidad o usa `!important`:

```css
.my-custom-button {
  background-color: #custom-color !important;
}
```

### 3. Performance

**Problema:** La aplicación se siente más lenta.

**Solución:** 
- Usa lazy loading para animaciones
- Desactiva características no utilizadas
- Implementa code splitting

## Recursos Adicionales

- [Documentación de WindFlow](https://windflow-css.com/docs)
- [Ejemplos en CodePen](https://codepen.io/collection/windflow)
- [GitHub Issues](https://github.com/windflow-css/windflow/issues)
- [Discord Community](https://discord.gg/windflow)

## Conclusión

Migrar de Tailwind CSS a WindFlow CSS es un proceso directo gracias a la compatibilidad de clases básicas. Las principales ventajas incluyen:

- ✨ Animaciones avanzadas listas para usar
- 🎨 Sistema de temas integrado
- 🌈 Efectos visuales modernos
- 🚀 Mejor experiencia de desarrollo

Con esta guía, deberías poder migrar tu proyecto eficientemente y aprovechar todas las características adicionales que ofrece WindFlow CSS.