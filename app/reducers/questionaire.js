export default function reducer(state={
    questions: [],
    answered: [],
    currentScore: 0,
    depressionState: {},
  }, action) {

  switch (action.type) {
    case 'GET_INITIAL_QUESTIONS': {
      return {
        ...state,
        questions: action.payload,
        answered: action.payload.map(() => -1),
      };
    }

    case 'UPDATE_ANSWER': {
      const { questionIndex, option } = action.payload;
      const newAnswered = [
        ...state.answered.slice(0, questionIndex),
        option,
        ...state.answered.slice(questionIndex + 1)
      ];
      const updatedScore = newAnswered.reduce((p, n) => (n !== -1) ? (p + n) : 0, 0);

      return {
        ...state,
        answered: newAnswered,
        currentScore: updatedScore,
        depressionState: calculateDepressionSeverity(updatedScore),
      };
    }
  }
  return state;
}

// helper
const calculateDepressionSeverity = (score) => {
  if (score <= 4) {
    return {
      text: 'none',
      code: 0,
      color: '#2ecc71',
    };
  }
  if (score <= 9) {
    return {
      text: 'mild',
      code: 1,
      color: '#f1c40f',
    };
  }
  if (score <= 14) {
    return {
      text: 'moderate',
      code: 2,
      color: '#f39c12',
    };
  }
  if (score <= 19) {
    return {
      text: 'moderately severe',
      code: 3,
      color: '#e67e22',
    };
  }
  return {
    text: 'severe',
    code: 4,
    color: '#e74c3c'
  };
}
