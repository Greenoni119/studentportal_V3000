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
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600  flex justify-center items-center h-32">
        <h1 className="text-7xl text-white">Library Pass Comics Plus</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>Library Pass Comics Plus: Digital Comic Library</h1>
            <p>
              Library Pass Comics Plus is an innovative digital comic library
              platform designed to ignite a love for reading and storytelling
              among students of all ages. Embraced by educational institutions
              and libraries worldwide, Comics Plus offers a vast collection of
              digital comics, graphic novels, and manga titles, providing
              students with access to engaging and immersive reading
              experiences.
            </p>
            <h2>Key Features of Library Pass</h2>
            <p>
              Library Pass boasts a variety of features aimed at promoting
              literacy, creativity, and exploration:
            </p>
            <ul>
              <li>
                <strong>Extensive Comic Collection: </strong> Library Pass
                Comics Plus offers a diverse and extensive collection of digital
                comics, graphic novels, and manga titles spanning various
                genres, interests, and reading levels. From superheroes and
                fantasy to humor and non-fiction, students can explore a wide
                range of content that caters to their individual preferences and
                interests.
              </li>
              <li>
                <strong>Unlimited Access and Offline Reading:</strong> Library
                Pass provides students with unlimited access to its digital
                comic library, allowing them to read online or download titles
                for offline reading. Whether at home, in the classroom, or on
                the go, students can enjoy their favorite comics anytime,
                anywhere, without internet connectivity.
              </li>
              <li>
                <strong>Educational Resources and Lesson Plans:</strong> Library
                Pass offers educational resources and lesson plans designed to
                integrate digital comics into the curriculum and enhance
                learning outcomes. Teachers can leverage comics as educational
                tools to promote literacy skills, critical thinking, and visual
                literacy across various subjects and grade levels.
              </li>
            </ul>
            <h2>Benefits of Utilizing Library Pass Comics Plus</h2>
            <p>
              The adoption of Library Pass Comics Plus offers numerous benefits
              that contribute to student engagement, literacy development, and
              academic success:
            </p>
            <ul>
              <li>
                <strong>Promotion of Literacy and Reading Engagement: </strong>{" "}
                Library Pass Comics Plus sparks a love for reading and
                storytelling by offering engaging and visually appealing content
                that resonates with students. Through comics, students develop
                literacy skills, vocabulary, and comprehension while immersing
                themselves in captivating narratives and artwork.
              </li>
              <li>
                <strong>Accessibility and Mobile Responsiveness:</strong>{" "}
                Library Pass Comics Plus celebrates diversity and inclusion by
                offering a diverse range of characters, creators, and stories
                that reflect the rich tapestry of human experiences. Students
                encounter diverse perspectives, cultures, and identities within
                the pages of digital comics, fostering empathy, understanding,
                and appreciation for diversity.
              </li>
              <li>
                <strong>
                  Integration with Digital Learning Environments:{" "}
                </strong>{" "}
                Library Pass Comics Plus seamlessly integrates with digital
                learning environments and educational platforms, allowing
                teachers to incorporate comics into their lessons and
                assignments. Whether as supplementary reading material, creative
                writing prompts, or visual aids, comics enhance learning
                experiences and engage students in meaningful ways.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an era characterized by digital innovation and evolving
              literacy practices, Library Pass Comics Plus emerges as a
              transformative tool for promoting reading engagement, literacy
              development, and creative expression among students. By providing
              access to a vast collection of digital comics, graphic novels, and
              educational resources, Comics Plus empowers students to explore,
              imagine, and connect with stories and ideas in new and exciting
              ways. Through collaborative partnerships between libraries,
              educators, and publishers, Library Pass Comics Plus enriches the
              educational experience and cultivates a lifelong love for reading
              and learning among students across the globe.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
