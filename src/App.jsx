import Card from "./components/Card"
import jsonData from "./data/data.json"

export default function App() {
  const cardElements = jsonData.map((currentItem) => {
    return (
      <Card
        key={currentItem.id}
        id={currentItem.id}
        avatar={currentItem.avatar}
        name={currentItem.name}
        isVerified={currentItem.isVerified}
        title={currentItem.title}
        testimonial={currentItem.testimonial}
      />
    )
  })

  return (
    <main className="main">
      <div className="filter__wrapper">
        <button className="filter__button filter__button--verified">
          Verified Graduate
        </button>
        <button className="filter__button filter__button--student">
          Student
        </button>
      </div>
      <div className="testimonial-grid">
        <h1 className="visually-hidden">Testimonials</h1>
        {cardElements}
      </div>
    </main>
  )
}
