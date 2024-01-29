import { Transition } from "@/components/Transition/Transition";
import DescargarPDF from "@/components/Resume/Resume";
import { Cover } from "@/components/Cover";

export default function WorksPage() {
  return (
    <div>
      <Transition />
      <DescargarPDF />
      <Cover />
    </div>
  );
}
