import Delta from "@/components/delta";
import { PlatformIcon } from "@/components/platform";
import type { OverviewStat } from "@/data";

export default function OverviewCard({ stat }: { stat: OverviewStat }) {
  return (
    <li className="flex flex-col gap-5.25 rounded-card bg-card pt-6.5 pr-7.75 pb-4.75 pl-6 hover:bg-card-hover motion-safe:transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="text-label font-bold text-muted">{stat.label}</h3>
        <PlatformIcon platform={stat.platform} />
      </div>

      <div className="flex items-baseline justify-between">
        <p className="text-stat font-bold">{stat.value}</p>
        <Delta change={stat.change} format="percent" />
      </div>
    </li>
  );
}
