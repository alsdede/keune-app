import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Scroll = styled.ScrollView.attrs({
    showVerticalScrollIndicator: false,
})``;
export const Header = styled.Image`
    height: 200px;
    width: 100%;
    opacity: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
`;
export const Map = styled.Image`
    margin-top: 10px;
    height: 150px;
    border-radius: 50px;
    width: 200px;
    border: 0.5px #383838;
    opacity: 1;
    align-items: center;
    justify-content: center;
`;

export const SubmitButton = styled(Button)`
    margin: 20px;
    padding: 20px;
`;

export const Subs = styled.Text`
    width: 100%;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
