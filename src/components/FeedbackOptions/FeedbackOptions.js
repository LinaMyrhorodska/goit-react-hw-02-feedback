import PropTypes from 'prop-types';
import { FeedbackWrap, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <FeedbackWrap>
            {options.map((name, index) => {
                return (
                    <FeedbackBtn
                        key={index + 1}
                        onClick={() => {
                            onLeaveFeedback(name)
                        }}
                    >
                        {name}
                    </FeedbackBtn>
                )
            })}
        </FeedbackWrap>
    )
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOf(['good', 'neutral', 'bad'])
    ).isRequired
}