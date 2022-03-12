import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FormState = createContext();

const FormPanelState = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FormState.Provider value={{ state, setState }}>
      {children}
    </FormState.Provider>
  );
};

FormPanelState.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormPanelState;
