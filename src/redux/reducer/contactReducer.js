const initialState = [
  { id: 0, name: "bilal", number: "03142392129", email: "bilal@bilal.com" },

  { id: 1, name: "telenor", number: "090078601", email: "test@test.com" },
];

const contactReducer = (state = initialState, action) => {
    console.log(action)

  switch (action.type) {

      case "ADD_CONTACT":
          state = [...state,action.payload]
          return state;
          case "UPDATE_CONTACT":
              const updateState =state.map(contact => contact.id == action.payload.id ? action.payload : contact)
              state = updateState
              console.log(updateState)

    default:
      return state;
  }
};

export default contactReducer;
