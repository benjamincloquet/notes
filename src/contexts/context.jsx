import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

export default ({ context: Context, defaultState, reducer }) => {
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const value = { state, dispatch };
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  Provider.propTypes = {
    children: PropTypes.node,
  };

  Provider.defaultProps = {
    children: null,
  };

  const useContext = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error(`${Context.displayName ?? 'Context'} must be used within a provider`);
    }
    return context;
  };

  return { Provider, useContext };
};
