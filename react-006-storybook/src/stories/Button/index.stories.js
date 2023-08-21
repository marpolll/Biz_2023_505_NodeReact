import Button from "../../shareComps/Button";

export default {
  title: "Button",
  component: [Button],
};

export const StyledButton = () => <Button>Hello</Button>;
export const StyledButton2 = () => <Button>cilck</Button>;
export const RedButton = () => <Button bgColor="red">red</Button>;
export const GreenButton = () => (
  <Button bgColor="green" color="yellow">
    green
  </Button>
);
