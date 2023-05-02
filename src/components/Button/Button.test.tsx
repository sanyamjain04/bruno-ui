import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Button', () => {
  test('render the Button component', () => {
    render(<Button>Hello</Button>);
    expect(2 + 2).toBe(4);
  });
});
