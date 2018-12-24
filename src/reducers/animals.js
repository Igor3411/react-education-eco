import {
  GO,
  EATING,
  STARVATION,
  DEATH,
  EAT_LIST,
  SET_TARGET,
  NEW_ANIMAL
} from "../const/const";

const initialState = {};

let index = 5;

export default function animalsReducer(state = initialState, action) {
  switch (action.type) {
    case GO:
      return {
        ...state,
        [action.payload.name]: {
          information: {
            ...state[action.payload.name].information,
            place: action.payload.goto
          }
        }
      };

    case STARVATION:
      const newsatiety = state[action.payload.name].information.satiety - 1;
      return {
        ...state,
        [action.payload.name]: {
          information: {
            ...state[action.payload.name].information,
            satiety: newsatiety
          }
        }
      };

    case EATING:
      return {
        ...state,
        [action.payload.name]: {
          information: {
            ...state[action.payload.name].information,
            satiety: action.payload.satiety
          }
        }
      };

    case DEATH:
      const newstate = { ...state };
      delete newstate[action.payload.name];
      return {
        ...newstate,
        ...(action.payload.killer && {
          [action.payload.killer]: {
            information: {
              ...state[action.payload.killer].information,
              satiety: EAT_LIST[action.payload.killer.slice(0, 3)],
              target: undefined
            }
          }
        })
      };

    case SET_TARGET:
      const arrtargets = Object.entries(state)
        .filter(([key, prop]) => prop.information.satiety > -4)
        .map(([key]) => key);
      const target = arrtargets[0] ? arrtargets[0] : undefined;
      return {
        ...state,
        [action.payload]: {
          information: {
            ...state[action.payload].information,
            target
          }
        }
      };

    case NEW_ANIMAL:
      index++;
      return {
        ...state,
        ...(Object.entries(state).length < 15 && {
          [action.payload.name + index]: {
            information: {
              place: action.payload.place,
              satiety: EAT_LIST[action.payload.name.slice(0, 3)],
              target: undefined
            }
          }
        })
      };

    default: {
      return state;
    }
  }
}
