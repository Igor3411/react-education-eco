import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SAVE_REQUEST, SAVE_SUCCESS, SAVE_FAIL, NEW_SUCCESS} from '../const/const'
const date = new Date();
const initialState = {
  world: {
    user: "Igorr",
    map: {},
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

    default:
      return state
  }
}