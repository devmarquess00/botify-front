import { LuBot, LuMessageCircle } from 'react-icons/lu'
import { CardDashboard } from "@/core/components/(private)/atoms/cardDashboard";

const HomeDashboard = () => {
  return (
    <main className="mt-6 flex items-center space-x-4">
      <CardDashboard icon={LuBot} title='Bots ativo (1)' subtitle='Quantidade de Bots ativos na sua conta' />
      <CardDashboard icon={LuMessageCircle} title='Bots ativo' subtitle='Quantidade de Bots ativos na sua conta' />
    </main>
  );
};

export { HomeDashboard };
