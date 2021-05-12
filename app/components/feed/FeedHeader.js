import React from "react";
import { StyleSheet, View, Animated } from "react-native";

import AppLogo from "../layouts/Logo";
import SportsIconList from "../layouts/SportsIconList";
import TextInput from "../forms/TextInput";

import APP_SPORTS from "../../config/events";
import colors from "../../config/colors";

const EventFeedHeader = ({
  height,
  isSelected,
  setSearchFilters,
  setSportFilters,
}) => {
  return (
    <View style={[styles.container, { height: height }]}>
      <View style={styles.topContainer}>
        <AppLogo showText={false} logoStyle={styles.logoStyle} />
        <TextInput iconName="filter" width="60%" placeholder="Custom Place" />
      </View>
      <SportsIconList
        iconSize={33}
        itemSelected={isSelected}
        onPress={setSportFilters}
        userSports={APP_SPORTS.SPORTS_CATERGORIES}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderLeftWidth: 1,
    borderBottomLeftRadius: 30,
    borderEndWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 30,
    borderBottomWidth: 1,
    borderRightColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderLeftColor: colors.secondary,
    margin: 2,
    overflow: "hidden",
  },
  logoStyle: {
    height: 80,
    marginTop: 0,
    alignSelf: "flex-start",
    width: 60,
    // position: "relative",
    marginRight: 30,
  },
  topContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
});

export default EventFeedHeader;