import PropTypes from 'prop-types';
import { ButtonsList, ButtonItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnTypes = Object.keys(options);
  return (
    <ButtonsList>
      {btnTypes.map(option => (
        <ButtonItem key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>{' '}
        </ButtonItem>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
