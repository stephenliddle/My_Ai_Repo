export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="shrink-0 border-t border-bark-900/10 bg-cream-100 px-4 py-5 text-center sm:px-6 lg:px-8">
      <p className="text-sm text-bark-700">
        &copy; {year} The Revolving Summerhouse Company. All rights reserved.
      </p>
    </footer>
  );
}
