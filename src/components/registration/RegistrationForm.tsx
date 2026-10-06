import { useMemo, useRef, useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowClockwise, CheckCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { EASE } from "@/lib/motion";
import {
  EMPTY_FORM,
  FIELD_NAMES,
  FIELD_VALIDATORS,
  MAX_AGE,
  MIN_AGE,
  buildWhatsAppUrl,
  validateForm,
} from "@/lib/validation";
import type { FieldErrors, FieldName, FormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Field } from "./Field";

export function RegistrationForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const errors: FieldErrors = useMemo(() => {
    const next: FieldErrors = {};
    for (const name of FIELD_NAMES) {
      if (attempted || touched[name]) {
        const error = FIELD_VALIDATORS[name](values[name]);
        if (error) next[name] = error;
      }
    }
    return next;
  }, [values, touched, attempted]);

  function handleChange(name: FieldName) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setValues((previous) => ({ ...previous, [name]: value }));
    };
  }

  function handleBlur(name: FieldName) {
    return (_event: FocusEvent<HTMLInputElement>) => {
      setTouched((previous) => ({ ...previous, [name]: true }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm(values);
    const firstInvalid = FIELD_NAMES.find((name) => validationErrors[name]);

    if (firstInvalid) {
      setAttempted(true);
      formRef.current?.querySelector<HTMLInputElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    const url = buildWhatsAppUrl(values, WHATSAPP_NUMBER);
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    window.requestAnimationFrame(() => confirmationRef.current?.focus());
  }

  function handleReset() {
    setValues(EMPTY_FORM);
    setTouched({});
    setAttempted(false);
    setWhatsAppUrl(null);
  }

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        {whatsAppUrl ? (
          <motion.div
            key="confirmation"
            ref={confirmationRef}
            tabIndex={-1}
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-ui border border-lavender-200 bg-lavender-50 p-7 sm:p-8"
          >
            <CheckCircle size={30} weight="fill" aria-hidden="true" className="text-purple-600" />
            <h2 className="mt-5 text-card font-semibold text-purple-950">Məlumatlar hazırdır</h2>
            <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-body">
              WhatsApp pəncərəsi açılmalıdır. Mesajı göndərmək üçün düymədən istifadə edin. Pəncərə
              açılmayıbsa, link yenidən istifadə oluna bilər.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                onClick={() => window.open(whatsAppUrl, "_blank", "noopener,noreferrer")}
                icon={<PaperPlaneTilt size={18} weight="fill" aria-hidden="true" />}
              >
                WhatsApp-ı aç
              </Button>
              <Button variant="outline" onClick={handleReset} icon={<ArrowClockwise size={18} aria-hidden="true" />}>
                Yeni qeydiyyat
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="grid gap-x-6 gap-y-7 sm:grid-cols-2"
          >
            <Field
              id="firstName"
              label="Ad"
              value={values.firstName}
              onChange={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              autoComplete="given-name"
              placeholder="Adınız"
              maxLength={40}
              error={errors.firstName}
            />
            <Field
              id="lastName"
              label="Soyad"
              value={values.lastName}
              onChange={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              autoComplete="family-name"
              placeholder="Soyadınız"
              maxLength={40}
              error={errors.lastName}
            />
            <Field
              id="age"
              label="Yaş"
              type="text"
              inputMode="numeric"
              value={values.age}
              onChange={handleChange("age")}
              onBlur={handleBlur("age")}
              placeholder="15"
              maxLength={3}
              hint={`Qəbul edilən aralıq: ${MIN_AGE}-${MAX_AGE} yaş.`}
              error={errors.age}
            />
            <Field
              id="phone"
              label="Əlaqə nömrəsi"
              type="tel"
              inputMode="tel"
              value={values.phone}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
              autoComplete="tel"
              placeholder="+994 00 000 00 00"
              maxLength={24}
              error={errors.phone}
            />

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" icon={<PaperPlaneTilt size={18} weight="fill" aria-hidden="true" />}>
                Qeydiyyat göndər
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
