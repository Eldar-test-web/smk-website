import { REGISTRATION_PAGE } from "@/data/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import { RegistrationForm } from "@/components/registration/RegistrationForm";

export default function Registration() {
  return (
    <>
      <PageHeader title="Qeydiyyat" description={REGISTRATION_PAGE.description} />

      <Section tone="white">
        <PageContainer>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <RegistrationForm />
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-lavender-200 pt-7">
                <h2 className="text-card font-semibold">Qeydiyyat necə işləyir</h2>
                <ol className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-body">
                  {REGISTRATION_PAGE.steps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="shrink-0 pt-0.5 text-[0.8125rem] font-semibold tabular-nums text-purple-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
