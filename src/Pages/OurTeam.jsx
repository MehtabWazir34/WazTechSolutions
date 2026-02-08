import { motion } from "framer-motion";
import RequestForm from "../Pages/RequestForm";
import MyImg from "../assets/Me.jpg"

const allTeam = [

  { 
    id: 1, 
    title: "Masaud Ahmad", 
    cate: "Ethickal Hacker", 
    pic: "https://media.licdn.com/dms/image/v2/D5603AQE059j1l2FQrQ/profile-displayphoto-scale_200_200/B56ZtPHgrwHAAY-/0/1766558929741?e=1772064000&v=beta&t=Wqk3sWgSpIuvkZLtP9PnwJDeubSIJtmL9Ao5oFd452E",
    experience: "4+ years",
    expertise: ["App Security, ", "Vulnerability Assessment, ", "Cybersecurity Researcher."],
    About: "Masaud expertise lies in uncovering vulnerabilities in web applications, servers, and networks, with a strong focus on critical risks identified by frameworks like the OWASP Top 10..",
    profile: 'https://www.linkedin.com/in/masaudsec/'
  },
  { 
    id: 2, 
    title: "SaifUllah Khan", 
    cate: "SoftWare and MERN Full Stack Developer", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQHote-snDKK0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730812444229?e=1772064000&v=beta&t=qw1mKg_Ob2Da4WI6hkXC-77SX3nnzcKupxa2ydCrGYA",
    experience: "8+ years",
    expertise: ["Flutter, ", "Native And Dev, ", "GSAP, ", "MERN & T3 Stack Specialist."],
    About: "SaifUllah is an expert in Full Stack Web and App, server-side logic, APIs, and database design, ensuring scalable and secure back-end architectures.",
    profile: 'https://www.linkedin.com/in/saifullah-khan-4aa554231/'
  },

    { 
    id: 3, 
    title: "Mehtab Wazir", 
    cate: "FullStack Developer", 
    pic: MyImg,
    experience: "1+ years",
    expertise: ["Tailwind CSS, ","ReactJS, ", "ExpressJS, ", "MongoDB"],
    About: "Mehtab specializes in building modern, responsive, and highly interactive web interfaces with a focus on user experience.",
    profile: 'https://www.linkedin.com/in/mehtab-wazir-1429bb247/'
  },
    { 
    id: 4, 
    title: "SharJeel Khan", 
    cate: "Flutter Dev | FireBase", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQGmcrewCY8Y6A/profile-displayphoto-scale_200_200/B4DZvpTdu8JQAY-/0/1769145753480?e=1772064000&v=beta&t=fz2A0bxoU-QvZPNWDb4aXELHwypJ5zvnCLMK9qFCp88",
    experience: "3+ years",
    expertise: ["MERN Stack, ", "REST APIs, ", "Cloud Deployment, ", "Agile Development."],
    About: "Ali brings a holistic view of both front-end and back-end, delivering complete and efficient full-stack solutions.",
    profile: 'https://www.linkedin.com/in/muhammad-sharjeel-59a255203/'
  },
  { 
    id: 5, 
    title: "Aqib Jadoon", 
    cate: "Project Manager", 
    pic: "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.82787-15/625963586_17923092891237572_8691205608264746022_n.webp?_nc_cat=107&ig_cache_key=MzgyNTk1OTA0NTM2MzAxNzE2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=C9xQB6UEps8Q7kNvwF0Y6tY&_nc_oc=AdlHSXkze4Dn4odeTqIZ6GBYKba1V_IipbLGAN8MvXa0HFBSUgKDXrgcc5qfQI1qqDM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fisb5-1.fna&_nc_gid=abA6ag-mGFf2OufJlTpWhA&oh=00_AfsemxTxK0LHirRp_myZITu6SfPgxNgE9zR_S7mj-nd75A&oe=698D4B44",
    experience: "1+ years",
    expertise: ["Agile, ", "Scrum, ", "MS Office, ", "Client hunting"],
    About: "Aqib ensures smooth project delivery, coordinating between clients and teams while maintaining timelines and quality.",
    profile: ''
  },
  { 
    id: 6, 
    title: "Nehal Anees", 
    cate: "SEO Specialist", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQEDM2PHucKT1g/profile-displayphoto-scale_200_200/B4DZk_VfQKGsAY-/0/1757704225283?e=1772064000&v=beta&t=-aL3qLG-A0WNCoyGN45b_ASoj97Ts0HgbIgztbFurA4",
    experience: "4+ years",
    expertise: ["SEO, ", "Google Analytics, ", "Keyword Research, ", "Content Optimization"],
    About: "Nehal improves brand visibility and search rankings with proven SEO strategies and data-driven marketing approaches.",
    profile: "https://www.linkedin.com/in/nehal-anees/"
  },
  { 
    id: 7, 
    title: "Aimal Fayyaz", 
    cate: "Video Editor", 
    pic: "https://media.licdn.com/dms/image/v2/D4D03AQE5ZsUC0UV4zA/profile-displayphoto-scale_200_200/B4DZunvbqiI4AY-/0/1768045789220?e=1772064000&v=beta&t=hN9QeB3kKUN-zGum9LTwoBAfNbIPja0k8iOgQPATZ8o",
    experience: "2+ years",
    expertise: ["CapCut, ", "Adobe Premier Pro, ", "Adobe After Effect."],
    About: " Aimal Fayyaz — a Top-Rated Plus video editor on Upwork and a Level 2 Seller on Fiverr with years of experience turning raw footage into scroll-stopping, high-converting videos.",
    profile: "https://www.linkedin.com/in/aimal-fayyaz-1a913a255/"
  }
];


function OurTeam() {
  return (
    <>
    <motion.section
      className="px-8 py-12 text-center border-t my-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-4">Meet Our Full Team</h2>
      <p className="mb-8">Here are all our professionals working with us.</p>

      <motion.div className="gap-6 hidden md:block">
        {allTeam.map(member => (

          member.id%2 ? <motion.div
            key={member.id}
            className="flex w-[88%] gap-8 my-4 mx-auto p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.pic}
              alt={member.title}
              className="rounded-lg w-[1/2] h-40 object-cover mb-3"
            />
            <div className="flex-col flex-1 border-l text-left pl-4">
              <h4 className="text-xl font-bold text-amber-500">{member.title}</h4>
            <p>{member.experience } as a {member.cate}</p>
            <p><b className="text-amber-500">Skills: </b>{member.expertise}</p>
            <p className="mb-4"><b className="text-amber-500">About: </b>{member.About}</p>
            <a href={member.profile} target="_blank" className="cursor-pointer  bg-blue-700 rounded-lg p-2 mx-auto">LinkedIn </a>
            </div>
          </motion.div> : <motion.div
            key={member.id}
            className="flex w-[88%] my-4 mx-auto gap-8 p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
          <div className="flex-col flex-1 border-r text-left pr-4">
            <h4 className="text-xl font-bold text-amber-500">{member.title}</h4>
            <p>{member.experience } as a {member.cate}</p>
            <p><b className="text-amber-500">Skills: </b>{member.expertise}</p>
            <p className="mb-4"><b className="text-amber-500">About: </b>{member.About}</p>
            <a href={member.profile} className="cursor-pointer  bg-blue-700 rounded-lg p-2 mx-auto" target="_blank">LinkedIn </a>
          </div>
            <img
              src={member.pic}
              alt={member.title}
              className="rounded-lg w-[1/2] h-40 object-cover mb-3"/>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="md:hidden">
        {
          allTeam.map((member)=>(
            <motion.div
            key={member.id}
            className="grid w-[88%] my-6 mx-auto gap-8 p-4 border border-gray-600 rounded-lg text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }} >
              <img
              src={member.pic}
              alt={member.title}
              className="rounded-lg w-[1/2] h-40 object-cover  mx-auto"/>
          <div className="flex-col flex-1 ">
            <h4 className="text-xl font-bold text-amber-500 text-center">{member.title}</h4>
            <p className="text-center">{member.experience } as a {member.cate}</p>
            <p><b className="text-amber-500">Skills: </b>{member.expertise}</p>
            <p className="mb-4"><b className="text-amber-500">About: </b>{member.About}</p>
            <a href={member.profile} className="cursor-pointer  bg-blue-700 rounded-lg p-2 " target="_blank">LinkedIn </a>
          </div>
            
          </motion.div>
          ))
        }

      </motion.div>
    </motion.section>
    <RequestForm
    title = "Request to Join"
    />
    </>
  );
}

export default OurTeam;
