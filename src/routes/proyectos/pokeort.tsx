import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { OrtLogo } from "@/components/OrtLogo";
import web2d from "@/assets/image-89.png.asset.json";
import unity3d from "@/assets/image-90.png.asset.json";

export const Route = createFileRoute("/proyectos/pokeort")({
  head: () => ({
    meta: [
      { title: "Pokeort — Jonás Leiserson" },
      { name: "description", content: "Un juego inspirado en Pokémon, con una versión web en 2D y otra en Unity." },
      { property: "og:title", content: "Pokeort — Jonás Leiserson" },
      { property: "og:description", content: "Un juego inspirado en Pokémon, con una versión web en 2D y otra en Unity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pokeort,
});

function Pokeort() {
  return (
    <div className="min-h-screen bg-foam">
      <SiteHeader />

      <section className="bg-navy">
        <div className="mx-auto flex max-w-[1920px] flex-col gap-10 px-6 pt-10 pb-12 min-[1900px]:flex-row min-[1900px]:items-start min-[1900px]:justify-between min-[1900px]:gap-8 lg:px-10 lg:pt-[38px] lg:pb-[24px] 2xl:pl-[90px] 2xl:pr-[120px]">
          <div>
            <p className="text-base font-bold text-mint">Proyecto de juego</p>
            <h1 className="mt-4 text-5xl font-bold text-white lg:mt-[21px] lg:text-[58px]">Pokeort</h1>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start lg:mt-[27px] lg:gap-8 2xl:gap-0">
              <OrtLogo className="lg:ml-[2px]" />
              <div className="lg:mt-[6px] lg:max-w-[510px] 2xl:ml-[39px] 2xl:w-[min(510px,100%)] 2xl:max-w-none">
                <p className="text-xl text-white lg:text-2xl">
                  Un juego inspirado en Pokémon, con una versión web en 2D y otra desarrollada en Unity.
                </p>
                <p className="mt-6 text-base font-medium text-mint lg:mt-[45px] lg:ml-[2px]">
                  Herramientas: HTML, CSS y JavaScript
                </p>
                <p className="mt-6 text-lg text-white lg:mt-[27px] lg:ml-[2px] lg:max-w-[500px] lg:text-xl">
                  En la versión 2D trabajé sobre la interfaz, las acciones del jugador y la lógica necesaria para
                  que cada turno funcione.
                </p>
              </div>
            </div>
          </div>
          <figure className="w-full shrink-0 lg:mt-[18px] min-[1900px]:w-[40%] min-[1900px]:max-w-[820px]">
            <img src={web2d.url} alt="Captura del juego en su versión 2D" className="w-full object-contain lg:max-h-[570px] 2xl:h-[570px]" />
            <figcaption className="mt-3 text-base font-medium text-mint lg:mt-[10px] lg:ml-[15px] lg:h-[30px]">
              Captura del juego · versión 2D
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1920px] grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 lg:px-10 lg:pt-9 lg:pb-10 min-[1920px]:grid-cols-[620px_minmax(0,1fr)] min-[1920px]:gap-[60px] min-[1920px]:pt-[36px] min-[1920px]:pb-[40px] min-[1920px]:pl-[90px] min-[1920px]:pr-[120px]">
        <img src={unity3d.url} alt="Versión 3D de Pokeort en el editor de Unity" className="w-full object-contain lg:h-auto lg:max-h-[220px] lg:w-full min-[1920px]:h-[220px] min-[1920px]:w-[620px]" />
        <div className="lg:pt-2">
          <h2 className="text-3xl font-bold text-navy lg:text-[32px]">Versión 3D · Unity</h2>
          <p className="mt-4 text-lg text-ink lg:mt-[14px] lg:ml-[2px] lg:w-full lg:max-w-[760px] lg:text-xl min-[1920px]:w-[760px]">
            La segunda versión lleva la idea a un entorno tridimensional. Está desarrollada con Unity y C#.
          </p>
          <div className="mt-6 flex flex-col gap-3 lg:mt-[22px] lg:ml-[2px] lg:flex-row lg:flex-wrap lg:gap-8 min-[1920px]:gap-[68px]">
            <p className="text-base font-medium text-deep lg:w-80 lg:shrink-0">Tecnologías: C# y Unity</p>
            <p className="text-lg font-medium text-deep">
              Aprendizaje: conectar los controles, las reglas del juego y lo que ve el jugador.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
