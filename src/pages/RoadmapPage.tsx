import { useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Roadmap from "../components/Roadmap/Roadmap";
import { data as frontendData } from "../frontend";
import { data as backendData } from "../backend";
import E404Page from "./E404Page";

export default function RoadmapPage() {
  const { name } = useParams<string>();

  const roadmaps: any = { frontend: { file: frontendData, title: "Frontend" }, backend: { file: backendData, title: "Backend"} };

  return (
    <>
      <MainLayout>
        <p className="mt-4 text-center font-semibold c-brown">
          Não sabe por onde começar a estudar? Que tal dar uma olhada por aqui?
        </p>
        <p className="mb-4 text-center font-semibold c-brown">
          Lendo de cima pra baixo, cada "caixa" é um assunto a ser estudado.
          Clicando, você verá em mais detalhes o que estudar com links de
          conteúdos gratuitos produzidos por pessoas que dominam a área e te
          ajudarão nessa jornada!
        </p>

        {name && roadmaps[name] && (
          <Roadmap data={roadmaps[name].file} title={roadmaps[name].title} />
        )}
        {!name || (!roadmaps[name] && <E404Page />)}
      </MainLayout>
    </>
  );
}
