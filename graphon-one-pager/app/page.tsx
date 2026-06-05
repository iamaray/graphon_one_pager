import TopCard from "@/components/TopCard";
import InfoCard, { type ExpandedInfoCardRow } from "@/components/InfoCard";
import InfoCardRowLayout from "@/components/InfoCardRowLayout";
import DelinUserTypeHeader from "@/components/DelinUserTypeHeader";
import DelinAboutUsHeader from "@/components/DelinAboutUsHeader";

import { BsGpuCard } from "react-icons/bs";
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
        <ForegroundBold body="fund your science with your science" />. We
        believe that now, more than ever, experimental scientific work is{" "}
        <ForegroundBold body="inherently commmercially valuable" />. The AI
        industry is built on the output of human intelligence, and it is
        mathematically bound to being so. With the mass of readily accessible
        data largely consumed by this industry, demand for{" "}
        <ForegroundBold body="frontier data " /> at the edge of human
        intelligence is accelerating.
      </p>
      <InfoCardRowLayout>
        <InfoCard
          Icon={MdStorage}
          header="Structure and Store"
          body={
            <ul>
              <li>
                <strong>Already have a storage solution?</strong> Hook into your
                existing cloud provider. Let us be the exchange layer that
                empowers you to commercialize data access more effectively than
                via any existing platform.
              </li>
              <li>
                <strong>Unstructured, dispersed data? </strong> Your scientific
                output is valuable, and we&apos;re building the infrastructure
                layer that makes it usable at scale. Let us help you structure a
                storage solution that works.
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
                &quot;access keys&quot; that enforce custom usage rights on your
                data. Control access to your data by tuning read limits, column
                encryption, and expiration dates.
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
                key monetizes the privilege to access your data. Sellers will be
                able to bid on your keys, which will set the final sale price.
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
      </InfoCardRowLayout>
      <DelinUserTypeHeader action="CONSUME" />

      <p className="mx-auto mt-6 max-w-3xl px-5 text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
        GraphonMarkets will fix the data-constraint problem.{" "}
        <ForegroundBold body="Frontier data" /> play a more prominent role in
        your competitive edge than ever before, and we want to help you bring
        your models to the next stratum of performance by giving you access to
        scientific datasets that are <ForegroundBold body="high-quality" />,{" "}
        <ForegroundBold body="clean" />,{" "}
        <ForegroundBold body="domain specific" />, and{" "}
        <ForegroundBold body="produced by the smartest humans" />. We know that
        scientific datasets are <ForegroundBold body="fragmented across labs" />
        ,
        <ForegroundBold body=" buried in inconsistent formats" />, and
        constrained by <ForegroundBold body=" unclear access terms" />, but
        GraphonMarkets removes these barriers and incentivizes labs to bring
        their output online.
      </p>

      <InfoCardRowLayout>
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
                model. Review metadata, acces terms, and quality indicators.
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
                consent. See usage rights, read limits, and export & compute
                restictions up front.
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
        {/* Fix this card to say something about how buyers can use their own compute or something */}
        <InfoCard
          Icon={BsGpuCard}
          header="Bring Your Own Workflow"
          body={
            <ul>
              <li>
                <strong>Don&apos;t sacrifice compute.</strong> Have your own
                cluster? No problem. Execute your code next to data with
                proprietary compute without friction.
              </li>
              <li>
                <strong>Integrate data more efficiently.</strong> Plug directly
                into your workflow. Spend less time hunting for science data
                through fragmented channels and more time building and training
                your models.
              </li>
            </ul>
          }
          expandedRows={placeholderRows("Buyer collaboration")}
        />
      </InfoCardRowLayout>
    </section>
  );
}
