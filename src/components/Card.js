import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Card({ item }) {
  const { imageUrl, title, googleMapsUrl, travelTime, description } = item;

  return (
    <section className="card-container">
      <img src={imageUrl} alt={title} className="card-image"/>
      <div className="card-details-container">
        <div>
          <h2>{title}</h2>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={ faLocationDot } className="icon-map" />
            View on Google Maps
          </a>
        </div>
        <p className="card-travel-time">{travelTime}</p>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Card;