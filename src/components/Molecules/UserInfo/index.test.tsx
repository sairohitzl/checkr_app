import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import UserInfo from ".";

test("Testing usercard", () => {
  const userInfoCard = renderer
    .create(<UserInfo title="Name" name="John" icon="user" />)
    .toJSON();
  expect(userInfoCard).toMatchSnapshot();
});
