/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View
} from "react-native";

import DeviceInfo from 'react-native-device-info';

import pokemon from "./src/data/pokemon.js";

import Header from "./src/components/Header";
import CardList from "./src/components/CardList";

import Analytics, {
  AnalyticsConstants
} from "react-native-analytics-segment-io";

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    Analytics.setup("YOUR WRITE KEY")
      .then(() => {
        this.initializeUser();
      })
      .catch((err) => {
        this.initializeUser();
      });
  }


  initializeUser = () => {
    let user_data = { 
      email: "SOME EMAIL",
      device: {
        model: DeviceInfo.getModel(),
        userAgent: DeviceInfo.getUserAgent()
      },
      timezone: DeviceInfo.getTimezone()
    };

    Analytics.identify("SOME USER ID", user_data);
    Analytics.screen("Home Screen");
  }


  viewAction = name => {
    Analytics.track("View Pokemon", { pokemon: name });
  };

  bookmarkAction = name => {
    Analytics.track("Bookmark Pokemon", { pokemon: name });
  };

  shareAction = name => {
    Analytics.track("Share Pokemon", { pokemon: name });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Poke-Gallery"} />
        <CardList
          data={pokemon}
          viewAction={this.viewAction}
          bookmarkAction={this.bookmarkAction}
          shareAction={this.shareAction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#FFF"
  }
});
