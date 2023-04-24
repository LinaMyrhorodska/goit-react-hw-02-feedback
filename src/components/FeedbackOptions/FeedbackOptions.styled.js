import styled from "styled-components";

export const FeedbackWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const FeedbackBtn = styled.button`
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 4px;
    border-width: 1px;

    :hover {
        box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
        background-color: #BCE2F9;
    }
`;


