import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

//redux

import {connect} from 'react-redux';
import {handleOpen, handleClose} from './actions/modalActions';

class App extends Component {
  // state = { modalOpen: false }

  // handleOpen = () => this.setState({ modalOpen: true })

  // handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      
        <div className="App">
          <Modal
            trigger={<Button onClick={this.props.handleOpen}>Show Modal</Button>}
            open={this.props.isOpen}
            onClose={this.props.handleClose}
            basic
            size='small'
          >
            <Header as="h1" content='Gentlemans' />
            <Modal.Content>
              <h3>This modal work with REDUX</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.props.handleClose} inverted>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      
    )
  }
}
const mapStateToProps = state => ({
  isOpen: state.modal.isOpen
})
export default connect(mapStateToProps, { handleOpen, handleClose })(App);

