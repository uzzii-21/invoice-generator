/* eslint-disable jsx-a11y/label-has-associated-control */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import Autocomplete from '../Autocomplete/Autocomplete'
import { XIcon } from '../../assets'
import Input from '../Input/Input'

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
                    onClick={() => setToggle(false)}
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
                <div className="relative flex-1 px-4 sm:px-6">
                  {/* Replace with your content */}
                  <div>
                    <form>
                      <h2 className="my-8 text-base font-bold ">
                        Invoice Details
                      </h2>
                      <div>
                        <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 p-6 rounded-md shadow">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-2">
                              <Input
                                labelText="Purchase Order no."
                                type="text"
                                name="purchase-order"
                                id="purchase-order"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="National Tax no."
                                type="text"
                                name="national-tax"
                                id="national-tax"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="Sale Tax no."
                                type="text"
                                name="sale-tax"
                                id="sale-tax"
                              />
                            </div>

                            <div className="col-span-3">
                              <Input
                                labelText="Date"
                                type="date"
                                name="date"
                                id="date"
                              />
                            </div>
                            <div className="col-span-3">
                              <Input
                                labelText="Due Date"
                                type="date"
                                name="due-date"
                                id="due-date"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <h2 className="my-8 text-base font-bold ">Bill From</h2>
                      <div>
                        <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 p-6 rounded-md shadow">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-3">
                              <Input
                                labelText="Your Company's Name"
                                type="text"
                                name="your-company-name"
                                id="your-company-name"
                              />
                            </div>
                            <div className="col-span-3">
                              <Input
                                labelText="Your Phone Number"
                                type="text"
                                name="your-phone-number"
                                id="your-phone-number"
                              />
                            </div>
                            <div className="col-span-6">
                              <Input
                                labelText="Your Street Address"
                                type="text"
                                name="your-street-address"
                                id="your-street-address"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="Your City"
                                type="text"
                                name="your-city"
                                id="your-city"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="Your Region"
                                type="text"
                                name="your-region"
                                id="your-region"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="Your ZIP / Postal code"
                                type="text"
                                name="your-postal-code"
                                id="your-postal-code"
                              />
                            </div>

                            <div className="col-span-3">
                              <label
                                htmlFor="your-country"
                                className="block text-sm font-medium "
                              >
                                Your Country
                              </label>
                              <Autocomplete />
                            </div>

                            <div className="col-span-3">
                              <Input
                                labelText=" Your Email address"
                                type="text"
                                name="your-email-address"
                                id="your-email-address"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <h2 className="my-8 text-base font-bold ">Bill To</h2>
                      <div>
                        <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 p-6 rounded-md shadow">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-3">
                              <Input
                                labelText="Client Company's Name"
                                type="text"
                                name="client-company-name"
                                id="client-company-name"
                              />
                            </div>
                            <div className="col-span-3">
                              <Input
                                labelText="Client Phone Number"
                                type="text"
                                name="client-phone-number"
                                id="client-phone-number"
                              />
                            </div>
                            <div className="col-span-6">
                              <Input
                                labelText="Client Street Address"
                                type="text"
                                name="client-street-address"
                                id="client-street-address"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="Client City"
                                type="text"
                                name="client-city"
                                id="client-city"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="Client Region"
                                type="text"
                                name="client-region"
                                id="client-region"
                              />
                            </div>

                            <div className="col-span-2">
                              <Input
                                labelText="Client ZIP / Postal code"
                                type="text"
                                name="client-postal-code"
                                id="client-postal-code"
                              />
                            </div>

                            <div className="col-span-3">
                              <label
                                htmlFor="client-country"
                                className="block text-sm font-medium "
                              >
                                Client Country
                              </label>
                              <Autocomplete />
                            </div>

                            <div className="col-span-3">
                              <Input
                                labelText="Client Email address"
                                type="text"
                                name="client-email-address"
                                id="client-email-address"
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
