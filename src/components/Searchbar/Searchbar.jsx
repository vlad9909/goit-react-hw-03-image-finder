import { Component } from 'react';
import './Searchbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
export class Searchbar extends Component {
  state = {
    search: '',
  };

  inputChange = evn => {
    this.setState({ search: evn.currentTarget.value });
  };

  hendleSubmit = evn => {
    evn.preventDefault();
    this.props.onSubmit(this.state.search.toLowerCase());
    this.setState({ search: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <AiOutlineSearch />
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}
