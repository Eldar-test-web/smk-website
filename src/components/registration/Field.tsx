import type { ChangeEvent, FocusEvent } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  type?: "text" | "tel" | "number";
  inputMode?: "text" | "numeric" | "tel";
  autoComplete?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  maxLength?: number;
};

export function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  inputMode,
  autoComplete,
  placeholder,
  hint,
  error,
  maxLength,
}: FieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-[0.9375rem] font-medium text-purple-950">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={cn(
          "mt-2.5 h-12 w-full rounded-ui border bg-white px-4 text-[0.9375rem] text-purple-950 transition-colors duration-200 placeholder:text-body/75",
          error
            ? "border-purple-700 bg-lavender-50"
            : "border-lavender-200 hover:border-lavender-400 focus:border-purple-600",
        )}
      />

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-2.5 border-l-2 border-purple-600 pl-3 text-[0.8125rem] font-medium leading-relaxed text-purple-900"
        >
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="mt-2.5 text-[0.8125rem] leading-relaxed text-body">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
