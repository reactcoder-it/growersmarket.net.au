import { TDeliveryZone, useCartContext } from '@lib/cart-provider';
import * as React from 'react';

import { Button } from './button';
import { Section } from './section';

const deliveryZones = [
  {
    zone: 'Port Macquarie',
    deliveryDays: 'Delivered on: Monday, Tuesday, Wednesday, Thursday, Friday.',
  },
  {
    zone: 'Wauchope',
    deliveryDays: 'Delivered on: Monday, Wednesday, Friday.',
  },
  {
    zone: 'Laurieton',
    heading: 'Laurieton / Lake Cathie / North Haven / Bonny Hills',
    deliveryDays: 'Delivered on: Tuesday and Friday.',
  },
  {
    zone: 'Kempsey',
    heading: 'Kempsey/Crescent Head',
    deliveryDays: 'Delivered on: Friday.',
  },
  {
    zone: 'Lord Howe Island',
    deliveryDays: 'Delivered on: Monday, Tuesday, Wednesday, Thursday, Friday.',
  },
];

function DeliveryZone(): React.ReactElement {
  const { state, setState } = useCartContext();

  const propertyName = 'deliveryZone';

  if (state.deliveryMethod === '' || state.deliveryMethod === 'Pickup') {
    return null;
  }

  return (
    <Section heading="Delivery Zone">
      {deliveryZones.map(({ zone, heading, deliveryDays }) => (
        <Button
          isActive={state[propertyName] === zone}
          setActive={() =>
            setState((prevState) => ({
              ...prevState,
              [propertyName]: zone as TDeliveryZone,
            }))
          }
        >
          <h3 className="font-bold">{heading || zone}</h3>
          <p>{deliveryDays}</p>
          <p>Please place your order before 10am the day prior to delivery.</p>
        </Button>
      ))}
    </Section>
  );
}

export { DeliveryZone };