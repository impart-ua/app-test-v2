import App from './App';

const meta = {
  title: 'App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {};

export const WithMoreOptionsExpanded = {
  render: () => {
    return <App />;
  },
  play: async ({ canvasElement }) => {
    // Find and click the "More sign-in options" button to expand
    const button = canvasElement.querySelector('.more-options-button');
    if (button) {
      button.click();
    }
  },
};
