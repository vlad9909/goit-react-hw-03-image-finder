// import { render } from '@testing-library/react';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../ServiseApi/Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    modalImg: '',
    status: 'idle',
  };
  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ status: 'loading' });
        const resp = await fetchImages(query, page);
        if (resp.total === 0) {
          throw new Error('Images with your query was not found');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...resp.hits],
          status: 'finished',
        }));
      } catch (error) {
        alert(`Oops! No results found for ${query}! Please try again.`);
        this.setState({ status: 'idle' });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = image => {
    this.setState({ modalImg: image });
  };

  hendleSubmit = search => {
    this.setState({ query: search, page: 1, images: [] });
  };
  render() {
    const { images, status, modalImg } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.hendleSubmit} />
        <ImageGallery images={images} onClick={this.toggleModal} />
        {status === 'loading' && <Loader />}
        {status === 'finished' && <Button loadMore={this.loadMore} />}
        {modalImg && <Modal image={modalImg} onClose={this.toggleModal} />}
      </div>
    );
  }
}
