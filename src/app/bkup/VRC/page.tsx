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
        <h1 className="text-7xl text-white">Vision Resource Center (VRC) </h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              Vision Resource Center: Professional Development Platform for
              Educators
            </h1>
            <p>
              The Vision Resource Center is a comprehensive professional
              development platform designed to support the continuous growth and
              learning of educators in educational institutions. Developed
              collaboratively by educational organizations and experts in the
              field, the Vision Resource Center offers a wide range of
              resources, tools, and opportunities for educators to enhance their
              skills, knowledge, and effectiveness in teaching and leadership
              roles.
            </p>
            <h2>Key Features of VRC</h2>
            <p>
              The Vision Resource Center encompasses a variety of features aimed
              at supporting professional development and growth among educators:
            </p>
            <ul>
              <li>
                <strong>Online Learning Modules:</strong> The Vision Resource
                Center provides access to a library of online learning modules
                covering various topics relevant to education, pedagogy,
                technology integration, leadership, and more. These modules are
                designed to be self-paced and interactive, allowing educators to
                learn at their own convenience and track their progress.
              </li>
              <li>
                <strong>Webinars and Workshops:</strong> The Vision Resource
                Center hosts live webinars and virtual workshops featuring
                experts in the field, who share insights, best practices, and
                strategies for effective teaching, learning, and leadership.
                These live events provide opportunities for educators to engage
                with peers, ask questions, and participate in discussions on
                timely and relevant topics.
              </li>
              <li>
                <strong>Resource Library:</strong> The Vision Resource Center
                offers a curated library of resources, including articles,
                research papers, case studies, and teaching materials, to
                support educators in their professional practice. Educators can
                access a wealth of information and resources to inform their
                teaching strategies, curriculum development, and decision-making
                processes.
              </li>
            </ul>
            <h2>Benefits of Utilizing VRC</h2>
            <p>
              The adoption of the Vision Resource Center offers numerous
              benefits for educators, educational institutions, and students:
            </p>
            <ul>
              <li>
                <strong>Continuous Professional Development:</strong> The Vision
                Resource Center supports educators in their ongoing professional
                development journey by providing access to high-quality learning
                opportunities and resources. By engaging in continuous learning,
                educators can stay updated on emerging trends, best practices,
                and innovative strategies to enhance their teaching
                effectiveness and student outcomes.
              </li>
              <li>
                <strong>Collaborative Learning Community:</strong> The Vision
                Resource Center fosters a collaborative learning community where
                educators can connect, share ideas, and collaborate with peers
                from across the educational landscape. Through networking
                opportunities, discussion forums, and collaborative projects,
                educators can leverage the collective expertise and experiences
                of their peers to improve their practice and solve common
                challenges.
              </li>
              <li>
                <strong>Improved Student Learning Outcomes:</strong> By
                investing in the professional development of educators, the
                Vision Resource Center ultimately contributes to improved
                student learning outcomes. Educators who engage in continuous
                learning and professional growth are better equipped to meet the
                diverse needs of their students, create engaging learning
                experiences, and foster a culture of excellence and innovation
                in their classrooms and schools.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by rapid change and
              evolving demands, the Vision Resource Center emerges as a valuable
              asset for supporting the professional growth and development of
              educators. By providing access to a wealth of learning
              opportunities, resources, and networking opportunities, the Vision
              Resource Center empowers educators to excel in their roles,
              enhance student learning outcomes, and contribute to the overall
              success of educational institutions. Through continued
              collaboration, innovation, and investment in professional
              development, the Vision Resource Center remains committed to
              advancing teaching excellence and student success in educational
              settings.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
