// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Card(props) {
  return (
    <section className="card-container">
      <img src={props.item.imageUrl} alt={props.item.title} className="card-image"/>
      <div>
        <h2>{props.item.location}</h2>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
      </div>
      <h3>{props.item.title}</h3>
      <p>{props.item.travelTime}</p>
      <p>{props.item.description}</p>
    </section>
  )
}

export default Card;