import { Title } from "@/core/components/(private)/atoms/title";
import { HomeDashboard } from "@/core/components/(private)/organisms/homeDashboard";

const TemplateDashboardHome = () => {
  return (
    <main className="py-12 px-16">
      <Title title="Visão geral" variantTitle="title-big" />
      <HomeDashboard />
    </main>
  );
};

export { TemplateDashboardHome };
