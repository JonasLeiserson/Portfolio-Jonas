import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Inicio", width: "2xl:w-[140px]" },
  { to: "/proyectos", label: "Proyectos", width: "2xl:w-[180px]" },
  { to: "/tecnologias", label: "Tecnologías", width: "2xl:w-[205px]" },
  { to: "/sobre-mi", label: "Sobre mí", width: "2xl:w-[130px]" },
] as const;

export function SiteHeader({ line = "mint" }: { line?: "mint" | "teal" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="min-h-[94px] bg-navy">
      <div className="mx-auto max-w-[1920px] px-5 sm:px-8 lg:px-10 2xl:px-[80px]">
        <div
          className={`flex h-[80px] items-center justify-between border-b-2 ${
            line === "teal" ? "border-teal" : "border-mint"
          }`}
        >
          <Link to="/" className="shrink-0 text-lg font-bold text-mint sm:text-xl">
            Jonas Leiserson
          </Link>

          <nav className="ml-6 hidden items-center justify-end gap-5 md:flex lg:gap-8 2xl:ml-0 2xl:gap-0 2xl:pr-[115px]">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={`whitespace-nowrap text-base text-white transition-colors hover:text-mint lg:text-lg ${link.width}`}
                activeProps={{ className: "font-bold !text-mint" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-0.5 w-6 bg-mint transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-mint transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-mint transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <nav className="flex flex-col border-b border-mint/40 py-3 md:hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                className="py-2 text-lg text-white"
                activeProps={{ className: "font-bold !text-mint" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
