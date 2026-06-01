import TopCard from "@/components/TopCard";
import InfoCard from "@/components/InfoCard";

import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="">
      <TopCard />

      <div className="flex gap-6 w-full bg-red-400 items-center justify-center">
        <InfoCard
          Icon={FaGithub}
          header="hello"
          body="hafhadaffshafhadaffshafhadaffshafhadaffs"
        />
        <InfoCard
          Icon={FaGithub}
          header="hello"
          body="hafhadaffshafhadaffshafhadaffshafhadaffs"
        />
        <InfoCard
          Icon={FaGithub}
          header="hello"
          body="hafhadaffshafhadaffshafhadaffshafhadaffs"
        />
      </div>
    </section>
  );
}
