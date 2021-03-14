export default (chats= [], action) => {
    switch (action.type) {
      case "FETCH_ALL_CHATS":
        return action.payload;
      case "CREATE_CHAT":
        return [...chats, action.payload];
      case "UPDATE_CHAT":
        return chats.map((chat) => (chat._id === action.payload._id ? action.payload : chat));
      case "DELETE_CHAT":
        return chats.filter((chat) => chat._id !== action.payload);
      default:
        return channels;
    }
  };
  
  