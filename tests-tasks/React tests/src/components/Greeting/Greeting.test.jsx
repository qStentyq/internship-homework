import Greeting from './Greeting';
import { render, cleanup } from '@testing-library/react';
afterEach(cleanup);
const GREETINGS = {
  withName: "Hello John",
  withoutName: "Hello Guest"
};
describe('Greeting Component', () => {
  it.each([
    { name: "John", expectedText: GREETINGS.withName },
    { name: "", expectedText: GREETINGS.withoutName }
  ])('renders correctly with name: "$name"', ({ name, expectedText }) => {
    const { getByText } = render(<Greeting name={name} />);
    expect(getByText(new RegExp(expectedText, 'i'))).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Greeting name="John" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
