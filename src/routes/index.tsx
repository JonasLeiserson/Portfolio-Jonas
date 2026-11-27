import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import pokeortShot from "@/assets/image-85.png.asset.json";
import spatialShot from "@/assets/image-86.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jonás Leiserson — Desarrollo web, back-end y videojuegos" },
      {
        name: "description",
        content: "Portfolio de Jonás Leiserson: proyectos web, back-end y videojuegos.",
      },
      { property: "og:title", content: "Jonás Leiserson — Portfolio" },
      { property: "og:description", content: "Proyectos web, back-end y videojuegos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-gray-100">
      <SiteHeader />

      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-y-0 left-0 w-[10px] bg-teal lg:w-[22px]" />
        <div className="mx-auto flex max-w-[1920px] flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-8 lg:px-10 lg:py-14 min-[1920px]:gap-0 min-[1920px]:px-0 min-[1920px]:pt-[56px] min-[1920px]:pb-[91px]">
          <div className="min-w-0 lg:basis-[44%] lg:shrink-0 min-[1920px]:ml-[100px] min-[1920px]:w-[805px] min-[1920px]:basis-auto">
            <p className="text-base font-bold text-mint">Mi portfolio</p>
            <h1 className="mt-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:mt-[27px] lg:text-[clamp(2.8rem,4.3vw,4.75rem)] min-[1920px]:-ml-1 min-[1920px]:flex min-[1920px]:h-[105px] min-[1920px]:items-center min-[1920px]:text-[76px]">
              Jonás Leiserson
            </h1>
            <p className="mt-4 text-xl leading-snug font-medium text-mint sm:text-2xl lg:ml-[2px] lg:text-[clamp(1.25rem,2.2vw,1.875rem)] min-[1920px]:mt-4 min-[1920px]:flex min-[1920px]:h-[54px] min-[1920px]:items-center min-[1920px]:text-3xl">
              Desarrollo web, back-end y videojuegos
            </p>
            <p className="mt-6 max-w-[690px] text-lg leading-relaxed text-white sm:text-xl lg:mt-[28px] lg:ml-[2px] lg:text-xl min-[1920px]:mt-[34px] min-[1920px]:h-28 min-[1920px]:text-2xl min-[1920px]:leading-[29px]">
              Me gusta construir proyectos desde cero, pensar cómo funcionan y encontrar la forma de que una
              idea termine siendo algo que se pueda usar.
            </p>
            <p className="mt-7 text-base font-medium text-mint sm:text-lg lg:mt-8 lg:ml-1 min-[1920px]:mt-[40px]">
              Herramientas: HTML, CSS, JavaScript, C# y SQL
            </p>
          </div>

          <div className="min-w-0 w-full bg-deep font-mono lg:min-h-[390px] lg:flex-1 min-[1920px]:ml-0 min-[1920px]:h-[438px] min-[1920px]:w-[850px] min-[1920px]:flex-none">
            <div className="flex h-14 items-center bg-teal px-5 text-sm font-medium text-deep sm:px-7 sm:text-base">
              proyectos.js
            </div>
            <div className="overflow-x-auto px-5 pt-7 pb-6 sm:px-7 lg:px-8 min-[1920px]:px-[43px]">
              <div className="min-w-[570px] min-[1920px]:min-w-0">
                <p className="w-full border-b border-moss pb-1 text-sm text-mint sm:text-base min-[1920px]:w-[744px]">
                  // proyectos que fui desarrollando
                </p>
                <p className="mt-8 text-base leading-8 font-medium text-white sm:text-lg">const proyectos = [</p>
                <p className="mt-4 whitespace-pre text-sm leading-7 text-white sm:text-base">
                  {'  { nombre: "Pokeort", stack: ["HTML", "CSS", "JS", "C#"] },'}
                </p>
                <p className="mt-3 whitespace-pre text-sm leading-7 text-white sm:text-base">
                  {'  { nombre: "SpatialValue",'}
                </p>
                <p className="mt-3 whitespace-pre text-sm leading-7 text-white sm:text-base">
                  {'    stack: ["Express", "Neon", "SQL"], rol: "Back-end" }'}
                </p>
                <p className="mt-5 text-base leading-8 font-medium text-mint sm:text-lg">];</p>
                <p className="mt-5 text-sm text-fog">// dos proyectos con tecnologías diferentes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 py-10 sm:px-8 lg:px-10 lg:pt-[46px] lg:pb-[40px] min-[1920px]:px-[90px]">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:ml-[2px] lg:text-[38px] lg:leading-[54px]">Proyectos seleccionados</h2>
        <p className="mt-2 text-base text-slate sm:text-lg lg:mt-[6px] lg:ml-1 lg:text-[21px] lg:leading-[36px]">
          Dos trabajos con objetivos distintos: un juego y una herramienta web.
        </p>

        <div className="mt-7 grid gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-6 min-[1920px]:grid-cols-[820px_870px] min-[1920px]:gap-[50px]">
          <Link
            to="/proyectos/pokeort"
            className="flex min-w-0 flex-col gap-4 bg-deep p-5 transition hover:brightness-110 sm:flex-row sm:items-center lg:gap-5 min-[1920px]:gap-[30px] min-[1920px]:h-[190px]"
          >
            <img
              src={pokeortShot.url}
              alt="Captura de Pokeort"
              className="h-[150px] w-full object-contain sm:w-[42%] sm:shrink-0 min-[1920px]:w-[330px]"
            />
            <div className="min-w-0 pt-[5px]">
              <h3 className="text-3xl font-bold text-white">Pokeort</h3>
              <p className="mt-2 text-lg text-mint">Juego web 2D + versión 3D en Unity.</p>
            </div>
          </Link>

          <Link
            to="/proyectos/spatialvalue"
            className="flex min-w-0 flex-col gap-4 bg-teal p-5 transition hover:brightness-105 sm:flex-row sm:items-center lg:gap-5 min-[1920px]:h-[190px]"
          >
            <img
              src={spatialShot.url}
              alt="Captura de SpatialValue"
              className="h-[150px] w-full object-contain sm:w-[42%] sm:shrink-0 min-[1920px]:w-[340px]"
            />
            <div className="min-w-0 pt-[5px]">
              <h3 className="text-3xl font-bold text-deep">SpatialValue</h3>
              <p className="mt-2 text-lg text-deep">Tasador de propiedades. Mi rol: back-end.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
