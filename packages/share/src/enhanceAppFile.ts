/* eslint-disable max-lines-per-function */

/*
 * @Author: Mr.Hope
 * @Date: 2019-10-20 16:41:14
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2020-03-23 16:22:03
 * @Description: 分享插件主脚本
 */

import { EnhanceApp } from 'vuepress-types';
import Share from './Share.vue';

const enhanceApp: EnhanceApp = ({ Vue }) => {
  Vue.component('Share', Share);
};

export default enhanceApp;
