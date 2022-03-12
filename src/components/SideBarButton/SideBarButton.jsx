import PropTypes from 'prop-types';

const SideBarButton = ({ icon, tooltip, onClick }) => (
  <button type="button" className="sidebar-btn group" onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
  </button>
);

SideBarButton.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SideBarButton;
