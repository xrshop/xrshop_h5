<template>
  <div class="news-details">
    <TitleBar title="商城新闻" canBack />
    <div class="news-cover" :style="{ 'background-image': `url(${detail.cover})` }"></div>
    <div class="article">
      <div class="title">{{ detail.title }}</div>
      <div class="row row-a">
        <span class="count">{{ detail.count }}阅读</span>
        <span class="time">{{ detail.time | dateFormat }}</span>
      </div>
      <div class="content" v-html="detail.content"></div>
    </div>
    <div class="recommend">
      <div class="recommend-title">推荐商品</div>
      <div class="list">
        <div class="cell" v-for="(cell, index) of recommendList" :key="index">
          <div class="cover" :style="{ 'background-image': `url(${cell.cover})` }"></div>
          <div class="right">
            <div class="title">{{ cell.title }}</div>
            <div class="count">{{ cell.count }}人买过</div>
            <Price :value="cell.price" />
            <div class="add-to-cart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */

export default {
  data() {
    return {
      detail: {
        type: '促销活动',
        count: 439904,
        time: 1584524337999,
        title: '耒小阳大量现摘新鲜蔬菜等大家来下单耒小阳大量现摘新鲜蔬菜等大家来下单',
        desc: '当季新鲜蔬菜',
        cover: require('@/assets/NewsList/cover.png'),
        content: `营养
蔬菜的营养物质主要包含矿物质、维生素、纤维等，这些物质的含量越高，蔬菜的营养价值也越高。此外，蔬菜中的水分和膳食纤维的含量也是重要的营养品质指标。通常，水分含量高、膳食纤维少的蔬菜鲜嫩度较好，其食用价值也较高。但从保健的角度来看，膳食纤维也是一种必不可少的营养素。蔬菜的营养素不可低估，1990年国际粮农组织统计人体必需的维生素C的90%、维生素A的60%均来自蔬菜，可见蔬菜对人类健康的贡献之巨大。此外，蔬菜中还有多种植物化学物质是被公认的对人体健康有益的成分，如类胡萝卜素、二丙烯化合物、甲基硫化合物等，许多蔬菜还含有独特的微量元素，对人体具有特殊的保健功效，如西红柿中的番茄红素、洋葱中的前列腺素等。
据估计，现今世界上有20多亿或更多的人受到环境污染而引起多种疾病，如何解决因环境污染产生大量氧自由基的问题日益受到人们关注。解决的有效办法之一，是在食物中增加抗氧化剂协同清除过多有破坏性的活性氧、活性氮。研究发现，蔬菜中有许多维生素、矿物质微量元素以及相关的植物化学物质、酶等都是有效抗氧化剂，所以蔬菜不仅是低糖、低盐、低脂的健康食物，同时还能有效的减轻环境污染对人体的损害，同时蔬菜还对各种疾病起预防作用。
十字花科甘蓝类蔬菜：如青花菜、花菜、甘蓝、叶甘蓝、芥兰等含有吲哚类（13C）萝卜硫素、异硫氰酸盐、类胡萝卜素、维生素C等，对防治肿瘤、心血管病有较好的作用，特别是青花菜。
芦笋含有丰富的谷胱甘肽、叶酸，对防止新生儿脑神经管缺损，防肿瘤有良好作用。
胡萝卜中含有丰富的类胡萝卜素及大量可溶性纤维素，有益于保护眼睛提高视力，可降低血胆固醇，可减少癌症与心血管病发病。
豆类中，如大豆、毛豆、黑豆等所含的类黄酮、异黄酮、蛋白酶抑制剂、肌醇、大豆皂苷、维生素B，对降低血胆固醇调节血糖，减低癌症发病及防治心血管、糖尿病有良好作用。
葱蒜类蔬菜，有丰富的二丙烯化合物，甲基硫化物等多种功能植物化学物质，有利于防治心血管疾病，常食可预防癌症，还有消炎杀菌等作用。
茄果类蔬菜，番茄中丰富的茄红素高抗氧化剂能抗氧化，降低前列腺癌及心血管疾病的发病。茄子中含有多种生物碱，有抑癌、降低血脂、杀菌、通便作用。辣椒、甜椒含丰富维生素、类胡萝卜素、辣椒多酚等，能增强血凝溶解，有天然阿司匹林之称。
芹菜
芹菜
芹菜是一二年生草本植物。芹菜中含有芹菜油，蛋白质，无机盐和丰富的维生素。除做蔬菜外，中医上还有止血，利尿，降血压等功能。
黄瓜所含的蛋白酶有助于人对蛋白质的吸收。
辣椒，又叫番椒、海椒、辣子、辣角、秦椒等，是一种茄科辣椒属植物。辣椒属为一年或多年生草本植物。果实通常成圆锥形或长圆形，未成熟时呈绿色，成熟後变成鲜红色、黄色或紫色，以红色最为常见。辣椒的果实因果皮含有辣椒素而有辣味。能增进食欲。辣椒中维生素C的含量在蔬菜中居第一位。小小一颗辣椒中，维生素A、B族维生素、维生素C、维生素E、维生素K、胡萝卜素、叶酸等维生素全都包括了。其次，辣椒中还含有钙和铁等矿物质以及膳食纤维。
根据相关国家的医学机构研究表明：人每天至少要食用1000克左右的蔬菜。`,
      },
      recommendList: [
        {
          cover:
            'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3065926364,1021269587&fm=26&gp=0.jpg',
          title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          count: 2223,
          price: 56.8,
        },
        {
          cover:
            'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3065926364,1021269587&fm=26&gp=0.jpg',
          title: '纯手工糯米糍糍粑手工年糕湖南地道特产',
          count: 2223,
          price: 12,
        },
      ],
    };
  },
  filters: {
    dateFormat(value) {
      return new Date(value).toISOString().slice(0, 10);
    },
    onlyInt(value) {
      return Math.trunc(value);
    },
    onlyFloat(value) {
      // return value - Math.trunc(value)
      const strArr = String(value).split('.');
      return strArr.length === 2 ? strArr[1].padEnd(2, '0') : '00';
    },
  },
};
</script>

<style lang="scss" scoped>
.news-details {
  background-color: #f5f5f5;
}
.news-cover {
  height: 50.4vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.article {
  margin-top: -11.87vw;
  background-color: #fff;
  border-radius: 4vw;
  padding: 0 5.47vw;
  overflow: hidden;
  .title {
    font-size: 4.8vw;
    font-weight: bold;
    line-height: 1.25;
    margin-top: 3.73vw - 4.8vw * 0.125;
  }
  // font-size - (line-height - 1)/2
  .row-a {
    font-size: 3.2vw;
    color: #bbb;
    margin-top: 3.47vw - 4.8vw * 0.125;
    .time {
      margin-left: 4.27vw;
    }
  }
  .content {
    margin-top: 7.87vw - 3.2vw * 0.5;
    margin-bottom: 8vw - 3.2vw * 0.5;
    font-size: 3.2vw;
    line-height: 2;
  }
}
.recommend {
  .recommend-title {
    font-size: 4vw;
    margin: 5.33vw 5.2vw 0;
  }
  .list {
    background-color: #fff;
    border-radius: 2vw;
    margin: 4.13vw 5.33vw 7.6vw;
    padding: 2vw 0;
    .cell {
      padding: 2vw 2.53vw;
      height: 26.67vw;
      position: relative;
      display: flex;
      .cover {
        // position: absolute;
        width: 26.67vw;
        height: 26.67vw;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 1vw;
        flex-shrink: 0;
      }
      .right {
        margin-left: 2.67vw;
        margin-right: 2.8vw;
      }
      .title {
        line-height: 5.2vw;
        font-size: 4vw;
      }
      .count {
        display: flex;
        align-items: center;
        width: max-content;
        height: 5.33vw;
        padding: 0 1.47vw;
        margin-top: 2.67vw - (5.2vw - 4vw) * 0.5;
        background-color: #f5f5f5;
        font-size: 3.2vw;
        border-radius: 5.33vw * 0.5;
      }
      .price {
        margin-top: 3.73vw;
        display: block;
      }
      .add-to-cart {
        position: absolute;
        right: 2.8vw;
        bottom: 1.73vw;
        width: 6.67vw;
        height: 6.67vw;
        background-image: url("~@/assets/NewsDetails/add-to-cart.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
