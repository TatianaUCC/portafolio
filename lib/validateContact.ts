// Expresiones regulares
const ONLY_LETTERS = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/
const VALID_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface FormValues {
  name: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function validateField(field: keyof FormValues, value: string): string | undefined {
  switch (field) {
    case 'name':
      if (!value.trim()) return 'El nombre es obligatorio.'
      if (/\s/.test(value)) return 'El nombre no debe contener espacios.'
      if (!ONLY_LETTERS.test(value)) return 'Solo se permiten letras (sin números ni caracteres especiales).'
      return undefined

    case 'email':
      if (!value.trim()) return 'El email es obligatorio.'
      if (/\s/.test(value)) return 'El email no debe contener espacios.'
      if (!VALID_EMAIL.test(value)) return 'Ingresa un email válido (ej: nombre@dominio.com).'
      return undefined

    case 'message':
      if (!value.trim()) return 'El mensaje no puede estar vacío.'
      if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.'
      return undefined
  }
}

export function validateAll(values: FormValues): FormErrors {
  return {
    name: validateField('name', values.name),
    email: validateField('email', values.email),
    message: validateField('message', values.message),
  }
}

export function isFormValid(errors: FormErrors): boolean {
  return !errors.name && !errors.email && !errors.message
}
