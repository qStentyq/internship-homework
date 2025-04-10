import Greeting from './Greeting';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

//RENDER AND SNAPSHOT TESTING
describe(Greeting, () => {
    it('Greeting renders with name John', () => {
        const { getByText } = render(<Greeting name="John" />);
        expect(getByText(/Hello John/i)).toBeInTheDocument();
    });
    it('Greeting renders without providing a name', () => {
        const { getByText } = render(<Greeting name="" />);
        expect(getByText(/Hello Guest/i)).toBeInTheDocument();
    });
    it('renders correctly', () => {
        const tree = renderer
        .create(<Greeting name="John" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});






  
  

