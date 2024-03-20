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
        <h1 className="text-7xl text-white">Canvas</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>Canvas Learning Management System</h1>
            <p>
              The Canvas Learning Management System (LMS) is a robust, flexible,
              and user-friendly platform designed to facilitate online learning,
              enhance student engagement, and streamline the educational process
              for both educators and learners alike. Adopted by numerous
              educational institutions worldwide, including community colleges,
              universities, and K-12 schools, Canvas LMS provides a suite of
              tools and features aimed at delivering a seamless and interactive
              learning experience.
            </p>
            <h2>Key Features of Canvas LMS</h2>
            <p>
              Canvas LMS boasts a myriad of features that cater to the diverse
              needs of educators and learners in a digital environment. Here are
              some of the notable features:
            </p>
            <ul>
              <li>
                <strong>Intuitive Course Creation and Management:</strong>{" "}
                Canvas allows for easy setup and management of courses.
                Educators can effortlessly create courses, organize content, and
                manage enrollment to ensure a smooth learning journey for
                students.
              </li>
              <li>
                <strong>Integrated Multimedia Learning Experience:</strong> The
                platform supports the integration of multimedia content,
                allowing for a richer learning experience. Whether it&lsquo;s
                videos, audio, or interactive quizzes, Canvas LMS handles it
                with ease.
              </li>
              <li>
                <strong>Real-time Analytics and Reporting:</strong> With
                built-in analytics and reporting tools, educators can monitor
                student performance and engagement in real-time, allowing for
                timely feedback and personalized learning paths.
              </li>
            </ul>
            <h2>Benefits of Utilizing Canvas LMS</h2>
            <p>
              The adoption of Canvas LMS comes with a multitude of benefits that
              significantly contribute to the enhancement of the educational
              experience. Here are some of the key benefits:
            </p>
            <ul>
              <li>
                <strong>Enhanced Communication:</strong> Canvas facilitates
                communication between instructors and students through
                discussion forums, announcements, and direct messaging,
                fostering a collaborative learning environment.
              </li>
              <li>
                <strong>Accessibility and Mobile Responsiveness:</strong> Being
                accessible anytime, anywhere is crucial in today&lsquo;s digital
                age. Canvas LMS is mobile-ready, allowing students and educators
                to access courses and content on the go.
              </li>
              <li>
                <strong>Third-party Integrations:</strong> The ability to
                integrate with a variety of educational technologies and
                third-party tools extends the functionality and versatility of
                Canvas LMS, making it a powerful hub for online learning.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In a rapidly evolving educational landscape, having a reliable and
              user-friendly Learning Management System is imperative. Canvas LMS
              stands as a reputable choice among educational institutions
              seeking to foster a conducive and interactive learning
              environment. Its comprehensive set of features and benefits makes
              it
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
