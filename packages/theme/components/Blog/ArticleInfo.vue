<template>
  <div v-if="author || time" class="article-info">
    <!-- Author -->
    <span v-if="author" :aria-label="authorText" data-balloon-pos="down">
      <AuthorIcon />
      <span v-text="author" />
    </span>

    <!-- Writing Date -->
    <span
      v-if="time"
      class="time"
      :aria-label="timeText"
      data-balloon-pos="down"
    >
      <CalendarIcon />
      <span v-text="time" />
    </span>

    <CategoryInfo
      v-if="article.frontmatter.category"
      :category="article.frontmatter.category"
    />

    <TagInfo v-if="tags.length !== 0" :tags="tags" />

    <!-- Reading time -->
    <span
      v-if="readtime"
      class="read-time-info"
      :aria-label="readingTimeText"
      data-balloon-pos="down"
    >
      <TimeIcon />
      <span v-text="readtime" />
    </span>
  </div>
</template>

<script src="./ArticleInfo" />

<style lang="stylus">
$articleInfoTextSize ?= 14px

.article-info
  color var(--dark-grey)
  font-size $articleInfoTextSize
  font-family Arial, Helvetica, sans-serif

  & > span
    display inline-block
    margin-right 0.5em
    line-height 1.8

    @media (max-width $MQMobileNarrow)
      margin-right 0.3em
      font-size 0.86rem

    svg
      position relative
      bottom -0.125em

    .tags-wrapper
      display inline-block

  .icon
    width 1em
    height 1em
</style>
