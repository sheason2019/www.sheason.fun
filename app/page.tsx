import { ProjectCard } from "@/view/components/project-card";
import { AppBar } from "@/view/layout/app-bar";
import { Footer } from "@/view/layout/footer";
import { PageContainer } from "@/view/layout/page-container";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full">
      <AppBar />
      <PageContainer>
        <div className="flex">
          <ProjectCard hoverContent={"分布式IM"}>starry</ProjectCard>
          <ProjectCard hoverContent={"交互式文本应用脚手架"}>
            rx novel
          </ProjectCard>
          <ProjectCard hoverContent={"协同文档"}>doc</ProjectCard>
        </div>
      </PageContainer>
      <Footer />
    </main>
  );
}
