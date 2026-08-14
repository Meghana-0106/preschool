import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";
import { programsData } from "@/data/programs/data";

export const Route = createFileRoute("/programs/play-group")({
  head: () => ({
    meta: [
      { title: "Play Group | LittleSteps Preschool" },
      {
        name: "description",
        content: "Discover LittleSteps Play Group for children aged 2–3 years, with play-based experiences designed to support social, sensory, communication and physical development."
      }
    ]
  }),
  component: PlayGroupRoute
});

function PlayGroupRoute() {
  return <ProgramDetailPage program={programsData["play-group"]!} />;
}
