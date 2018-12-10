import {
  GO,
  EATING,
  STARVATION,
  DEATH,
  EAT_LIST,
  SET_TARGET
} from "../const/const";

const initialState = {
  rabbit_1: {
    information: {
      place: [5, 0],
      satiety: 5,
      target: false //undefi
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
              satiety: EAT_LIST[action.payload.killer.slice(0, 3)],
              target: false
            }
          }
        })
      };

    case SET_TARGET:
      // const arrtargets = [];//вынести
      // // eslint-disable-next-line guard-for-in
      // for (const prop in state) {
      //   if (state[prop].information.satiety > -4) {
      //     arrtargets.push(prop);
      //   }
      // }
      const arrtargets = Object.entries(state)
        .filter( ([key, prop]) => prop.information.satiety > -4)
        .map(([key]) => key)
      const target = arrtargets[0] ? arrtargets[0] : false;
      return {
        ...state,
        [action.payload]: {
          information: {
            ...state[action.payload].information,
            target
          }
        }
      };

    default: {
      return state;
    }
  }
}
