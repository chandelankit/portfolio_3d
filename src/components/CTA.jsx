import React from 'react'
import {Link} from 'react-router-dom'
const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Have a concerned opportunity or project? <br className="sm:block hidden"/>
        Let's collaborate to create something remarkable!
        </p>
        <Link to="/contact" className="btn">
            Contact
        </Link>

    </section>
  )
}

export default CTA;