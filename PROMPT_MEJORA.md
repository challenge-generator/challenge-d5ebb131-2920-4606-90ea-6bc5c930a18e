# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/features/product/ProductList.tsx` — La fase "Implementación de Roles ARIA Básicos" se implementa aqui: este archivo es el ejercicio.
- `src/features/product/ProductCard.tsx` — La fase "Aplicación de Propiedades y Estados ARIA" se implementa aqui: este archivo es el ejercicio.

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad eCommerce, Tecnología React, Advanced L2

### Brecha de conocimiento
Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web, Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web

### Reto
- Tema: Estándares Aria (Accessible Rich Internet Applications)
- Seniority: advanced-l2
- Tipo: practical
- Título: Mejora de la Accesibilidad Web con ARIA en un E-commerce
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Implementación de Roles ARIA Básicos — objetivo: Aplicar roles ARIA a elementos HTML clave para mejorar la accesibilidad. — entregable (NO resolver): Interfaz de usuario con roles ARIA aplicados a elementos clave.
- Fase 2: Aplicación de Propiedades y Estados ARIA — objetivo: Mejorar la accesibilidad mediante la aplicación de propiedades y estados ARIA a elementos interactivos. — entregable (NO resolver): Interfaz de usuario con propiedades y estados ARIA aplicados a elementos interactivos.
- Fase 3: Validación y Mejora Continua — objetivo: Validar la implementación de ARIA y realizar mejoras continuas basadas en retroalimentación. — entregable (NO resolver): Reporte de validación ARIA y plan de mejora continua.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build",
    "test": "vitest run"
  },
  "dependencies": {
    "eslint": "10.15.0",
    "eslint-plugin-jsx-a11y": "1.5.3",
    "eslint-plugin-react": "5.2.2",
    "eslint-plugin-react-hooks": "7.1.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5",
    "vitest": "4.0.18"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: src/features/product/ProductCard.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
  onAddToCart
}) => {
  throw new Error('TODO(reto): anonymous');
};

export default ProductCard;

// === ARCHIVO: src/features/cart/CartItem.tsx ===
import React from 'react';
import Button from '../../shared/components/Button';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  imageUrl,
  onRemove,
  onIncrease,
  onDecrease
}) => {
  return (
    <li
      role="listitem"
      aria-labelledby={`item-name-${id}`}
      className="cart-item"
    >
      <div className="cart-item-image">
        <img
          src={imageUrl}
          alt={`Imagen de ${name}`}
          aria-hidden="true"
        />
      </div>
      <div className="cart-item-details" id={`item-name-${id}`}>
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <Button
          onClick={onDecrease}
          aria-label={`Disminuir cantidad de ${name}`}
          aria-keyshortcuts="ArrowDown"
        >
          -
        </Button>
        <span
          role="status"
          aria-live="polite"
        >
          {quantity}
        </span>
        <Button
          onClick={onIncrease}
          aria-label={`Aumentar cantidad de ${name}`}
          aria-keyshortcuts="ArrowUp"
        >
          +
        </Button>
      </div>
      <Button
        onClick={onRemove}
        aria-label={`Eliminar ${name} del carrito`}
        className="remove-button"
      >
        Eliminar
      </Button>
    </li>
  );
};

export default CartItem;

// === ARCHIVO: src/shared/components/Button.tsx ===
import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const baseClasses = 'button';
  const variantClasses = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    danger: 'button--danger'
  };
  const sizeClasses = {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={buttonClasses}
      role="button"
      aria-disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// === ARCHIVO: src/shared/components/Modal.tsx ===
import React, { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  ariaLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  ariaLabel
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || title}
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="modal"
        tabIndex={-1}
      >
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button
            onClick={onClose}
            className="modal-close-button"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

// === ARCHIVO: src/features/product/ProductList.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

export const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  throw new Error('TODO(reto): anonymous');
};

// === ARCHIVO: src/features/cart/Cart.tsx ===
import { useState } from 'react';
import CartItem from './CartItem';
import Button from '../../shared/components/Button';
import Modal from '../../shared/components/Modal';

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartProps {
  items: CartItemData[];
  onRemove: (id: string) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onCheckout: () => void;
  onClose: () => void;
}

export const Cart = ({
  items,
  onRemove,
  onIncrease,
  onDecrease,
  onCheckout,
  onClose,
}: CartProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckoutClick = () => {
    if (items.length === 0) {
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmCheckout = () => {
    setIsModalOpen(false);
    onCheckout();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseCart();
    }
  };

  return (
    <div
      className={`cart-container ${isClosing ? 'closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      onKeyDown={handleKeyDown}
    >
      <header className="cart-header">
        <h2 id="cart-title" className="cart-title">
          Carrito de Compras
        </h2>
        <Button
          variant="secondary"
          size="small"
          onClick={handleCloseCart}
          aria-label="Cerrar carrito"
        >
          ✕
        </Button>
      </header>

      <div className="cart-summary" role="status" aria-live="polite">
        <p className="summary-text">
          <span className="sr-only">Total de productos: </span>
          <strong>{totalItems}</strong> productos
        </p>
        <p className="summary-total">
          <span className="sr-only">Precio total: </span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </p>
      </div>

      <div
        className="cart-items-container"
        role="list"
        aria-label="Items en el carrito"
      >
        {items.length === 0 ? (
          <p className="empty-cart-message" role="listitem">
            Tu carrito está vacío
          </p>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              onRemove={() => onRemove(item.id)}
              onIncrease={() => onIncrease(item.id)}
              onDecrease={() => onDecrease(item.id)}
            />
          ))
        )}
      </div>

      <footer className="cart-footer">
        <Button
          variant="primary"
          size="large"
          onClick={handleCheckoutClick}
          disabled={items.length === 0}
          aria-label={`Proceder al pago. Total: $${totalPrice.toFixed(2)}`}
        >
          Proceder al Pago
        </Button>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Confirmar Compra"
        ariaLabel="Modal de confirmación de compra"
      >
        <div className="checkout-confirmation">
          <p className="confirmation-text">
            ¿Estás seguro de que deseas proceder con la compra?
          </p>
          <div className="confirmation-summary">
            <p>
              <strong>Total de items:</strong> {totalItems}
            </p>
            <p>
              <strong>Total a pagar:</strong> ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="confirmation-actions">
            <Button
              variant="secondary"
              onClick={handleCloseModal}
              aria-label="Cancelar compra"
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={handleConfirmCheckout}
              aria-label="Confirmar compra"
            >
              Confirmar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// === ARCHIVO: src/features/checkout/CheckoutForm.tsx ===
import { useState, FormEvent } from 'react';
import Button from '../../shared/components/Button';

interface CheckoutFormProps {
  totalAmount: number;
  onSubmit: (data: CheckoutData) => void;
  onCancel: () => void;
}

export interface CheckoutData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  billingAddress: string;
}

interface FormErrors {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  billingAddress?: string;
}

export const CheckoutForm = ({
  totalAmount,
  onSubmit,
  onCancel,
}: CheckoutFormProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateCardNumber = (value: string): boolean => {
    const cleaned = value.replace(/\s/g, '');
    return /^\d{16}$/.test(cleaned);
  };

  const validateExpiryDate = (value: string): boolean => {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
  };

  const validateCvv = (value: string): boolean => {
    return /^\d{3,4}$/.test(value);
  };

  const validateCardHolder = (value: string): boolean => {
    return value.trim().length >= 3;
  };

  const validateBillingAddress = (value: string): boolean => {
    return value.trim().length >= 10;
  };

  const formatCardNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '').slice(0, 16);
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const formatExpiryDate = (value: string): string => {
    const cleaned = value.replace(/\D/g, '').slice(0, 4);
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    if (errors.cardNumber) {
      setErrors((prev) => ({ ...prev, cardNumber: undefined }));
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
    if (errors.expiryDate) {
      setErrors((prev) => ({ ...prev, expiryDate: undefined }));
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCvv(cleaned);
    if (errors.cvv) {
      setErrors((prev) => ({ ...prev, cvv: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = 'El número de tarjeta debe tener 16 dígitos';
    }
    if (!validateCardHolder(cardHolder)) {
      newErrors.cardHolder = 'El nombre del titular debe tener al menos 3 caracteres';
    }
    if (!validateExpiryDate(expiryDate)) {
      newErrors.expiryDate = 'La fecha debe tener formato MM/AA';
    }
    if (!validateCvv(cvv)) {
      newErrors.cvv = 'El CVV debe tener 3 o 4 dígitos';
    }
    if (!validateBillingAddress(billingAddress)) {
      newErrors.billingAddress = 'La dirección debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField instanceof HTMLElement) {
        firstErrorField.focus();
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      onSubmit({
        cardNumber: cardNumber.replace(/\s/g, ''),
        cardHolder,
        expiryDate,
        cvv,
        billingAddress,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const getInputAriaDescribedBy = (fieldName: string): string => {
    return `${fieldName}-error`;
  };

  return (
    <div
      className="checkout-form-container"
      role="form"
      aria-labelledby="checkout-title"
      aria-describedby="checkout-description"
    >
      <header className="checkout-header">
        <h2 id="checkout-title" className="checkout-title">
          Finalizar Compra
        </h2>
        <p id="checkout-description" className="checkout-description">
          Ingresa los datos de tu tarjeta de crédito o débito
        </p>
      </header>

      <div className="checkout-total" role="status" aria-live="polite">
        <span className="total-label">Total a pagar:</span>
        <span className="total-amount">${totalAmount.toFixed(2)}</span>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form" noValidate>
        <div className="form-group">
          <label htmlFor="card-number" className="form-label">
            Número de Tarjeta
          </label>
          <input
            id="card-number"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            className={`form-input ${errors.cardNumber ? 'error' : ''}`}
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            aria-required="true"
            aria-invalid={!!errors.cardNumber}
            aria-describedby={getInputAriaDescribedBy('card-number')}
            aria-label="Número de tarjeta, 16 dígitos"
          />
          {errors.cardNumber && (
            <p
              id={getInputAriaDescribedBy('card-number')}
              className="error-message"
              role="alert"
              aria-live="assertive"
            >
              {errors.cardNumber}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="card-holder" className="form-label">
            Nombre del Titular
          </label>
          <input
            id="card-holder"
            type="text"
            autoComplete="cc-name"
            className={`form-input ${errors.cardHolder ? 'error' : ''}`}
            value={cardHolder}
            onChange={(e) => {
              setCardHolder(e.target.value);
              if (errors.cardHolder) {
                setErrors((prev) => ({ ...prev, cardHolder: undefined }));
              }
            }}
            placeholder="Nombre completo como aparece en la tarjeta"
            aria-required="true"
            aria-invalid={!!errors.cardHolder}
            aria-describedby={getInputAriaDescribedBy('card-holder')}
            aria-label="Nombre del titular de la tarjeta"
          />
          {errors.cardHolder && (
            <p
              id={getInputAriaDescribedBy('card-holder')}
              className="error-message"
              role="alert"
              aria-live="assertive"
            >
              {errors.cardHolder}
            </p>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry-date" className="form-label">
              Fecha de Vencimiento
            </label>
            <input
              id="expiry-date"
              type="text"
              inputMode="numeric"
              autoComplete="cc-exp"
              className={`form-input ${errors.expiryDate ? 'error' : ''}`}
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/AA"
              aria-required="true"
              aria-invalid={!!errors.expiryDate}
              aria-describedby={getInputAriaDescribedBy('expiry-date')}
              aria-label="Fecha de vencimiento, formato mes año"
            />
            {errors.expiryDate && (
              <p
                id={getInputAriaDescribedBy('expiry-date')}
                className="error-message"
                role="alert"
                aria-live="assertive"
              >
                {errors.expiryDate}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="cvv" className="form-label">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              inputMode="numeric"
              autoComplete="cc-csc"
              className={`form-input ${errors.cvv ? 'error' : ''}`}
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              aria-required="true"
              aria-invalid={!!errors.cvv}
              aria-describedby={getInputAriaDescribedBy('cvv')}
              aria-label="Código de seguridad de 3 o 4 dígitos"
            />
            {errors.cvv && (
              <p
                id={getInputAriaDescribedBy('cvv')}
                className="error-message"
                role="alert"
                aria-live="assertive"
              >
                {errors.cvv}
              </p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="billing-address" className="form-label">
            Dirección de Facturación
          </label>
          <textarea
            id="billing-address"
            autoComplete="street-address"
            className={`form-input form-textarea ${errors.billingAddress ? 'error' : ''}`}
            value={billingAddress}
            onChange={(e) => {
              setBillingAddress(e.target.value);
              if (errors.billingAddress) {
                setErrors((prev) => ({ ...prev, billingAddress: undefined }));
              }
            }}
            placeholder="Ingresa tu dirección completa"
            rows={3}
            aria-required="true"
            aria-invalid={!!errors.billingAddress}
            aria-describedby={getInputAriaDescribedBy('billing-address')}
            aria-label="Dirección de facturación"
          />
          {errors.billingAddress && (
            <p
              id={getInputAriaDescribedBy('billing-address')}
              className="error-message"
              role="alert"
              aria-live="assertive"
            >
              {errors.billingAddress}
            </p>
          )}
        </div>

        <div className="form-actions" role="group" aria-label="Acciones del formulario">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            aria-label="Cancelar y volver al carrito"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            aria-label={isSubmitting ? 'Procesando pago' : `Pagar $${totalAmount.toFixed(2)}`}
          >
            {isSubmitting ? 'Procesando...' : `Pagar $${totalAmount.toFixed(2)}`}
          </Button>
        </div>
      </form>
    </div>
  );
};

// === ARCHIVO: src/shared/hooks/useAria.ts ===
import { useCallback, useId, useMemo, useState } from 'react';

export interface AriaAttributes {
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaHidden?: boolean;
  ariaDisabled?: boolean;
  ariaExpanded?: boolean;
  ariaPressed?: boolean;
  ariaChecked?: boolean;
  ariaSelected?: boolean;
  ariaCurrent?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
  ariaLive?: 'off' | 'polite' | 'assertive';
  ariaAtomic?: boolean;
  ariaBusy?: boolean;
  ariaControls?: string;
  ariaOwns?: string;
  ariaFlowTo?: string;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
  ariaReadOnly?: boolean;
  ariaRelevant?: string;
  ariaValueNow?: number;
  ariaValueMin?: number;
  ariaValueMax?: number;
  ariaValueText?: string;
}

export interface UseAriaOptions {
  label?: string;
  describedBy?: string;
  hidden?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  pressed?: boolean;
  checked?: boolean;
  selected?: boolean;
  current?: AriaAttributes['ariaCurrent'];
  live?: AriaAttributes['ariaLive'];
  atomic?: boolean;
  busy?: boolean;
  controls?: string | string[];
  owns?: string | string[];
  required?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  role?: string;
}

export interface UseAriaReturn {
  id: string;
  labelId: string;
  descriptionId: string;
  ariaProps: AriaAttributes;
  getAriaLabel: (suffix?: string) => string;
  getAriaDescribedBy: (additionalIds?: string[]) => string;
  setExpanded: (value: boolean) => void;
  setPressed: (value: boolean) => void;
  setChecked: (value: boolean) => void;
  setSelected: (value: boolean) => void;
  setInvalid: (value: boolean) => void;
  toggleExpanded: () => void;
  togglePressed: () => void;
}

export function useAria(options: UseAriaOptions = {}): UseAriaReturn {
  const generatedId = useId();
  const labelId = useMemo(() => `${generatedId}-label`, [generatedId]);
  const descriptionId = useMemo(() => `${generatedId}-description`, [generatedId]);

  const [expanded, setExpandedState] = useState<boolean>(options.expanded ?? false);
  const [pressed, setPressedState] = useState<boolean>(options.pressed ?? false);
  const [checked, setCheckedState] = useState<boolean>(options.checked ?? false);
  const [selected, setSelectedState] = useState<boolean>(options.selected ?? false);
  const [invalid, setInvalidState] = useState<boolean>(options.invalid ?? false);

  const setExpanded = useCallback((value: boolean) => {
    setExpandedState(value);
  }, []);

  const setPressed = useCallback((value: boolean) => {
    setPressedState(value);
  }, []);

  const setChecked = useCallback((value: boolean) => {
    setCheckedState(value);
  }, []);

  const setSelected = useCallback((value: boolean) => {
    setSelectedState(value);
  }, []);

  const setInvalid = useCallback((value: boolean) => {
    setInvalidState(value);
  }, []);

  const toggleExpanded = useCallback(() => {
    setExpandedState(prev => !prev);
  }, []);

  const togglePressed = useCallback(() => {
    setPressedState(prev => !prev);
  }, []);

  const getAriaLabel = useCallback((suffix?: string): string => {
    if (options.label) {
      return suffix ? `${options.label} ${suffix}` : options.label;
    }
    return '';
  }, [options.label]);

  const getAriaDescribedBy = useCallback((additionalIds?: string[]): string => {
    const ids: string[] = [];
    if (options.describedBy) {
      ids.push(descriptionId);
    }
    if (additionalIds && additionalIds.length > 0) {
      ids.push(...additionalIds);
    }
    return ids.join(' ');
  }, [options.describedBy, descriptionId]);

  const ariaProps = useMemo((): AriaAttributes => {
    const props: AriaAttributes = {};

    if (options.role) {
      props.role = options.role;
    }

    if (options.label) {
      props.ariaLabel = options.label;
      props.ariaLabelledBy = labelId;
    }

    if (options.describedBy) {
      props.ariaDescribedBy = descriptionId;
    }

    if (options.hidden !== undefined) {
      props.ariaHidden = options.hidden;
    }

    if (options.disabled !== undefined) {
      props.ariaDisabled = options.disabled;
    }

    if (options.role !== 'combobox') {
      props.ariaExpanded = expanded;
    }

    if (options.role === 'button' || options.role === 'menuitemcheckbox') {
      props.ariaPressed = pressed;
    }

    if (options.role === 'checkbox' || options.role === 'menuitemcheckbox' || options.role === 'radio') {
      props.ariaChecked = checked;
    }

    if (options.role === 'option' || options.role === 'tab') {
      props.ariaSelected = selected;
    }

    if (options.current) {
      props.ariaCurrent = options.current;
    }

    if (options.live) {
      props.ariaLive = options.live;
    }

    if (options.atomic !== undefined) {
      props.ariaAtomic = options.atomic;
    }

    if (options.busy !== undefined) {
      props.ariaBusy = options.busy;
    }

    if (options.controls) {
      const controlsArray = Array.isArray(options.controls) 
        ? options.controls 
        : [options.controls];
      props.ariaControls = controlsArray.join(' ');
    }

    if (options.owns) {
      const ownsArray = Array.isArray(options.owns) 
        ? options.owns 
        : [options.owns];
      props.ariaOwns = ownsArray.join(' ');
    }

    if (options.required !== undefined) {
      props.ariaRequired = options.required;
    }

    if (options.invalid !== undefined || invalid) {
      props.ariaInvalid = invalid;
    }

    if (options.readOnly !== undefined) {
      props.ariaReadOnly = options.readOnly;
    }

    return props;
  }, [
    options.role,
    options.label,
    options.describedBy,
    options.hidden,
    options.disabled,
    options.live,
    options.atomic,
    options.busy,
    options.controls,
    options.owns,
    options.required,
    options.readOnly,
    labelId,
    descriptionId,
    expanded,
    pressed,
    checked,
    selected,
    invalid
  ]);

  return {
    id: generatedId,
    labelId,
    descriptionId,
    ariaProps,
    getAriaLabel,
    getAriaDescribedBy,
    setExpanded,
    setPressed,
    setChecked,
    setSelected,
    setInvalid,
    toggleExpanded,
    togglePressed,
  };
}

export function useAriaButton(options: UseAriaOptions & { 
  onPress?: () => void;
  isToggle?: boolean;
} = {}): UseAriaReturn & { buttonProps: AriaAttributes & { onClick?: () => void } } {
  const aria = useAria({
    ...options,
    role: options.role || 'button',
  });

  const buttonProps = useMemo(() => ({
    ...aria.ariaProps,
    onClick: options.isToggle 
      ? () => aria.togglePressed()
      : options.onPress,
  }), [aria.ariaProps, options.onPress, options.isToggle, aria.togglePressed]);

  return {
    ...aria,
    buttonProps,
  };
}

export function useAriaDialog(options: UseAriaOptions & {
  modal?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
} = {}): UseAriaReturn & { 
  dialogProps: AriaAttributes; 
  overlayProps: AriaAttributes;
} {
  const aria = useAria({
    ...options,
    role: options.role || 'dialog',
  });

  const dialogProps = useMemo((): AriaAttributes => ({
    ...aria.ariaProps,
  }), [aria.ariaProps]);

  const overlayProps: AriaAttributes = useMemo(() => ({
    ariaHidden: true,
  }), []);

  return {
    ...aria,
    dialogProps,
    overlayProps,
  };
}

export function useAriaList(options: UseAriaOptions & {
  items?: number;
  orientation?: 'horizontal' | 'vertical';
} = {}): UseAriaReturn & { listProps: AriaAttributes } {
  const aria = useAria({
    ...options,
    role: options.role || 'list',
  });

  const listProps = useMemo((): AriaAttributes => ({
    ...aria.ariaProps,
  }), [aria.ariaProps]);

  return {
    ...aria,
    listProps,
  };
}

export function useAriaMenu(options: UseAriaOptions & {
  orientation?: 'horizontal' | 'vertical';
  hasPopup?: boolean;
} = {}): UseAriaReturn & { menuProps: AriaAttributes } {
  const aria = useAria({
    ...options,
    role: options.role || 'menu',
  });

  const menuProps = useMemo((): AriaAttributes => ({
    ...aria.ariaProps,
  }), [aria.ariaProps]);

  return {
    ...aria,
    menuProps,
  };
}

export function useAriaMenuItem(options: UseAriaOptions & {
  isDisabled?: boolean;
  hasPopup?: boolean | 'menu' | 'dialog' | 'tree' | 'grid' | 'listbox';
} = {}): UseAriaReturn & { menuItemProps: AriaAttributes } {
  const aria = useAria({
    ...options,
    role: options.role || 'menuitem',
    disabled: options.isDisabled,
  });

  const menuItemProps = useMemo((): AriaAttributes => ({
    ...aria.ariaProps,
  }), [aria.ariaProps]);

  return {
    ...aria,
    menuItemProps,
  };
}

// === ARCHIVO: src/index.scss ===
/* Estilos pendientes: archivo creado automaticamente porque otro modulo lo importa. */


// === ARCHIVO: src/App.tsx ===
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductList } from './features/product/ProductList';
import { Cart } from './features/cart/Cart';
import { CheckoutForm } from './features/checkout/CheckoutForm';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }>>([]);

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleIncreaseQuantity = (id: string) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems(prev => prev.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const handleCheckout = () => {
    console.log('Processing checkout...');
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={[]}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              onRemove={handleRemoveFromCart}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              onCheckout={handleCheckout}
              onClose={() => window.history.back()}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutForm
              totalAmount={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              onSubmit={(data) => console.log('Checkout data:', data)}
              onCancel={() => window.history.back()}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
```
