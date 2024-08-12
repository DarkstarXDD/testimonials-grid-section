import Card from "./components/Card"
import jsonData from "./data/data.json"

export default function App() {
  const cardElements = jsonData.map((currentItem) => {
    return (
      <Card
        key={currentItem.id}
        avatar={currentItem.avatar}
        name={currentItem.name}
        isVerified={currentItem.isVerified}
        title={currentItem.title}
        testimonial={currentItem.testimonial}
      />
    )
  })

  return (
    <main>
      <div className="component">
        <h1 className="visually-hidden">Testimonials</h1>
        {cardElements}
      </div>
    </main>
  )
}
