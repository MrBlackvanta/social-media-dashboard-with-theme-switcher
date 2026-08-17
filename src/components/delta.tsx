import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";
import { cn } from "@/lib";

type DeltaProps = {
  change: number;
  unit: "today" | "percent";
  className?: string;
};

export default function Delta({ change, unit, className }: DeltaProps) {
  const rising = change > 0;
  const Arrow = rising ? ArrowUpIcon : ArrowDownIcon;
  const amount = Math.abs(change);

  return (
    <p
      className={cn(
        "text-meta font-bold text-down",
        { "text-up": rising },
        className,
      )}
    >
      <Arrow className="mr-1 inline size-2 align-[-2px]" />
      <span className="sr-only">
        {rising ? "Increased by" : "Decreased by"}
      </span>{" "}
      {unit === "percent" ? `${amount}%` : `${amount} Today`}
    </p>
  );
}
