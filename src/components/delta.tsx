import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";
import { cn } from "@/lib";

type DeltaProps = {
  change: number;
  format: "today" | "percent";
  className?: string;
};

export default function Delta({ change, format, className }: DeltaProps) {
  const amount = Math.abs(change);
  const text = format === "percent" ? `${amount}%` : `${amount} Today`;

  if (change === 0) {
    return (
      <p className={cn("text-meta font-bold text-muted", className)}>{text}</p>
    );
  }

  const rising = change > 0;
  const Arrow = rising ? ArrowUpIcon : ArrowDownIcon;

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
      {text}
    </p>
  );
}
