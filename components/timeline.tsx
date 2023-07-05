export const Timeline: React.FC = () => {
  const experiences = [
    {
      name: "Sciborgs",
      role: "Captain",
      time: "Nov 2021 - Present",
      desc: "In my school's FIRST Robotics team, I have a tendency to write software that helps speed up team productivity and convenience. I also end up messing around with Math and Physics from time to time to help control/model funny looking mechanisms. ",
      link: "https://www.sciborgs1155.org/",
    },
    {
      name: "AtomHacks",
      role: "Preisdent Emeritus of Programming",
      time: "Oct 2021 - Present",
      desc: "I help run my school's annual hackathon! Whether it's developing the website and helping with custom submission software, to directing the committee and helping keep the event in check, hosting a coding event for my school is always fun.",
      link: "https://atomhacks.org/",
    },
    {
      name: "MIT BWSI Embsec",
      role: "Alum | Teacher Assistant",
      time: "July 2022 - Aug 2022 | July 2023 - Aug 2023",
      desc: "In summer of 2022, I was a student at MIT Beaverworks' Embedded Security and Hardware Hacking. Here I learned about embedded systems as well as cryptography, and built a bootloader + firmware updater that securely exchanged data as the final project. As a TA for the 2023 summer, I helped develop slideshow content for students and created the lab submission platform that powers the course.",
      link: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi",
    },
    {
      name: "Steamworks",
      role: "Mentor | Volunteer",
      time: "Oct 2023 - Mar 2023",
      desc: "For the 2022-2023 FIRST season, I helped mentor FTC teams in software and control, as well as volunteered at several FIRST competitions!",
      link: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi",
    },
    {
      name: "TechCodes",
      role: "Executive",
      time: "June 2022 - Aug 2022",
      desc: "I helped with development of Astrius, an education tool that powered TechCodes' Summer Code Camp 2022.",
      link: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi",
    },
    {
      name: "Lumiere",
      role: "Technology Product Manager",
      time: "Nov 2021 - Jan 2022",
      desc: "A media publication platform targeted towards STEM creators! Used Next.Js to add convenient posting features + core functionalities, and TailwindCSS to improve UI/UX.",
      link: "https://lumiere.codes/",
    },
    {
      name: "The Orpheus Show",
      role: "Co-Host and Development",
      time: "Aug 2021 - Sep 2021",
      desc: "A podcast from members of Hack Club that focused on the stories of other members and their journies as a hacker. Co-hosted podcast episodes, assisted with operations, and developed the website using Next.js and CSS.",
      link: "https://podcast.hackclub.com/",
    },
  ];

  return (
    <div className="w-full h-full px-16 mx-auto pb-14">
      <div className="relative h-full p-10 overflow-hidden wrap">
        <h1 className="inline-block px-2 py-2 mb-12 text-4xl font-bold border-b-4 border-b-pink-600">
          Experiences
        </h1>
        <div
          className="absolute h-full border border-gray-200 border-2-2 border-opacity-20"
          style={{ left: "50%" }}
        ></div>

        {experiences.map((experience, i) => (
          <div
            className={`flex items-center justify-between w-full mb-8 py-4 right-timeline ${
              i % 2 != 0 ? `flex-row-reverse text-right` : ``
            }`}
            key={i}
          >
            <div className="order-1 w-5/12"></div>
            <div
              className={`z-20 flex items-center order-1 w-8 h-8  rounded-full shadow-xl ${
                i % 2 == 0 ? `bg-pink-600` : `bg-cyan-400`
              }`}
            >
              <h1 className="mx-auto text-lg font-semibold text-white"></h1>
            </div>
            <div className="order-1 w-5/12 px-5 py-4 shadow-xl rounded-xl bg-zinc-900">
              <h3
                className={`inline-block  py-1 mb-2 text-2xl font-bold text-white border-b-2 ${
                  i % 2 != 0
                    ? `pl-2 border-b-pink-600`
                    : `pr-2 border-b-cyan-400`
                }`}
              >
                {experience.name}
              </h3>
              <h3 className="mb-2 text-lg text-gray-400">{experience.role}</h3>
              <p className="mb-4 text-base font-medium leading-snug tracking-wide text-gray-200 text-opacity-100">
                {experience.desc}
              </p>
              <p className="text-sm text-gray-400">{experience.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
