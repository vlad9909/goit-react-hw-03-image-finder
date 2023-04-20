import './Button.css';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <button className="button_pagin" onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
