
function postComments(state =[], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
      case 'REMOVE_COMMENT':
        return state;
      default:
        return state;
  }
  return state;
}

function comments(state =[], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action) 
    };
  }
  return state;
}

export default comments;
