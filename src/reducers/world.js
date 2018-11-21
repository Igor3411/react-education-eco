import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAIL, NEW_SUCCESS, FIND_RABBIT, DEATH_RABBIT, EVENT_SUCCESS} from '../const/const'

const date = new Date();

const initialState = {
  world: {
    user: "Igor",
    map: [
      [[1, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 1], [1, 0, 0], [0, 0, 0], [0, 1, 0]],
      [[0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 1], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 1]],
      [[0, 0, 0], [0, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 1], [0, 0, 0], [1, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 1], [0, 0, 1], [0, 0, 0], [0, 1, 0], [0, 0, 0], [1, 0, 0]],

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
      return {...state, isFetching: false, world: {...state.world, user: action.payload.user, map: action.payload.map, events: action.payload.events}, log: {...state.log, [date.toLocaleTimeString()]: action.massage}}

    case SAVE_FAIL:
      return {...state, isFetching: false, error: action.payload.message, log: {...state.log, [date.toLocaleTimeString()]: " Неверное имя мира"}}

    case NEW_SUCCESS:
      return {...state, isFetching: false, world: {...state.world, user: action.payload}, log: {...state.log, [date.toLocaleTimeString()]: action.massage}}

    case FIND_RABBIT:
      return {...state, log: {...state.log, [date.toLocaleTimeString()]: action.massage}}

    case DEATH_RABBIT:
      return {
        ...state,
        world: {
          ...state.world, map: [...state.world.map, state.world.map[action.placeY][action.placeX][1] = 1]

        },
        log: {...state.log, [date.toLocaleTimeString()]: action.massage}
      }

    case EVENT_SUCCESS:
      return {...state, world: {...state.world, events: action.payload.events}}


    default:
      return state
  }
}