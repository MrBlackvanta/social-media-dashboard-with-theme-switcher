export type Platform = "facebook" | "twitter" | "instagram" | "youtube";

type Stat = {
  platform: Platform;
  change: number;
};

export type FollowerStat = Stat & {
  handle: string;
  total: string;
  unit: "Followers" | "Subscribers";
};

export type OverviewStat = Stat & {
  label: string;
  value: string;
};
