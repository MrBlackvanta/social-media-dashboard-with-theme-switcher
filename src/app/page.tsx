import { SiteFooter, SiteHeader } from "@/components/layout";
import { FollowersPanel, OverviewPanel } from "@/views/home";

export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-58.75 rounded-b-band bg-band sm:h-61"
      />

      <SiteHeader />

      <main className="v-board mt-10 flex flex-1 flex-col gap-11.5 sm:mt-11.5">
        <FollowersPanel />
        <OverviewPanel />
      </main>

      <SiteFooter />
    </>
  );
}
