# RNSegmentAnalytics

A sample React Native app showing how to implement analytics with Segment.io. 
The full tutorial is available at: [http://blog.pusher.com/analytics-react-native/](http://blog.pusher.com/analytics-react-native/)

*Note: the React Native code in this repo may be a little bit outdated and won't run immediately after you've followed the setup instructions. Be sure to refactor the code to use the more recent React Native syntax if it doesn't run for you.*

## Prerequisites

- React Native development environment
- [Google analytics account](https://analytics.google.com/analytics/web/)
- [Segment account](https://segment.com/)
- [Keen IO account](https://keen.io/)

## Getting Started

1. Create a new project/workspace at Google Analytics, Segment and Keen IO.

2. Create a new React Native project

3. Clone the repo:

```
git clone https://github.com/anchetaWern/RNSegmentAnalytics.git
```

4. Copy the files and folders from the repo (except the `android` and `ios` folders) to your React Native project.

5. Install the dependencies:

```
npm install
```

6. Follow the instructions at the following URL's for additional setup instructions:

- [react-native-device-info](https://github.com/rebeccahughes/react-native-device-info)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-analytics-segment-io](https://github.com/leoilab/react-native-analytics-segment-io)

7. Update the `App.js` [file](https://github.com/anchetaWern/RNSegmentAnalytics/blob/master/App.js#L28) with your Segment write key.

8. Run the app:

```
react-native run-android
react-native run-ios
```

## Built With

- [React Native](https://facebook.github.io/react-native/)
- [Segment](https://segment.com/)
- [Google Analytics](https://analytics.google.com/analytics/web/)
- [Keen IO](https://keen.io/)
- [react-native-analytics-segment-io](https://github.com/leoilab/react-native-analytics-segment-io)
- [react-native-device-info](https://github.com/rebeccahughes/react-native-device-info)

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/wernancheta" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
