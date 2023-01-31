import './index.css'

const Answer = props => {
  const {questionDetails} = props
  const {questionI} = questionDetails

  const firstWord = parseInt(questionI[0])
  const operationWord = questionI[1]
  let operator
  const secondWord = parseInt(questionI[2])

  let answer
  switch (operationWord) {
    case '+':
      answer = firstWord + secondWord
      operator = 'plus'
      //   return answer
      break
    case '-':
      answer = firstWord - secondWord
      operator = 'minus'
      //   return answer
      break
    case '*':
      answer = firstWord * secondWord
      operator = 'times'
      //   return answer
      break
    case '/':
      answer = Math.round(firstWord / secondWord)
      operator = 'divided_by'
      //   return answer
      break
    default:
      answer = '*** Error ***'
      //   return null
      break
  }
  
  return (
    <li className="answer-list-container">
      <p className="desc">
        <span className="ans-span"> Question:</span>
        {'  '}
        {firstWord} {operator} {secondWord} <span className="ans-span">?</span>
      </p>
      <p className="desc">
        <span className="ans-span">Answer:</span> {answer}
      
      </p>
    </li>
  )
}
export default Answer
