import FollowerCard from "@/components/follower-card";
import { followerStats } from "@/data";

export default function FollowersPanel() {
  return (
    <section aria-labelledby="followers-heading">
      <h2 id="followers-heading" className="sr-only">
        Followers by platform
      </h2>

      <ul
        role="list"
        className="grid gap-6 xs:grid-cols-2 lg:grid-cols-4 lg:gap-x-7.5"
      >
        {followerStats.map((stat) => (
          <FollowerCard key={stat.platform} stat={stat} />
        ))}
      </ul>
    </section>
  );
}
