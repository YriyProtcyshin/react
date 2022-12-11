import { Component } from 'react';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    console.log('Function');
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {this.state.isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <h1>Заголовок модалки</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit quas recusandae repudiandae nobis ab? Accusamus
              eligendi culpa, minus animi ad nisi cumque maxime, tempora cum
              quam, eius non odit excepturi eum?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}
      </>
    );
  }
}
