import styled from 'styled-components';

export const Container = styled.View`
    padding: 0 15px;
    height: 46px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    border: 0.2px solid;

    flex-direction: row;
    align-items: center;
`;

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(0,0,0,1)',
})`
    flex: 1;
    font-size: 14px;
    margin-left: 10px;
    color: #000;
`;
