import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/tecnologias")({
  head: () => ({
    meta: [
      { title: "Tecnologías — Jonás Leiserson" },
      { name: "description", content: "Herramientas que fui usando en distintos proyectos." },
      { property: "og:title", content: "Tecnologías — Jonás Leiserson" },
      { property: "og:description", content: "Herramientas que fui usando en distintos proyectos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Technologies,
});

const stack = [
  {
    name: "HTML + CSS",
    text: "La estructura de las páginas y su parte visual. Los usé para armar interfaces y organizar los elementos de Pokeort.",
    box: "bg-navy text-white",
    bar: "bg-mint",
  },
  {
    name: "JavaScript",
    text: "La lógica de la web: interacciones, eventos y comportamiento. También lo utilicé en la parte de servidor.",
    box: "bg-teal text-deep",
    bar: "bg-deep",
  },
  {
    name: "C# + Unity",
    text: "Programación de la versión 3D de Pokeort: mecánicas, estados e interacciones dentro del juego.",
    box: "bg-deep text-white",
    bar: "bg-mint",
  },
  {
    name: "Express + Neon + SQL",
    text: "El back-end de SpatialValue: rutas, procesamiento de información y consultas a la base de datos.",
    box: "bg-mint text-deep",
    bar: "bg-deep",
  },
];

function Technologies() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SiteHeader />

      <section className="mx-auto max-w-[1920px] px-6 pt-10 pb-12 lg:pt-[41px] lg:pb-[50px] lg:pl-[90px] lg:pr-[90px]">
        <h1 className="text-5xl font-bold text-navy lg:text-[58px]">Tecnologías</h1>
        <p className="mt-3 text-xl text-slate lg:mt-[10px] lg:ml-1 lg:text-2xl">
          Herramientas que fui usando en distintos proyectos.
        </p>

        <div className="mt-8 grid gap-6 lg:mt-[50px] lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8 2xl:grid-cols-2 2xl:gap-x-10 2xl:gap-y-[35px]">
          {stack.map((s) => (
            <article key={s.name} className={`relative py-7 pr-6 pl-[38px] lg:min-h-[230px] lg:pt-[30px] ${s.box}`}>
              <span className={`absolute inset-y-0 left-0 w-3 ${s.bar}`} />
              <h2 className="text-3xl font-bold">{s.name}</h2>
              <p className="mt-4 text-lg lg:mt-[18px] lg:w-full lg:max-w-[738px] lg:text-xl">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-navy px-6 py-7 lg:mt-[50px] lg:min-h-44 lg:w-full lg:px-[35px] lg:pt-[27px] min-[1920px]:h-44 ">
          <p className="text-lg font-bold text-mint">Qué aprendí programando</p>
          <p className="mt-3 text-xl font-medium text-white lg:mt-[15px] lg:w-full lg:max-w-[1050px] lg:text-2xl ">
            Aprendí a dividir un problema en partes, probar distintas soluciones y corregir errores hasta que algo
            funciona. No todo siempre sale a la primera.
          </p>
        </div>
      </section>
    </div>
  );
}
