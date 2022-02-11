import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Title = styled.h2`
    font-family: 'Harry Potter', sans-serif;
    font-size: 70px;
    color: #db9d00;
    line-height: 56px;
    text-align: center;
    text-shadow: 1px 1px white, -1px -1px #444;
    letter-spacing: 2px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        font-family: 'Akaya Telivigala', cursive;
        font-size: 20px;
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 8px 0 0 8px;
        color: #000;
        border-right: 0;
        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        font-family: 'Akaya Telivigala', cursive;
        width: 140px;
        height: 70px;
        background: #db9d00;
        border-radius: 0 8px 8px 0;;
        border: 0;
        color: #000;
        font-size: 20px;
        margin-right: -80px;
        transition: background-color 0.5s; 

        &:hover {
            background: ${shade(0.0, "#000")};
            color: ${shade(0.0, "#db9d00")};
        }
    }
`;

export const Personagens = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        font-family: 'Harry Potter', sans-serif;
        color: #000;
        font-size: 25px;
        margin-left: 40px;
        background: #db9d00;
        border-radius: 10px;
        width: 100%;
        display: block;
        padding: 25px;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.2s;

        &:hover {
            transform: translate(10px);
            background: ${shade(0.0, "#fbb400")};
        }

        & + a {
            margin-top: 16px;
        }

        //.Nome {
        //    width: 80px;
        //    height: 80px;
        //    border-radius: 50%;
        //    background: #db9d00;
        //    padding: 10px;
        //}

        div {
            font-family: 'Akaya Telivigala', cursive;
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 22px;
                color: #000;
            }

            p {
                font-family: 'Akaya Telivigala', cursive;
                font-size: 18px;
                color: #000;
                margin-top: 4px;
            }
        }
    }
`;