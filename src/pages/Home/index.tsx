import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';
import Logo from '../../components/Logo';
import { history } from 'rax-app';
import { navigate, env } from '@uni/apis';

export default function Home() {

  let goodsId = 0;

  const gotoGoodsPage = () => {
    goodsId += 1;
    if (env.isWeChatMiniProgram) {
      navigate.push({
        url: '/pages/Goods/index?goodsId=' + goodsId,
      }).then(() => {
      });
    } else {
      history.push('/goods?goodsId=' + goodsId);
    }
  };
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Home Page</Text>
      <Text className={styles.homeInfo}>有问题的布局写在Goods页面，在微信小程序下，点击进入Goods页面，后退，再进入，反复几次，可以看到x-if布局的渲染不太正常。有时候可以，有时候不可以。web端没有问题。</Text>
      <Text className={styles.homeInfo} style={{ color: '#f00' }} onClick={gotoGoodsPage}>Click me, Go to Goods Page</Text>
    </View>
  );
}
