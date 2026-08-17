import ThemeToggle from "@/components/theme-toggle";

export default function SiteHeader() {
  return (
    <header className="pt-9 sm:flex sm:items-start sm:justify-between">
      <div>
        <h1 className="text-heading font-bold lg:text-heading-lg">
          Social Media Dashboard
        </h1>
        <p className="mt-1 text-label font-bold text-muted">
          Total Followers: 23,004
        </p>
      </div>

      <div className="mt-6 border-t border-rule pt-4 sm:mt-3.25 sm:border-t-0 sm:pt-0">
        <ThemeToggle />
      </div>
    </header>
  );
}
