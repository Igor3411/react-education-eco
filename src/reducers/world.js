import pull from "lodash/pull";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SAVE_REQUEST,
  SAVE_SUCCESS,
  SAVE_FAIL,
  NEW_SUCCESS,
  FIND_RABBIT,
  DEATH,
  TEMP_SUCCESS,
  TIME_SUCCESS,
  GO,
  SET_MAP
  // EATING
} from "../const/const";
import { TILE_EAT, TILE_EMPTY } from "../const/tiles";
import { MAP_STANDART, MAP_ANIMALS } from "../const/maps";

let date = new Date();

const initialState = {
  world: {
    user: "Igor",
    map: MAP_STANDART,
    events: [
      {
        temperature: 2,
        timeOfday: "day"
      }
    ]
  },
  animalsLocation: MAP_ANIMALS,
  error: "",
  isFetching: false,
  log: {
    [date + date.getMilliseconds()]: " Запущено"
  },
  current: undefined
};

export default function worldReducer(state = initialState, action) {
  date = new Date();
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: "" };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        log: { [date + date.getMilliseconds()]: action.massage, ...state.log }
      };

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case SAVE_REQUEST:
      return { ...state, isFetching: true, error: "" };

    case SAVE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        world: {
          ...state.world,
          user: action.payload.data.user,
          map: action.payload.data.map,
          events: action.payload.data.events
        },
        log: {
          [date + date.getMilliseconds()]: action.payload.massage,
          ...state.log
        }
      };

    case SAVE_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message,
        log: { [date + date.getMilliseconds()]: " Неверное имя мира" },
        ...state.log
      };

    case NEW_SUCCESS:
      return {
        ...state,
        isFetching: false,
        world: { ...state.world, user: action.payload.name },
        log: {
          [date + date.getMilliseconds()]: action.payload.massage,
          ...state.log
        }
      };

    // case EATING:
    //   return { ...state };

    case SET_MAP:
      return {
        ...state,
        world: {
          ...state.world,
          map: action.payload
        }
      };
    case FIND_RABBIT:
      return {
        ...state,
        log: {
          [date + date.getMilliseconds()]: action.payload.massage,
          ...state.log
        }
      };

    case GO:
      const newanimalsLocation = [...state.animalsLocation];
      newanimalsLocation[action.payload.gotoY][action.payload.gotoX].push(
        action.payload.name
      );
      pull(
        newanimalsLocation[action.payload.gofromY][action.payload.gofromX],
        action.payload.name
      );
      return {
        ...state,
        animalsLocation: newanimalsLocation
      };

    case DEATH:
      const newMap = [...state.world.map];
      const newanimalsLocationD = [...state.animalsLocation];
      pull(
        newanimalsLocationD[action.payload.placeY][action.payload.placeX],
        action.payload.name
      );
      newMap[action.payload.placeY][action.payload.placeX] =
        newMap[action.payload.placeY][action.payload.placeX] === TILE_EMPTY
          ? TILE_EAT
          : newMap[action.payload.placeY][action.payload.placeX];
      return {
        ...state,
        world: {
          ...state.world,
          map: newMap
        },
        animalsLocation: newanimalsLocationD,
        log: {
          [date + date.getMilliseconds()]: action.payload.massage,
          ...state.log
        }
      };

    case TEMP_SUCCESS:
      const newTemp = [
        {
          ...state.world.events[0],
          temperature: action.payload.temperature
        }
      ];
      return {
        ...state,
        world: {
          ...state.world,
          events: newTemp
        }
      };

    case TIME_SUCCESS:
      const newTime = [
        {
          ...state.world.events[0],
          timeOfday: action.payload.time
        }
      ];
      return {
        ...state,
        world: {
          ...state.world,
          events: newTime
        },
        log: {
          [date + date.getMilliseconds()]: ` Настал ${action.payload.time}`,
          ...state.log
        }
      };

    default:
      return state;
  }
}
