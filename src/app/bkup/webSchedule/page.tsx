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
        <h1 className="text-7xl text-white">WebSchedule</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              WebSchedule: Online Scheduling Platform for Educational
              Institutions
            </h1>
            <p>
              WebSchedule is a versatile online scheduling platform designed to
              streamline the process of course scheduling and registration in
              educational institutions. Developed with the needs of students,
              faculty, and administrators in mind, WebSchedule offers a
              user-friendly interface and a range of features to simplify the
              scheduling process, optimize course offerings, and enhance the
              overall student experience.
            </p>
            <h2>Key Features of WebSchedule</h2>
            <p>
              WebSchedule encompasses a variety of features aimed at improving
              efficiency and accessibility in course scheduling and
              registration:
            </p>
            <ul>
              <li>
                <strong>Course Search and Registration:</strong> WebSchedule
                provides students with a centralized platform to search for
                courses, view course descriptions, check availability, and
                register for classes online. With real-time updates and
                intuitive search filters, students can easily find the courses
                they need and register for them with just a few clicks.
              </li>
              <li>
                <strong>Interactive Class Schedules:</strong> WebSchedule offers
                interactive class schedules that allow students to visualize
                course offerings, class times, and locations in a user-friendly
                format. Students can customize their schedules, view conflicts,
                and plan their academic calendar more effectively, ensuring a
                seamless registration experience.
              </li>
              <li>
                <strong>Waitlist Management:</strong> WebSchedule includes a
                waitlist management feature that allows students to join
                waitlists for full classes and receive notifications when spots
                become available. Administrators can monitor waitlist activity,
                manage waitlist priorities, and automatically enroll students
                from waitlists as vacancies occur, streamlining the registration
                process and maximizing class capacity.
              </li>
            </ul>
            <h2>Benefits of Utilizing WebSchedule</h2>
            <p>
              The adoption of WebSchedule offers numerous benefits for students,
              faculty, and administrators alike:
            </p>
            <ul>
              <li>
                <strong>Improved Access and Convenience: </strong> WebSchedule
                provides students with 24/7 access to course information and
                registration tools, allowing them to register for classes from
                anywhere with an internet connection. This accessibility
                eliminates the need for in-person registration and empowers
                students to manage their academic schedules more efficiently.
              </li>
              <li>
                <strong>Streamlined Course Planning:</strong> WebSchedule
                simplifies course planning for students by offering intuitive
                search and filter options, interactive schedules, and real-time
                updates on course availability. Students can easily plan their
                academic pathway, track degree progress, and make informed
                decisions about course selection, ensuring a smoother transition
                from registration to graduation.
              </li>
              <li>
                <strong>Enhanced Administrative Efficiency:</strong> WebSchedule
                automates many aspects of the scheduling and registration
                process, reducing administrative workload and improving
                operational efficiency. With features such as waitlist
                management, enrollment tracking, and reporting tools,
                administrators can optimize course offerings, manage class
                capacities, and allocate resources more effectively.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by complexity and
              change, WebSchedule emerges as a valuable tool for simplifying
              course scheduling and registration processes in educational
              institutions. By providing students with easy access to course
              information, intuitive registration tools, and automated waitlist
              management features, WebSchedule enhances the overall student
              experience and supports academic success. Through continued
              innovation and collaboration with educational stakeholders,
              WebSchedule remains committed to optimizing course scheduling
              processes and improving access to educational opportunities for
              students worldwide.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
