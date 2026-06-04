import TopCard from "@/components/TopCard";
import InfoCard, { type ExpandedInfoCardRow } from "@/components/InfoCard";
import InfoCardRowLayout from "@/components/InfoCardRowLayout";
import DelinUserTypeHeader from "@/components/DelinUserTypeHeader";
import DelinAboutUsHeader from "@/components/DelinAboutUsHeader";

import { FaShield } from "react-icons/fa6";
import { MdStorage, MdScience } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { TbContract } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";

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

function placeholderRows(topic: string): ExpandedInfoCardRow[] {
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

function ForegroundBold({ body }: { body: string }) {
  return <strong className="font-semibold text-foreground">{body}</strong>;
}

export default function Home() {
  return (
    <section>
      <TopCard />

      <DelinUserTypeHeader action="PRODUCE" />
      <p className="mx-auto mt-6 max-w-3xl px-5 text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
        GraphonMarkets will let you, as a scientist,{" "}
        <ForegroundBold body="fund your science with your science" />. You are
        currently forced to concern yourself with obtaining grant funding and
        with the commercial viability of your scientific work. But, what if
        experimental scientific work is{" "}
        <ForegroundBold body="inherently valuable" />, and becoming moreso? The
        AI industry is built on the output of human intelligence, and it is
        mathematically bound to being so. With the mass of publicly available
        data (or, readily accessible data, more broadly) already consumed by
        this industry, demand for <ForegroundBold body="frontier" /> data - that
        is, data at the edge of human intelligence - is accelerating. Capture
        the value in your data.
      </p>
      <InfoCardRowLayout>
        <InfoCard
          Icon={MdStorage}
          header="Structure and Store"
          body={
            <ul>
              <li>
                <strong>Already have a storage solution?</strong> Hook into
                your existing cloud provider.
              </li>
              <li>
                <strong>Unstructured, dispersed data?</strong> Your data are
                valuable. Let us help you structure a storage solution that
                works for you.
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
                <strong>Enforce access rights.</strong> You sell keys that
                enforce custom usage rights on your data. Keys all you to
                programmatically control access to your data by tuning
                parameters that define read limits, column encryption, and
                expiration dates.
              </li>
              <li>
                <strong>Protect your data.</strong> We let you take control
                over export permissions. Require data-to-compute cleanrooms, and
                directly monetize compute. Alternatively, allow for full export
                of your data.
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
                <strong>Monetize access.</strong> Let us match the datasets you
                produce with data consumers who need it.
              </li>
              <li>
                <strong>Monetize (and monitor) usage.</strong> Monitor the
                transaction every step of the way, from key purchase to every
                read operation.
              </li>
            </ul>
          }
          expandedRows={placeholderRows("Peer-to-peer marketplace")}
        />
      </InfoCardRowLayout>
      <DelinUserTypeHeader action="CONSUME" />

      <p className="mx-auto mt-6 max-w-3xl px-5 text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
        GraphonMarkets will give you, as an AI firm, or any other data-hungry
        enterprise, access to scientific data that do not exist on the open web.
        As you already know, much of the readily accessible data have already
        been scraped and trained on. As such, AI performance scaling has slowed
        considerably, and your competitive edge is built on{" "}
        <ForegroundBold body="frontier data" />. In other words, the firms with
        models at the next stratum of performance will be fueled by data that
        are{" "}
        <ForegroundBold
          body="high-quality, technical, domain specific, and produced by the smartest humans at
          a rapid clip"
        />
        . Such data are inherently much harder to come by; scientific data, in
        particular, is{" "}
        <ForegroundBold
          body="fragmented across labs, buried in inconsistent formats,
        and constrained by unclear access terms. "
        />
        GraphonMarkets incentivizes labs to bring datasets online and to produce
        more of them. Find the data your models need to reach the next threshold
        of performance.
      </p>

      <InfoCardRowLayout>
        <InfoCard
          Icon={MdScience}
          header="Specialized Scientific Data"
          body={
            <ul>
              <li>
                <strong>Find differentiated datasets.</strong> Access
                high-quality experimental data difficult to source through
                public repos.
              </li>
              <li>
                <strong>Evaluate before you buy.</strong> Review metadata, acces
                terms, and quality indicators.
              </li>
            </ul>
          }
          expandedRows={placeholderRows("Science data discovery")}
        />
        <InfoCard
          Icon={TbContract}
          header="Transparent Access Terms"
          body={
            <ul>
              <li>
                <strong>Know exactly what you&apos;re getting.</strong> See
                usage rights, read limits, and export & compute restictinos up
                front.
              </li>
              <li>
                <strong>Choose the right access model.</strong> Purchase access
                under terms that fit your use case.
              </li>
            </ul>
          }
          expandedRows={placeholderRows("Contract review")}
        />
        <InfoCard
          Icon={FaMessage}
          header="Direct Seller Discovery"
          body={
            <ul>
              <li>
                <strong>Connect with data producers.</strong> Submit bids to
                purchase data usage rights from labs and scientific institutions
                producing frontier data.
              </li>
              <li>
                <strong>Source data more efficiently.</strong> Spend less time
                hunting fro data through fragmented channels and more time
                building.
              </li>
            </ul>
          }
          expandedRows={placeholderRows("Buyer collaboration")}
        />
      </InfoCardRowLayout>
    </section>
  );
}
