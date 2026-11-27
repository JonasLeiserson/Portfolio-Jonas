import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { OrtLogo } from "@/components/OrtLogo";
import battleShot from "@/assets/image-87.png.asset.json";
import landingShot from "@/assets/image-88.png.asset.json";

export const Route = createFileRoute("/proyectos/")({
  head: () => ({
    meta: [
      { title: "Proyectos — Jonás Leiserson" },
      { name: "description", content: "Pokeort, un juego web y en Unity, y SpatialValue, un tasador de propiedades." },
      { property: "og:title", content: "Proyectos — Jonás Leiserson" },
      { property: "og:description", content: "Pokeort y SpatialValue." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="min-h-screen bg-foam">
      <SiteHeader />

      <section className="bg-navy">
        <div className="mx-auto flex max-w-[1920px] flex-col gap-10 px-6 pt-10 pb-12 min-[1900px]:flex-row min-[1900px]:items-start min-[1900px]:justify-between min-[1900px]:gap-8 lg:px-10 lg:pt-11 lg:pb-12 2xl:pt-[44px] 2xl:pb-[49px] 2xl:pl-[90px] 2xl:pr-[110px]">
          <div>
            <p className="text-base font-bold text-mint">Juego web y Unity</p>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start lg:mt-0 lg:gap-8 2xl:gap-0">
              <OrtLogo className="lg:mt-[39px] lg:ml-[5px]" />
              <div className="lg:mt-[31px] lg:max-w-[590px] 2xl:ml-[30px] 2xl:w-[min(590px,100%)] 2xl:max-w-none">
                <h2 className="text-4xl font-bold text-white lg:text-5xl">Pokeort</h2>
                <p className="mt-4 text-xl text-white lg:mt-[17px] lg:ml-1 lg:max-w-[590px] lg:text-[22px]">
                  Un proyecto de juego que desarrollé en dos formatos: una versión web en 2D y otra en 3D usando Unity.
                </p>
                <p className="mt-6 text-base font-medium text-mint lg:mt-[56px] lg:ml-1">
                  Tecnologías: HTML, CSS, JavaScript, C# y Unity
                </p>
                <Link
                  to="/proyectos/pokeort"
                  className="mt-6 inline-block text-lg font-bold text-mint hover:underline lg:mt-[31px] lg:ml-1"
                >
                  Ver el desarrollo en detalle  →
                </Link>
              </div>
            </div>
          </div>
          <img src={battleShot.url} alt="Pantalla de combate de Pokeort" className="w-full shrink-0 object-contain min-[1900px]:mt-[7px] min-[1900px]:w-[40%] min-[1900px]:max-w-[710px] min-[1900px]:h-[390px]" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1920px] grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-10 lg:pt-16 lg:pb-16 min-[1920px]:gap-[80px] min-[1920px]:pt-[66px] min-[1920px]:pb-[70px] min-[1920px]:pl-[90px]">
        <Link to="/proyectos/spatialvalue" className="min-w-0">
          <img src={landingShot.url} alt="Landing de SpatialValue" className="w-full object-contain lg:h-auto lg:max-h-[360px] lg:w-full min-[1920px]:h-[360px] min-[1920px]:w-[760px]" />
        </Link>
        <div>
          <p className="text-base font-bold text-deep">Desarrollo web</p>
          <Link to="/proyectos/spatialvalue" className="mt-4 block text-4xl font-bold text-navy hover:underline lg:mt-[19px] lg:-ml-[5px] lg:text-[46px]">
            SpatialValue
          </Link>
          <p className="mt-4 text-xl text-ink lg:mt-4 lg:w-full lg:max-w-[760px] lg:text-[22px] min-[1920px]:w-[760px]">
            Un tasador automatizado de propiedades. Trabajé principalmente en el back-end y en la comunicación entre
            la aplicación y los datos.
          </p>
          <p className="mt-6 text-base font-medium whitespace-pre-wrap text-deep lg:mt-[36px]">
            JavaScript  -  Express  -  Neon  -  SQL
          </p>
        </div>
      </section>
    </div>
  );
}
