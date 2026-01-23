"use client";
import { Bar, BarChart, XAxis } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

import { LuBot, LuMessageCircle } from "react-icons/lu";
import { CardDashboard } from "@/core/components/(private)/atoms/cardDashboard";

const HomeDashboard = () => {
  const chartConfig = {
    revenue: {
      label: "Receita",
    },
  };

  const data = [
    { month: "Jan", revenue: 400 },
    { month: "Fev", revenue: 700 },
  ];

  return (
    <main className="mt-6 flex flex-col">
      <div className="flex items-center space-x-4">
        <CardDashboard
          icon={LuBot}
          title="Bots ativo (1)"
          subtitle="Quantidade de Bots ativos na sua conta"
          bgColorIcon="bg-green-primary/30"
          colorIcon="text-green-primary"
        />
        <CardDashboard
          icon={LuMessageCircle}
          title="Mensagens (24)"
          subtitle="Saiba quantas mensagens seu Bot recebeu"
          bgColorIcon="bg-red-500/30"
          colorIcon="text-red-500"
        />
      </div>

      <div className="mt-8">
        <ChartContainer
          config={chartConfig}
          className="h42 w-122 bg-white shadow-md border border-zinc-200 rounded-md"
        >
          <BarChart data={data} barCategoryGap={4}>
            <XAxis dataKey="month" />
            <Bar dataKey="revenue" fill="#62e371" barSize={24} />
          </BarChart>
        </ChartContainer>
      </div>
    </main>
  );
};

export { HomeDashboard };
