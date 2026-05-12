export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 py-10 text-center text-xs text-muted-foreground">
      <div className="container max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>&copy; {year} Pedro Delgadillo &middot; petedillo.com</div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Self-hosted on a homelab cluster &mdash; deployed via ArgoCD.
        </div>
      </div>
    </footer>
  );
}
