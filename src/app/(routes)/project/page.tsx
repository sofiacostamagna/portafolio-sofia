import { Transition } from "@/components/Transition/Transition";
import { Projects } from "@/components/Project";
import { Cover } from "@/components/Cover";

export default function WorksPage() {
  return (
    <div>
      <Transition />
      <Projects />
      <Cover />
    </div>
  );
}
