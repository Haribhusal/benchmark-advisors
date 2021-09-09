import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'


const FooterSocialLink = ({link, title}) => {
    return (
        <li className="text-muted f14">
        <div href={link}>
          <a target="_blank" className="link text_t">
           
            <i className="lab la-faceboook"></i>
          </a>
        </div>
      </li>
    )
}
FooterSocialLink.propTypes = {
    link: PropTypes.string
  };
  
export default FooterSocialLink;

