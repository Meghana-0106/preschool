import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";
import { programsData } from "@/data/programs/data";

export const Route = createFileRoute("/programs/nursery")({
  head: () => ({
    meta: [
      { title: "Nursery | LittleSteps Preschool" },
      {
        name: "description",
        content: "Discover LittleSteps Nursery program for children aged 3–4 years, helping them grow language, cognitive confidence and early friendships through purposeful play."
      }
    ]
  }),
  component: NurseryRoute
});

function NurseryRoute() {
  return <ProgramDetailPage program={programsData["nursery"]!} />;
}
