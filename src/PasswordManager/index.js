import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordInputItem from '../PasswordInputItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    searchInput: '',
    isChecked: false,
  }

  onDeletePassword = id => {
    const {passwordList} = this.state
    const updatedPasswordList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordList: updatedPasswordList})
  }

  renderNoPasswordView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="heading">No Passwords</p>
    </div>
  )

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      website,
      username,
      password,
      passwordList,
      searchInput,
      isChecked,
    } = this.state

    const updatedPasswordList = passwordList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = updatedPasswordList.length

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="details-container">
          <form className="form-container" onSubmit={this.onAddDetails}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="logo"
              />

              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="passwords-container">
          <div className="passwords-container-header">
            <h1 className="heading">
              Your Passwords
              <span className="passwords-count">{count}</span>
            </h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="input"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="show-password-checkbox-label-container">
            <input
              type="checkbox"
              id="showPassword"
              className="checkbox"
              checked={isChecked}
              onChange={this.onChecked}
            />
            <label htmlFor="showPassword" className="checkbox-label-text">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            this.renderNoPasswordView()
          ) : (
            <ul className="password-list-container">
              {updatedPasswordList.map(eachPassword => (
                <PasswordInputItem
                  key={eachPassword.id}
                  passwordDetails={eachPassword}
                  isChecked={isChecked}
                  onDeletePassword={this.onDeletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
