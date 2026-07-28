import TopCard from "@/components/TopCard";
import InfoCard from "@/components/InfoCard";
import DelinUserTypeHeader from "@/components/DelinUserTypeHeader";
import ContactUs from "@/components/ContactUs";

import { BsGpuCard } from "react-icons/bs";
import { FaShield } from "react-icons/fa6";
import { MdScience, MdStorage } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { TbContract } from "react-icons/tb";

const infoCardRowClassName =
  "mx-auto grid w-full max-w-[88rem] gap-4 px-5 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-16 md:grid-cols-3 lg:px-12 lg:pb-40";

const introClassName =
  "mx-auto mt-10 max-w-[88rem] px-5 text-xl leading-8 text-foreground/68 sm:px-8 sm:text-2xl sm:leading-9 lg:px-12 lg:text-[1.7rem] lg:leading-10 [&_strong]:font-normal [&_strong]:text-foreground";

export default function Home() {
  return (
    <>
      <div id="about">
        <TopCard />
      </div>

      <section id="data-producers">
        <DelinUserTypeHeader action="PRODUCE" />
        <p className={introClassName}>
          GraphonMarkets will let firms that engage in scientific research{" "}
          <strong>fund science with science</strong>. We believe that now, more
          than ever, experimental scientific work is{" "}
          <strong>inherently commercially valuable</strong>. The AI industry is
          built on the output of human intelligence, and it is mathematically
          bound to being so. With the mass of readily accessible data largely
          consumed by this industry, demand for <strong>frontier data</strong>{" "}
          at the edge of human intelligence is accelerating.
        </p>
        <div className={infoCardRowClassName}>
          <InfoCard
            Icon={MdStorage}
            header="Structure and Store"
            body={
              <ul>
                <li>
                  <strong>Vet and structure your data.</strong> We will help you
                  store and structure your data. After that, we vet the quality
                  of your data and get you ready for commercialization.
                </li>
                <li>
                  <strong>Create detailed data cards.</strong> For each
                  datastream you hook into GraphonMarkets, a highly detailed
                  Data Card is generated. Make buyers aware of metadata,
                  compliance info, and experimental methods.
                </li>
              </ul>
            }
          />
          <InfoCard
            Icon={FaShield}
            header="Configure Granular Permissions"
            body={
              <ul>
                <li>
                  <strong>Enforce access rights.</strong> You configure access
                  keys that enforce custom usage rights on your datastreams.
                  Keys enforce granular access limits and expiration dates.
                </li>
                <li>
                  <strong>Protect your data.</strong> Take control over export
                  and compute permissions to keep your data in good hands.
                  Control the visibility and exportability of your data, and set
                  limits on the operations buyers are allowed to apply.
                </li>
              </ul>
            }
          />
          <InfoCard
            Icon={PiGraphFill}
            header="Monetize Access and Usage"
            body={
              <ul>
                <li>
                  <strong>Monetize access.</strong> The initial sale price of a
                  key monetizes the privilege to access your data. Sellers will
                  be able to bid on your keys, which will set the final sale
                  price.
                </li>
                <li>
                  <strong>Monetize (and monitor) usage.</strong> After you have
                  sold a key, collect recurring revenue based on usage. In
                  addition, monitor detailed usage statistics to see how buyers
                  are interacting with your data in real time.
                </li>
              </ul>
            }
          />
        </div>
      </section>

      <section
        id="data-consumers"
        className="border-y border-border bg-surface/45"
      >
        <DelinUserTypeHeader action="CONSUME" />

        <p className={introClassName}>
          GraphonMarkets will fix the data-constraint problem.{" "}
          <strong>Frontier data</strong> play a more prominent role in your
          competitive edge than ever before, and we want to help you bring your
          models to the next stratum of performance by giving you access to
          scientific datasets that are <strong>high-quality</strong>,{" "}
          <strong>clean</strong>, <strong>domain specific</strong>, and{" "}
          <strong>produced by the smartest humans</strong>. We know that
          scientific datasets are <strong>fragmented across labs</strong>,
          <strong> buried in inconsistent formats</strong>, and constrained by{" "}
          <strong> unclear access terms</strong>, but GraphonMarkets removes
          these barriers and incentivizes labs to bring their output online.
        </p>

        <div className={infoCardRowClassName}>
          <InfoCard
            Icon={MdScience}
            header="Source Specialized Data"
            body={
              <ul>
                <li>
                  <strong>Find differentiated datasets.</strong> Our platform
                  incentivizes labs to bring their data online. Access
                  high-quality, high-signal experimental data difficult or
                  impossible to source through public repos.
                </li>
                <li>
                  <strong>Evaluate before you buy. </strong> Examine all aspects
                  of a dataset to make sure it&apos;s right for your model. Read
                  highly detailed data cards with deep metadata and compliance
                  information. Download a sample to vet data in a way that fits
                  your needs.
                </li>
              </ul>
            }
          />
          <InfoCard
            Icon={TbContract}
            header="Find Suitable Access Terms"
            body={
              <ul>
                <li>
                  <strong>Know exactly what you&apos;re getting.</strong>{" "}
                  GraphonMarkets will reduce the murkiness of compliance and
                  consent around data acquisition. See usage rights, read
                  limits, and export/compute restrictions up front.
                </li>
                <li>
                  <strong>Choose the right access model.</strong> Different labs
                  will sell access under different constraints. You have the
                  opportunity to purchase access under terms that fit your
                  workflow.
                </li>
              </ul>
            }
          />
          <InfoCard
            Icon={BsGpuCard}
            header="Train and Eval Across Labs"
            body={
              <ul>
                <li>
                  <strong>Own a secure environment.</strong> We will provide you
                  an environment to help aggregate vast, complex train, val, and
                  test sets compiled from datastreams across multiple labs.
                </li>
                <li>
                  <strong>Navigate heterogeneous permissions.</strong> Your
                  aggregation environment is backed by a data-intelligence layer
                  that acts on your keys and the associated data cards.
                  Effortlessly combine datastreams with heterogeneous access
                  permissions.
                </li>
              </ul>
            }
          />
        </div>
      </section>

      <ContactUs />
    </>
  );
}
