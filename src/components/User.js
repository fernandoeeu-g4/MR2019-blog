import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchOneUser } from '../actions'

class User extends Component {

  componentDidMount() {
    this.props.fetchOneUser(this.props.userId)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.users.name}</p>
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { fetchOneUser }
)(User)
