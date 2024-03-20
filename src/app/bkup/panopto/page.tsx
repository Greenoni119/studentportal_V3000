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
        <h1 className="text-7xl text-white">Panopto</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>Panopto: Video Content Management System for Education</h1>
            <p>
              Panopto is a leading video content management system designed to
              facilitate the creation, management, and delivery of video-based
              learning materials in educational settings. Trusted by
              universities, colleges, and K-12 schools worldwide, Panopto offers
              a comprehensive platform for recording lectures, creating
              multimedia presentations, and enhancing student engagement through
              video-based learning experiences.
            </p>
            <h2>Key Features of Panopto</h2>
            <p>
              Panopto encompasses a variety of features aimed at supporting
              teaching, learning, and knowledge sharing through video:
            </p>
            <ul>
              <li>
                <strong>Lecture Capture and Recording: </strong> Panopto allows
                educators to record lectures, presentations, and classroom
                discussions with ease using a variety of recording devices,
                including computers, webcams, and mobile devices. Recorded
                sessions can be automatically uploaded to the Panopto platform
                for easy access and sharing.
              </li>
              <li>
                <strong>Multimedia Content Creation:</strong> Panopto offers
                tools for creating interactive multimedia presentations and
                instructional videos, allowing educators to incorporate slides,
                images, annotations, and quizzes into their video content. With
                built-in editing capabilities, educators can enhance their
                videos with professional-quality effects and transitions.
              </li>
              <li>
                <strong>Video Content Management:</strong> Panopto provides a
                centralized platform for managing and organizing video content,
                including lectures, tutorials, and instructional materials.
                Educators can categorize videos by course, topic, or keyword,
                making it easy for students to find and access relevant content.
              </li>
            </ul>
            <h2>Benefits of Utilizing Panopto</h2>
            <p>
              The adoption of Panopto offers numerous benefits that contribute
              to enhanced teaching effectiveness, student engagement, and
              learning outcomes:
            </p>
            <ul>
              <li>
                <strong>Flexible Learning Experiences:</strong> Panopto enables
                educators to deliver flexible learning experiences that
                accommodate diverse learning styles and preferences. By
                providing access to recorded lectures and multimedia
                presentations, Panopto allows students to engage with course
                materials at their own pace and convenience, both inside and
                outside the classroom.
              </li>
              <li>
                <strong>Active Learning and Engagement:</strong> Panopto
                promotes active learning and student engagement by offering
                interactive video-based learning experiences. Educators can
                incorporate quizzes, polls, and discussions into their videos to
                assess student understanding, encourage participation, and
                promote critical thinking skills.
              </li>
              <li>
                <strong>Accessibility and Inclusivity:</strong> Panopto enhances
                accessibility and inclusivity by providing options for closed
                captioning, transcripts, and video playback controls. These
                features ensure that all students, including those with
                disabilities or diverse learning needs, can access and engage
                with video content effectively.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by digital innovation
              and evolving pedagogical practices, Panopto emerges as a valuable
              tool for enhancing teaching effectiveness, promoting student
              engagement, and facilitating flexible learning experiences. By
              providing educators with intuitive tools for recording, creating,
              and managing video content, Panopto empowers institutions to
              harness the power of video-based learning to enrich the
              educational experience and support student success. Through
              continued innovation and collaboration with educators and
              institutions, Panopto remains at the forefront of transforming
              teaching and learning in the digital age.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
