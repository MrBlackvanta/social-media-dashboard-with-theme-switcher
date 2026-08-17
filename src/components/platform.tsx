import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons";
import type { Platform } from "@/data";
import { cn } from "@/lib";

const platforms = {
  facebook: {
    Icon: FacebookIcon,
    name: "Facebook",
    ink: "text-facebook",
    bar: "bg-facebook",
  },
  twitter: {
    Icon: TwitterIcon,
    name: "Twitter",
    ink: "text-twitter",
    bar: "bg-twitter",
  },
  instagram: {
    Icon: InstagramIcon,
    name: "Instagram",
    ink: "",
    bar: "v-instagram-bar",
  },
  youtube: {
    Icon: YouTubeIcon,
    name: "YouTube",
    ink: "text-youtube",
    bar: "bg-youtube",
  },
} as const;

export function PlatformIcon({ platform }: { platform: Platform }) {
  const { Icon, name, ink } = platforms[platform];

  return (
    <Icon role="img" aria-label={name} className={cn("size-5 shrink-0", ink)} />
  );
}

export function PlatformBar({ platform }: { platform: Platform }) {
  return <div className={cn("h-1", platforms[platform].bar)} />;
}
