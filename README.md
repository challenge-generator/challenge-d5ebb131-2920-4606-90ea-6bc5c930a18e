# Mejora de la Accesibilidad Web con ARIA en un E-commerce

El equipo de desarrollo de un sitio de e-commerce ha identificado la necesidad de mejorar la accesibilidad de la interfaz de usuario para usuarios con discapacidades. El objetivo es aplicar conscientemente los conceptos de los estándares ARIA para hacer que la navegación y la interacción con el sitio sean más accesibles. Los actores involucrados son los Usuarios Finales, el Equipo de Desarrollo y el Equipo de Calidad. El sistema debe manejar correctamente los roles, propiedades y estados ARIA para elementos clave como botones, formularios y secciones de contenido.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Estándares Aria (Accessible Rich Internet Applications) |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Implementación de Roles ARIA Básicos

**Objetivo:** Aplicar roles ARIA a elementos HTML clave para mejorar la accesibilidad.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar elementos HTML que requieren roles ARIA para mejorar la accesibilidad.
- Aplicar roles ARIA adecuados a los elementos identificados.
- Verificar que los roles ARIA aplicados mejoran la experiencia de usuarios con discapacidades.

**Entregable:** Interfaz de usuario con roles ARIA aplicados a elementos clave.

<details>
<summary>Pistas de conocimiento</summary>

- La importancia de los roles ARIA en la accesibilidad web.
- Cómo seleccionar el rol ARIA adecuado para diferentes elementos HTML.

</details>

### Fase 2: Aplicación de Propiedades y Estados ARIA

**Objetivo:** Mejorar la accesibilidad mediante la aplicación de propiedades y estados ARIA a elementos interactivos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Identificar elementos interactivos que requieren propiedades y estados ARIA.
- Aplicar propiedades y estados ARIA adecuados a estos elementos.
- Verificar que las propiedades y estados ARIA aplicados mejoran la accesibilidad.

**Entregable:** Interfaz de usuario con propiedades y estados ARIA aplicados a elementos interactivos.

<details>
<summary>Pistas de conocimiento</summary>

- La diferencia entre propiedades y estados ARIA y cuándo usar cada uno.
- Cómo aplicar propiedades y estados ARIA para mejorar la accesibilidad.

</details>

### Fase 3: Validación y Mejora Continua

**Objetivo:** Validar la implementación de ARIA y realizar mejoras continuas basadas en retroalimentación.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Utilizar herramientas de validación ARIA para verificar la implementación.
- Recopilar retroalimentación de usuarios con discapacidades.
- Realizar mejoras continuas basadas en la retroalimentación y las pruebas de validación.

**Entregable:** Reporte de validación ARIA y plan de mejora continua.

<details>
<summary>Pistas de conocimiento</summary>

- Herramientas y métodos para validar la implementación de ARIA.
- Cómo recopilar y analizar retroalimentación de usuarios con discapacidades.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los estándares ARIA y por qué son importantes para la accesibilidad web?
- **paraQueSirve**: ¿Cómo aplican los roles, propiedades y estados ARIA a elementos HTML para mejorar la accesibilidad?
- **comoSeUsa**: ¿Cómo seleccionas y aplicas roles, propiedades y estados ARIA adecuados a diferentes elementos HTML?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar ARIA y cómo los evitas?
- **queDecisionesImplica**: ¿Qué decisiones tomas al realizar mejoras continuas basadas en retroalimentación y pruebas de validación?

## Criterios de Evaluacion

- Implementación correcta de roles ARIA en elementos HTML clave.
- Aplicación adecuada de propiedades y estados ARIA a elementos interactivos.
- Uso de herramientas de validación ARIA para verificar la implementación.
- Recopilación y análisis de retroalimentación de usuarios con discapacidades para realizar mejoras continuas.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
