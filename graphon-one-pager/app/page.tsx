import TopCard from "@/components/TopCard";
import InfoCard, { type InfoCardExpandedRow } from "@/components/InfoCard";
import DelinUserTypeHeader from "@/components/DelinUserTypeHeader";

import { BsGpuCard } from "react-icons/bs";
import { FaShield, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdScience, MdStorage } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { TbContract } from "react-icons/tb";

const infoCardRowClassName =
  "mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-10 lg:px-8";

const introClassName =
  "mx-auto mt-6 max-w-3xl px-5 text-base leading-7 text-text-muted sm:text-lg sm:leading-8 [&_strong]:font-semibold [&_strong]:text-foreground";

function PlaceholderDemo({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface-muted p-4">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
          {label}
        </p>
        <div className="h-2 w-10 rounded-full bg-foreground/30" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3 space-y-3">
          <div className="h-3 rounded-full bg-foreground/80" />
          <div className="h-3 w-4/5 rounded-full bg-foreground/40" />
          <div className="h-3 w-2/3 rounded-full bg-foreground/30" />
        </div>
        <div className="rounded-md border border-border bg-surface p-3">
          <div className="mx-auto h-10 w-10 rounded-full border border-foreground/30" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="h-16 rounded-md bg-surface" />
        <div className="h-16 rounded-md bg-surface" />
        <div className="h-16 rounded-md bg-surface" />
      </div>
    </div>
  );
}

function placeholderRows(topic: string): InfoCardExpandedRow[] {
  return [
    {
      demo: <PlaceholderDemo label={`${topic} setup`} />,
      description: `Placeholder demo area for the first ${topic.toLowerCase()} workflow. This will be replaced with an interactive product mockup and the supporting explanation.`,
    },
    {
      demo: <PlaceholderDemo label={`${topic} review`} />,
      description: `Placeholder demo area for reviewing and adjusting the ${topic.toLowerCase()} experience before committing to an action.`,
    },
    {
      demo: <PlaceholderDemo label={`${topic} result`} />,
      description: `Placeholder demo area for the final ${topic.toLowerCase()} outcome, paired with concise explanatory text on the right.`,
    },
  ];
}

export default function Home() {
  return (
    <>
      <div id="about">
        <TopCard />
      </div>

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
                  <strong>Already have a storage solution?</strong> Hook into
                  your existing cloud provider. Let us be the exchange layer
                  that empowers you to commercialize data access more
                  effectively than via any existing platform.
                </li>
                <li>
                  <strong>Unstructured, dispersed data? </strong> Your
                  scientific output is valuable, and we&apos;re building the
                  infrastructure layer that makes it usable at scale. Let us
                  help you structure a storage solution that works.
                </li>
              </ul>
            }
            expandedRows={placeholderRows("Flexible storage")}
          />
          <InfoCard
            Icon={FaShield}
            header="Configure Granular Permissions"
            body={
              <ul>
                <li>
                  <strong>Enforce access rights.</strong> You configure
                  &quot;access keys&quot; that enforce custom usage rights on
                  your data. Control access to your data by tuning read limits,
                  column encryption, and expiration dates.
                </li>
                <li>
                  <strong>Protect your data.</strong> Take control over export
                  permissions to keep your data in good hands. Require
                  data-to-compute cleanrooms, and directly monetize compute.
                  Alternatively, allow for full export of your data.
                </li>
              </ul>
            }
            expandedRows={placeholderRows("Granular permissions")}
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
            expandedRows={placeholderRows("Peer-to-peer marketplace")}
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
                  <strong>Evaluate before you buy. </strong> The datasets you
                  access through GraphonMarkets are usable at scale. Examine all
                  aspects of a dataset to make sure it&apos;s right for your
                  model. Review metadata, access terms, and quality indicators.
                </li>
              </ul>
            }
            expandedRows={placeholderRows("Science data discovery")}
          />
          <InfoCard
            Icon={TbContract}
            header="Find Suitable Access Terms"
            body={
              <ul>
                <li>
                  <strong>Know exactly what you&apos;re getting.</strong>{" "}
                  GraphonMarkets eliminates the barriers of compliance and
                  consent. See usage rights, read limits, and export/compute
                  restrictions up front.
                </li>
                <li>
                  <strong>Choose the right access model.</strong> Different labs
                  will sell access under different constraints. So, you have the
                  opportunity to purchase access under terms that fit your use
                  case.
                </li>
              </ul>
            }
            expandedRows={placeholderRows("Contract review")}
          />
          <InfoCard
            Icon={BsGpuCard}
            header="Bring Your Own Workflow"
            body={
              <ul>
                <li>
                  <strong>Don&apos;t sacrifice compute.</strong> Have your own
                  cluster? No problem. Own a secure compute environment where
                  your code executes next to data using your proprietary
                  compute, without friction.
                </li>
                <li>
                  <strong>Integrate data more efficiently.</strong> Plug
                  directly into your workflow. Aggregate vast amounts of data
                  across multiple labs to build sophisticated models.
                </li>
              </ul>
            }
            expandedRows={placeholderRows("Buyer collaboration")}
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
              className="inline-flex items-center gap-3 transition-colors hover:text-text-muted"
            >
              <MdEmail className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span>arya@graphonmarkets.com</span>
            </a>
            <a
              href="https://x.com/GraphonDataExch"
              className="inline-flex items-center gap-3 transition-colors hover:text-text-muted"
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
