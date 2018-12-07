import { GO, EATING, STARVATION, DEATH, EAT_LIST } from "../const/const";

const initialState = {
  rabbit_1: {
    information: {
      place: [5, 0],
      satiety: 5,
      target: false
    }
  },
  rabbit_2: {
    information: {
      place: [3, 0],
      satiety: 5,
      target: false
    }
  },
  rabbit_3: {
    information: {
      place: [4, 0],
      satiety: 5,
      target: false
    }
  },
  rabbit_4: {
    information: {
      place: [7, 9],
      satiety: 5,
      target: false
    }
  },
  predator_1: {
    information: {
      place: [4, 2],
      satiety: 12,
      target: false
    }
  }
};

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
      const satiety = { ...state };
      const newsatiety = satiety[action.payload.name].information.satiety - 1;
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
      return {
        ...state,
        [action.payload.name]: {
          information: {
            ...state[action.payload.name].information,
            satiety: -5
          }
        },
        ...(action.payload.killer && {
          [action.payload.killer]: {
            information: {
              ...state[action.payload.killer].information,
              satiety: EAT_LIST[action.payload.killer.slice(0, 3)]
            }
          }
        })
      };

    default: {
      return state;
    }
  }
}
