import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAIL, NEW_SUCCESS, FIND_RABBIT, DEATH_RABBIT, TEMP_SUCCESS, TIME_SUCCESS, GO_RABBIT} from '../const/const'
import {TILE_ROCK, TILE_EAT, TILE_EMPTY} from '../const/tiles'
import pull from "lodash/pull"

const date = new Date();

const initialState = {
  world: {
    user: "Igor",
    map: [
      [TILE_ROCK, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_EMPTY, TILE_EAT],
      [TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_ROCK],
      [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_ROCK],
    ],
    animalsLocation: [
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ],
    events: [{
      'temperature': 2,
      'timeOfday': 'day',
    }
    ]
    ,
  },
  error: '', // добавили для сохранения текста ошибки
  isFetching: false, // добавили для реакции на статус "загружаю" или нет
  log: {
    [date + date.getMilliseconds()]: " Запущено"
  },
}

export default function worldReducer(state = initialState, action) {
  const date = new Date();
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isFetching: true, error: ''}

    case LOGIN_SUCCESS:
      return {...state, isFetching: false, log: {[date + date.getMilliseconds()]: action.massage}, ...state.log}

    case LOGIN_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    case SAVE_REQUEST:
      return {...state, isFetching: true, error: ''}

    case SAVE_SUCCESS:
      return {...state, isFetching: false, world: {...state.world, user: action.payload.user, map: action.payload.map, events: action.payload.events}, log: {[date + date.getMilliseconds()]: action.massage, ...state.log}}

    case SAVE_FAIL:
      return {...state, isFetching: false, error: action.payload.message, log: {[date + date.getMilliseconds()]: " Неверное имя мира"}, ...state.log}

    case NEW_SUCCESS:
      return {...state, isFetching: false, world: {...state.world, user: action.payload}, log: {[date + date.getMilliseconds()]: action.massage, ...state.log}}

    case FIND_RABBIT:
      return {...state, log: {[date + date.getMilliseconds()]: action.massage, ...state.log}}

    case GO_RABBIT:
      let newanimalsLocation = [...state.world.animalsLocation];
      newanimalsLocation[action.gotoY][action.gotoX].push(action.name);
      pull(newanimalsLocation[action.gofromY][action.gofromX], action.name);
      return {
        ...state,
        world: {
          ...state.world, animalsLocation: newanimalsLocation
        },
      }

    case DEATH_RABBIT:
      let newMap = [...state.world.map]
      let newanimalsLocationD = [...state.world.animalsLocation];
      pull(newanimalsLocationD[action.placeY][action.placeX], action.name);
      newMap[action.placeY][action.placeX] = TILE_EAT
      return {
        ...state,
        world: {
          ...state.world, map: newMap, animalsLocation: newanimalsLocationD
        },
        log: {[date + date.getMilliseconds()]: action.massage, ...state.log}
      }

    case TEMP_SUCCESS:
      return {
        ...state, world: {...state.world, events: {...state.world.events = [{...state.world.events[0], temperature: action.payload.temperature}]}}
      }
    case TIME_SUCCESS:
      return {
        ...state, world: {...state.world, events: {...state.world.events = [{...state.world.events[0], timeOfday: action.payload.time}]}}
        , log: {[date + date.getMilliseconds()]: " Настал " + action.payload.time, ...state.log}
      }


    default:
      return state
  }
}