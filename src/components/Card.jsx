import classNames from "classnames"
import { motion, useReducedMotion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Card({ id, avatar, name, ...props }) {
  const gridColSpanClass = id === 1 || id === 4 ? "grid-col-span-2" : ""
  const firstName = name.split(" ")[0].toLowerCase()

  const cardClassNames = classNames(
    "card",
    `card--${firstName}`,
    gridColSpanClass
  )

  const statusClassNames = classNames(
    "card__status",
    `card__status--${firstName}`
  )

  const testimonialClassNames = classNames(
    "card__testimonial",
    `card__testimonial--${firstName}`
  )

  const isReducedMotion = useReducedMotion()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const reducedMotionVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className={cardClassNames}>
      <motion.div
        className="card__text-wrapper"
        ref={ref}
        variants={isReducedMotion ? reducedMotionVariants : fadeInVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <div className="card__profile-section">
          <img src={avatar} alt="" className="card__avatar" />
          <h2 className="card__name">{name}</h2>
          <p className={statusClassNames}>
            {props.isVerified ? "Verified Graduate" : "Student"}
          </p>
        </div>

        <blockquote className="blockquotes">
          <p className="card__testimonial-summary">{props.title}</p>
          <p className={testimonialClassNames}>{`” ${props.testimonial} ”`}</p>
        </blockquote>
      </motion.div>
    </div>
  )
}
