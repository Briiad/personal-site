import React from 'react'
import {motion} from 'framer-motion'

const transition = {duration: 0.3}

const HamburgerNav = ({toggle, isOpen}) => {
  return (
    <button className="w-12 h-12 cursor-pointer z-50" onClick={toggle}>
      <svg width={32} height={24}>
        <motion.path
          fill="trasparent"
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {d: "M 2 2.5 L 48 2.5", stroke: "#F700B5"},
            open: {d: "M 3 16.5 L 17 2.5", stroke: "#fff"}
          }}
          transition={transition}
        />

        {/* <motion.path
          fill="trasparent"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          stroke="#fff"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0}
          }}
          transition={transition}
        /> */}

        <motion.path
          fill="trasparent"
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {d: "M 14 16.346 L 48 16.346", stroke: "#F700B5"},
            open: {d: "M 3 2.5 L 17 16.346", stroke: "#fff"}
          }}
          transition={transition}
        />
      </svg>
    </button>
  )
}

export default HamburgerNav