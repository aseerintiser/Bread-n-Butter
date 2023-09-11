import { Date } from ".";

export default {
  title: "Components/Date",
  component: Date,
  argTypes: {
    property1: {
      options: ["disabled", "clicked", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "disabled",
    className: {},
    divClassName: {},
    text: "1",
  },
};
