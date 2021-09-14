import button from "./button.html.twig";
import buttonJs from "./Button.js";
import "./button.scss";

buttonJs();

export default {
  title: "Pattern Library/Components/Button",
  argTypes: {
    is_anchor: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  return button(args);
};

const darkBackground = {
  backgrounds: {
    default: "dark",
  },
};

export const PrimaryAnchor = Template.bind({});
PrimaryAnchor.args = {
  primary: true,
  label: "All News and Alerts",
  url: "https://www.food.gov.uk/news-alerts",
  is_anchor: true,
};

export const SecondaryAnchor = Template.bind({});
SecondaryAnchor.args = {
  ...PrimaryAnchor.args,
  primary: false,
};
SecondaryAnchor.parameters = darkBackground;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  label: "Click me",
  is_anchor: false,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  ...PrimaryButton.args,
  primary: false,
};
SecondaryButton.parameters = darkBackground;
