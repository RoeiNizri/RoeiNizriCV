import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders welcome message', () => {
    const welcomeElement = screen.getByText(/Welcome to Roei Nizri's Portfolio/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders projects section', () => {
    const projectsElement = screen.getByText(/Projects/i);
    expect(projectsElement).toBeInTheDocument();
  });

  test('renders contact section', () => {
    const contactElement = screen.getByText(/Contact/i);
    expect(contactElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('renders a call-to-action button', () => {
    const ctaButton = screen.getByRole('button', { name: /Get in Touch/i });
    expect(ctaButton).toBeInTheDocument();
  });
});
