import { Component } from 'react';
import './modal.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal_root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handelKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handelKeyDown);
  }

  handelKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажата  кнопка Escape');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="modal_backdrop">
        <div className="modal_content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
