import { HOME } from "@/data/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import clubPhoto from "@/assets/images/club-students.jpg";

export function ActivitySection() {
  return (
    <Section tone="paper" className="border-t border-lavender-200">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <AnimatedSection className="lg:col-span-7">
            <figure className="overflow-hidden rounded-ui border border-lavender-200">
              <div className="relative">
                <img
                  src={clubPhoto}
                  alt="Məktəb şagirdləri birgə çalışarkən"
                  width={1400}
                  height={919}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover saturate-[0.55]"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-purple-600/25 mix-blend-color" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-purple-950/20" />
              </div>
            </figure>
          </AnimatedSection>

          <div className="lg:col-span-4 lg:col-start-9">
            <AnimatedSection>
              <h2 className="text-section font-semibold">{HOME.scope.title}</h2>
            </AnimatedSection>

            <ul className="mt-9 border-t border-lavender-200">
              {HOME.scope.items.map((item, index) => (
                <li key={item.title} className="border-b border-lavender-200 py-6">
                  <AnimatedSection delay={0.06 * index}>
                    <h3 className="text-card font-semibold">{item.title}</h3>
                    <p className="mt-2.5 max-w-[38ch] text-[0.9375rem] leading-relaxed text-body">
                      {item.description}
                    </p>
                  </AnimatedSection>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
