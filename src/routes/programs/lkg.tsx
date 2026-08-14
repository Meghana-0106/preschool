import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";
import { programsData } from "@/data/programs/data";

export const Route = createFileRoute("/programs/lkg")({
  head: () => ({
    meta: [
      { title: "LKG | LittleSteps Preschool" },
      {
        name: "description",
        content: "Discover LittleSteps Lower Kindergarten (LKG) for kids aged 4–5 years, introducing early reading, math concepts, and scientific discovery through project play."
      }
    ]
  }),
  component: LkgRoute
});

function LkgRoute() {
  return <ProgramDetailPage program={programsData["lkg"]!} />;
}
