import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'


const FooterSocialLink = ({link, title}) => {
    return (
        <li className="text-muted f14">
        <Link href={link}>
          <a target="_blank" className="link text_t">
            {title}
          </a>
        </Link>
      </li>
    )
}
FooterSocialLink.propTypes = {
    link: PropTypes.string
  };
  
export default FooterSocialLink;

