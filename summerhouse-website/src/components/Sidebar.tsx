import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/nav";

interface SidebarProps {
  open: boolean;
  onNavigate: () => void;
}

export default function Sidebar({ open, onNavigate }: SidebarProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {open && (
        <button
          aria-label="Close menu"
          onClick={onNavigate}
          className="fixed inset-0 z-30 bg-bark-950/40 backdrop-blur-[1px] lg:hidden"
        />
      )}
      <aside
        className={`thin-scroll fixed inset-y-0 left-0 z-40 flex w-72 shrink-0 flex-col overflow-y-auto border-r border-bark-900/10 bg-bark-950 pb-6 pt-16 text-cream-100 transition-transform duration-300 ease-out lg:sticky lg:top-16 lg:z-0 lg:translate-x-0 lg:pt-0 ${
          isHome ? "lg:h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-8rem)]" : "lg:max-h-[calc(100vh-4rem)]"
        } ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 pb-4 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-400">Menu</p>
        </div>
        <nav className="flex-1 px-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-moss-700 text-cream-50 shadow-sm"
                        : "text-cream-200/80 hover:bg-white/5 hover:text-cream-50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`inline-block size-1.5 shrink-0 rounded-full bg-sun-400 transition-opacity ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 border-t border-white/10 px-6 pt-5">
          <p className="text-xs leading-relaxed text-cream-200/60">
            Handcrafted revolving summerhouses, built to order across the UK since 1971.
          </p>
        </div>
      </aside>
    </>
  );
}
