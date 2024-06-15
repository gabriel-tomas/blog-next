import { screen } from '@testing-library/react';
import { customRender } from '../../utils/test-custom-render';

import Header from './index';

describe('<Header />', () => {
  it('Should render a header', () => {
    customRender(<Header />);
    expect(screen.getByRole('link')).toHaveStyleRule('font-weight', '500');
  });
});
