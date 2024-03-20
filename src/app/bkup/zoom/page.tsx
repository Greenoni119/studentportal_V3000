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
        <h1 className="text-7xl text-white">Zoom</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              Zoom: Video Conferencing and Collaboration Platform for Education
            </h1>
            <p>
              Zoom is a widely-used video conferencing and collaboration
              platform that has become an essential tool for educational
              institutions, facilitating remote learning, virtual meetings, and
              interactive discussions among students, faculty, and staff. With
              its intuitive interface, robust features, and scalability, Zoom
              offers a seamless communication solution for connecting
              individuals across various locations and devices.
            </p>
            <h2>Key Features of Zoom</h2>
            <p>
              Zoom encompasses a variety of features tailored to meet the needs
              of educators and learners in educational settings:
            </p>
            <ul>
              <li>
                <strong>HD Video and Audio Conferencing:</strong> Zoom provides
                high-definition video and audio conferencing capabilities,
                allowing participants to engage in clear, face-to-face
                communication from anywhere with an internet connection. With
                support for up to 1,000 video participants and 49 simultaneous
                video streams, Zoom accommodates large classes, lectures, and
                meetings with ease.
              </li>
              <li>
                <strong>Screen Sharing and Collaboration Tools:</strong> Zoom
                offers screen sharing and collaboration tools that enable
                participants to share presentations, documents, and multimedia
                content in real-time. Whether conducting lectures, group
                discussions, or collaborative projects, educators and students
                can interact and engage with shared content seamlessly,
                fostering active learning and collaboration.
              </li>
              <li>
                <strong>Interactive Whiteboarding and Annotation:</strong> Zoom
                includes interactive whiteboarding and annotation features that
                allow participants to draw, annotate, and brainstorm ideas
                collaboratively in virtual environments. Educators can use
                whiteboarding tools to illustrate concepts, solve problems, and
                engage students in interactive learning activities, enhancing
                comprehension and retention.
              </li>
              <li>
                <strong>Recording and Playback:</strong> Zoom allows users to
                record meetings, classes, and presentations for future reference
                or review. Recorded sessions can be shared securely with
                participants or archived for on-demand access, providing
                flexibility for students who may need to review content at their
                own pace or revisit discussions and lectures.
              </li>
            </ul>
            <h2>Benefits of Utilizing Zoom</h2>
            <p>
              The adoption of Zoom offers numerous benefits for educational
              institutions, educators, and students:
            </p>
            <ul>
              <li>
                <strong>Flexible Learning Environments:</strong> Zoom enables
                educational institutions to create flexible learning
                environments that accommodate remote, hybrid, and blended
                learning models. With Zoom&apos;s cloud-based platform,
                educators can conduct live virtual classes, host guest lectures,
                and facilitate group discussions, regardless of students&apos;
                physical locations.
              </li>
              <li>
                <strong>Increased Accessibility and Inclusion:</strong> Zoom
                promotes accessibility and inclusion by providing students with
                the flexibility to participate in classes and meetings from
                anywhere, using any internet-enabled device. Students who may
                have mobility limitations, scheduling conflicts, or other
                barriers to traditional classroom attendance can engage in
                learning activities remotely, ensuring equitable access to
                education.
              </li>
              <li>
                <strong>Engaging and Interactive Instruction: </strong>{" "}
                Zoom&apos;s interactive features and collaboration tools empower
                educators to deliver engaging and interactive instruction that
                promotes student engagement and participation. Through live
                polls, breakout rooms, chat discussions, and multimedia
                presentations, educators can create dynamic learning experiences
                that cater to diverse learning styles and preferences.
              </li>
              <li>
                <strong>Efficient Communication and Collaboration:</strong> Zoom
                facilitates efficient communication and collaboration among
                students, faculty, and staff, enabling seamless information
                sharing, teamwork, and decision-making. Whether holding
                department meetings, conducting student advising sessions, or
                collaborating on research projects, users can leverage
                Zoom&apos;s platform to communicate effectively and work
                collaboratively towards shared goals.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by remote learning,
              virtual collaboration, and digital communication, Zoom emerges as
              a versatile and indispensable platform for connecting educators
              and learners in meaningful ways. By providing intuitive video
              conferencing and collaboration tools, Zoom empowers educational
              institutions to create engaging learning environments, foster
              collaboration, and promote student success in today&apos;s
              interconnected world. Through continued innovation, support, and
              collaboration with educational stakeholders, Zoom remains
              committed to advancing education and empowering individuals to
              connect, communicate, and collaborate effectively, regardless of
              physical location or distance.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
