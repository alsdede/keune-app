import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: #f0f0f0;
`;
export const BrandsList = styled.FlatList.attrs({
    showVerticalScrollIndicator: true,
})``;
export const News = styled(RectButton).attrs({})`
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid;
`;
export const Current = styled(RectButton).attrs({})`
    align-items: center;
    justify-content: center;
    border: 1px solid;
`;
export const Products = styled(RectButton).attrs({})`
    align-items: center;
    justify-content: center;
    border: 1px solid #383838;
`;
export const SocialProjects = styled(RectButton).attrs({})`
    align-items: center;
    justify-content: center;
    border: 1px solid;
`;
export const Avatar = styled.Image`
    height: 100px;
    width: 250px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const Info = styled.View.attrs({
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
})`
    width: 100%;
    align-items: center;
    justify-content: center;
`;
export const Name = styled.Text`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
    margin-bottom: 5px;
    margin-left: 2px;
    font-size: 14px;
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
