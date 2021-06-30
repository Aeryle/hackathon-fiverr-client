import { AUTHENTICATE } from './ACTIONS';

const initialState = {
  id: '',
  pseudo: '',
  email: '',
  status: 'OFFLINE',
  city: '',
  job: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
