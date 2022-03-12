import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FormPanelState = createContext();

const FormPanelContext = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FormPanelState.Provider value={{ state, setState }}>
      {children}
    </FormPanelState.Provider>
  );
};

FormPanelContext.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormPanelContext;
