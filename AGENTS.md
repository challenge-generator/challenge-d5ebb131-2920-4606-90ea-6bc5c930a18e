# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Mejora de la Accesibilidad Web con ARIA en un E-commerce**.

| | |
|---|---|
| Tema | Estándares Aria (Accessible Rich Internet Applications) |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | componentes reutilizables con patron contenedor/presentacional |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- eslint 10.15.0
- eslint-plugin-jsx-a11y 1.5.3
- eslint-plugin-react 5.2.2
- eslint-plugin-react-hooks 7.1.1
- react 18.3.1
- react-dom 18.3.1
- vitest 4.0.18
- @types/react 18.3.31
- @types/react-dom 18.3.7
- @vitejs/plugin-react 4.7.0
- typescript 5.7.3
- vite 5.4.21

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Implementación de Roles ARIA Básicos**: Interfaz de usuario con roles ARIA aplicados a elementos clave.
- **Fase 2 — Aplicación de Propiedades y Estados ARIA**: Interfaz de usuario con propiedades y estados ARIA aplicados a elementos interactivos.
- **Fase 3 — Validación y Mejora Continua**: Reporte de validación ARIA y plan de mejora continua.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/features/product/ProductList.tsx` — La fase "Implementación de Roles ARIA Básicos" se implementa aqui: este archivo es el ejercicio.
- [ ] `src/features/product/ProductCard.tsx` — La fase "Aplicación de Propiedades y Estados ARIA" se implementa aqui: este archivo es el ejercicio.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (16)

- `src/main.tsx`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `src/features/product/ProductCard.tsx`
- `src/features/cart/CartItem.tsx`
- `src/shared/components/Button.tsx`
- `src/shared/components/Modal.tsx`
- `src/features/product/ProductList.tsx`
- `src/features/cart/Cart.tsx`
- `src/features/checkout/CheckoutForm.tsx`
- `src/shared/hooks/useAria.ts`
- `src/index.scss`
- `src/App.tsx`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/features/product` (presente)
- `src/features/cart` (presente)
- `src/features/checkout` (presente)
- `src/shared/components` (presente)
- `src/shared/hooks` (presente)
- `src/shared/utils` (ausente)
- `src/styles` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **componentes reutilizables con patron contenedor/presentacional**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad eCommerce, Tecnología React, Advanced L2
- Brecha que el reto ataca: Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web, Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
