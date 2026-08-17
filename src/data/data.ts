import type { FollowerStat, OverviewStat } from "./data.types";

export const followerStats: FollowerStat[] = [
  {
    platform: "facebook",
    handle: "@nathanf",
    total: "1987",
    unit: "Followers",
    change: 12,
  },
  {
    platform: "twitter",
    handle: "@nathanf",
    total: "1044",
    unit: "Followers",
    change: 99,
  },
  {
    platform: "instagram",
    handle: "@realnathanf",
    total: "11k",
    unit: "Followers",
    change: 1099,
  },
  {
    platform: "youtube",
    handle: "Nathan F.",
    total: "8239",
    unit: "Subscribers",
    change: -144,
  },
];

export const overviewStats: OverviewStat[] = [
  { platform: "facebook", label: "Page Views", value: "87", change: 3 },
  { platform: "facebook", label: "Likes", value: "52", change: -2 },
  { platform: "instagram", label: "Likes", value: "5462", change: 2257 },
  { platform: "instagram", label: "Profile Views", value: "52k", change: 1375 },
  { platform: "twitter", label: "Retweets", value: "117", change: 303 },
  { platform: "twitter", label: "Likes", value: "507", change: 553 },
  { platform: "youtube", label: "Likes", value: "107", change: -19 },
  { platform: "youtube", label: "Total Views", value: "1407", change: -12 },
];
