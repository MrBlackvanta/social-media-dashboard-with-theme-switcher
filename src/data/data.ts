import type { FollowerStat, OverviewStat } from "./data.types";

export const followerStats: FollowerStat[] = [
  {
    platform: "facebook",
    handle: "@nathanf",
    value: "1987",
    caption: "Followers",
    change: 12,
  },
  {
    platform: "twitter",
    handle: "@nathanf",
    value: "1044",
    caption: "Followers",
    change: 99,
  },
  {
    platform: "instagram",
    handle: "@realnathanf",
    value: "11k",
    caption: "Followers",
    change: 1099,
  },
  {
    platform: "youtube",
    handle: "Nathan F.",
    value: "8239",
    caption: "Subscribers",
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
