export const MIN_AGE = 6;
export const MAX_AGE = 30;

export type FieldName = "firstName" | "lastName" | "age" | "phone";

export type FormValues = Record<FieldName, string>;

export type FieldErrors = Partial<Record<FieldName, string>>;

export const FIELD_NAMES: FieldName[] = ["firstName", "lastName", "age", "phone"];

export const EMPTY_FORM: FormValues = {
  firstName: "",
  lastName: "",
  age: "",
  phone: "",
};

const MIN_NAME_LENGTH = 2;
const MIN_PHONE_DIGITS = 8;

function validateName(value: string, label: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return `${label} qeyd edin.`;
  if (trimmed.length < MIN_NAME_LENGTH) {
    return `${label} ən azı ${MIN_NAME_LENGTH} simvoldan ibarət olmalıdır.`;
  }
  return undefined;
}

function validateAge(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Yaşı qeyd edin.";
  if (!/^\d+$/.test(trimmed)) return "Yaş yalnız rəqəm daxil edilməlidir.";
  const age = Number(trimmed);
  if (age < MIN_AGE || age > MAX_AGE) {
    return `Yaş ${MIN_AGE} ilə ${MAX_AGE} arasında olmalıdır.`;
  }
  return undefined;
}

function validatePhone(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Əlaqə nömrəsini qeyd edin.";
  if (trimmed.replace(/\D/g, "").length < MIN_PHONE_DIGITS) {
    return `Əlaqə nömrəsi düzgün deyil (ən azı ${MIN_PHONE_DIGITS} rəqəm).`;
  }
  return undefined;
}

export const FIELD_VALIDATORS: Record<FieldName, (value: string) => string | undefined> = {
  firstName: (value) => validateName(value, "Adı"),
  lastName: (value) => validateName(value, "Soyadı"),
  age: validateAge,
  phone: validatePhone,
};

export function validateForm(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  for (const name of FIELD_NAMES) {
    const error = FIELD_VALIDATORS[name](values[name]);
    if (error) errors[name] = error;
  }
  return errors;
}

export function buildWhatsAppUrl(values: FormValues, whatsappNumber: string): string {
  const message = `Salam, SMK klubuna qeydiyyatdan keçmək istəyirəm. Ad: ${values.firstName.trim()}, Soyad: ${values.lastName.trim()}, Yaş: ${values.age.trim()}, Əlaqə nömrəsi: ${values.phone.trim()}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
