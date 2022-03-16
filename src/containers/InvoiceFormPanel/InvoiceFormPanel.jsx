import { FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AddIcon, DeleteIcon } from '../../assets';
import { Input, ItemsList } from '../../components';
import FormPanel from '../../components/FormPanel/FormPanel';
import IconButton from '../../components/IconButton/IconButton';

const initialValues = {
  invoiceDetails: {
    purchaseOrder: '',
    nationalTax: '',
    saleTax: '',
    invoiceDate: '',
    paymentDue: ''
  },
  yourDetails: {
    yourCompanyName: '',
    yourPhoneNumber: '',
    yourStreetAddress: '',
    yourCity: '',
    yourRegion: '',
    yourPostalCode: '',
    yourCountry: '',
    yourEmailAddress: ''
  },
  clientDetails: {
    clientCompanyName: '',
    clientPhoneNumber: '',
    clientStreetAddress: '',
    clientCity: '',
    clientRegion: '',
    clientPostalCode: '',
    clientCountry: '',
    clientEmailAddress: ''
  },
  itemsList: [
    {
      itemName: '',
      qty: '',
      price: '',
      itemDescription: ''
    }
  ]
};
const onSubmit = (values) => {
  console.log('Form Data', values);
};

const invoiceFormValidationSchema = Yup.object().shape({
  invoiceDetails: Yup.object().shape({
    purchaseOrder: Yup.string().required('Required!'),
    nationalTax: Yup.string().required('Required!'),
    saleTax: Yup.string().required('Required!'),
    invoiceDate: Yup.string().required('Required!'),
    paymentDue: Yup.string().required('Required!')
  }),
  yourDetails: Yup.object().shape({
    yourCompanyName: Yup.string().required('Required!'),
    yourPhoneNumber: Yup.string().required('Required!'),
    yourStreetAddress: Yup.string().required('Required!'),
    yourCity: Yup.string().required('Required!'),
    yourRegion: Yup.string().required('Required!'),
    yourPostalCode: Yup.string().required('Required!'),
    yourCountry: Yup.string().required('Required!'),
    yourEmailAddress: Yup.string().required('Required!')
  }),
  clientDetails: Yup.object().shape({
    clientCompanyName: Yup.string().required('Required!'),
    clientPhoneNumber: Yup.string().required('Required!'),
    clientStreetAddress: Yup.string().required('Required!'),
    clientCity: Yup.string().required('Required!'),
    clientRegion: Yup.string().required('Required!'),
    clientPostalCode: Yup.string().required('Required!'),
    clientCountry: Yup.string().required('Required!'),
    clientEmailAddress: Yup.string().required('Required!')
  }),
  itemsList: Yup.array().of(
    Yup.object().shape({
      itemName: Yup.string().required('Required!'),
      qty: Yup.string().required('Required!'),
      price: Yup.string().required('Required!'),
      itemDescription: Yup.string().required('Required!')
    })
  )
});

const InvoiceFormPanel = () => (
  <FormPanel>
    {/* Replace with your content */}
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={invoiceFormValidationSchema}
    >
      <Form>
        <h2 className="my-8 text-base font-bold ">Invoice Details</h2>
        <div>
          <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 rounded-md shadow">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Purchase Order no."
                  type="text"
                  name="invoiceDetails.purchaseOrder"
                  id="purchase-order"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="National Tax no."
                  type="text"
                  name="invoiceDetails.nationalTax"
                  id="national-tax"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Sale Tax no."
                  type="text"
                  name="invoiceDetails.saleTax"
                  id="sale-tax"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText="Invoice Date"
                  type="date"
                  name="invoiceDetails.invoiceDate"
                  id="invoice-date"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText="Payment Due"
                  type="date"
                  name="invoiceDetails.paymentDue"
                  id="payment-due"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="my-8 text-base font-bold ">Your Details</h2>
        <div>
          <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 rounded-md shadow">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText="Your Company's Name"
                  type="text"
                  name="yourDetails.yourCompanyName"
                  id="your-company-name"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText="Your Phone Number"
                  type="number"
                  name="yourDetails.yourPhoneNumber"
                  id="your-phone-number"
                />
              </div>
              <div className="col-span-6">
                <Input
                  labelText="Your Street Address"
                  type="text"
                  name="yourDetails.yourStreetAddress"
                  id="your-street-address"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Your City"
                  type="text"
                  name="yourDetails.yourCity"
                  id="your-city"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Your Region"
                  type="text"
                  name="yourDetails.yourRegion"
                  id="your-region"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Your ZIP / Postal code"
                  type="number"
                  name="yourDetails.yourPostalCode"
                  id="your-postal-code"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText=" Your Country"
                  type="text"
                  name="yourDetails.yourCountry"
                  id="your-country"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText=" Your Email address"
                  type="text"
                  name="yourDetails.yourEmailAddress"
                  id="your-email-address"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="my-8 text-base font-bold ">Client Details</h2>
        <div>
          <div className="px-4 py-5 dark:bg-gray-800 bg-gray-200 rounded-md shadow">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText="Client Company's Name"
                  type="text"
                  name="clientDetails.clientCompanyName"
                  id="client-company-name"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText="Client Phone Number"
                  type="number"
                  name="clientDetails.clientPhoneNumber"
                  id="client-phone-number"
                />
              </div>
              <div className="col-span-6">
                <Input
                  labelText="Client Street Address"
                  type="text"
                  name="clientDetails.clientStreetAddress"
                  id="client-street-address"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Client City"
                  type="text"
                  name="clientDetails.clientCity"
                  id="client-city"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Client Region"
                  type="text"
                  name="clientDetails.clientRegion"
                  id="client-region"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <Input
                  labelText="Client ZIP / Postal code"
                  type="number"
                  name="clientDetails.clientPostalCode"
                  id="client-postal-code"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText=" Client Country"
                  type="text"
                  name="clientDetails.clientCountry"
                  id="client-country"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  labelText="Client Email address"
                  type="text"
                  name="clientDetails.clientEmailAddress"
                  id="client-email-address"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="my-8 text-base font-bold ">Items List</h2>
        <div className="dark:bg-gray-800 bg-gray-200 rounded-md shadow">
          <FieldArray
            name="itemsList"
            render={(arrayHelpers) => {
              const { push, remove, form } = arrayHelpers;
              console.log({ push, remove, form });
              return (
                <div>
                  {form.values.itemsList.map((_, index) => (
                    <ItemsList index={index} />
                  ))}
                  <div className="flex justify-end pr-4 pb-5">
                    <IconButton
                      text="Add Item"
                      icon={<AddIcon className="h-5 w-5 mr-2" />}
                      onClick={() =>
                        push({
                          itemName: '',
                          qty: '',
                          price: '',
                          itemDescription: ''
                        })
                      }
                    />
                    <IconButton
                      text="Delete Item"
                      icon={<DeleteIcon className="h-5 w-5 mr-2" />}
                      onClick={() =>
                        remove({
                          itemName: '',
                          qty: '',
                          price: '',
                          itemDescription: ''
                        })
                      }
                    />
                  </div>
                </div>
              );
            }}
          />
        </div>
        <button type="submit">Save</button>
      </Form>
    </Formik>
    {/* /End replace */}
  </FormPanel>
);

export default InvoiceFormPanel;
