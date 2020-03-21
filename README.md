# shopcart-example

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```
### 商品页组件和购物车组件设计原则

1. 从功能上拆分层次，尽量让组件原子化(每个组件负责一个功能)。
2. 分容器组件和ui组件，容器组件负责数据，ui组件负责显示，从容器组件中拿到数据显示。

![8RNHaR.png](https://s1.ax1x.com/2020/03/21/8RNHaR.png)

总的来说Goods组件又分为两部分，用于展示商品列表的组件，购物车组件。

代码如下：
```JS
<div class="goods">
    <GoodList></GoodList>
    <ShopCart></ShopCart>
  </div>
```

由上述图片可以看到，购物车组件和商品列表组件中都有控制商品数量加减的按钮，我们可以将它抽象成一个组件，即cart-control组件。

```JS
 <CartControl :select-food="food"></CartControl>
```

**由于我使用了Vuex做状态管理，那么这几个组件中的容器组件就是Vuex了，其它组件则都是ui组件。遵从了数据设计的分层原则，并且每个组件只是负责自己的那一部分功能，遵从了组件设计的功能原则。**

以上主要设计过程是这样的:

1. GoodList组件发出请求后将数据拿到之后，将该数据存放到Vuex中，该组件进行渲染时，则从Vuex中的state拿数据进行渲染。
2. CartControl组件用于将商品加入到购物车中，可以添加删除等。GoodList组件中使用v-for渲染商品列表时将每个商品的信息传递给CartControl，表示被选中的商品。代码如下:

**注意**: CartContro组件添加删除商品时，不应该直接操控shop-cart中的数据，它只是负责展示，shop-cart也是一样，应该更改Vuex中的数据。

**Vuex存放一个字段用于保存已选择的商品信息** , **此后shop-cart中的商品展示数据则从上述字段中拿数据**，同样 **CartContro组件中显示的数量也一样**，还有购物车中的**总数量和总价等**，只要这几个需要展示的数据使用**计算属性**就可以了，**基于已选择的商品信息的那个字段**。

这样**每次修改数据**时，用于保存已选择的商品信息的那个字段就会发生变化，而shop-cart、cartcontrol等中的数据都是基于该数据的计算属性，只要这个**依赖**变化了，其它数据则都能发生变化。


即每次修改数据和获取数据都从Vuex中获取，即Vuex负责管理数据，shop-cart、cart-control、goodList组件只负责展示。这样数据的存放和展示清晰明了。

```JS
<div class="good-list-wrapper">
    <ul class="good-list">
      <li class="good-list-item" v-for="goods in goodList">
        <h5 class="title">
          {{goods.name}}
        </h5>
        <ul class="foods">
          <li v-for="food in goods.foods" class="food-wrapper">
            <div class="food">
              <div class="picture">
                <img :src="food.image" width="100" height="100">
              </div>
              <div class="content">
                <h5 class="name">{{food.name}}</h5>
                <span class="price">{{food.price}}元</span>
              </div>
              <div class="cart-control-wrapper">
                <CartControl :select-food="food"></CartControl>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
```

