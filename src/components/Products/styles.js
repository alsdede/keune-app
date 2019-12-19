import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    shadowColor: 'red',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.1,
    elevation: 20,
})`
    flex: 1;
    width: 100%;
    margin-bottom: 15px;

    background-color: #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Capa = styled.Image`
    width: 100%;
    height: 150px;
`;
