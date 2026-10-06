import { ArrowLeft } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section tone="white" className="flex min-h-[70svh] items-center">
      <PageContainer>
        <p className="text-label font-medium uppercase text-purple-500">404</p>
        <h1 className="mt-6 max-w-[18ch] text-page font-semibold">Səhifə tapılmadı</h1>
        <p className="mt-6 max-w-[46ch] text-lead text-body">
          Axtardığınız səhifə mövcud deyil və ya ünvan dəyişib.
        </p>
        <div className="mt-10">
          <Button to="/" variant="outline" icon={<ArrowLeft size={18} weight="bold" aria-hidden="true" />}>
            Ana səhifəyə qayıt
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
}
