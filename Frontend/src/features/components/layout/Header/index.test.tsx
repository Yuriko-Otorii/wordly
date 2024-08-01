import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../../app/components/Header';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Header />);

    const heading = screen.getByText('Header');

    expect(heading).toBeInTheDocument();
  });
});
