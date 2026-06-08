import TopCard from "@/components/TopCard";
import InfoCard from "@/components/InfoCard";
// import DelinHowItWorksHeader from "@/components/DelinHowItWorksHeader";
import DelinUserTypeHeader from "@/components/DelinUserTypeHeader";

import { BsGpuCard } from "react-icons/bs";
import { FaShield, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdScience, MdStorage } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { TbContract } from "react-icons/tb";

const infoCardRowClassName =
  "mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-10 lg:px-8";

const introClassName =
  "mx-auto mt-6 max-w-3xl px-5 text-base leading-7 sm:text-lg sm:leading-8 [&_strong]:font-semibold";

// function PlaceholderDemo({ label }: { label: string }) {
//   return (
//     <div className="rounded-lg border border-border bg-surface-muted p-4">
//       <div className="mb-5 flex items-center justify-between gap-4">
//         <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
//           {label}
//         </p>
//         <div className="h-2 w-10 rounded-full bg-foreground/30" />
//       </div>
//       <div className="grid grid-cols-4 gap-3">
//         <div className="col-span-3 space-y-3">
//           <div className="h-3 rounded-full bg-foreground/80" />
//           <div className="h-3 w-4/5 rounded-full bg-foreground/40" />
//           <div className="h-3 w-2/3 rounded-full bg-foreground/30" />
//         </div>
//         <div className="rounded-md border border-border bg-surface p-3">
//           <div className="mx-auto h-10 w-10 rounded-full border border-foreground/30" />
//         </div>
//       </div>
//       <div className="mt-5 grid grid-cols-3 gap-3">
//         <div className="h-16 rounded-md bg-surface" />
//         <div className="h-16 rounded-md bg-surface" />
//         <div className="h-16 rounded-md bg-surface" />
//       </div>
//     </div>
//   );
// }

// function placeholderRows(topic: string): InfoCardExpandedRow[] {
//   return [
//     {
//       demo: <PlaceholderDemo label={`${topic} setup`} />,
//       description: `Placeholder demo area for the first ${topic.toLowerCase()} workflow. This will be replaced with an interactive product mockup and the supporting explanation.`,
//     },
//     {
//       demo: <PlaceholderDemo label={`${topic} review`} />,
//       description: `Placeholder demo area for reviewing and adjusting the ${topic.toLowerCase()} experience before committing to an action.`,
//     },
//     {
//       demo: <PlaceholderDemo label={`${topic} result`} />,
//       description: `Placeholder demo area for the final ${topic.toLowerCase()} outcome, paired with concise explanatory text on the right.`,
//     },
//   ];
// }

export default function Home() {
  return (
    <>
      <div id="about">
        <TopCard />
      </div>

      {/* <section id="how-it-works">
        <DelinHowItWorksHeader />
      </section> */}

      <section id="data-producers">
        <DelinUserTypeHeader action="PRODUCE" />
        <p className={introClassName}>
          GraphonMarkets will let you, as a scientist,{" "}
          <strong>fund your science with your science</strong>. We believe that
          now, more than ever, experimental scientific work is{" "}
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
                  <strong>Vet and structure your data.</strong> We&apos;ll help
                  you store and structure your data. After that, we&apos;ll vet
                  the quality of your data and get you ready for
                  commercialization.
                </li>
                <li>
                  <strong>Write detailed data cards.</strong> For each
                  datastream you hook into GraphonMarkets, write a detailed data
                  card. Make buyers aware of metadata, compliance info, and
                  generation methods.
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

      <section id="data-consumers">
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
                  will sell access under different constraints. So, you have the
                  opportunity to purchase access under terms that fit your use
                  case.
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

      <section
        id="contact-us"
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="border-t border-border pt-8">
          <h2 className="text-section-title font-semibold tracking-wide text-foreground">
            CONTACT US
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-base font-medium text-foreground">
            <a
              href="mailto:arya@graphonmarkets.com"
              className="inline-flex items-center gap-3 underline decoration-transparent underline-offset-4 transition-all hover:decoration-foreground hover:underline-offset-8"
            >
              <MdEmail className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span>arya@graphonmarkets.com</span>
            </a>
            <a
              href="https://x.com/GraphonDataExch"
              className="inline-flex items-center gap-3 underline decoration-transparent underline-offset-4 transition-all hover:decoration-foreground hover:underline-offset-8"
            >
              <FaXTwitter className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span>GraphonDataExch</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
