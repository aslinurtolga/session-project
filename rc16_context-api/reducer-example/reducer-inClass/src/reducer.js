export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };

    case "SUCCESS":
      return { ...state, catImage: action.payload, error: "", loading: false };

    case "FAIL":
      return { ...state, catImage: "", error: action.payload, loading: false };
    default:
      break;
  }
};
