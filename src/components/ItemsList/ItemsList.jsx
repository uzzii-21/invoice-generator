import Input from '../Input/Input';

const ItemsList = () => (
  <div className="px-4 py-5">
    <h3 className="mb-4 font-bold">Item : 1</h3>
    <div className="grid grid-cols-8 gap-6">
      <div className="col-span-8 sm:col-span-4">
        <Input
          labelText="Item Name"
          type="text"
          name="item-name"
          id="item-name"
        />
      </div>
      <div className="col-span-4 sm:col-span-2">
        <Input
          labelText="Qty"
          type="text"
          name="client-phone-number"
          id="client-phone-number"
        />
      </div>
      <div className="col-span-4 sm:col-span-2">
        <Input
          labelText="Price"
          type="text"
          name="client-street-address"
          id="client-street-address"
        />
      </div>
      <div className="col-span-8">
        <Input
          labelText="Description"
          type="text"
          name="client-city"
          id="client-city"
        />
      </div>
    </div>
  </div>
);

export default ItemsList;
