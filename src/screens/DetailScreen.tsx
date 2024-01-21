import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {fetchPromotionById} from '../common/api';
import {useQuery} from 'react-query';
import styled from 'styled-components';
import color from '../common/colors';
import Button from '../components/Button';
import RenderHtml from 'react-native-render-html';
import {BackButtonIcon} from '../assets/icons';

const OuterContainer = styled(View)`
  flex: 1;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  height: 40px;
  width: 40px;
  top: 50px;
  left: 20px;
  z-index: 4;
`;

const Container = styled(ScrollView)`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  height: 100%;
  width: 100%;
`;

const PromotionImageContainer = styled(View)`
  flex: 1;
  width: 100%;
  height: 50%;
`;

const PromotionImage = styled(Image)`
  width: 100%;
  height: 400px;
  border-bottom-left-radius: 100px;
`;

const PromotionBrandImageContainer = styled(View)`
  position: absolute;
  background-color: ${color.white};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  bottom: 0px;
  left: 0px;
`;

const PromotionBrandImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const HeaderText = styled(Text)`
  flex: 1;
  margin: 30px;
  color: ${color.black};
  font-family: Helvetica;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.2px;
`;

const HeaderContainer = styled(View)`
  flex: 1;
  margin: 30px;
`;

const FixedButtonContainer = styled(View)`
  margin: 0px 30px;
`;

const FixedButton = styled(Button)``;

const ButtonText = styled(Text)`
  color: ${color.white};
  text-align: center;
  font-family: Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const titleTagsStyles = {
  span: {
    color: color.black,
    fontFamily: 'Helvetica',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: '700',
  },
};

export function DetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const {id} = route.params;
  const {data: promotion} = useQuery('promotion', () => fetchPromotionById(id));
  console.log('prom', promotion);

  return (
    <OuterContainer>
      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonIcon />
      </BackButton>
      {promotion && (
        <Container overScrollMode="never" bounces={false}>
          <PromotionImageContainer>
            <PromotionImage source={{uri: promotion.ImageUrl}} />
            <PromotionBrandImageContainer>
              <PromotionBrandImage source={{uri: promotion.BrandIconUrl}} />
            </PromotionBrandImageContainer>
          </PromotionImageContainer>
          <HeaderContainer>
            <RenderHtml
              ignoredStyles={['color', 'font']}
              contentWidth={10}
              source={{
                html: promotion.Title,
              }}
              tagsStyles={titleTagsStyles}
            />
          </HeaderContainer>
        </Container>
      )}

      <SafeAreaView style={{backgroundColor: color.white}}>
        <FixedButtonContainer>
          <FixedButton type="primary" height={50}>
            <ButtonText>Hemen Katıl</ButtonText>
          </FixedButton>
        </FixedButtonContainer>
      </SafeAreaView>
    </OuterContainer>
  );
}
