import PropTypes from 'prop-types';
import Input from '../Input/Input';

const ItemsList = ({ index }) => (
  <div className="px-4 py-5">
    <h3 className="mb-4 font-bold">Item : {index + 1}</h3>
    <div className="grid grid-cols-8 gap-6">
      <div className="col-span-8 sm:col-span-4">
        <Input
          labelText="Item Name"
          type="text"
          name={`itemsList[${index}].itemName`}
          id="item-name"
        />
      </div>
      <div className="col-span-4 sm:col-span-2">
        <Input
          labelText="Qty"
          type="text"
          name={`itemsList[${index}].qty`}
          id="quantity"
        />
      </div>
      <div className="col-span-4 sm:col-span-2">
        <Input
          labelText="Price"
          type="text"
          name={`itemsList[${index}].price`}
          id="price"
        />
      </div>
      <div className="col-span-8">
        <Input
          labelText="Description"
          type="text"
          name={`itemsList[${index}].itemDescription`}
          id="item-description"
        />
      </div>
    </div>
  </div>
);
ItemsList.propTypes = {
  index: PropTypes.number.isRequired
};
export default ItemsList;
