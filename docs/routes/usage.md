---
title: 使用
---

# 使用

`v-observe-visibility`指令很容易使用。只需传入一个函数:

```html
<div v-observe-visibility="visibilityChanged">
```

同样它也适用于组件

```html
<MyComponent v-observe-visibility="visibilityChanged" />
```

只要元素的可视性发生变化，且参数为布尔值(`true`表示该元素在页面上可见，`false`表示不可见)，就会调用该函数。

[IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)

第二个参数是对应的[IntersectionObserverEntry][IntersectionObserverEntry]对象。

```js
visibilityChanged (isVisible, entry) {
  this.isVisible = isVisible
  console.log(entry)
}
```

## IntersectionObserver 配置项

使用`intersection`属性可以传入[IntersectionObserver 配置项](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters)

```html
<div v-observe-visibility="{
  callback: visibilityChanged,
  intersection: {
    root: ...,
    rootMargin: ...,
    threshold: 0.3,
  },
}">
```

## Once

只掉元素显示在页面侦听一次有时候有特殊作用，比方说制作介绍动画。设置`once`为`true`:

```html
<div v-observe-visibility="{
  callback: visibilityChanged,
  once: true,
}">
```

## 节流

您可以使用`throttle`配置项(以毫秒为单位)指定事件将在其触发之后的最小状态持续时间。当您在滚动时跟踪了元素的可见性，但却不希望频繁地获取事件时，它很有用。

```html
<div v-observe-visibility="{
  callback: visibilityChanged,
  throttle: 300,
}">
```

您还可以在可见性第一次发生变化时通过`leading`配置项来触发回调，而无需等待节流延迟。它的值可以是`visibile`、`hidden`或`both`。

```html
<div v-observe-visibility="{
  callback: visibilityChanged,
  throttle: 300,
  throttleOptions: {
    leading: 'visible',
  },
}">
```

## 传入自定义参数

您可以使用中间函数添加自定义参数：

```html
<div v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, customArgument)">
```

这里的`visibilityChanged`调用时将会带着第三个参数`customArgument`。

## 禁用

向指令中传入假值(falsy)既可以禁用观察功能：

```html
<div
  v-for="(item, index) of items"
  :key="item.id"
  v-observe-visibility="index === items.length - 1 ? visibilityChanged : false"
>
```

