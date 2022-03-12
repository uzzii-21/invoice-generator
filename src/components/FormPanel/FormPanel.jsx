import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '../../assets';
import { FormPanelState } from '../../context/InvoiceFormPanelContext';

const FormPanel = ({ children }) => {
  const { state, setState } = useContext(FormPanelState);
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-10"
        onClose={() => setState(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 dark:bg-darkSecondary bg-primary dark:bg-opacity-75 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-2xl">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setState(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon
                        className="h-6 w-6 dark:text-primary text-darkPrimary"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 text-darkPrimary bg-secondary dark:text-primary dark:bg-darkSecondary shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-2xl font-medium dark:text-primary text-darkPrimary">
                      Create Invoice
                    </Dialog.Title>
                  </div>
                  <div className="relative flex-1 px-4 sm:px-6">{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

FormPanel.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormPanel;
