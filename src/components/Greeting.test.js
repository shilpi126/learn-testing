import {render,screen} from '@testing-library/react'
import Greeting from './Greeting'


describe('Greeing Component', () => {
    test('renders Hello World as a  text', () => {
        //Arrange
        render(<Greeting/>);
        
        //Act
        //... nothing
        
        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
        
    
    });
})

