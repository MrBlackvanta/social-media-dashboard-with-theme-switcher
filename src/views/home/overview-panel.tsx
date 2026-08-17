import OverviewCard from "@/components/overview-card";
import { overviewStats } from "@/data";

export default function OverviewPanel() {
  return (
    <section aria-labelledby="overview-heading" className="mt-11.5">
      <h2
        id="overview-heading"
        className="text-heading font-bold text-muted dark:text-ink"
      >
        Overview - Today
      </h2>

      <ul
        role="list"
        className="mt-6 grid gap-4 xs:grid-cols-2 xs:gap-x-7.5 xs:gap-y-6 lg:grid-cols-4"
      >
        {overviewStats.map((stat) => (
          <OverviewCard key={`${stat.platform}-${stat.label}`} stat={stat} />
        ))}
      </ul>
    </section>
  );
}
