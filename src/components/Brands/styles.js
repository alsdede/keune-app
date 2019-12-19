import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View.attrs({
    shadowColor: 'red',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.1,
    elevation: 0,
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

export const Left = styled.View.attrs({})`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px;
    justify-content: space-between;
`;

export const Avatar = styled.Image.attrs({})`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-left: 5px;
`;
export const Capa = styled.Image`
    width: 100%;
    height: 150px;
`;

export const Brand = styled(RectButton)`
    height: 150px;
    width: 100%;
`;
