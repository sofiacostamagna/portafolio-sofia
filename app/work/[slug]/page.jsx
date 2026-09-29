import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../../../lib/caseStudies";
import CaseStudy from "../../../components/CaseStudy";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case study`,
    description: study.summary.en,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  if (!getCaseStudy(slug)) notFound();
  return <CaseStudy slug={slug} />;
}
