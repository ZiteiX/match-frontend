import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

import Text from "../layouts/Text";
import IconWithText from "../layouts/IconWithText";
import defaultStyles from "../../config/styles";
import routes from "../../navigation/routes";

const Event = ({ event }) => {
  const navigation = useNavigation();
  const date = new Date(event.eventDate);

  const iconSize = 25;
  const eventSport = event.sport.toLowerCase();
  const sportIcon = defaultStyles.sportsIcons[eventSport];

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.EVENT_SCREEN, { event: event })}
      style={styles.container}
    >
      <View style={styles.eventDetails}>
        <IconWithText
          iconName={sportIcon}
          iconSize={iconSize}
          style={styles.sportStyle}
        />
        <IconWithText
          iconName="account-group"
          iconSize={iconSize}
          text={`${event.curPlayersAmount}/${event.maxPlayersAmount}`}
        />
        <IconWithText
          iconName="calendar"
          iconSize={iconSize}
          text={format(date, "MMM do")}
        />
      </View>
      <IconWithText
        iconName="google-maps"
        iconSize={iconSize + 10}
        text={event.eventName} // will show event location.
        style={styles.locationStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 20,
    borderWidth: 0.5,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 8,
    marginTop: 8,
    width: "90%",
    paddingBottom: 10,
    overflow: "hidden",
  },
  eventDetails: {
    // margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    // overflow: "hidden",
  },
  locationStyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  sportStyle: {
    borderRadius: 15,
    padding: 5,
  },
});

export default Event;
