import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = null;

const OverlayContentContext = createContext();

const overlayContentReducer = (state, action) => {
  switch (action.type) {
    case 'set': {
      return action.payload;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const OverlayContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(overlayContentReducer, INITIAL_STATE);
  const value = { state, dispatch };
  return <OverlayContentContext.Provider value={value}>{children}</OverlayContentContext.Provider>;
};

OverlayContentProvider.propTypes = {
  children: PropTypes.node,
};

OverlayContentProvider.defaultProps = {
  children: null,
};

const useOverlayContent = () => {
  const context = React.useContext(OverlayContentContext);
  if (context === undefined) {
    throw new Error('useOverlayContent must be used within a OverlayContentProvider');
  }
  return context;
};

export { OverlayContentProvider, useOverlayContent };
