import { Context, PluginOptionAPI } from 'vuepress-types';
import { ShareOption } from '../types';
import { deepAssign } from '@mr-hope/vuepress-shared-utils';
import { resolve } from 'path';

export = (options: ShareOption, { themeConfig }: Context): PluginOptionAPI => {
  /** 默认配置 */
  const defaultShareConfig: ShareOption = {
    content: ['qq', 'weibo'],
    fallbackImage: '/logo.png',
    autoQuote: true
  };
  const shareOption = deepAssign(
    defaultShareConfig,
    themeConfig.share || {},
    options
  );

  const config: PluginOptionAPI = {
    name: 'share',

    define: {
      SHARE_OPTION: shareOption
    } as Record<string, any>,

    enhanceAppFiles: resolve(__dirname, './enhanceAppFile.ts'),

    globalUIComponents: 'Share'
  };

  return config;
};
