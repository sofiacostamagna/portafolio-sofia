import Image from "next/image";

/**
 * Component representing a section displaying skills with associated images.
 * @component
 * @returns {JSX.Element} The JSX element representing the SkillsSection component.
 * */

export const dataAboutSkills = [
  {
    id: 0,
    text: "Skills",
    skills: [
      {
        title: "JavaScript",
        imageSrc: "/assets/JS.png",
        date: "",
      },

      {
        title: "React",
        imageSrc: "/assets/REACT.png",
        date: "",
      },
      {
        title: "Redux",
        imageSrc: "/assets/REDUX.png",
        date: "",
      },
      {
        title: "Next",
        imageSrc: "/assets/NEXT.png",
        date: "",
      },
      {
        title: "HTML",
        imageSrc: "/assets/HTML.png",
        date: "",
      },
      {
        title: "CSS",
        imageSrc: "/assets/CSS.png",
        date: "",
      },
      {
        title: "Vue",
        imageSrc: "/assets/VUE.png",
        date: "",
      },
      {
        title: "Bootstrap",
        imageSrc: "/assets/BOOTSTRAP.png",
        date: "",
      },
      {
        title: "Tailwind",
        imageSrc: "/assets/TAILWIND.png",
        date: "",
      },
      {
        title: "Figma",
        imageSrc: "/assets/FIGMA.png",
        date: "",
      },
      {
        title: "SQL",
        imageSrc: "/assets/SQL.png",
        date: "",
      },
      {
        title: "GitHub",
        imageSrc: "/assets/GITHUB.png",
        date: "",
      },
    ],
  },
];
const SkillsSection = () => {
  // Data containing information about skills and their images
  const skills = dataAboutSkills[0].skills;

  /**
   * Renders a row of skills.
   * @param {number} startIdx - The starting index of the skills to render.
   * @param {number} endIdx - The ending index of the skills to render.
   * @returns {JSX.Element[]} An array of JSX elements representing the skills in the specified range.
   * */

  const renderSkillRow = (startIdx: number, endIdx: number) => {
    return skills.slice(startIdx, endIdx).map((skill, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
        <h2 className="text-base text-center">{skill.title}</h2>
        <div className="relative h-20 md:h-24 lg:h-24 w-full">
          <Image
            src={skill.imageSrc}
            alt={skill.title}
            layout="fill"
            objectFit="contain"
            className="bg-white"
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-4">
      {[0, 5, 10].map((startIdx) => (
        <div key={startIdx} className="flex flex-wrap gap-4 justify-center">
          {renderSkillRow(startIdx, startIdx + 4)}
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
