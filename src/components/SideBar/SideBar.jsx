import { DashboardIcon, HistoryIcon } from '../../assets'
import SideBarButton from '../SideBarButton/SideBarButton'

const SideBar = () => (
  <div className="side-bar">
    <a className="mt-3" href="/">
      <svg
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
      </svg>
    </a>
    <div className="mt-3 mx-3 border-t border-darkPrimary">
      <SideBarButton icon={<DashboardIcon />} tooltip="Dashboard" />
      <SideBarButton icon={<HistoryIcon />} tooltip="History" />
    </div>
    <a
      className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 dark:bg-gray-800 hover:text-darkPrimary dark:hover:bg-darkPrimary dark:hover:text-primary hover:bg-primary"
      href="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </a>
  </div>
)

export default SideBar
