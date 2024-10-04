import BurgerMenu from 'components/shared/BurgerMenu.tsx';
import { render } from '@testing-library/react';

describe('BurgerMenu Component', () => {
  it('renders correctly', () => {
    const { container } = render(<BurgerMenu />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // it('renders with provided className', () => {
  //   const { container } = render(<BurgerMenu  />);
  //   expect(container.firstChild).toHaveClass('custom-class');
  // });
});
