// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)

    const {faqsList} = props

    const initialShowState = {}
    faqsList.forEach(faq => {
      initialShowState[faq.id] = false
    })

    this.state = {faqsList: props.faqsList, show: initialShowState}
  }

  //   showDetails = id => {
  //     console.log('hey')
  //     const {faqsList} = this.state
  //     this.setState(prevState => ({
  //       show: !prevState.show,
  //     }))
  //   }

  showDetails = id => {
    this.setState(prevState => {
      const updatedShowState = {
        ...prevState.show,
        [id]: !prevState.show[id],
      }
      return {
        show: updatedShowState,
      }
    })
  }

  render() {
    const {faqsList, show} = this.state
    return (
      <div className="bg">
        <h1 className="h">FAQs</h1>
        <FaqItem
          faqsList={faqsList}
          showDetails={this.showDetails}
          show={show}
        />
      </div>
    )
  }
}
export default Faqs
