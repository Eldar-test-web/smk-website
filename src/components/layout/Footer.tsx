import { Link } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/navigation";
import { SITE } from "@/lib/site";
import { PageContainer } from "@/components/ui/PageContainer";
import { SmkArt } from "@/components/ui/Logo";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-purple-950 text-white">
      <AuroraBackdrop />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_120%,rgb(23_4_38/90%)_10%,transparent_70%)]"
      />
      <PageContainer className="relative pb-10 pt-14 lg:pt-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SmkArt variant="full" className="h-24 w-auto text-white sm:h-28" />
            <p className="mt-7 max-w-sm text-[0.9375rem] leading-relaxed text-white/55">{SITE.summary}</p>
          </div>

          <nav aria-label="Footer naviqasiya" className="lg:col-span-3 lg:col-start-8">
            <h2 className="text-label font-medium uppercase text-white/50">Naviqasiya</h2>
            <ul className="mt-5 space-y-3.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[0.9375rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2 lg:col-start-11">
            <h2 className="text-label font-medium uppercase text-white/50">Ünvan</h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/70">
              {SITE.city}, {SITE.country}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-8 text-[0.8125rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {year} {SITE.fullName}
          </p>
          <p>Bütün hüquqlar qorunur.</p>
        </div>
      </PageContainer>
    </footer>
  );
}
