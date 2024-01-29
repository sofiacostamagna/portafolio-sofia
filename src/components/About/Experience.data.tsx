import Image from "next/image";

/**
 * Data for the experience section.
 * @type {Array}
 */
export const dataAboutExperience = [
  {
    id: 1,
    text: "Experience",
    skills: [
      {
        title: "Freelancer Frontend Developer and UX/UI Junior",
        date: "Aug 2023 - Nov 2023",
        company: "Ambassadoria",
        description:
          "Specialized in the design of user interfaces (UI) and the optimization of user experiences (UX), providing solutions that combine intuition and visual appeal. Using Figma to create detailed designs, interactive prototypes, and user flows. Active collaboration with the Front-end team, applying cutting-edge technologies such as TypeScript and Next.js.",
      },
      {
        title: "Front-End Developer",
        date: "Sep 2023 - Sep 2023",
        company: "No Country",
        description:
          "As a member of the Frontend development team, used technologies such as React, Next.js, and React Hook Form to create exceptional user experiences. Collaborated on the design of the user interface in Figma.",
      },
      {
        title: "Front-End Developer",
        date: "Aug 2023 - Sep 2023",
        company: "No Country",
        description:
          "A member of the Frontend development team, using JavaScript, React, and Vue. Collaborated with the UX/UI team in Figma and efficiently managed work on GitHub.",
      },
      {
        title: "Administrative in Human Resources",
        date: "Aug 2020 - Sep 2022",
        company: "Anchorena Sanatorium",
        description:
          "Nursing staff management. Settlement of overtime. Selection of personnel for the nursing area. Creation, management and control of presenteeism forms. Management of personnel registrations and cancellations, maintaining updated records. Management of contracts and files, complying with legal and administrative requirements. Organization and management of the Vaccination Plan against Covid in the Sanatorium. Provide administrative and coordination support to the Teaching area.",
      },
    ],
  },
];

/**
 * ExperienceSection Component.
 * Renders the experience section based on the provided data.
 * @returns {JSX.Element} The JSX element representing the ExperienceSection component.
 */
const ExperienceSection = () => {
  const skills = dataAboutExperience[0].skills;

  /**
   * Renders a row of skills based on the start and end index.
   * @param {number} startIdx - The start index.
   * @param {number} endIdx - The end index.
   * @returns {Array} An array of JSX elements representing the skill rows.
   */
  const renderSkillRow = (startIdx: number, endIdx: number) => {
    return skills.slice(startIdx, endIdx).map((skill, index) => (
      <div key={index} className="w-full p-4 border border-gray-300 mb-4">
        <h2 className="text-base text-secondary mb-2">{skill.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{skill.date}</p>
        <p className="text-sm text-gray-500 mb-2">{skill.company}</p>
        <p className="text-sm text-white">{skill.description}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-4">
      {[0, 1, 2, 3].map((startIdx) => (
        <div key={startIdx} className="flex gap-4">
          {renderSkillRow(startIdx, startIdx + 1)}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
