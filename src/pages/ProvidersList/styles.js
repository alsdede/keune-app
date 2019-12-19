import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #f0f0fe;
`;

export const ProviderList = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
    numColumns: 2,
})`
    margin-top: 20px;
    padding: 0 20px;
`;

export const Provider = styled(RectButton).attrs({})`
    flex: 1;
    background: #fff;
    border-radius: 8px;
    padding: 5px;
    align-items: center;
    margin: 0 10px 20px;
    border: 1px solid;
`;

export const Avatar = styled.Image`
    height: 100px;
    width: 110px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const Info = styled.View.attrs({
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
})`
    width: 100%;
`;
export const Name = styled.Text`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-left: 2px;
    font-size: 18px;
    color: #383838;
    font-style: italic;
    font-family: 'Roboto';
`;

export const Subs = styled.Text`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
    font-size: 12px;
    color: #333;
    font-style: italic;
    font-family: 'Roboto';
`;
