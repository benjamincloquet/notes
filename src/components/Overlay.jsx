/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dimmer from './Dimmer';
import { useOverlayContent } from './overlay-context';

const Overlay = () => {
  const { state: components } = useOverlayContent();

  return components.length > 0 ? (
    <>
      <Dimmer />
      <section className="w-screen h-screen absolute top-0 p-4 z-10">
        {components.map(({ component: Component, props }) => (
          <Component key={Component} {...props} />
        ))}
      </section>
    </>
  ) : null;
};

export default Overlay;
