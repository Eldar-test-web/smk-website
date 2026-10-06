import { HOME } from "@/data/content";
import { cn } from "@/lib/cn";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";

export function IntroSection() {
  const [first, second] = HOME.intro.paragraphs;

  return (
    <Section tone="white">
      <PageContainer>
        <AnimatedSection>
          <h2 className="max-w-[16ch] text-section font-semibold">{HOME.intro.title}</h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-12 lg:gap-10">
          <AnimatedSection className="lg:col-span-6">
            <p className="max-w-[54ch] text-[1.0625rem] leading-[1.7] text-body">{first}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className={cn("lg:col-span-5 lg:col-start-8")}>
            <p className="max-w-[54ch] text-[1.0625rem] leading-[1.7] text-body">{second}</p>
          </AnimatedSection>
        </div>
      </PageContainer>
    </Section>
  );
}
