// Server-side validation only — the Build Brief requires every form to
// work with JavaScript disabled, so validation cannot live in the
// browser alone. Kind, plain-language errors, per Build Brief v2 §6.

export interface FieldError {
  field: string;
  message: string;
}

/**
 * Returns the first missing required field as a plain-language error,
 * or null if everything required is present. `labels` maps a field
 * name to the kind sentence shown to the visitor (matching the
 * Specification's own example: "We need your mailing address to send
 * the booklet.").
 */
export function firstMissingField(
  formData: FormData,
  required: string[],
  labels: Record<string, string>
): FieldError | null {
  for (const field of required) {
    const value = formData.get(field);
    if (typeof value !== 'string' || value.trim() === '') {
      return { field, message: labels[field] ?? `Please fill in ${field.replace(/_/g, ' ')}.` };
    }
  }
  return null;
}

export function isHoneypotFilled(formData: FormData): boolean {
  const value = formData.get('website');
  return typeof value === 'string' && value.trim() !== '';
}

export function str(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === 'string' ? value.trim() : '';
}
