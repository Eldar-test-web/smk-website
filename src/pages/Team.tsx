import { motion } from "framer-motion";
import { TEAM } from "@/data/team";
import { TEAM_PAGE } from "@/data/content";
import { VIEWPORT, staggerParent } from "@/lib/motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContainer } from "@/components/ui/PageContainer";
import { Section } from "@/components/ui/Section";
import { TeamCard } from "@/components/team/TeamCard";

export default function Team() {
  return (
    <>
      <PageHeader title="İdarə Heyəti" description={TEAM_PAGE.description} />

      <Section tone="white">
        <PageContainer>
          <motion.ul
            variants={staggerParent(0.09)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
          >
            {TEAM.map((member) => (
              <li key={member.id}>
                <TeamCard member={member} />
              </li>
            ))}
          </motion.ul>
        </PageContainer>
      </Section>
    </>
  );
}
