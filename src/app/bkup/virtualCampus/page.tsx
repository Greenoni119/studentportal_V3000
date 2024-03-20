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
        <h1 className="text-7xl text-white">Virtual Campus</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              Virtual Campus: Digital Learning Environment for Remote Education
            </h1>
            <p>
              A Virtual Campus is a dynamic and immersive digital learning
              environment designed to replicate the traditional campus
              experience in a virtual setting. Embraced by educational
              institutions worldwide, Virtual Campuses offer a range of tools
              and features to facilitate remote education, collaboration, and
              engagement among students, faculty, and staff.
            </p>
            <h2>Key Features of Virtual Campus</h2>
            <p>
              A Virtual Campus encompasses a variety of features aimed at
              providing an immersive and interactive learning experience:
            </p>
            <ul>
              <li>
                <strong>Virtual Classrooms: </strong> Virtual Campuses offer
                virtual classrooms equipped with video conferencing, screen
                sharing, and interactive whiteboards, allowing educators to
                deliver live lectures, facilitate discussions, and engage with
                students in real-time. Virtual classrooms provide a
                collaborative space where students can interact with each other
                and participate in group activities, fostering a sense of
                community and belonging.
              </li>
              <li>
                <strong>Online Learning Resources:</strong> Virtual Campuses
                provide access to a wide range of online learning resources,
                including lecture videos, interactive presentations, e-books,
                and multimedia materials. These resources can be accessed
                anytime, anywhere, allowing students to study at their own pace
                and review course materials as needed.
              </li>
              <li>
                <strong>Social Spaces and Student Support Services:</strong>{" "}
                Virtual Campuses include social spaces and student support
                services designed to promote student engagement and well-being.
                These spaces may include virtual lounges, student clubs,
                counseling services, and academic advising offices, providing
                students with opportunities to connect with peers, access
                resources, and receive support from staff and faculty.
              </li>
            </ul>
            <h2>Benefits of Utilizing Virtual Campus</h2>
            <p>
              The adoption of a Virtual Campus offers numerous benefits that
              contribute to enhanced learning outcomes, accessibility, and
              flexibility:
            </p>
            <ul>
              <li>
                <strong>Accessible Education:</strong> Virtual Campuses provide
                access to education for students who may face barriers to
                traditional, on-campus learning, such as geographic distance,
                mobility limitations, or scheduling conflicts. By offering
                remote access to courses and resources, Virtual Campuses ensure
                that all students have the opportunity to pursue their
                educational goals.
              </li>
              <li>
                <strong>Flexibility and Convenience:</strong> Virtual Campuses
                offer flexibility and convenience for students, allowing them to
                access course materials, participate in lectures, and engage
                with classmates from any location with an internet connection.
                This flexibility enables students to balance their academic
                pursuits with work, family responsibilities, and other
                commitments.
              </li>
              <li>
                <strong>Enhanced Collaboration and Engagement:</strong> Virtual
                Campuses promote collaboration and engagement among students and
                educators through interactive tools and features. By
                facilitating real-time communication, group discussions, and
                collaborative projects, Virtual Campuses create opportunities
                for active learning and peer interaction, enriching the
                educational experience for all participants.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by digital innovation
              and evolving learning needs, Virtual Campuses emerge as a
              transformative solution for delivering remote education and
              fostering student success. By providing an immersive and
              interactive learning environment, Virtual Campuses empower
              students to access education anytime, anywhere, and engage with
              course materials and classmates in meaningful ways. Through
              continued investment in technology, pedagogy, and student support
              services, Virtual Campuses remain at the forefront of shaping the
              future of education and expanding access to learning opportunities
              for students worldwide.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
