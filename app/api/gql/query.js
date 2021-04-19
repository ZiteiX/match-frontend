import { gql } from "@apollo/client";

const GET_ME = gql`
  query Me {
    Me {
      avatar
      connection {
        id
        avatar
        name
      }
      favoriteSport
      id
      name
      upcomingEvents {
        captain {
          id
        }
        curPlayersAmount
        eventDate
        id
        level
        location
        maxPlayersAmount
        players {
          id
          name
          avatar
        }
        private
        sport
      }
    }
  }
`;

const GET_ATHLETE = gql`
  query Athlete($id: ID!) {
    Athlete(id: $id) {
      avatar
      connection {
        avatar
        name
      }
      favoriteSport
      name
      upcomingEvents {
        captain {
          id
        }
        curPlayersAmount
        eventName
        eventDate
        id
        level
        location
        maxPlayersAmount
        players {
          id
          name
          avatar
        }
        sport
      }
    }
  }
`;

const GET_ATHLETES = gql`
  query Athletes($cursor: String) {
    Athletes(cursor: $cursor) {
      cursor
      hasNextPage
      athletes {
        id
        name
        favoriteSport
        avatar
        createdAt
      }
    }
  }
`;

const GET_EVENT = gql`
  query Event($id: ID!) {
    Event(id: $id) {
      id
      eventName
      eventDate
      sport
      captain {
        id
        name
      }
      players {
        id
        name
        avatar
      }
      curPlayersAmount
      maxPlayersAmount
    }
  }
`;

const GET_EVENT_PLAYERS = gql`
  query Event($id: ID!) {
    Event(id: $id) {
      captain {
        id
        name
      }
      players {
        id
        name
        avatar
      }
    }
  }
`;

const GET_EVENTS_BY_SPORT = gql`
  query EventBySport($sports: favoriteSportSelection!) {
    EventBySport(sports: $sports) {
      cursor
      hasNextPage
      events {
        id
        eventName
        eventDate
        sport
        captain {
          id
          name
        }
        players {
          id
          name
        }
        curPlayersAmount
        maxPlayersAmount
      }
    }
  }
`;

const GET_EVENTS = gql`
  query Events($cursor: String, $sports: [favoriteSportSelection]) {
    Events(cursor: $cursor, sports: $sports) {
      cursor
      hasNextPage
      events {
        curPlayersAmount
        id
        eventDate
        eventName
        level
        location
        maxPlayersAmount
        private
        sport
      }
    }
  }
`;

const GET_MY_CONNECTIONS = gql`
  query Me {
    Me {
      id
      name
      connection {
        id
        avatar
        name
      }
    }
  }
`;

const GET_MY_EVENTS = gql`
  query Me {
    Me {
      id
      avatar
      name
      upcomingEvents {
        id
        eventDate
        eventName
        curPlayersAmount
        maxPlayersAmount
        sport
        captain {
          id
          name
        }
        players {
          id
          name
        }
      }
    }
  }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const IS_ME = gql`
  {
    me @client
  }
`;

export {
  GET_ME,
  GET_ATHLETE,
  GET_ATHLETES,
  GET_EVENT,
  GET_EVENT_PLAYERS,
  GET_EVENTS_BY_SPORT,
  GET_EVENTS,
  GET_MY_CONNECTIONS,
  GET_MY_EVENTS,
  IS_LOGGED_IN,
  IS_ME,
};
