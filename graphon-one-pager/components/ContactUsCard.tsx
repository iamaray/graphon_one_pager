import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactUsCard() {
  return (
    <div className="h-full rounded-lg border border-border p-6 text-foreground sm:p-8">
      <h2 className="text-card-title font-semibold">Contact Us</h2>
      <div className="mt-5 space-y-3 text-xl font-medium">
        <div className="flex items-center gap-3">
          <MdEmail className="h-6 w-6 shrink-0" aria-hidden="true" />
          <span>arya@graphonmarkets.com</span>
        </div>
        <a href="x.com">
          <div className="flex items-center gap-3">
            <FaXTwitter className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span>X</span>
          </div>
        </a>
      </div>
    </div>
  );
}
