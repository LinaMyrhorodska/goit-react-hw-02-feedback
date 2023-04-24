import PropTypes from 'prop-types';
import { Rate, RateNumber } from './Statistics.styled';

export const Statistics = ({ options, statistic, total, positives }) => {
    return (
        <div>
            {options.map((name, index) => {
                return (
                    <Rate key={index}>{name}:
                        <RateNumber> {statistic[name]}</RateNumber>
                    </Rate>
                )
            })}
            <Rate>
                Total: <RateNumber>{total}</RateNumber>
            </Rate>
            <Rate>
                Positive feedback: <RateNumber>{positives()}</RateNumber>%
            </Rate>
        </div>
    )
};

Statistics.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.oneOf(['good', 'neutral', 'bad'])
    ).isRequired,
    statistic: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
    positives: PropTypes.func.isRequired
}