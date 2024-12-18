import Encryption from "@/components/main/Encryption";
import FooterT from "@/components/main/FooterT";
import About from "@/components/main/About";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <About />
        <Skills />
        <Projects/>
      </div>
    </main>
  );
}
