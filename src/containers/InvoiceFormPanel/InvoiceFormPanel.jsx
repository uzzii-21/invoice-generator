/* eslint-disable jsx-a11y/label-has-associated-control */

import { Fragment } from 'react'
import { useFormik } from 'formik'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { XIcon } from '../../assets'
import { Input, Autocomplete, ItemsList } from '../../components'


const initialValues = {
  purchaseOrder: '',
  nationalTax: '',
  saleTax: '',
  invoiceDate: '',
  paymentDue: ''
}
const InvoiceFormPanel = ({ toggle, closeForm }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(values)
    }
    // validate: values => {
    //   const error = ''
    //   return error
    // }
  })
  return (
    <Transition.Root show={toggle} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-10"
        onClose={closeForm}
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
                      onClick={closeForm}
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
                      <form onSubmit={formik.handleSubmit}>
                        <h2 className="my-8 text-base font-bold ">
                          Invoice Details
                        </h2>
                        <div>
                          <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 rounded-md shadow">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Purchase Order no."
                                  type="text"
                                  name="purchaseOrder"
                                  id="purchase-order"
                                  onChange={formik.handleChange}
                                  value={formik.values.purchaseOrder}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="National Tax no."
                                  type="text"
                                  name="nationalTax"
                                  id="national-tax"
                                  onChange={formik.handleChange}
                                  value={formik.values.nationalTax}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Sale Tax no."
                                  type="text"
                                  name="saleTax"
                                  id="sale-tax"
                                  onChange={formik.handleChange}
                                  value={formik.values.saleTax}
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <Input
                                  labelText="Invoice Date"
                                  type="date"
                                  name="invoiceDate"
                                  id="invoice-date"
                                  onChange={formik.handleChange}
                                  value={formik.values.invoiceDate}
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <Input
                                  labelText="Payment Due"
                                  type="date"
                                  name="paymentDue"
                                  id="payment-due"
                                  onChange={formik.handleChange}
                                  value={formik.values.paymentDue}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <h2 className="my-8 text-base font-bold ">
                          Your Details
                        </h2>
                        <div>
                          <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 rounded-md shadow">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <Input
                                  labelText="Your Company's Name"
                                  type="text"
                                  name="your-company-name"
                                  id="your-company-name"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <Input
                                  labelText="Your Phone Number"
                                  type="number"
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

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Your City"
                                  type="text"
                                  name="your-city"
                                  id="your-city"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Your Region"
                                  type="text"
                                  name="your-region"
                                  id="your-region"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Your ZIP / Postal code"
                                  type="number"
                                  name="your-postal-code"
                                  id="your-postal-code"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="your-country"
                                  className="block text-sm font-medium "
                                >
                                  Your Country
                                </label>
                                <Autocomplete />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
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

                        <h2 className="my-8 text-base font-bold ">
                          Client Details
                        </h2>
                        <div>
                          <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 rounded-md shadow">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <Input
                                  labelText="Client Company's Name"
                                  type="text"
                                  name="client-company-name"
                                  id="client-company-name"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <Input
                                  labelText="Client Phone Number"
                                  type="number"
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

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Client City"
                                  type="text"
                                  name="client-city"
                                  id="client-city"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Client Region"
                                  type="text"
                                  name="client-region"
                                  id="client-region"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-2">
                                <Input
                                  labelText="Client ZIP / Postal code"
                                  type="number"
                                  name="client-postal-code"
                                  id="client-postal-code"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="client-country"
                                  className="block text-sm font-medium "
                                >
                                  Client Country
                                </label>
                                <Autocomplete />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
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

                        <h2 className="my-8 text-base font-bold ">
                          Items List
                        </h2>
                        <div className="dark:bg-gray-800 bg-gray-200 rounded-md shadow">
                          <ItemsList />
                        </div>
                        <button type="submit">Save</button>
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
}

InvoiceFormPanel.propTypes = {
  toggle: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired
}

export default InvoiceFormPanel
