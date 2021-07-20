import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { Dialog } from '@alifd/meet';

import './index.less';
import Logo from '../../components/Logo';
import GoodsInfoComponent from '@/components/GoodsInfo';
import { getSearchParams } from 'rax-app';

export default function Goods() {

  const { goodsId } = getSearchParams();

  const [goodsInfoState, setGoodsInfoState] = useState<any>();
  const [goodsSkuState, setGoodsSkuState] = useState<any>();

  const delay = (s: number = 1000): Promise<boolean> => {
    return new Promise((resolve) => {
      try {
        setTimeout(() => {
          resolve(true);
        }, s);
      } catch (e) {
        resolve(false);
      }
    });
  };


  const fetchData1 = async () => {
    await delay(1000);
    setGoodsInfoState({
      goodsId: Number(goodsId),
      isUserGrade: false,
    });
  };

  const fetchData2 = async () => {
    await delay(1000);
    setGoodsSkuState({
      goodsPrice: 124,
      linePrice: Number(goodsId) % 2 !== 0 ? 156 : 0,
    });
  };

  useEffect(() => {
    fetchData1().then();
    fetchData2().then();
  }, []);


  return (
    <View className="goods-container">
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className="goods-title">Goods Page</Text>
      <Text className="goods-info">More information about Rax</Text>
      <Text className="goods-info">Visit https://rax.js.org</Text>
      {
        goodsInfoState && Number(goodsId) === goodsInfoState?.goodsId &&
        <GoodsInfoComponent
          goodsInfo={goodsInfoState}
          goodsSku={goodsSkuState}
        />
      }
      <Dialog
        className="sku-select-dialog"
        visible={false}
        footer={false}
        closeMode={['mask']}
        content={<View>1</View>}
      />
    </View>
  );
}
