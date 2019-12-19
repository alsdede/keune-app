import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #f0f0;
    font-weight: bold;
    align-self: center;
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const List = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 5 },
    borderTopWidth: 0.5,
})``;

export const LogoTitle = styled.Image``;
