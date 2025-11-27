import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import homeBanner from "../assets/fond_home_banner.png";
import "../styles/card-container.scss";

export default function Home() {
  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" image={homeBanner} />

      <section className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            image={logement.cover}
          />
        ))}
      </section>
    </>
  );
}
