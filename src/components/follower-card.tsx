import Delta from "@/components/delta";
import { PlatformBar, PlatformIcon } from "@/components/platform";
import type { FollowerStat } from "@/data";

export default function FollowerCard({ stat }: { stat: FollowerStat }) {
  return (
    <li className="overflow-hidden rounded-card bg-card hover:bg-card-hover motion-safe:transition-colors">
      <PlatformBar platform={stat.platform} />

      <div className="flex flex-col items-center pt-7 pb-6">
        <h3 className="flex items-center gap-2 text-meta font-bold text-muted">
          <PlatformIcon platform={stat.platform} />
          {stat.handle}
        </h3>

        <p className="mt-7 text-count font-bold">{stat.total}</p>
        <p className="mt-2.25 text-caption text-muted uppercase">{stat.unit}</p>

        <Delta change={stat.change} unit="today" className="mt-6.25" />
      </div>
    </li>
  );
}
