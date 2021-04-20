/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTransition, animated } from 'react-spring';
import Dimmer from './Dimmer';
import { useOverlayContent } from '../contexts/overlay-context';

const Overlay = () => {
  const { state } = useOverlayContent();

  const transitions = useTransition(state, {
    from: { position: 'absolute', bottom: '-100%' },
    enter: { bottom: '0%' },
    leave: { bottom: '-100%' },
  });

  return (
    <>
      <Dimmer visible={state.length > 0} />
      {transitions((props, { component: Component, key, props: componentProps }) => (
        <animated.section key={key} style={props} className="w-screen h-screen fixed p-4 z-10">
          <Component {...componentProps} />
        </animated.section>
      ))}
    </>
  );
};

export default Overlay;
