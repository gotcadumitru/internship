import { getByTestId, render, screen } from "@testing-library/react";
import CustomButton from '../CustomButton';


describe("custom-button",()=>{

    test("check the text inside the button",()=>{

        render(<CustomButton>Hello</CustomButton>)
        const helloElement = screen.getByText("Hello",{exact: false});
        expect(helloElement).toBeInTheDocument();
        
    })

    test("check class",()=>{

        const {container} = render(<CustomButton profilebtn searchbtn whitebtn>Hello</CustomButton>);        
        expect(container.firstChild).toHaveClass('profilebtn customButton whitebtn searchbtn',{exact: true});
        
    })
    
})