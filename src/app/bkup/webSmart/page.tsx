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
        <h1 className="text-7xl text-white">WebSmart</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              WebSmart: Integrated Student Information System (SIS) for
              Educational Institutions
            </h1>
            <p>
              WebSmart is an integrated Student Information System (SIS)
              designed to streamline administrative processes, support student
              success initiatives, and enhance operational efficiency in
              educational institutions. Developed to meet the diverse needs of
              colleges, universities, and K-12 schools, WebSmart offers a
              comprehensive suite of modules and features to manage student
              data, academic records, and institutional resources effectively.
            </p>
            <h2>Key Features of WebSmart</h2>
            <p>
              WebSmart encompasses a variety of features aimed at providing
              comprehensive student information management and administrative
              support:
            </p>
            <ul>
              <li>
                <strong>Student Records Management:</strong> WebSmart
                centralizes student records and demographic information,
                allowing administrators to manage admissions, enrollment,
                registration, and academic progress efficiently. With secure
                access controls and customizable data fields, WebSmart ensures
                the accuracy and integrity of student information throughout
                their academic journey.
              </li>
              <li>
                <strong>Course Management and Scheduling:</strong> WebSmart
                facilitates course management and scheduling processes, enabling
                administrators to create, update, and manage course offerings,
                class schedules, and academic calendars seamlessly. With
                intuitive scheduling tools and integration with other
                institutional systems, WebSmart helps optimize course
                availability, balance class sizes, and accommodate student
                needs.
              </li>
              <li>
                <strong>Financial Aid and Billing:</strong> WebSmart provides
                robust financial aid and billing modules to streamline the
                administration of student financial accounts, scholarships,
                grants, and tuition payments. Administrators can track financial
                aid awards, disbursements, and outstanding balances, ensuring
                compliance with regulatory requirements and timely processing of
                financial transactions.
              </li>
              <li>
                <strong>Reporting and Analytics:</strong> WebSmart offers
                reporting and analytics tools that allow administrators to
                generate custom reports, analyze student data trends, and
                monitor key performance indicators related to enrollment,
                retention, and academic achievement. By providing actionable
                insights and data-driven decision support, WebSmart empowers
                administrators to identify areas for improvement and implement
                targeted interventions to support student success.
              </li>
            </ul>
            <h2>Benefits of Utilizing WebSmart</h2>
            <p>
              The adoption of WebSmart offers numerous benefits for educational
              institutions, administrators, faculty, and students:
            </p>
            <ul>
              <li>
                <strong>Streamlined Operations:</strong> WebSmart streamlines
                administrative processes, reduces manual tasks, and eliminates
                data silos by providing a centralized platform for managing
                student information and institutional resources. This
                streamlining improves operational efficiency, reduces
                administrative overhead, and enhances productivity across
                departments.
              </li>
              <li>
                <strong>Enhanced Student Experience:</strong> WebSmart improves
                the student experience by providing self-service tools,
                intuitive interfaces, and timely access to information and
                resources. Students can easily navigate the registration
                process, access their academic records, track degree progress,
                and communicate with advisors and faculty members, leading to
                higher levels of satisfaction and engagement.
              </li>
              <li>
                <strong>Data-Driven Decision Making:</strong> WebSmart empowers
                administrators and institutional leaders to make informed
                decisions based on real-time data and analytics. By analyzing
                student data trends, monitoring performance metrics, and
                identifying areas for improvement, administrators can develop
                evidence-based strategies to enhance student success, retention,
                and institutional effectiveness.
              </li>
              <li>
                <strong>Compliance and Security:</strong> WebSmart ensures
                compliance with regulatory requirements and data security
                standards by implementing robust data encryption, access
                controls, and audit trails. Administrators can confidently
                manage sensitive student information, financial transactions,
                and institutional data with the assurance of data integrity and
                confidentiality.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by complexity,
              accountability, and data-driven decision making, WebSmart emerges
              as a vital tool for educational institutions seeking to optimize
              student information management, administrative processes, and
              institutional effectiveness. By providing a comprehensive suite of
              modules and features, WebSmart empowers administrators to
              streamline operations, support student success initiatives, and
              make informed decisions that drive positive outcomes for students
              and the institution as a whole. Through continued innovation,
              collaboration, and support, WebSmart remains at the forefront of
              transforming student information management in educational
              institutions worldwide.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
