import Image from "next/image";
import Link from "next/link";

import ClickReveal from "./components/click_reveal";
import Clients from "./sections/clients";

export default function Home() {
  return (
    <main className="container flex flex-col items-center mx-8 max-w-fit">
      <header className="flex content-center flex-wrap gap-4 m-8">
        <Image
          src="/codermana.svg"
          alt="CoderMana Logo"
          width={78}
          height={83}
          priority
        />
        <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 align-middle inline-block py-4 sm:text-6xl">CoderMana</div>
      </header>

      <div className="grid grid-cols-3 content-center gap-4 m-5">
        <div className="sm:col-span-2 max-w-xl mx-8 col-span-3">
          <h1 className="text-3xl text-left text-orange-400 my-4">
            Lets make your products and teams scale
          </h1>
          <div className="text-xl">
            At CoderMana, we believe in craftsmanship and applied engineering in all that we do. From building products which are used by people all around the world, to training people all around the world - focusing on scalability, security and resiliency in systems is at the core of our operating principles.
          </div>
        </div>

        <div className="hidden sm:col-span-1 sm:block">
          <Image
            src="/abstract-team.png"
            alt="Hero Image"
            width={304}
            height={256}
            priority/>
        </div>
      </div>

      <div className="m-5">
        <h1 className="text-3xl text-center text-orange-400">What we do?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-20">
          <ClickReveal
            title="Training"
            header="Custom designed courses to fit your needs"
            points={["5+ years", "6+ languages & tools", "1200+ students", "2000+ hours teaching the craft"]}/>
          <ClickReveal
            title="Consulting"
            header="Custom designed systems to meet the expected outcomes"
            points={["12+ years", "14+ programming langugages", "10+ domains", "10000+ hours perfecting the craft"]}/>
        </div>
      </div>

      <Clients/>

      <div className="m-5">
        <h1 className="text-xl text-center text-orange-400">Contact Us</h1>
        <div className="flex flex-col text-md text-center">
          <Link href="mailto:namaste@codermana.com">
            namaste@codermana.com
          </Link>
          <Link href="https://github.com/CoderMana">
            github.com/codermana
          </Link>
        </div>
      </div>

      <div className="text-orange-400 text-xs m-5">
        Copyright © {(new Date()).getFullYear()} CoderMana Technologies Private Limited
      </div>
    </main>
  );
}
