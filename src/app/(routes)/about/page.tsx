import { About } from "@/components/About";
import { Cover } from "@/components/Cover";
import { Transition } from "@/components/Transition/Transition";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Transition />
      <About />
      <Cover />
    </div>
  );
}
