import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import landing from "@/assets/image-91.png.asset.json";

export const Route = createFileRoute("/proyectos/spatialvalue")({
  head: () => ({
    meta: [
      { title: "SpatialValue — Jonás Leiserson" },
      { name: "description", content: "Tasador automatizado de propiedades. Mi aporte: el back-end." },
      { property: "og:title", content: "SpatialValue — Jonás Leiserson" },
      { property: "og:description", content: "Tasador automatizado de propiedades. Mi aporte: el back-end." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpatialValue,
});

const tasks = ["Rutas y endpoints", "Validación y lógica del servidor", "Consultas y almacenamiento"];

function SpatialValue() {
  return (
    <div className="min-h-screen bg-deep">
      <SiteHeader line="teal" />

      <section className="mx-auto max-w-[1920px] px-6 pt-10 pb-12 lg:pt-[46px] lg:pb-[64px] lg:pl-[90px] min-[1920px]:pb-[20px] lg:pr-[100px]">
        <h1 className="text-5xl font-bold text-white lg:text-6xl">SpatialValue</h1>
        <p className="mt-3 text-2xl font-medium text-mint lg:mt-[9px] lg:ml-1 lg:text-[27px]">
          Tasador automatizado de propiedades
        </p>
        <p className="mt-4 text-xl text-white lg:mt-[18px] lg:ml-1 lg:w-[740px] lg:text-[22px]">
          Una herramienta web que permite estimar el valor de una propiedad a partir de información inmobiliaria.
        </p>

        <div className="mt-8 flex flex-col gap-10 lg:mt-[28px] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.5fr)] lg:gap-8 min-[1920px]:flex min-[1920px]:gap-[60px]">
          <figure className="lg:w-full lg:min-w-0 min-[1920px]:w-[1120px] min-[1920px]:shrink-0">
            <img src={landing.url} alt="Landing de SpatialValue" className="w-full object-contain lg:max-h-[510px] min-[1920px]:h-[510px]" />
            <figcaption className="mt-3 text-base font-medium text-mint lg:mt-4 lg:ml-[17px]">
              Landing de SpatialValue
            </figcaption>
          </figure>

          <aside className="rounded-xl bg-navy px-6 py-7 lg:min-h-[510px] lg:w-full lg:min-w-0 lg:px-6 lg:pt-7 xl:px-8 min-[1920px]:h-[510px] min-[1920px]:w-[550px] min-[1920px]:px-10">
            <p className="text-base font-bold text-mint">Mi aporte</p>
            <h2 className="mt-4 text-4xl font-bold text-white lg:mt-[22px] lg:text-[38px]">Back-end</h2>
            <p className="mt-4 text-lg text-white lg:mt-[21px] lg:min-h-20 lg:w-full lg:max-w-[445px] lg:text-xl min-[1920px]:h-28 min-[1920px]:w-[445px]">
              Me ocupé de la lógica que conecta la web con la información necesaria para realizar una tasación.
            </p>
            <div className="mt-6 h-0.5 bg-teal lg:mt-0 lg:w-full lg:max-w-[460px] min-[1920px]:w-[460px]" />
            <h3 className="mt-8 text-2xl font-bold text-mint lg:mt-[38px]">Qué hice</h3>
            <ul className="mt-4 list-disc space-y-[13px] pl-4 text-lg text-white lg:-ml-[9px]">
              {tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <footer className="bg-teal">
        <div className="mx-auto flex max-w-[1920px] flex-col gap-4 px-6 py-6 text-lg font-medium text-deep lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-6 lg:px-10 min-[1920px]:h-[116px] min-[1920px]:grid-cols-[1fr_816px] min-[1920px]:gap-0 min-[1920px]:py-0 min-[1920px]:pl-[95px] min-[1920px]:pr-[73px]">
          <p className="whitespace-pre-wrap">JavaScript     Express     Neon     SQL / PostgreSQL</p>
          <p className="lg:w-auto lg:text-left min-[1920px]:w-[816px] min-[1920px]:text-center">
            Con estos lenguajes, aprendí cómo viajan los datos entre el cliente, el servidor y la base de datos.
          </p>
        </div>
      </footer>
    </div>
  );
}
