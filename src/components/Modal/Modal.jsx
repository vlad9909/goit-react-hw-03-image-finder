import { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = evn => {
    if (evn.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evn => {
    if (evn.currentTarget === evn.target) {
      this.props.onClose();
    }
  };
  render() {
    const { image } = this.props;
    return (
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
