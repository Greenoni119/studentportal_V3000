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
        <h1 className="text-7xl text-white">TimelyMD</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>TimelyMD: Telehealth Services for Student Wellness</h1>
            <p>
              TimelyMD is a leading provider of telehealth services specifically
              tailored to meet the wellness needs of students in educational
              institutions. Committed to enhancing access to healthcare and
              promoting student well-being, TimelyMD offers a comprehensive
              suite of virtual healthcare services that empower students to
              prioritize their physical and mental health, regardless of their
              location or schedule.
            </p>
            <h2>Key Features of TimelyMD</h2>
            <p>
              TimelyMD encompasses a variety of features aimed at providing
              convenient, accessible, and high-quality healthcare services to
              students:
            </p>
            <ul>
              <li>
                <strong>24/7 Access to Healthcare Providers: </strong> TimelyMD
                offers round-the-clock access to licensed healthcare providers,
                including physicians, counselors, and specialists, via phone,
                video, or chat. Whether students need medical advice, mental
                health support, or wellness resources, they can connect with a
                provider at any time, day or night.
              </li>
              <li>
                <strong>
                  Comprehensive Medical and Mental Health Services:
                </strong>{" "}
                TimelyMD provides a wide range of medical and mental health
                services to address the diverse needs of students. From urgent
                care and primary care to counseling and psychiatry, students can
                access the care they need without having to leave campus or wait
                for an appointment.
              </li>
              <li>
                <strong>Specialized Support for Student Populations: </strong>{" "}
                TimelyMD offers specialized support services tailored to meet
                the unique needs of student populations, including international
                students, LGBTQ+ students, and students with disabilities. By
                providing culturally competent and inclusive care, TimelyMD
                ensures that all students feel supported and valued in their
                healthcare journey.
              </li>
            </ul>
            <h2>Benefits of Utilizing TimelyMD</h2>
            <p>
              The adoption of TimelyMD offers numerous benefits that contribute
              to student well-being, academic success, and retention:
            </p>
            <ul>
              <li>
                <strong>Convenient Access to Care:</strong> TimelyMD provides
                students with convenient access to healthcare services, allowing
                them to receive timely care without having to navigate complex
                appointment schedules or travel to off-campus healthcare
                facilities. This convenience promotes proactive healthcare
                seeking behavior and ensures that students can address their
                health needs promptly.
              </li>
              <li>
                <strong>Enhanced Mental Health Support: </strong> TimelyMD
                prioritizes mental health support by offering counseling,
                therapy, and psychiatry services tailored to meet the unique
                needs of students. By providing confidential and stigma-free
                support, TimelyMD helps students navigate challenges such as
                stress, anxiety, depression, and other mental health concerns
                that may impact their academic performance and overall
                well-being.
              </li>
              <li>
                <strong>Promotion of Student Success and Retention:</strong>{" "}
                TimelyMD contributes to student success and retention by
                addressing barriers to healthcare access and promoting holistic
                well-being. By prioritizing student health and wellness,
                educational institutions can create a supportive and inclusive
                campus environment where students can thrive academically,
                socially, and personally.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by diverse health needs
              and evolving wellness priorities, TimelyMD emerges as a
              transformative solution for promoting student well-being and
              access to healthcare services. By providing convenient,
              accessible, and comprehensive telehealth services, TimelyMD
              empowers students to prioritize their health and wellness,
              ensuring that they have the support they need to succeed
              academically and personally. Through continued collaboration with
              educational institutions and commitment to student-centered care,
              TimelyMD remains at the forefront of advancing student health and
              wellness in educational settings nationwide.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
