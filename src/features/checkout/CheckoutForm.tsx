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