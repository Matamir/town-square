import { render, screen } from '@testing-library/react';
import App from './App';
import generateUsername from './functions/generateUsername';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();



// });


test('generate username works', () => {

  expect(typeof generateUsername()).toBe("string");

});

