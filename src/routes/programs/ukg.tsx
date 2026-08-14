import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";
import { programsData } from "@/data/programs/data";

export const Route = createFileRoute("/programs/ukg")({
  head: () => ({
    meta: [
      { title: "UKG | LittleSteps Preschool" },
      {
        name: "description",
        content: "Discover LittleSteps Upper Kindergarten (UKG) for children aged 5–6 years, building advanced read-write abilities, math reasoning, and core school readiness."
      }
    ]
  }),
  component: UkgRoute
});

function UkgRoute() {
  return <ProgramDetailPage program={programsData["ukg"]!} />;
}
