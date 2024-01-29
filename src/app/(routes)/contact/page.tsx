import { Contact } from "@/components/Contact/Contact";
import { Cover } from "@/components/Cover";
import { Transition } from "@/components/Transition/Transition";

export default function page() {
  return (
    <div>
      <Transition />
      <Contact />
      <Cover />
    </div>
  );
}
