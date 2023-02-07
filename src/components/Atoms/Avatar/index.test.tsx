import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileAvatar from ".";
import React from "react";

describe("avatar test", () => {
  it("avatar", () => {
    render(<ProfileAvatar avatarsize={36} />);
    const avatar = screen.getByAltText("profile avatar");
    expect(avatar).toBeInTheDocument();
  });
});
