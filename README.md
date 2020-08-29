
vue-observe-visibility 中文文档

[中文文档](https://chinabigpan.github.io/vue-observe-visibility-docs-cn/)

[英文原地址](https://github.com/Akryum/vue-observe-visibility)

```bash
npm install --save vue-observe-visibility
```

[Intersection Observer API]:http://caniuse.com/#feat=intersectionobserver
[IO polyfill]:https://github.com/w3c/IntersectionObserver/tree/master/polyfill

**注意:**
这个插件使用的[Intersection Observer API][Intersection Observer API]并不是所有浏览器都支持的(目前Edge、Firefox和Chrome都支持)。您需要使用[polyfill][IO polyfill]使它在不兼容的浏览器能够正常工作。


## 引入

```js
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
```

或：

```js
import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)
```

## 浏览器

```js
<script src="vue.js"></script>
<script src="https://unpkg.com/vue-observe-visibility/dist/vue-observe-visibility.min.js"></script>
```

插件可以自动安装。如果没有，您可以按照下面的说明手动安装它。

加载指令。

```js
Vue.use(VueObserveVisibility)
```

使用特定指令：

```js
Vue.directive('observe-visibility', VueObserveVisibility.ObserveVisibility)
```