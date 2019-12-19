import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const BrandsList = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
})``;

export const Brand = styled(RectButton).attrs({})`
    flex: 1;
    background: #f0f0f0;

    align-items: center;

    margin: 0 2px 20px;
`;

export const Avatar = styled.Image`
    height: 150px;
    width: 100%;
    align-items: center;
    justify-content: center;
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
    color: #4949;
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
