"use client";

import Image from "next/image";
import { Navbar } from "../../../components/Navbar";
import { Button } from "@/components/ui/button";

const portalItems = [
  {
    title: "Canvas",
    content: "Dive into course materials, submit tasks, and track grades.",
    imgUrl: "/canvas.webp",
    imgHeight: 321,
    imgWidth: 1095,
    targetUrl: "https://my.smccd.edu/canvas/",
  },
  {
    title: "WebSmart",
    content: "Manage your student account, enroll in classes, and view aid.",
    imgUrl: "/websmart.png",
    imgHeight: 200,
    imgWidth: 528,
    targetUrl: "https://websmart.smccd.edu/",
  },
  {
    title: "WebSchedule",
    content: "Explore the class schedule, find your next course, and more.",
    imgUrl: "/webschedule.png",
    imgHeight: 100,
    imgWidth: 264,
    targetUrl: "https://webschedule.smccd.edu/",
  },
];

export default function Home() {
  return (
    <>
      {/* <header className="flex p-4 items-center">
        <Image
          src="/smccd-horizontal-blue.svg"
          alt="SMCCCD Logo"
          width={300}
          height={100}
          className="mr-10"
        />
        <Navbar />
        <Button variant="default" className="ml-auto">
          Need Help?
        </Button>
      </header> */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600  flex justify-center items-center h-32">
        <h1 className="text-7xl text-white">Office365</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>Microsoft Office365: Productivity Suite for Education</h1>
            <p>
              Office 365 is a comprehensive suite of productivity tools designed
              to enhance collaboration, streamline workflows, and support
              learning in educational environments. Trusted by schools,
              colleges, and universities worldwide, Office 365 offers a range of
              applications and services tailored to meet the diverse needs of
              students, educators, and administrators.
            </p>
            <h2>Key Features of Office365</h2>
            <p>
              Office 365 encompasses a variety of features aimed at promoting
              productivity, communication, and collaboration:
            </p>
            <ul>
              <li>
                <strong>Microsoft Word, Excel, and PowerPoint:</strong> Office
                365 includes popular productivity applications such as Microsoft
                Word, Excel, and PowerPoint, providing students and educators
                with powerful tools for creating documents, spreadsheets, and
                presentations. With a wide range of templates, formatting
                options, and collaboration features, Office applications support
                a variety of academic tasks and projects.
              </li>
              <li>
                <strong>OneDrive:</strong> Office 365 integrates seamlessly with
                OneDrive, Microsoft&apos;s cloud storage service, allowing
                students and educators to store, access, and share files from
                any device with an internet connection. OneDrive offers robust
                security features, version history, and collaboration
                capabilities, enabling efficient document management and
                collaboration.
              </li>
              <li>
                <strong>Microsoft Teams: </strong> Office 365 includes Microsoft
                Teams, a unified communication and collaboration platform that
                brings together chat, video conferencing, file sharing, and
                collaboration tools in one interface. Teams facilitates virtual
                classrooms, group projects, and teacher-student communication,
                fostering collaboration and engagement in both remote and
                in-person learning environments.
              </li>
            </ul>
            <h2>Benefits of Utilizing Office365</h2>
            <p>
              The adoption of Office 365 offers numerous benefits that
              contribute to student success, educator efficiency, and
              institutional effectiveness:
            </p>
            <ul>
              <li>
                <strong>Enhanced Collaboration and Communication: </strong>{" "}
                Office 365 provides students and educators with tools for
                seamless collaboration and communication, enabling them to work
                together on projects, share resources, and engage in meaningful
                discussions. Whether in the classroom or remotely, Office 365
                fosters collaboration and connectivity among members of the
                academic community.
              </li>
              <li>
                <strong>Increased Productivity and Efficiency: </strong> Office
                365 empowers students and educators to be more productive and
                efficient in their academic endeavors. With intuitive tools for
                document creation, communication, and organization, Office 365
                helps streamline workflows, reduce administrative burdens, and
                optimize academic outcomes.
              </li>
              <li>
                <strong>Flexible and Accessible Learning: </strong> Office 365
                offers flexibility and accessibility, allowing students and
                educators to access resources and collaborate from any device,
                at any time. Whether on campus or off, Office 365 supports a
                variety of learning modalities, including in-person instruction,
                remote learning, and hybrid models, ensuring continuity and
                accessibility of education.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by digital innovation
              and evolving learning needs, Office 365 emerges as a powerful tool
              for supporting teaching, learning, and collaboration. By providing
              a comprehensive suite of productivity tools, communication
              features, and collaboration capabilities, Office 365 empowers
              students, educators, and institutions to achieve their academic
              goals, enhance learning experiences, and foster a culture of
              innovation and excellence in education. Through continued
              integration, innovation, and support, Office 365 remains at the
              forefront of transforming education and shaping the future of
              learning.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
