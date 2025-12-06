import { useParams } from "react-router-dom";
import logements from "../data/logements.json";

import Slideshow from "../components/Slideshow";
import ApartmentTitleAndLocation from "../components/housing components/ApartmentTitleAndLocation";
import Host from "../components/housing components/Host";
import Tag from "../components/housing components/Tag";
import Rating from "../components/housing components/Rating";
import Collapse from "../components/Collapse";
import NotFound from "./NotFound";

import "../styles/Housing.scss";

export default function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div className="housing">
      {/* Slideshow tout en haut */}
      <Slideshow images={logement.pictures} />

      {/* Partie haute : titre + tags à gauche / host + rating à droite */}
      <div className="housing__top">
        <div className="housing__left">
          <ApartmentTitleAndLocation
            title={logement.title}
            location={logement.location}
          />

          <div className="housing__tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="housing__right">
          {/* rating à gauche, host à droite */}
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={Number(logement.rating)} />
        </div>
      </div>

      {/* Partie basse : les deux Collapse côte à côte */}
      <div className="housing__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="housing__equipments-list">
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
