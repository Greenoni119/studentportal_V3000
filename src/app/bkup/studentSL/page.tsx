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
        <h1 className="text-7xl text-white">Student Success Link</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>Student Success Link: Integrated Student Support Platform</h1>
            <p>
              Student Success Link is an integrated student support platform
              designed to empower students, educators, and administrators in
              their efforts to promote academic success, personal development,
              and student well-being. Developed to address the diverse needs of
              students in educational settings, Student Success Link offers a
              comprehensive suite of tools and resources to support student
              success from enrollment to graduation.
            </p>
            <h2>Key Features of Student Success Link</h2>
            <p>
              Student Success Link encompasses a variety of features aimed at
              enhancing student support and engagement:
            </p>
            <ul>
              <li>
                <strong>Personalized Support Services: </strong> Link provides
                personalized support services tailored to meet the unique needs
                and challenges of individual students. Whether academic
                advising, counseling, or career guidance, students can access a
                range of support resources to address academic, personal, and
                career-related concerns.
              </li>
              <li>
                <strong>Early Alert System:</strong> Student Success Link
                incorporates an early alert system that enables educators to
                identify students who may be at risk of academic or personal
                difficulties early in the semester. By monitoring key indicators
                such as attendance, grades, and engagement, educators can
                intervene proactively to provide support and resources to
                students in need.
              </li>
              <li>
                <strong>Student Success Dashboard:</strong> Student Success Link
                offers a centralized dashboard that provides students,
                educators, and administrators with real-time insights into
                student progress, engagement, and achievement. Through
                interactive visualizations and data analytics, stakeholders can
                track student outcomes, monitor intervention effectiveness, and
                identify areas for improvement.
              </li>
            </ul>
            <h2>Benefits of Utilizing Student Success Link</h2>
            <p>
              The adoption of Student Success Link offers numerous benefits that
              contribute to student retention, academic achievement, and
              holistic development:
            </p>
            <ul>
              <li>
                <strong>Enhanced Student Support:</strong> Student Success Link
                enhances student support by providing access to personalized
                services and resources that address academic, personal, and
                career-related needs. By fostering a supportive and inclusive
                environment, Student Success Link helps students navigate
                challenges, overcome obstacles, and thrive academically and
                personally.
              </li>
              <li>
                <strong>Early Intervention and Prevention:</strong> Student
                Success Link facilitates early intervention and prevention
                efforts by enabling educators to identify students who may be
                struggling academically or personally. By intervening
                proactively and connecting students with appropriate support
                services, educators can help mitigate the risk of academic
                failure and promote student success.
              </li>
              <li>
                <strong>Data-Informed Decision Making:</strong> Student Success
                Link enables data-informed decision making by providing
                stakeholders with actionable insights into student outcomes and
                engagement. By leveraging data analytics and predictive
                modeling, educators and administrators can identify trends,
                patterns, and areas for improvement, informing strategic
                initiatives and interventions to support student success.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by diverse student
              populations and evolving support needs, Student Success Link
              emerges as a transformative platform for promoting student
              success, engagement, and well-being. By providing personalized
              support services, early intervention capabilities, and data-driven
              insights, Student Success Link empowers students, educators, and
              administrators to collaborate effectively and create a supportive
              and inclusive learning environment where every student can thrive.
              Through continued innovation, collaboration, and commitment to
              student success, Student Success Link remains at the forefront of
              advancing educational equity and excellence in educational
              institutions worldwide.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
