import { motion } from "framer-motion";
import { PageContainer } from "@/components/ui/PageContainer";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { EASE } from "@/lib/motion";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-purple-950 text-white">
      <AuroraBackdrop />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_90%_at_6%_0%,transparent_20%,rgb(23_4_38/80%)_100%)]"
      />
      <PageContainer className="relative pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h1 className="max-w-4xl text-page font-semibold">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-[46ch] text-lead text-white/65">{description}</p>
          ) : null}
        </motion.div>
      </PageContainer>
    </section>
  );
}
