// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Card(props) {
  return (
    <section className="card-container">
      <img src={props.item.imageUrl} alt={props.item.title} className="card-image"/>
      <div className="card-details-container">
        <div>
          <h2>{props.item.title}</h2>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <p className="card-travel-time">{props.item.travelTime}</p>
        <p>{props.item.description}</p>
      </div>
    </section>
  )
}

export default Card;