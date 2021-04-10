import React from "react";
import { useQuery } from "@apollo/client";

import ActivityIndicator from "../../../components/layouts/ActivityIndicator";
import ErrorIndicator from "../../../components/layouts/ErrorIndicator";

import { GET_ME } from "../../../api/gql/query";
import AthleteProfile from "../../../components/athletes/profile/AthleteProfile";

const MyProfileScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <ActivityIndicator />;

  if (error) return <ErrorIndicator />;

  return (
    <AthleteProfile athlete={data.Me} isOwner={true} navigation={navigation} />
  );
};

export default MyProfileScreen;
