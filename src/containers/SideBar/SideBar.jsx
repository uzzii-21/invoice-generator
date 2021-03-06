import { useContext } from 'react';
import {
  AddIcon,
  DashboardIcon,
  HistoryIcon,
  LogoutIcon,
  SettingIcon,
  UserIcon
} from '../../assets';
import { SideBarButton, Toggle } from '../../components';
import { FormPanelState } from '../../context/InvoiceFormPanelContext';

const SideBar = () => {
  const { setState } = useContext(FormPanelState);
  return (
    <aside className="side-bar">
      <a className="mt-3 hidden sm:block" href="/">
        <svg
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      </a>
      <div className="flex items-center justify-evenly w-[100vw] sm:mt-3 sm:mx-3 sm:w-auto sm:border-t sm:border-darkPrimary sm:block">
        <SideBarButton
          icon={<AddIcon />}
          tooltip="Create Invoice"
          onClick={() => setState(true)}
        />
        <SideBarButton
          icon={<DashboardIcon />}
          tooltip="Dashboard"
          onClick={() => console.log('Dashboard Clicked')}
        />
        <SideBarButton
          icon={<HistoryIcon />}
          tooltip="History"
          onClick={() => console.log('History Clicked')}
        />
        <SideBarButton
          icon={<UserIcon />}
          tooltip="Profile"
          onClick={() => console.log('Profile Clicked')}
        />
        <SideBarButton
          icon={<SettingIcon />}
          tooltip="Setting"
          onClick={() => console.log('Setting Clicked')}
        />
      </div>
      <div className="fixed top-0 left-0 w-full flex-row flex items-center justify-end p-6 sm:sticky sm:flex-col sm:justify-center sm:p-0 mt-auto">
        <Toggle />
        <a
          className="flex ml-4 sm:ml-0 items-center justify-center group w-12 h-12 rounded-xl sm:w-full sm:rounded-none sm:h-16 mt-auto hover:opacity-70 bg-gray-200 dark:bg-gray-800 hover:text-darkPrimary sm:dark:hover:bg-darkPrimary dark:hover:text-primary sm:hover:bg-primary sm:hover:opacity-100"
          href="/"
        >
          <LogoutIcon className="h-5 w-5 sm:w-6 sm:h-6" />
          <span className="sidebar-tooltip left-20 group-hover:scale-100">
            Log Out
          </span>
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
