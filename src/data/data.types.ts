export type Platform = "facebook" | "twitter" | "instagram" | "youtube";

type Stat = {
  platform: Platform;
  value: string;
  change: number;
};

export type FollowerStat = Stat & {
  handle: string;
  caption: "Followers" | "Subscribers";
};

export type OverviewStat = Stat & {
  label: string;
};
