import React from 'react'
import PropTypes from 'prop-types'

const SideBarButton = ({ icon, tooltip }) => (
  <a className="sidebar-btn group" href="/">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </a>
)

SideBarButton.propTypes = {
  icon: PropTypes.element.isRequired,
  tooltip: PropTypes.string.isRequired
}

export default SideBarButton
