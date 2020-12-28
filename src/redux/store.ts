import { createStore } from "redux";

type ActionsType = ReturnType<typeof setMinValue> |
  ReturnType<typeof setMaxValue> |
  ReturnType<typeof setDisplayValue> |
  ReturnType<typeof setSettingsMode>;

export type AppStateType = {
  maxValue: number
  minValue: number
  displayValue: number
  settingsMode: boolean
}

const initialState: AppStateType = {
  maxValue: Number(localStorage.getItem("maxValue")) | 5,
  minValue: Number(localStorage.getItem("minValue")) | 0,
  displayValue: Number(localStorage.getItem("minValue")) | 0,
  settingsMode: false
}


function counterReducer(state: AppStateType = initialState, action: ActionsType): AppStateType {
  switch (action.type) {
    case 'SET-SETTINGS-MODE': {
      return {
        ...state,
        settingsMode: action.value
      }
    }
    case 'SET-DISPLAY-VALUE': {
      return {
        ...state,
        displayValue: action.value
      }
    }
    case 'SET-MAX-VALUE': {
      return {
        ...state,
        maxValue: action.value
      }
    }
    case 'SET-MIN-VALUE': {
      return {
        ...state,
        minValue: action.value
      }
    }
    default:
      return state;
  }
}

export const setMinValue = (value: number) => {
  return {
    type: 'SET-MIN-VALUE',
    value
  } as const
}

export const setMaxValue = (value: number) => {
  return {
    type: 'SET-MAX-VALUE',
    value
  } as const
}

export const setDisplayValue = (value: number) => {
  return {
    type: 'SET-DISPLAY-VALUE',
    value
  } as const
}

export const setSettingsMode = (value: boolean) => {
  return {
    type: 'SET-SETTINGS-MODE',
    value
  } as const
}

export const store = createStore(counterReducer);