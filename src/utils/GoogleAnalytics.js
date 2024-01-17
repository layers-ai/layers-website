import ReactGA from "react-ga4";

const initializeGoogleAnalytics = () => {
  ReactGA.initialize("G-BF2M6XH0XD");
  // console.log("GA INITIALIZED");
};

const trackGAEvent = (category, action, label) => {
  // console.log("GA event:", category, ":", action, ":", label);
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGoogleAnalytics;
export { initializeGoogleAnalytics, trackGAEvent };
