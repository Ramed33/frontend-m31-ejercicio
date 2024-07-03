import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', ()=>{
  test('renders header title', () => {
    render(<App />);
  
    const headerTitle = screen.getByText(/Oscar Winners/i);
    expect(headerTitle).toBeInTheDocument();
  });
});