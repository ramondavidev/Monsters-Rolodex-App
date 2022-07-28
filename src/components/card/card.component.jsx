import './card.styles.css';

const Card = ({ monster: { name, email, id } }) => (
    <div className="card-container" key={id}>
        <div style={{textAlign: 'center'}}><img src={`https://robohash.org/${id}?set=set2`} width="180" alt={`monster ${name}`} /></div>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

export default Card;