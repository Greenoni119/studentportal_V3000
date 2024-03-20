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
        <h1 className="text-7xl text-white">Wepa</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>WEPA: Cloud Printing Solutions for Educational Institutions</h1>
            <p>
              WEPA is a leading provider of cloud printing solutions tailored to
              the needs of educational institutions. Designed to simplify the
              printing process, enhance accessibility, and promote
              sustainability, WEPA offers a comprehensive suite of printing
              services and technologies that empower students, faculty, and
              staff to print documents from any location and device with ease.
            </p>
            <h2>Key Features of Wepa</h2>
            <p>
              WEPA encompasses a variety of features aimed at improving the
              printing experience for users and administrators:
            </p>
            <ul>
              <li>
                <strong>Cloud-Based Printing:</strong> WEPA provides cloud-based
                printing solutions that allow users to send print jobs from
                their computers, laptops, smartphones, or tablets to designated
                print stations located on campus. With cloud integration, users
                can access their documents and print them securely from any
                location with an internet connection, eliminating the need for
                physical connections or drivers.
              </li>
              <li>
                <strong>Mobile Printing Apps:</strong> WEPA offers mobile
                printing apps for iOS and Android devices, enabling users to
                print documents, photos, and web pages directly from their
                smartphones or tablets. These apps provide intuitive interfaces,
                customizable settings, and secure authentication options, making
                it convenient for users to print on the go without compromising
                security or quality.
              </li>
              <li>
                <strong>Flexible Payment Options:</strong> WEPA supports a
                variety of payment options for printing services, including
                campus cards, credit/debit cards, and student accounts. Users
                can easily add funds to their printing accounts, track printing
                expenses, and manage print quotas through the WEPA portal or
                mobile app, promoting transparency and accountability in
                printing usage.
              </li>
              <li>
                <strong>Environmental Sustainability:</strong> WEPA promotes
                environmental sustainability by offering features such as
                double-sided printing, print job release, and cloud storage
                options, which help reduce paper waste, conserve resources, and
                minimize the carbon footprint associated with printing
                activities. By encouraging responsible printing practices, WEPA
                supports the institution&apos;s sustainability initiatives and
                promotes environmental stewardship among users.
              </li>
            </ul>
            <h2>Benefits of Utilizing Wepa</h2>
            <p>
              The adoption of WEPA offers numerous benefits for educational
              institutions, students, faculty, and staff:
            </p>
            <ul>
              <li>
                <strong>Convenience and Accessibility: </strong> WEPA provides
                users with convenient access to printing services from any
                location on campus or off-campus, using their preferred devices.
                Whether printing documents for classes, assignments, or
                administrative purposes, users can rely on WEPA&apos;s cloud
                printing solutions to meet their needs efficiently and
                effectively.
              </li>
              <li>
                <strong>Cost Savings and Efficiency:</strong> WEPA helps
                educational institutions save costs and improve operational
                efficiency by reducing the need for traditional printing
                infrastructure, maintenance, and support. With cloud-based
                printing, institutions can streamline printing processes,
                minimize downtime, and reallocate resources to other strategic
                priorities, leading to cost savings and productivity gains.
              </li>
              <li>
                <strong>Enhanced User Experience:</strong> WEPA enhances the
                printing experience for users by providing intuitive interfaces,
                fast printing speeds, and reliable performance. Whether printing
                documents, posters, or presentations, users can expect
                high-quality results and seamless printing experiences that meet
                their expectations for convenience, speed, and reliability.
              </li>
              <li>
                <strong>Support for Remote and Hybrid Learning:</strong>{" "}
                WEPA&apos;s cloud printing solutions support remote and hybrid
                learning environments by enabling students and faculty to print
                documents and materials from any location, at any time. Whether
                attending virtual classes or accessing course materials online,
                users can easily print study guides, lecture notes, and
                assignments using WEPA&apos;s cloud printing services, ensuring
                continuity in the learning process.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by digital
              transformation and evolving learning environments, WEPA emerges as
              a valuable partner for educational institutions seeking to
              modernize their printing infrastructure, enhance user experiences,
              and promote sustainability. By providing cloud printing solutions
              that are convenient, accessible, and environmentally responsible,
              WEPA empowers students, faculty, and staff to print documents with
              ease and efficiency, wherever they may be. Through continued
              innovation, collaboration, and support, WEPA remains committed to
              transforming the printing experience in educational institutions
              and supporting the success of students and educators alike.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
