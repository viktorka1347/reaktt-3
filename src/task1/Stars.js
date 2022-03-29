import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from './Star';

const grades = [1, 2, 3, 4, 5];
const stars = grades.map(() => <Star key={shortid.generate()} />);

function Stars(props) {
  const { count } = props;
  return grades.includes(count) && <ul className="card-body-stars u-clearfix">{stars.slice(0, count)}</ul>;
}

Stars.defaultProps = {
  count: 0
}; 

Stars.propTypes = {
  count: PropTypes.oneOf(grades).isRequired
};

export default Stars;