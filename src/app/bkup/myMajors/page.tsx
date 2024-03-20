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
        <h1 className="text-7xl text-white">myMajors</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              myMajors: Personalized Academic and Career Exploration Platform
            </h1>
            <p>
              myMajors is a comprehensive academic and career exploration
              platform designed to empower students in their journey towards
              discovering their academic interests, strengths, and career
              aspirations. Embraced by educational institutions and students
              worldwide, myMajors offers a range of tools and resources to guide
              students through the process of selecting a major, exploring
              career paths, and planning their academic future.
            </p>
            <h2>Key Features of myMajors</h2>
            <p>
              myMajors encompasses a variety of features aimed at assisting
              students in making informed academic and career decisions:
            </p>
            <ul>
              <li>
                <strong>Personalized Major Recommendations: </strong> myMajors
                utilizes comprehensive assessment tools and algorithms to
                provide students with personalized major recommendations based
                on their interests, skills, and academic preferences. By
                analyzing factors such as personality traits, academic
                strengths, and career goals, myMajors helps students explore
                majors that align with their individual strengths and
                aspirations.
              </li>
              <li>
                <strong>Career Exploration and Pathways:</strong> myMajors
                offers students insights into various career paths and
                opportunities associated with different majors. Through career
                exploration tools, job market trends, and alumni profiles,
                students can gain valuable insights into potential career
                options and pathways, empowering them to make informed decisions
                about their academic and professional future.
              </li>
              <li>
                <strong>Academic Planning and Goal Setting:</strong> myMajors
                assists students in developing academic plans and setting goals
                aligned with their chosen major and career aspirations. By
                providing resources such as degree requirements, course
                recommendations, and academic advising support, myMajors helps
                students map out their academic journey and stay on track
                towards achieving their educational and career objectives.
              </li>
            </ul>
            <h2>Benefits of Utilizing myMajors</h2>
            <p>
              The adoption of myMajors offers numerous benefits that contribute
              to student success, academic engagement, and career readiness:
            </p>
            <ul>
              <li>
                <strong>Informed Decision Making:</strong> myMajors equips
                students with the information and insights necessary to make
                informed decisions about their academic and career paths. By
                providing personalized recommendations, career insights, and
                academic planning tools, myMajors empowers students to explore
                their options and pursue paths that align with their interests
                and goals.
              </li>
              <li>
                <strong>Enhanced Academic Engagement:</strong> myMajors fosters
                academic engagement and motivation by helping students connect
                their academic pursuits to their long-term career aspirations.
                By offering insights into the relevance and applicability of
                different majors, myMajors encourages students to take ownership
                of their learning and pursue academic pathways that inspire and
                excite them.
              </li>
              <li>
                <strong>Improved Career Readiness: </strong> myMajors prepares
                students for future career success by providing them with
                insights into the skills, knowledge, and experiences required
                for their chosen fields. By facilitating career exploration,
                goal setting, and academic planning, myMajors helps students
                develop the skills and competencies necessary to thrive in their
                chosen professions and make meaningful contributions to society.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by diverse interests,
              talents, and career aspirations, myMajors emerges as a valuable
              tool for guiding students through the process of academic and
              career exploration. By providing personalized recommendations,
              career insights, and academic planning support, myMajors empowers
              students to make informed decisions, pursue paths that align with
              their passions and strengths, and ultimately achieve their
              academic and professional goals. Through collaboration between
              students, educators, and career advisors, myMajors enriches the
              academic experience and prepares students for success in an
              ever-evolving and dynamic world.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
