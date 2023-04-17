// import { render } from '@testing-library/react';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../ServiseApi/Api';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };
  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      try {
        const resp = await fetchImages(query);
        if (resp.total === 0) {
          throw new Error('Images with your query was not found');
        }
        this.setState(prevState => ({
          images: [resp.hits],
        }));
      } catch (error) {
        alert('Oops! Something went wrong! Please try again.');
      }
    }
  }

  hendleSubmit = search => {
    this.setState({ query: search });
  };
  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.hendleSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
