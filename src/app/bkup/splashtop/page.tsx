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
        <h1 className="text-7xl text-white">Splashtop</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>Splashtop: Remote Access and Remote Support Solutions</h1>
            <p>
              Splashtop is a leading provider of remote access and remote
              support solutions designed to facilitate seamless access to
              computers and devices from anywhere, at any time. Trusted by
              educational institutions and businesses worldwide, Splashtop
              offers a range of products and services to support remote
              learning, remote work, and IT management in educational
              environments.
            </p>
            <h2>Key Features of Splashtop</h2>
            <p>
              Splashtop encompasses a variety of features aimed at enabling
              remote access, collaboration, and support:
            </p>
            <ul>
              <li>
                <strong>Remote Desktop Access:</strong> Splashtop enables users
                to remotely access their computers and devices from any location
                using a variety of devices, including computers, tablets, and
                mobile phones. With Splashtop, users can access files,
                applications, and resources on their remote computers as if they
                were sitting in front of them.
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Splashtop
                supports cross-platform compatibility, allowing users to access
                Windows, Mac, and Linux computers from a wide range of devices
                and operating systems. Whether using Windows, macOS, iOS,
                Android, or Chrome OS, users can seamlessly connect to their
                remote computers with Splashtop.
              </li>
              <li>
                <strong>Remote Support and Collaboration:</strong> Splashtop
                facilitates remote support and collaboration by allowing IT
                administrators, teachers, and students to remotely assist and
                collaborate with each other. With features such as screen
                sharing, file transfer, and remote control, Splashtop enables
                real-time collaboration and troubleshooting across
                geographically dispersed teams.
              </li>
            </ul>
            <h2>Benefits of Utilizing Splashtop</h2>
            <p>
              The adoption of Splashtop offers numerous benefits that contribute
              to enhanced productivity, efficiency, and flexibility in
              educational environments:
            </p>
            <ul>
              <li>
                <strong>Flexible Remote Learning and Teaching: </strong>Enhanced
                Collaboration and Productivity:
              </li>
              <li>
                <strong>Efficient IT Management: </strong> Splashtop simplifies
                IT management by providing administrators with remote access and
                remote support tools to manage computers and devices across the
                institution. Whether deploying software updates, troubleshooting
                technical issues, or providing technical assistance, Splashtop
                streamlines IT workflows and reduces the need for on-site
                support.
              </li>
              <li>
                <strong>Enhanced Collaboration and Productivity:</strong>{" "}
                Splashtop fosters collaboration and productivity by enabling
                real-time communication and collaboration between teachers,
                students, and IT support staff. With Splashtop, teams can
                collaborate on projects, share resources, and troubleshoot
                issues efficiently, regardless of their physical location.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by remote learning,
              distributed teams, and evolving technology needs, Splashtop
              emerges as a valuable tool for enabling seamless remote access,
              collaboration, and support. By providing users with intuitive
              remote access and remote support solutions, Splashtop empowers
              educational institutions to embrace flexibility, productivity, and
              innovation in their teaching, learning, and IT management
              practices. Through continued innovation and support, Splashtop
              remains committed to helping educational institutions navigate the
              challenges of remote work and learning, and unlock new
              opportunities for growth and success in the digital age.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
