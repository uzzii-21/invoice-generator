/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'

const SideBarButton = ({ icon, tooltip, onClick }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a className="sidebar-btn group" onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </a>
)

SideBarButton.defaultProps = {
  onClick: undefined
}

SideBarButton.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default SideBarButton
