export default function Card({ id, avatar, name, ...rest }) {
  return (
    <div className={`card ${id === 1 || id === 4 ? "grid-col-span-2" : ""}`}>
      <div className="card__profile-section">
        <img src={avatar} alt="" className="card__avatar" />
        <p className="card__name">{name}</p>
        <p className="card__verified-status">
          {rest.isVerified ? "Verified Graduate" : "Student"}
        </p>
      </div>
      <h2 className="card__heading">{rest.title}</h2>
      <blockquote className="card__testimonial">
        {`” ${rest.testimonial} ”`}
      </blockquote>
    </div>
  )
}
