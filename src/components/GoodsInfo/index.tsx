import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import './index.less';

interface GoodsInfoProps {
  goodsInfo?: any;
  goodsSku?: any;
}

export default (props: GoodsInfoProps) => {
  const {
    goodsInfo,
    goodsSku,
  } = props;

  const goodsSpecValueListState = [];

  const [goodsInfoState, setGoodsInfoState] = useState<any>();
  const [goodsSkuState, setGoodsSkuState] = useState<any>();

  useEffect(() => {
    setGoodsInfoState(goodsInfo);
    setGoodsSkuState(goodsSku);
  }, [goodsInfo, goodsSku]);

  return (
    <View className="component-container goods-info-container">
      <View className="goods-info-cont">
        <View className="goods-info-top">
          <View className="left">
            <View className="goods-title">
              <Text className="title">{goodsInfoState?.name}</Text>
            </View>
            <View className="goods-selling-point">
              <Text className="text">{goodsInfoState?.sellingPoint}</Text>
            </View>
            <View className="money-box">
              <View className="goods-price">
                <Text className="unit">￥</Text>
                <Text className="goods-price-num">{goodsSkuState?.goodsPrice}</Text>
              </View>
              <View className="line-price" x-if={(goodsSkuState?.linePrice || 0) > 0}>
                <Text className="num">￥{goodsSkuState?.linePrice}</Text>
              </View>
              <View>
                <View x-if={goodsInfoState?.isUserGrade} className="tag-grade-price">
                  <Text className="text">会员折扣价</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="right" >
            <Text className="share-icon iconfont icon-fenxiang" />
            <Text className="share-title">分享</Text>
          </View>
        </View>
        <View className="goods-sales-box">
          <Text className="num">销量：{goodsSkuState?.goodsSales || 0}</Text>
        </View>
      </View>
      <View className={`sku-selector ${goodsInfoState?.specType !== 20 ? 'sku-selector-none' : ''}`} >
        <Text className="title-text">选择：</Text>
        <View className="select">
          {
            goodsSpecValueListState?.map((item) => {
              return (
                <Text
                  className="spec-name"
                  key={item.id}
                >
                  {`${item.specConn?.specName} `}
                </Text>
              );
            })
          }
        </View>
        <View className="right-arrow">
          <Text className="right-arrow-icon iconfont icon-xiangyoujiantou" />
        </View>
      </View>
      <View className="goods-content-cont">
        <View className="title">
          <Text className="text">商品描述</Text>
        </View>
        <View className="content">
          <View x-if={goodsInfoState?.content}>
            <View className="content-cont">
              1
            </View>
          </View>
          <View x-else>
            2
          </View>
        </View>
      </View>
    </View>
  );
};
