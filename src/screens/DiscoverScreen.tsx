import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Touchable,
} from 'react-native';
import color from '../common/colors';
import styled from 'styled-components';
import {DiscoverIcon} from '../assets/icons/DiscoverIcon';
import {useQuery} from 'react-query';
import {fetchPromotions, fetchTags} from '../common/api';
import {Slider} from '../components/Slider';
import {useNavigation} from '@react-navigation/native';
import PATHS from '../common/paths';
import RenderHtml from 'react-native-render-html';

const Container = styled(View)`
  display: flex;
  background-color: ${color.white};
  height: 100%;
  width: 100%;
`;

const BrandScrollView = styled(ScrollView)`
  flex: 1;
  margin: 20px;
  height: 40px;
`;

const BrandItem = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1.5px solid ${color.lightGray};
  margin-bottom: 10px;
  margin-right: 5px;
  height: 36px;
`;

const BrandItemIcon = styled(View)`
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 24px;
  width: 24px;
`;

const BrandItemText = styled(Text)`
  margin: 5px;
  color: ${color.black};
  font-family: Helvetica;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const PromotionSlider = styled(View)`
  flex: 12;
`;

const Promotion = styled(TouchableOpacity)`
  align-self: center;
  height: 80%;
  width: 80%;
  margin: 10px;
`;

const BackCard = styled(View)`
  margin-top: 20px;
  background-color: ${color.red};
  border-radius: 20px;
  height: 100%;
  width: 100%;
`;

const MainCard = styled(View)`
  justify-content: space-between;
  align-items: center;
  background-color: ${color.white};
  border: 1.5px solid ${color.lightGray};
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

const PromotionContainer = styled(View)`
  margin-top: 5px;
  width: 95%;
  height: 300px;
`;

const PromotionImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
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
  left: -5px;
`;

const PromotionBrandImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 30px;
`;

const PromotionText = styled(Text)`
  color: ${color.black};
  margin: 0px 30px;
  text-align: center;
  font-family: Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.215px;
`;

const AppText = styled(Text)`
  color: ${props => props.color};
  text-align: center;
  font-family: Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
`;

const titleTagsStyles = {
  span: {
    color: color.black,
    fontFamily: 'Helvetica',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
  },
};

export function DiscoverScreen() {
  const navigation = useNavigation();
  const {data: tags} = useQuery('tags', () => fetchTags());
  const {data: promotions} = useQuery('promotions', () => fetchPromotions());
  console.log('tags', tags);
  console.log('promotions', promotions);

  return (
    <Container>
      <BrandScrollView horizontal>
        {tags?.length > 0 &&
          tags.map(tag => (
            <BrandItem>
              <BrandItemIcon>
                <Image width={24} height={24} source={{uri: tag.IconUrl}} />
              </BrandItemIcon>
              <BrandItemText>{tag.Name}</BrandItemText>
            </BrandItem>
          ))}
      </BrandScrollView>
      <PromotionSlider>
        {promotions?.length > 0 && (
          <Slider
            tabs={promotions.map(p => {
              return {
                id: p.Id,
                title: p.SeoName,
                component: () => (
                  <Promotion
                    activeOpacity={1}
                    onPress={() =>
                      navigation.navigate(PATHS.DETAILS_SCREEN.name, {id: p.Id})
                    }>
                    <MainCard>
                      <PromotionContainer>
                        <PromotionImage source={{uri: p.ImageUrl}} />
                        <PromotionBrandImageContainer>
                          <PromotionBrandImage source={{uri: p.BrandIconUrl}} />
                        </PromotionBrandImageContainer>
                      </PromotionContainer>

                      <PromotionText>
                        <RenderHtml
                          ignoredStyles={['color', 'font']}
                          contentWidth={10}
                          source={{
                            html: p.Title,
                          }}
                          tagsStyles={titleTagsStyles}
                        />
                      </PromotionText>
                      <AppText color={p.PromotionCardColor}>Daha Daha</AppText>
                    </MainCard>
                  </Promotion>
                ),
              };
            })}
          />
        )}
      </PromotionSlider>
    </Container>
  );
}
