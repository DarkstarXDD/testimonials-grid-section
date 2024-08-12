export default function Card({ avatar, name, isVerified, title, testimonial }) {
  return (
    <div className="card">
      <div className="card__profile-section">
        <img src={avatar} alt="" className="card__avatar" />
        <p className="card__name">{name}</p>
        <p className="card__verified-status">
          {isVerified ? "Verified Graduate" : "Student"}
        </p>
      </div>
      <h2 className="card__heading">{title}</h2>
      <blockquote className="card__testimonial">
        {`” ${testimonial} ”`}
      </blockquote>
    </div>
  )
}
