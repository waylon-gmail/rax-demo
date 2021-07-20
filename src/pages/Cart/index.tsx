import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { history } from 'rax-app';

import styles from './index.module.css';
import Logo from '../../components/Logo';

import { navigate } from '@uni/apis';

export default function Cart() {

  const goToHomePage = () => {
    // 有问题
    history.push('/');

    // 没问题，但是整个页面会被重新渲染
    // navigate.push({
    //   url: '/',
    // }).then(() => {
    // });
  };

  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Cart Page</Text>
      <Text className={styles.homeInfo}>在web端下点击按钮回到首页，tab按钮不会变化，但是页面会回到首页。</Text>
      <Text className={styles.homeInfo} style={{ color: '#f00' }} onClick={goToHomePage}>暂时没有内容，点击去购买</Text>
    </View>
  );
}
