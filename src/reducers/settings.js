import {CHANGE_TEMPERATURE_UNIT} from "../actions/types";

const initialState = {
  unit: 'C',
  unitName: 'Cels',
  isMetric: true,
  unitStatus: 'Metric'
};

export default (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case CHANGE_TEMPERATURE_UNIT:
      return {
        ...state,
        isMetric: !state.isMetric,
        unit: !state.isMetric ? 'C' : 'F',
        unitName: !state.isMetric ? 'Cels' : 'Fahren',
        unitStatus: !state.isMetric ? 'Metric' : 'Imperial'
      };

    default:
      return state;
  }
}