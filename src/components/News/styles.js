import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    width: 100%;
    margin-bottom: 15px;

    border-radius: 5px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    justify-content: space-between;
    border-style: solid;
`;

export const Avatar = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-left: 5px;
`;
export const Capa = styled.Image`
    width: 100%;
    height: 200px;
`;

export const Info = styled.View`
    margin-left: 10px;
    flex-direction: row;

`;

export const Name = styled.Text`
    margin-left: 5px;
    font-weight: bold;
    font-size: 18px;
    color: #333;
`;

export const Time = styled.Text`
    color: #000;
    font-size: 16px;
    margin-left: 5px;
`;

export const Date = styled.View`
    align-items:center;
    flex-direction: row;
    margin-right:10px;
`;
