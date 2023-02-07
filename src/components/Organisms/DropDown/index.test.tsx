import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropDown from ".";
import { UserInfoProps } from "../../../utils/types";

describe("dropdown test",()=>{
    it("render dropdown",()=>{
        render(<DropDown title="candidate" data={new Array<UserInfoProps>} show={true}/>)
        const dropdown = screen.getByText('candidate');
        expect(dropdown).toBeInTheDocument();
        expect(dropdown).toHaveStyle("backgroundColor: theme.palette.text.disabled, borderRadius: '8px' ");
    });
});