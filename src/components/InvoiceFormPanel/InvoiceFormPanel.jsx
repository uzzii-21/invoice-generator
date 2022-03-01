/* eslint-disable jsx-a11y/label-has-associated-control */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import Autocomplete from '../Autocomplete/Autocomplete'
import { XIcon } from '../../assets'

const InvoiceFormPanel = ({ toggle, setToggle }) => (
  <Transition.Root show={toggle} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 overflow-hidden z-10"
      onClose={setToggle}
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
          <Dialog.Overlay className="absolute inset-0 dark:bg-gray-900 bg-gray-300 dark:bg-opacity-75 bg-opacity-75 transition-opacity" />
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
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setToggle(false)}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon
                      className="h-6 w-6 dark:text-gray-300 text-gray-700"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="h-full flex flex-col py-6 text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-900 shadow-xl overflow-y-scroll">
                <div className="px-4 sm:px-6">
                  <Dialog.Title className="text-2xl font-medium dark:text-gray-300 text-gray-700">
                    Create Invoice
                  </Dialog.Title>
                </div>
                <div className="relative flex-1 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <div>
                    <form
                      action="#"
                      method="POST"
                      className="dark:text-gray-300 text-gray-700"
                    >
                      <h2 className="my-8 text-base font-bold ">Bill From</h2>
                      <div className="shadow rounded-md">
                        <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="sm:col-span-6">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium "
                              >
                                Your Name
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium "
                              >
                                Street address
                              </label>
                              <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium "
                              >
                                City
                              </label>
                              <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="region"
                                className="block text-sm font-medium "
                              >
                                State / Province
                              </label>
                              <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="postal-code"
                                className="block text-sm font-medium "
                              >
                                ZIP / Postal code
                              </label>
                              <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium "
                              >
                                Country
                              </label>
                              <Autocomplete />
                            </div>

                            <div className="col-span-3">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium "
                              >
                                Email address
                              </label>
                              <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <h2 className="my-8 text-base font-bold ">Bill To</h2>
                      <div className="shadow rounded-md">
                        <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium"
                              >
                                Your Name
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium"
                              >
                                Street address
                              </label>
                              <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium"
                              >
                                City
                              </label>
                              <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="region"
                                className="block text-sm font-medium"
                              >
                                State / Province
                              </label>
                              <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="postal-code"
                                className="block text-sm font-medium"
                              >
                                ZIP / Postal code
                              </label>
                              <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium"
                              >
                                Country
                              </label>
                              <Autocomplete />
                            </div>

                            <div className="col-span-3">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium"
                              >
                                Email address
                              </label>
                              <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

InvoiceFormPanel.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired
}

export default InvoiceFormPanel
