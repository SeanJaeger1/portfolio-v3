import Link from "next/link"
import Image from "next/image"
import HLImage from "@/public/HLscreenshot.jpg"
import CPImage from "@/public/CPscreenshot.png"

const WorkSection = () => {
  return (
    <section id="work" aria-label="My work portfolio" className="mt-24">
      <div className="header font-kaisei">My Work</div>
      <hr className="w-10  my-6" />
      <div className="mb-12">
        <Link
          href="https://github.com/Human-Lambdas/human-lambdas"
          target="_blank"
        >
          <div className="subheader mt-6 mb-4 font-kaisei">Human Lambdas</div>
          <Image
            src={HLImage}
            width={600}
            height={326}
            alt="Human Lambdas App Screenshot"
          />
        </Link>
        <p className="text-general mt-6">
          After joining Human Lambdas (Seedcamp backed) as a founding engineer,
          I worked full stack on both the TypeScript React web app and Django
          Back End creating Human In The Loop infrastructure for reliable and
          scalable data labeling.
        </p>
        <p className="text-general mt-6">
          Working within a start-up of four, I wore many hats and made various
          contributions to everything from UI/UX to broader discussions about
          company strategy, whilst receiving mentorship from my colleagues.
        </p>
      </div>
      <div>
        <Link href="https://leetcode.com/seanjaeger/" target="_blank">
          <div className="subheader mt-6 mb-4 font-kaisei">
            Competitive Programming
          </div>
          <Image
            src={CPImage}
            width={600}
            height={326}
            alt="Competitive Programming Profile Screenshot"
          />
        </Link>
        <p className="text-general mt-6">
          As part of my studies of Computer Science, I have put my knowledge
          into practice by competing in timed competitive programming
          competitions using Python.
        </p>
        <p className="text-general mt-6">
          These competitions involve four questions of increasing difficulty,
          where a sufficiently asymptotically efficient solution is required for
          all test cases to past.
        </p>
        <p className="text-general mt-6">
          I&apos;ve experienced great success in these competitions, achieving a
          top 4% global ranking out of ~400,000 total participants. In my most
          recent competition I placed in the top ~0.8% of a competition with
          over 17,000 global participants.
        </p>
      </div>
    </section>
  )
}

export default WorkSection