import './index.css'

const AppointmentItem = props => {
  const {appointment} = props
  const {title, date} = appointment

  return (
    <li className="list-item">
      <div className="appointment-container">
        <p className="name">{title}</p>
        <button type="button" className="button" data-testid="star">
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
            className="logo"
            alt="star"
          />
        </button>
      </div>
      <p className="date">`Date:${date}`</p>
    </li>
  )
}

export default AppointmentItem
