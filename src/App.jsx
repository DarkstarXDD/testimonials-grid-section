import { useSearchParams } from "react-router-dom"
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6"

import Card from "./components/Card"
import jsonData from "./data/data.json"

export default function App() {
  const cardData = jsonData
  const [searchParams, setSearchParams] = useSearchParams()
  const currentTypeFilter = searchParams.get("type")

  const filteredCardData = cardData.filter((card) => {
    if (currentTypeFilter === "verified") {
      return card.isVerified
    } else if (currentTypeFilter === "student") {
      return !card.isVerified
    } else {
      return card
    }
  })

  function handleFilterChange(key, value) {
    if (currentTypeFilter === value) {
      return
    }
    setSearchParams((prevSearchParam) => {
      if (value === null) {
        prevSearchParam.delete(key)
      } else {
        prevSearchParam.set(key, value)
      }
      return prevSearchParam
    })
  }

  const cardElements = filteredCardData.map((currentItem) => {
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
      <div className="filter__outer-wrapper">
        <p className="filter__label">Filter Type: </p>
        <div className="filter__inner-wrapper">
          <button
            onClick={() => handleFilterChange("type", "verified")}
            className={`filter__button filter__button--verified ${currentTypeFilter === "verified" ? "filter__button--selected" : ""}`}
          >
            {currentTypeFilter === "verified" && (
              <FaCircleCheck className="filter__icon" />
            )}
            Verified Graduate
          </button>
          <button
            onClick={() => handleFilterChange("type", "student")}
            className={`filter__button filter__button--student ${currentTypeFilter === "student" ? "filter__button--selected" : ""}`}
          >
            {currentTypeFilter === "student" && (
              <FaCircleCheck className="filter__icon" />
            )}
            Student
          </button>

          {currentTypeFilter && (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="filter__button filter__button--clear"
            >
              <FaCircleXmark className="filter__icon" />
              Clear filter
            </button>
          )}
        </div>
      </div>
      <div className="testimonial-grid">
        <h1 className="visually-hidden">Testimonials</h1>
        {cardElements}
      </div>
    </main>
  )
}
