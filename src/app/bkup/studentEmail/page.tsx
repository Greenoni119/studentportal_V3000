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
        <h1 className="text-7xl text-white">Student Gmail</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              Student Gmail: Email and Communication Platform for Students
            </h1>
            <p>
              Student Gmail is a dedicated email and communication platform
              provided by educational institutions to facilitate seamless
              communication, collaboration, and information sharing among
              students, faculty, and staff. Built on the reliable and
              feature-rich Gmail platform, Student Gmail offers a range of tools
              and features tailored to meet the unique communication needs of
              students in educational environments.
            </p>
            <h2>Key Features of Student Gmail</h2>
            <p>
              Student Gmail encompasses a variety of features aimed at enhancing
              communication and productivity:{" "}
            </p>
            <ul>
              <li>
                <strong>Email Communication:</strong> Student Gmail provides
                students with their own email addresses, typically in the format
                of username@institution.edu, allowing them to send and receive
                emails from peers, instructors, and administrative staff. With a
                familiar and intuitive interface, students can compose, reply
                to, and organize emails efficiently.
              </li>
              <li>
                <strong>Integrated Calendar:</strong> Student Gmail integrates
                seamlessly with Google Calendar, allowing students to manage
                their schedules, appointments, and deadlines in one centralized
                location. Students can create events, set reminders, and share
                calendars with classmates, facilitating coordination and
                organization of academic and extracurricular activities.
              </li>
              <li>
                <strong>Collaborative Tools:</strong> Student Gmail offers
                access to a suite of collaborative tools, including Google
                Drive, Google Docs, and Google Meet, enabling students to
                collaborate on projects, share documents, and participate in
                virtual meetings and discussions. With real-time editing and
                commenting capabilities, students can collaborate effectively on
                group assignments and projects.
              </li>
            </ul>
            <h2>Benefits of Utilizing Student Gmail</h2>
            <p>
              The adoption of Student Gmail offers numerous benefits that
              contribute to enhanced communication, collaboration, and
              productivity:
            </p>
            <ul>
              <li>
                <strong>Efficient Communication:</strong>Student Gmail provides
                students with a reliable and efficient platform for
                communicating with peers, instructors, and administrative staff.
                With instant email delivery and synchronization across devices,
                students can stay connected and informed about important
                announcements, deadlines, and events.
              </li>
              <li>
                <strong>Seamless Integration: </strong> Student Gmail integrates
                seamlessly with other Google Workspace for Education tools, such
                as Google Drive, Google Calendar, and Google Docs, providing
                students with a unified and interconnected ecosystem for
                communication and collaboration. This integration enhances
                productivity and workflow efficiency by centralizing access to
                essential tools and resources.
              </li>
              <li>
                <strong>Enhanced Collaboration: </strong> Student Gmail fosters
                collaboration among students by providing access to
                collaborative tools and features, such as shared documents,
                group discussions, and virtual meetings. Whether working on
                group projects or participating in study sessions, students can
                leverage Student Gmail to collaborate effectively and achieve
                academic success.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by digital communication
              and collaboration, Student Gmail emerges as a valuable platform
              for facilitating seamless communication, collaboration, and
              information sharing among students, faculty, and staff. By
              providing students with access to a robust email and communication
              platform integrated with collaborative tools and features, Student
              Gmail empowers students to communicate effectively, collaborate
              efficiently, and succeed academically in today&apos;s
              interconnected world. Through continued innovation and support,
              Student Gmail remains at the forefront of enhancing the student
              experience and promoting academic success in educational
              institutions worldwide.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
