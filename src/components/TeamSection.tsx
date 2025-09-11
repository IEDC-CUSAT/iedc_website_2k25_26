import { Linkedin } from "lucide-react";


const TeamSection = () => {
  const topMembers = [
    { name: "Ashwin Menon ", role: "Student Lead ", img:"/images/team/AshwinMenon.jpg", linkedin: "https://www.linkedin.com/in/ashwin-menon-13168a259" },
    { name: "Anjana Sankar", role: "Student Lead ", img: "/images/team/anjanasankar.jpg", linkedin: "https://www.linkedin.com/in/anjana-sankar-1ba508243/" }
  ];

  const bottomRows = [
    [
      { name: "Rohit M R", role: "Branding and Marketing Lead", img: "/images/team/Rohit.jpg", linkedin: "www.linkedin.com/in/ rohit-mr" },
      { name: "Najmudheen k", role: "Operations & Quality lead", img: "/images/team/Najmudheen.jpg", linkedin: "https://www.linkedin.com/in/najmudheenk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " },
      { name: "Anand B Vijay", role: "Financial Lead", img: "/images/team/anand.jpg", linkedin: "https://www.linkedin.com/in/anandbvijay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
    ],
    [
      { name: "Lakshmikha Rejith", role: "Creative and Innovation Lead", img: "/images/team/Lakshmikha.jpg", linkedin: "https://www.linkedin.com/in/lakshmikha-rejith" },
      { name: "Aisha Nama", role: "WIE Lead", img: "/images/team/Aisha_Nama.jpg", linkedin: "https://www.linkedin.com/in/aisha-nama-06256b253/" },
      { name: "Abinash Singh", role: "Technology Lead", img: "/images/team/abinash.jpg", linkedin: "https://www.linkedin.com/in/abinashsinghlalotra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " }
    ]
  ];

  return (
    <section className="py-16 px-6">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold headline-text">
          CORE TEAM
        </h2>
      </div>

      {/* Top row (Lead & Co-Lead) */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {topMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center transition-transform"
          >
            {/* <div className="w-48 h-48 bg-gray-300 rounded-full mb-4"></div> */}
            <img
              src={member.img}
              alt={member.name}
              className="w-48 h-48 rounded-full object-cover mb-4"
            />

            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-xl text-gray-500">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 p-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-600 transition-colors" />
            </a>
          </div>
        ))}
      </div>

      {/* Bottom rows (Leads) in [3, 3] pattern */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {bottomRows.map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {row.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center transition-transform"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mb-3"
                />
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-xs text-gray-500 text-center">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 p-1 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;