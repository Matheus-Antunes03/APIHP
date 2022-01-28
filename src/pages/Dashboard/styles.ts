import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Title = styled.h2`
    font-size: 48px;
    color: #a00235;
    max-width: 590px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 5px 0 0 5px;
        color: #e6b230;
        border-right: 0;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #f2cf24;
        border-radius: 5px 0 0 5px;
        border: 0;
        color: #cd0000;
        font-weight: bold;

        transition: background-color 0.2s; 

        &:hover {
            background: ${shade(0.2, "#cd0000")};
        }
    }
`;