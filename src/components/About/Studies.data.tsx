import Image from "next/image";

export const dataAboutCertificate = [
  {
    id: 2,
    text: "Estudios",
    skills: [
      {
        title: "FullStack Developer",
        date: "",
        imageSrc: "/assets/certificado.png",
        company: "",
        description: "",
        certificateLink: "https://www.efset.org/cert/LaRDbS",
      },
      {
        title: "English C1",
        date: "",
        imageSrc: "/assets/testEnglish.png",
        certificateLink:
          "https://certificates.soyhenry.com/new-cert?id=becafe6bf2aa6c3854259fad8c50ab799929b8111611ce6bc6e507efee78a5fd",
      },
    ],
  },
];

const StudiesSection = () => {
  const skills = dataAboutCertificate[0].skills;

  const renderSkillRow = (startIdx: number, endIdx: number) => {
    return skills.slice(startIdx, endIdx).map((skill, index) => (
      <div key={index} className="flex flex-col items-center gap-2">
        <div className="relative w-full max-w-80 h-80 md:h-96">
          {/* Para mantener el aspect ratio de 1:1 en pantallas pequeñas y 16:9 en pantallas medianas y grandes */}
          <div className="aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9">
            <Image
              src={skill.imageSrc}
              alt={skill.title}
              layout="fill"
              objectFit="contain"
              className="bg-white"
            />
          </div>
        </div>
        <h2 className="text-base text-secondary mb-2">{skill.title}</h2>
        {skill.certificateLink && (
          <a
            href={skill.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Certificate Link
          </a>
        )}
      </div>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {[0, 1].map((startIdx) => (
        <div key={startIdx} className="w-full md:w-1/2">
          {renderSkillRow(startIdx, startIdx + 1)}
        </div>
      ))}
    </div>
  );
};

export default StudiesSection;
