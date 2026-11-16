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