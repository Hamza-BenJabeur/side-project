export default (channels= [], action) => {
    switch (action.type) {
      case "FETCH_ALL_CHANNELS":
        return action.payload;
      case "CREATE_CHANNEL":
        return [...channels, action.payload];
      case "UPDATE_CHANNEL":
        return channels.map((channel) => (channel._id === action.payload._id ? action.payload : channel));
      case "DELETE_CHANNEL":
        return channels.filter((channel) => channel._id !== action.payload);
      case "ADD_USER_TO_CHANNEL":
        return action.payload;
      default:
        return channels;
    }
  };
  
  