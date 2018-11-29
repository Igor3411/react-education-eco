import {KILL_RABBIT, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAIL, NEW_SUCCESS, FIND_RABBIT, DEATH_RABBIT, TEMP_SUCCESS, TIME_SUCCESS, GO_RABBIT} from '../const/const'
// с новой строчки
import {TILE_ROCK, TILE_EAT, TILE_EMPTY, TILE_WATER} from '../const/tiles'
import pull from "lodash/pull"

const date = new Date();

const initialState = {
  world: {
    user: "Igor",
    map: [
      [TILE_ROCK, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_WATER, TILE_EAT],
      [TILE_EAT, TILE_EMPTY, TILE_WATER, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_ROCK],
      [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_WATER, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY],
      [TILE_WATER, TILE_EMPTY, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_ROCK, TILE_WATER, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_ROCK, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY],
      [TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_ROCK, TILE_EMPTY],
      [TILE_WATER, TILE_EMPTY, TILE_EMPTY, TILE_WATER, TILE_EMPTY, TILE_EMPTY, TILE_EMPTY, TILE_EAT, TILE_EMPTY, TILE_ROCK],
    ],

    events: [{
      'temperature': 2,
      'timeOfday': 'day',
    }
    ]
    ,
  },
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
      return {...state, isFetching: false, log: {[date + date.getMilliseconds()]: action.payload.massage, ...state.log}}

    case LOGIN_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    case SAVE_REQUEST:
      return {...state, isFetching: true, error: ''}

    case SAVE_SUCCESS:
      return {...state, isFetching: false, world: {...state.world, user: action.payload.user, map: action.payload.map, events: action.payload.events}, log: {[date + date.getMilliseconds()]: action.payload.massage, ...state.log}}

    case SAVE_FAIL:
      return {...state, isFetching: false, error: action.payload.message, log: {[date + date.getMilliseconds()]: " Неверное имя мира"}, ...state.log}

    case NEW_SUCCESS:
      return {...state, isFetching: false, world: {...state.world, user: action.payload}, log: {[date + date.getMilliseconds()]: action.payload.massage, ...state.log}}

    case FIND_RABBIT:
      return {...state, log: {[date + date.getMilliseconds()]: action.payload.massage, ...state.log}}

    case GO_RABBIT:
      let newanimalsLocation = [...state.animalsLocation];
      newanimalsLocation[action.payload.gotoY][action.payload.gotoX].push(action.payload.name);
      pull(newanimalsLocation[action.payload.gofromY][action.payload.gofromX], action.payload.name);
      return {
        ...state,
        animalsLocation: newanimalsLocation
      }

    case DEATH_RABBIT:
      let newMap = [...state.world.map]
      let newanimalsLocationD = [...state.animalsLocation];
      pull(newanimalsLocationD[action.payload.placeY][action.payload.placeX], action.payload.name);
      newMap[action.payload.placeY][action.payload.placeX] = TILE_EAT
      return {
        ...state,
        world: {
          ...state.world, map: newMap
        },
        animalsLocation: newanimalsLocationD,
        log: {[date + date.getMilliseconds()]: action.payload.massage, ...state.log}
      }

    case KILL_RABBIT:
      let newMap_1 = [...state.world.map]
      let newanimalsLocationD_1 = [...state.animalsLocation];
      pull(newanimalsLocationD_1[action.payload.placeY][action.payload.placeX], action.payload.name);
      newMap_1[action.payload.placeY][action.payload.placeX] = TILE_EAT
      return {
        ...state,
        world: {
          ...state.world, map: newMap_1
        },
        animalsLocation: newanimalsLocationD_1,
        log: {[date + date.getMilliseconds()]: action.payload.massage, ...state.log}
      }

    case TEMP_SUCCESS:
      return {
        ...state, world: {...state.world, events: {...state.world.events = [{...state.world.events[0], temperature: action.payload.temperature}]}}
      }
    case TIME_SUCCESS://неск строчек
      return {
        ...state, world: {...state.world, events: {...state.world.events = [{...state.world.events[0], timeOfday: action.payload.time}]}}
        , log: {[date + date.getMilliseconds()]: " Настал " + action.payload.time, ...state.log}
      }


    default:
      return state
  }
}