import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";


describe(Counter, () => {
    it("counter displays correct initial count", () => {  
        render(<Counter initialCount={5}/>)
    })
it("Increments the count when the increment button is clicked",()=>{
    render(<Counter initialCount={5}/>)
    const h3element=screen.getByTestId("count")
    const btnelement=screen.getByTestId("increment")
    fireEvent.click(btnelement)
    expect(h3element).toHaveTextContent(6)
})


 })
