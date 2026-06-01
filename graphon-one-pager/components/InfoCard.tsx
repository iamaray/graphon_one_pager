import type { IconType } from "react-icons";

type ExternalLinkItemProps = {
  header: string;
  body: string;
  Icon: IconType;
};

export default function InfoCard({
  header,
  body,
  Icon,
}: ExternalLinkItemProps) {
  return (
    <div className="flex flex-col group rounded-md border border-border bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-sm focus-within:border-accent focus-within:ring-2 focus-within:ring-focus-ring/30">
      <div className="flex gap-3">
        <Icon />
        <h2 className="">{header}</h2>
      </div>
      <p className="">{body}</p>
    </div>
  );
}
