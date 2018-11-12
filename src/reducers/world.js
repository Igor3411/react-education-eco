import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAIL, NEW_SUCCESS, FIND_RABBIT} from '../const/const'

const date = new Date();

const initialState = {
  world: {
    user: "Igor",
    map: {
      1: {
        eat: true,
        snow: false,
        block: false,
        water: false,
      },
      2: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      3: {
        eat: false,
        snow: false,
        block: true,
        water: false,
      },
      4: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      5: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      6: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      7: {
        eat: true,
        snow: false,
        block: false,
        water: false,
      },
      8: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      9: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      10: {
        eat: false,
        snow: false,
        block: true,
        water: false,
      },
      11: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      12: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      13: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      14: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      15: {
        eat: true,
        snow: false,
        block: false,
        water: false,
      },
      16: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      17: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      18: {
        eat: false,
        snow: false,
        block: true,
        water: false,
      },
      19: {
        eat: true,
        snow: false,
        block: false,
        water: false,
      },
      20: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      21: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      22: {
        eat: false,
        snow: false,
        block: true,
        water: false,
      },
      23: {
        eat: true,
        snow: false,
        block: false,
        water: false,
      },
      24: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },
      25: {
        eat: false,
        snow: false,
        block: false,
        water: false,
      },

    },
    events: {},
  },
  error: '', // добавили для сохранения текста ошибки
  isFetching: false, // добавили для реакции на статус "загружаю" или нет
  log: {
    [date.toLocaleTimeString()]: " Запущено"
  },
}

export default function worldReducer(state = initialState, action) {
  const date = new Date();
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isFetching: true, error: ''}

    case LOGIN_SUCCESS:
      return {...state, isFetching: false, log: {...state.log, [date.toLocaleTimeString()]: action.massage}}

    case LOGIN_FAIL:
      return {...state, isFetching: false, error: action.payload.message}

    case SAVE_REQUEST:
      return {...state, isFetching: true, error: ''}

    case SAVE_SUCCESS:
      return {...state, isFetching: false, world: action.payload, log: {...state.log, [date.toLocaleTimeString()]: action.massage}}

    case SAVE_FAIL:
      return {...state, isFetching: false, error: action.payload.message, log: {...state.log, [date.toLocaleTimeString()]: " Неверное имя мира"}}

    case NEW_SUCCESS:
      return {...state, isFetching: false, world: {...state.world, user: action.payload}, log: {...state.log, [date.toLocaleTimeString()]: action.massage}}

    case FIND_RABBIT:
      return {...state, log: {...state.log, [date.toLocaleTimeString()]: action.massage}}

    default:
      return state
  }
}