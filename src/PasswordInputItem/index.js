import './index.css'

const PasswordInputItem = props => {
  const {passwordDetails, isChecked, onDeletePassword} = props
  const {id, website, username, password} = passwordDetails

  const passwordItem = isChecked ? (
    <p className="text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )

  const initial = website[0].toUpperCase()

  const colorList = ['red', 'green', 'orange', 'brown', 'skyblue']

  const colorClass = colorList[Math.floor(Math.random() * 5)]

  const onClickDelete = () => {
    onDeletePassword(id)
  }

  return (
    <li className="individual-password-list-container">
      <div className={`initial ${colorClass}`}>{initial}</div>
      <div className="details">
        <p className="text">{website}</p>
        <p className="text">{username}</p>
        {passwordItem}
      </div>

      <button
        type="button"
        testid="delete"
        onClick={onClickDelete}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordInputItem
