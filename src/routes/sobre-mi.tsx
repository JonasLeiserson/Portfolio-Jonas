import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import uba from "@/assets/image-92.png.asset.json";
import rugby from "@/assets/image-93.png.asset.json";
import games from "@/assets/image-94.png.asset.json";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Jonás Leiserson" },
      { name: "description", content: "Estudio, entreno y juego. También estoy aprendiendo qué quiero hacer con la tecnología." },
      { property: "og:title", content: "Sobre mí — Jonás Leiserson" },
      { property: "og:description", content: "Estudio, entreno y juego. También estoy aprendiendo qué quiero hacer con la tecnología." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const cards = [
  {
    title: "Estudios",
    text: "En 2027 comienzo Ingeniería Electrónica en la UBA. Me interesa la tecnología también desde el lado más técnico.",
    img: uba.url,
    alt: "Edificio de la UBA",
    box: "bg-foam",
    heading: "text-navy",
    body: "text-ink",
  },
  {
    title: "Rugby",
    text: "Entreno y juego en GEBA. Es una parte importante de mi semana y de mi vida fuera de la programación.",
    img: rugby.url,
    alt: "Partido de rugby",
    box: "bg-teal",
    heading: "text-deep",
    body: "text-deep",
  },
  {
    title: "Videojuegos",
    text: "Juego Minecraft y Fortnite. Me gusta entender cómo están construidos los juegos y probar ideas propias.",
    img: games.url,
    alt: "Minecraft",
    box: "bg-deep",
    heading: "text-mint",
    body: "text-white",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SiteHeader />

      <section className="bg-navy">
        <div className="mx-auto max-w-[1920px] px-6 pt-8 pb-12 lg:h-[270px] lg:pt-[46px] lg:pb-0 lg:pl-[90px]">
          <h1 className="text-5xl font-bold text-white lg:text-[58px]">Sobre mí</h1>
          <p className="mt-4 text-xl text-mint lg:mt-[18px] lg:ml-1 lg:text-2xl">
            Estudio, entreno y juego. También estoy aprendiendo qué quiero hacer con la tecnología.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1920px] gap-6 px-6 py-10 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 min-[1920px]:grid-cols-3 min-[1920px]:gap-6 lg:px-[80px] lg:pt-[56px] lg:pb-[120px]">
        {cards.map((c) => (
          <article key={c.title} className={`p-5 pb-10 lg:min-h-[540px]  ${c.box}`}>
            <img src={c.img} alt={c.alt} className="aspect-[510/260] w-full object-cover lg:h-[260px]" />
            <div className="px-[5px]">
              <h2 className={`mt-6 text-3xl font-bold lg:mt-[30px] ${c.heading}`}>{c.title}</h2>
              <p className={`mt-4 text-lg lg:mt-[17px] lg:w-full lg:max-w-[460px] lg:text-xl  ${c.body}`}>{c.text}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
