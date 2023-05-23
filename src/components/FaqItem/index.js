// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqsList, showDetails, show} = props
  console.log(show, faqsList)
  const change = id => {
    showDetails(id)
  }

  return (
    <div>
      <ul className="ul">
        {faqsList.map(each => (
          <li className="li" key={each.id}>
            <h1>{each.questionText}</h1>
            <img
              className="img"
              onClick={() => change(each.id)}
              src={
                show[each.id]
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={show[each.id] ? 'plus' : 'minus'}
            />

            {show[each.id] && (
              <div>
                <hr />
                <p>{each.answerText}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FaqItem
