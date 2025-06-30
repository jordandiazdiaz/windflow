# WindFlow CSS - Source Code Structure

Esta carpeta contiene el código fuente modular de WindFlow CSS, organizado por funcionalidad para facilitar el mantenimiento y la extensión.

## 📁 Estructura de Archivos

```
src/
├── core/                    # Estilos fundamentales
│   ├── reset.js            # Reset CSS moderno
│   └── base.js             # Contenedores y layouts base
│
├── utilities/              # Clases utilitarias
│   ├── animations.js       # 50+ animaciones avanzadas
│   ├── borders.js          # Bordes, rings y radius
│   ├── colors.js           # Colores de texto, fondo y bordes
│   ├── effects.js          # Sombras, opacidad, blend modes
│   ├── filters.js          # Filtros y backdrop filters
│   ├── gradients.js        # Gradientes lineales, radiales y cónicos
│   ├── layout.js           # Flexbox y Grid
│   ├── modern.js           # CSS moderno (clip-path, aspect-ratio, etc.)
│   ├── responsive.js       # Variantes responsivas y dark mode
│   ├── spacing.js          # Margin, padding, gap
│   ├── transforms.js       # Transformaciones 2D y 3D
│   └── typography.js       # Tipografía y texto
│
├── components/             # Componentes temáticos
│   └── themes.js           # Sistema de temas y componentes específicos
│
├── themes/                 # Definiciones de temas
│   └── themes.js           # 8 temas predefinidos
│
└── config/                 # Configuración
    ├── index.js            # Validación y gestión de configuración
    └── README.md           # Esta documentación
```

## 🚀 Arquitectura Modular

### Core (Estilos Fundamentales)
- **reset.js**: Reset CSS moderno con valores sensatos por defecto
- **base.js**: Contenedores y clases fundamentales de layout

### Utilities (Clases Utilitarias)
Cada archivo genera un conjunto específico de utilidades CSS:

- **animations.js**: Sistema de animaciones más avanzado que Tailwind
  - 50+ animaciones predefinidas
  - Efectos de texto (typewriter, glitch, neon)
  - Componentes de carga (dots, spinner, bars)
  - Efectos hover para botones y tarjetas

- **transforms.js**: Transformaciones 2D y 3D
  - Rotaciones en todos los ejes (X, Y, Z)
  - Perspectiva y transform-style preserve-3d
  - Backface visibility para efectos flip

- **gradients.js**: Gradientes avanzados
  - Gradientes cónicos y radiales
  - Posicionamiento preciso
  - Efectos mesh y aurora

- **modern.js**: Características CSS modernas
  - Clip-path con 15+ formas predefinidas
  - Container queries
  - Scroll snap
  - Aspect ratio

### Components (Componentes)
- **themes.js**: Sistema de temas completo con CSS custom properties y componentes específicos por tema

### Themes (Temas)
- **themes.js**: Definiciones de los 8 temas predefinidos con colores y gradientes

## 🔧 Cómo Añadir Nuevas Utilidades

### 1. Crear un nuevo archivo de utilidad
```javascript
// src/utilities/nueva-utilidad.js
module.exports = function generateNuevaUtilidad(config) {
  let output = [];
  output.push('/* Nueva Utilidad */');
  
  // Generar CSS aquí
  output.push('.nueva-clase { propiedad: valor; }');
  
  return output.join('\n');
};
```

### 2. Importar en build.js
```javascript
// scripts/build.js
const generateNuevaUtilidad = require('../src/utilities/nueva-utilidad.js');

// En el método generateCSS()
this.output.push(generateNuevaUtilidad(this.config));
```

## 🎨 Cómo Añadir Nuevos Temas

### 1. Editar themes.js
```javascript
// src/themes/themes.js
const themes = {
  // ... temas existentes
  nuevoTema: {
    name: 'Nuevo Tema',
    description: 'Descripción del tema',
    colors: {
      primary: '#color',
      secondary: '#color',
      // ... más colores
    },
    gradients: {
      hero: 'linear-gradient(...)',
      // ... más gradientes
    }
  }
};
```

### 2. Los componentes se generan automáticamente
El sistema generará automáticamente:
- Variables CSS (`--wf-primary`, etc.)
- Clases utilitarias (`.text-theme-primary`, etc.)
- Componentes específicos del tema

## 🔍 Sistema de Configuración

El archivo `config/index.js` proporciona:
- Validación de configuración
- Merge profundo con configuración por defecto
- Documentación de opciones disponibles

## 🏗️ Proceso de Build

1. **Modular**: Cada funcionalidad en su propio archivo
2. **Configurable**: Toda la configuración pasa como parámetro
3. **Extensible**: Fácil añadir nuevas utilidades
4. **Mantenible**: Código organizado y documentado

## 📊 Beneficios de la Arquitectura Modular

- ✅ **Mantenibilidad**: Cada funcionalidad aislada
- ✅ **Extensibilidad**: Fácil añadir nuevas características
- ✅ **Debugging**: Errores fáciles de localizar
- ✅ **Colaboración**: Múltiples desarrolladores pueden trabajar en paralelo
- ✅ **Testing**: Cada módulo se puede probar independientemente
- ✅ **Performance**: Solo cargar lo que necesitas (futuro tree-shaking)

## 🚀 Próximos Pasos

1. **Tree-shaking**: Permitir cargar solo las utilidades necesarias
2. **Plugin system**: Sistema de plugins para extensiones de terceros
3. **Build optimizations**: Optimizaciones avanzadas de CSS
4. **Component presets**: Presets de componentes comunes