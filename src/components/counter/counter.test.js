import { render } from "@testing-library/react"
import Counter from "./Counter"
import App from "../../App";

describe('Counter Component test', ()=>{
    it('should have Count with intial value provided in Prop',()=>{
       
        render(<Counter />);
    })

  });

