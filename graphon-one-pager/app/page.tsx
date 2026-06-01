import TopCard from "@/components/TopCard";
import InfoCard from "@/components/InfoCard";
import InfoCardRowLayout from "@/components/InfoCardRowLayout";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <TopCard />
      <InfoCardRowLayout>
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
          body="hafhadaffshafhadaffshafhadaffshafhadaffshafhadaffshafhadaffshafhadaffshafhadaffs"
        />
      </InfoCardRowLayout>

      <InfoCardRowLayout>
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
      </InfoCardRowLayout>
    </section>
  );
}
