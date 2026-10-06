import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { HOME } from "@/data/content";
import { SITE } from "@/lib/site";
import { EASE, fade, fadeUp, staggerParent } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Logo, LogoMark } from "@/components/ui/Logo";
import { PageContainer } from "@/components/ui/PageContainer";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-purple-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_80%_at_6%_0%,var(--color-purple-800)_0%,rgba(21,3,36,0)_60%),radial-gradient(85%_65%_at_100%_100%,var(--color-purple-700)_0%,rgba(21,3,36,0)_62%)]"
      />

      <PageContainer className="relative flex min-h-[100svh] flex-1 flex-col pt-20 sm:pt-24 lg:pt-28">
        <div className="grid flex-1 items-end gap-10 pb-8 pt-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-0 lg:pt-0">
          <motion.div
            className="lg:col-span-8"
            variants={staggerParent(0.09)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <Logo size="lg" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-8 max-w-[20ch] text-display font-semibold sm:mt-12">
              {SITE.fullName}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-[52ch] text-lead text-white/70 sm:mt-7">
              {HOME.heroText}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 sm:mt-10">
              <Button
                to="/registration"
                size="lg"
                variant="onDark"
                icon={<ArrowRight size={18} weight="bold" aria-hidden="true" />}
              >
                Qeydiyyatdan keç
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:col-span-4 lg:flex lg:justify-end"
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            <LogoMark className="w-[min(28vw,400px)] text-white" />
          </motion.div>
        </div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="flex items-center justify-between border-t border-white/10 py-6 text-label font-medium uppercase text-white/50"
        >
          <span>
            {SITE.city}, {SITE.country}
          </span>
        </motion.div>
      </PageContainer>
    </section>
  );
}
