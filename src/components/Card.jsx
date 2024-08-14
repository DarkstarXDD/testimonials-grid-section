import classNames from "classnames"
import { motion, useReducedMotion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Card({ id, avatar, name, ...rest }) {
  let gridColSpanClass = id === 1 || id === 4 ? "grid-col-span-2" : ""

  const cardClassNames = classNames("card", gridColSpanClass)

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
    <motion.div
      className={cardClassNames}
      ref={ref}
      variants={isReducedMotion ? reducedMotionVariants : fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  )
}
