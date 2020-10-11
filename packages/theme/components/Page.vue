<template>
  <main class="page">
    <!-- 路径导航 -->
    <MyTransition :key="`breadcrumb-${$route.path}`">
      <BreadCrumb />
    </MyTransition>

    <slot name="top" />

    <!-- 页面信息 -->
    <MyTransition
      v-if="commentEnable"
      :key="`pageinfo-${$route.path}`"
      :delay="0.04"
    >
      <PageInfo />
    </MyTransition>

    <!-- 页面密码 -->
    <MyTransition
      v-if="pagePassword && !pageDescrypted"
      :key="`password-${$route.path}`"
      :delay="0.08"
    >
      <Password :page="true" @password-verify="password = $event" />
    </MyTransition>

    <!-- 页面内容 -->
    <MyTransition v-show="!pagePassword || pageDescrypted" :delay="0.08">
      <Content :key="$route.path" class="theme-default-content" />
    </MyTransition>

    <!-- 编辑链接 -->
    <MyTransition
      v-if="!pagePassword || pageDescrypted"
      :key="`anchor-${$route.path}`"
      :delay="0.12"
    >
      <Anchor :header="headers" />
    </MyTransition>

    <!-- 编辑链接 -->
    <MyTransition v-if="!pagePassword || pageDescrypted" :delay="0.12">
      <PageEdit />
    </MyTransition>

    <!-- 页面导航 -->
    <MyTransition
      v-if="!pagePassword || pageDescrypted"
      :key="`edit-${$route.path}`"
      :delay="0.14"
    >
      <PageNav v-bind="{ sidebarItems }" />
    </MyTransition>

    <!-- 页面评论 -->
    <MyTransition
      v-if="(!pagePassword || pageDescrypted) && commentEnable"
      :delay="0.16"
    >
      <Comment :key="`comment-${$route.path}`" />
    </MyTransition>

    <!-- 页脚 -->
    <MyTransition :key="`footer-${$route.path}`" :delay="0.2">
      <PageFooter />
    </MyTransition>

    <slot name="bottom" />
  </main>
</template>

<script src="./Page" />

<style lang="stylus">
.page
  padding-bottom 2rem
  display block
  padding-left $sidebarWidth
  background-color var(--background-color)

  // narrow desktop / iPad
  @media (max-width $MQNarrow)
    padding-left $mobileSidebarWidth

  @media (min-width ($MQMobile + 1px))
    .theme-container.no-sidebar &
      padding-left 0

  // wide mobile
  @media (max-width $MQMobile)
    padding-left 0

  @media (min-width $MQWide)
    .has-anchor &
      padding-right 16rem
</style>
