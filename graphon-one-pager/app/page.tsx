import TopCard from "@/components/TopCard";
import InfoCard, { type ExpandedInfoCardRow } from "@/components/InfoCard";
import InfoCardRowLayout from "@/components/InfoCardRowLayout";
import AudienceHeader from "@/components/AudienceHeader";
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

export default function Home() {
  return (
    <section>
      <TopCard />
      <AudienceHeader action="PRODUCE" />
      <InfoCardRowLayout>
        <InfoCard
          Icon={FaShield}
          header="Granular Permissions"
          body={[
            "Enforce access rights. You sell keys that confer usage rights on your data. Keys all you to programmatically control access to your data by tuning parameters that define read limits, column encryption, and expiration dates.",
            "Protect your data. We let you take control over export permissions. Require data-to-compute cleanrooms, and directly monetize compute. Alternatively, allow for full export of your data.",
          ]}
          expandedRows={placeholderRows("Granular permissions")}
        />
        <InfoCard
          Icon={MdStorage}
          header="Flexible Storage"
          body={[
            "Already have a storage solution? Hook into your existing cloud provider.",
            "Unstructured, dispersed data? Your data are valuable. Let us structure your data into a storage solution that works for you.",
          ]}
          expandedRows={placeholderRows("Flexible storage")}
        />
        <InfoCard
          Icon={PiGraphFill}
          header="Peer-to-Peer Marketplace"
          body={[
            "Monetize access. Let us match the datasets you produce with data consumers who need it.",
            "Monetize (and monitor) usage. Monitor the transaction every step of the way, from key purchase to every read operation.",
          ]}
          expandedRows={placeholderRows("Peer-to-peer marketplace")}
        />
      </InfoCardRowLayout>
      <AudienceHeader action="CONSUME" />
      <InfoCardRowLayout>
        <InfoCard
          Icon={MdScience}
          header="Specialized Scientific Data"
          body={[
            "Find differentiated datasets. Access high-quality experimental data difficult to source through public repos.",
            "Evaluate before you buy. Review metadata, acces terms, and quality indicators.",
          ]}
          expandedRows={placeholderRows("Science data discovery")}
        />
        <InfoCard
          Icon={TbContract}
          header="Transparent Access Terms"
          body={[
            "Know exactly what you're getting. See usage rights, read limits, and export & compute restictinos up front.",
            "Choose the right access model. Purchase access under terms that fit your use case.",
          ]}
          expandedRows={placeholderRows("Contract review")}
        />
        <InfoCard
          Icon={FaMessage}
          header="Direct Seller Discovery"
          body={[
            "Connect with data producers. Submit bids to purchase data usage rights from labs and scientific institutions producing frontier data.",
            "Source data more efficiently. Spend less time hunting fro data through fragmented channels and more time building.",
          ]}
          expandedRows={placeholderRows("Buyer collaboration")}
        />
      </InfoCardRowLayout>
    </section>
  );
}
