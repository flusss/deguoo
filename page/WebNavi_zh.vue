<template>
   
    <h2>德语学习:</h2>
    <el-row class="rowcol">
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.dwds.de/" target="_blank"><img src="/assets/dwds.png" class="weblogo" alt=""></a>
            <p>DWDS 权威德语词典 内容丰富，无广告，可以查询单词搭配，很实用</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://de.wiktionary.org/wiki/Wiktionary:Hauptseite" target="_blank" >
                <img src="/assets/wiki.png" class="weblogo" alt="">
            </a>
            <p>wiktionary 维基词典 权威发音，每个单词都值得反复听，循环听</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://de.forvo.com/" target="_blank" >
                <img src="/assets/forvo.png" class="weblogo" alt="">
            </a>
            <p>Forvo 全球最大发音库 比维基词典更全也可以提问，一般会有母语人士提供发音示范</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://de.howtopronounce.com/" target="_blank" >
                <img src="/assets/howtopronounce.jpg" class="weblogo" alt="">
            </a>
            <p>howtopronounce 发音库 没有维基词典和Forvo出名，但内容更加丰富</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.projekt-gutenberg.org/" target="_blank" >
                <img src="/assets/gutenberg_logo.jpg" class="weblogo" alt="">
            </a>
            <p>Gutenberg 谷腾堡德语版 不同于英语版的是，文本限制为可浏览的网页版，且作品有版权限制</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.gutefrage.net/" target="_blank" >
                <img src="/assets/gutefrage.jpg" class="weblogo" alt="">
            </a>
            <p>Gutefrage 德国知乎 内容比较古老，但仍然有效，提问一般有人回答</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://megadigital.bbaw.de/" target="_blank" >
                <img src="/assets/Karl_Marx.jpg" class="weblogo" alt="">
            </a>
            <p>Megadigital 马克思信件 马克思与恩格斯通信，有注释，适合德语高级学习者</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="http://tom.brondsted.dk/text2phoneme/" target="_blank" >
                <img src="/assets/brondsted.gif" class="weblogo" alt="">
            </a>
            <p>Brondsted IPA音标生成 一键把整段文字生成IPA音标</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="http://de.slovopedia.com/" target="_blank" >
                <img src="/assets/slovopedia.jpg" class="weblogo" alt="">
            </a>
            <p>Slovopedia 在线词典 有德语各大工具词典的在线版本。原始网站为俄语，应该是俄罗斯人开发的</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.ids-mannheim.de/" target="_blank" >
                <img src="/assets/IDS_Mannheim.png" class="weblogo" alt="">
            </a>
            <p>ids-mannheim 词典可视化 词汇分支可视化词典</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://deutschwortschatz.de/" target="_blank" >
                <img src="/assets/deutschwortschatz.png" class="weblogo" alt="">
            </a>
            <p>Deutschwortschatz 专门收集美好的单词</p>
        </el-col>
    </el-row>
    <h2>Nachrichten</h2>
    <el-row class="rowcol">
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.ard.de/" target="_blank" >
                <img src="/assets/ard.svg" class="weblogo" alt="">
            </a>
            <p>ARD 德国电视一台 德国广播电视联合会，由九个州立广播公司联合组成，简称“德广联”</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.zdf.de/" target="_blank" >
                <img src="/assets/ZDF.png" class="weblogo" alt="">
            </a>
            <p>ZDF 德国电视二台 内容比起 ARD 更贴近生活，更适合德语学习者</p>
        </el-col>
    </el-row>
    <el-row class="rowcol">
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.t-online.de/" target="_blank" >
                <img src="/assets/telekom.svg" class="weblogo" alt="">
            </a>
            <p>T-online t-在线 德国门户网站，访问量全德第一。排版像雅虎，让人误以为电脑中毒</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.bild.de/" target="_blank" >
                <img src="/assets/BILD.png" class="weblogo" alt="">
            </a>
            <p>Bild 图片报 各种标题党，花边新闻，访问量全德第二</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.spiegel.de/" target="_blank" >
                <img src="/assets/spiegel.jpg" class="weblogo" alt="">
            </a>
            <p>Spiegel 明镜周刊 时政类新闻，充满批判性，喜欢关注中国</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.n-tv.de/" target="_blank" >
                <img src="/assets/N-tv-Logo.png" class="weblogo" alt="">
            </a>
            <p>NTV 实时新闻，类似于 CNN，实际上 NTV 的成立就有 CNN 的参与</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.zeit.de/index" target="_blank" >
                <img src="/assets/zeit.jpg" class="weblogo" alt="">
            </a>
            <p>Zeit 文字内容最为丰富的网站，时评相关，立场比较自由</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.tagesschau.de/" target="_blank" >
                <img src="/assets/Tagesschau.png" class="weblogo" alt="">
            </a>
            <p>Tagesschau 不同于其他文字类网站，Tagesschau 隶属于 ARD，经费来自广播费，无广告</p>
        </el-col>
    </el-row>
    <h2>Online-Einkauf</h2>
    <el-row class="rowcol">
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.amazon.de/" target="_blank" >
                <img src="/assets/Amazon_logo.svg" class="weblogo" alt="">
            </a>
            <p>Amazon 亚马逊 最大购物平台，退货方便</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.ebay.de/" target="_blank" >
                <img src="/assets/EBay_logo.png" class="weblogo" alt="">
            </a>
            <p>Ebay 第二大购物平台，有 “拍卖“ 等独有功能</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.idealo.de/" target="_blank" >
                <img src="/assets/Idealo_logo.png" class="weblogo" alt="">
            </a>
            <p>Idealo 比价网站</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.mydealz.de/" target="_blank" >
                <img src="/assets/mydealz_logo.jpg" class="weblogo" alt="">
            </a>
            <p>Mydealz 打折信息汇集</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.kleinanzeigen.de/" target="_blank" >
                <img src="/assets/kleinanzeigen_logo.png" class="weblogo" alt="">
            </a>
            <p>Kleinanzeigen Ebay旗下，老牌二手平台</p>
        </el-col>
    </el-row>
    <h2>Discounter/Drogeriemarkt/Lieferservice</h2>
    <el-row class="rowcol">
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.lidl.de/" target="_blank" >
                <img src="/assets/Lidl-Logo.png" class="weblogo" alt="">
            </a>
            <p>Lidl 便宜，店面整齐，隶属于施瓦茨集团</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.kaufland.de/" target="_blank" >
                <img src="/assets/Kaufland_logo.png" class="weblogo" alt="">
            </a>
            <p>Kaufland 便宜，店面整齐，同 Lidl 隶属于施瓦茨集团</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.edeka.de/" target="_blank" >
                <img src="/assets/Edeka_logo.png" class="weblogo" alt="">
            </a>
            <p>Edeka 不属于平价超市，定位高于其他品牌</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.netto-online.de/" target="_blank" >
                <img src="/assets/Netto_logo.png" class="weblogo" alt="">
            </a>
            <p>Netto 便宜，凌乱，Edeka 的平价版</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <div class="aldilogo">
                    <a href="https://www.aldi-nord.de/" target="_blank" >
                    <img src="/assets/ALDI_Nord_Logo.png" class="weblogo" alt="">
                </a>
                <a href="https://www.aldi-sued.de/" target="_blank" >
                    <img src="/assets/ALDI_Sued_logo.png" class="weblogo" alt="">
                </a>
            </div>
            
            <p>Aldi Nord und Süd 德国食品价格的风向标，便宜，货物有些凌乱</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="" target="_blank" >
                <img src="/assets/REWE_logo.png" class="weblogo" alt="">
            </a>
            <p>Rewe 喜欢请足球明星代言</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.rewe.de/" target="_blank" >
                <img src="/assets/Penny_Logo.png" class="weblogo" alt="">
            </a>
            <p>Penny 饮料品种有特色，Rewe 的平价版</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.dm.de/" target="_blank" >
                <img src="/assets/Dm_logo.png" class="weblogo" alt="">
            </a>
            <p>dm 药妆百货 店面设计风格明快，前些年留学生流行买它家的产品回国送礼。可以支付宝支付</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.rossmann.de/de/" target="_blank" >
                <img src="/assets/Rossmann_Logo.png" class="weblogo" alt="">
            </a>
            <p>Rossmann 药妆百货 比起 dm 整体色调更暗，德国第一家支持支付宝付款的大型连锁店</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.lieferando.de/" target="_blank" >
                <img src="/assets/lifernado_logo.png" class="weblogo" alt="">
            </a>
            <p>Lieferando 外卖 德国外卖领域开创者，2014 年被荷兰公司 Just Eat Takeaway 收购</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://gorillas.io/de" target="_blank" >
                <img src="/assets/Gorillas_logo.png" class="weblogo" alt="">
            </a>
            <p>Gorillas 大猩猩外卖 2020 才成立，近期疯狂补贴和扩张</p>
        </el-col>
    </el-row>
    <h2>Reisen</h2>
    <el-row class="rowcol">
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.deutschebahn.com/de" target="_blank" >
                <img src="/assets/Deutsche_Bahn_Logo.png" class="weblogo" alt="">
            </a>
            <p>Deutsche Bahn 德铁 长途旅程提前两周预定便宜很多 今年晚点成为常态</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.google.com/travel/flights?hl=de" target="_blank" >
                <img src="/assets/Google_Flights_logo.png" class="weblogo" alt="">
            </a>
            <p>Google Flüge 汇集各大机票网站，快速查询最低价机票
</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.flixbus.de/" target="_blank" >
                <img src="/assets/Flixbus_logo.png" class="weblogo" alt="">
            </a>
            <p>Flixbus 比德铁便宜很多，当然旅途时间会更长</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://de.omio.com/" target="_blank" >
                <img src="/assets/OMIO_logo.png" class="weblogo" alt="">
            </a>
            <p>Omio 交通搜索引擎和预定平台，除德铁外的交通信息</p>
        </el-col>
    </el-row>
    <h2>Städte</h2>
    <el-row class="rowcol">
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.gelbeseiten.de/" target="_blank" >
                <img src="/assets/Gelbe-Seiten_Logo.png" class="weblogo" alt="">
            </a>
            <p>Gelbeseiten 德国黄页 快速获取各个城市的各种机构，法律，医疗，住宿等，可以用谷歌地图替代</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.meinestadt.de/" target="_blank" >
                <img src="/assets/Meinestadt_logo.png" class="weblogo" alt="">
            </a>
            <p>Meinestadt 城市导航 快速浏览各个城市信息</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.yelp.de/" target="_blank" >
                <img src="/assets/Yelp_Logo.png" class="weblogo" alt="">
            </a>
            <p>Yelp 德国版大众点评 餐厅评分，可以和谷歌地图比较</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.berlin.de/" target="_blank" >
                <img src="/assets/berlin_logo.png" class="weblogo" alt="">
            </a>
            <p>Berlin 柏林 第一大城市，崭新的废墟。城市可见大门紧闭的废旧建筑，但交通工具很干净</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.hamburg.de/" target="_blank" >
                <img src="/assets/Hamburg_logo.png" class="weblogo" alt="">
            </a>
            <p>Hamburg 汉堡 第二大城市，红砖配运河，港口配海鸥</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.muenchen.de/" target="_blank" >
                <img src="/assets/München_logo.png" class="weblogo" alt="">
            </a>
            <p>München 慕尼黑 第三大城市，外国人终点站，地位相当于上海＋深圳</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.koeln.de/" target="_blank" >
                <img src="/assets/Koeln_logo.png" class="weblogo" alt="">
            </a>
            <p>Köln 科隆 狂欢才是常态</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://frankfurt.de/" target="_blank" >
                <img src="/assets/Frankfurt_logo.png" class="weblogo" alt="">
            </a>
            <p>Frankfurt 法兰克福 金融之城</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.stuttgart.de/" target="_blank" >
                <img src="/assets/Stuttgart_logo.png" class="weblogo" alt="">
            </a>
            <p>Stuttgart 斯图加特 山城，地位相当于重庆</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.duesseldorf.de/" target="_blank" >
                <img src="/assets/Düsseldorf_logo.png" class="weblogo" alt="">
            </a>
            <p>Düsseldorf 杜塞尔多夫 日本城 日本人  在德国唯一不需要学德语的群体</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.leipzig.de/" target="_blank" >
                <img src="/assets/Leipzig_logo.png" class="weblogo" alt="">
            </a>
            <p>Leipzig 莱比锡 学生之城，城市由古迹和学生宿舍组成</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.dortmund.de/" target="_blank" >
                <img src="/assets/Dortmund_logo.png" class="weblogo" alt="">
            </a>
            <p>Dortmund 多特蒙特 足球流氓，暴力犯罪</p>
        </el-col>
        <el-col :xl="6" :lg="8" :md="12" :xs="24">
            <a href="https://www.essen.de/aktuell.de.html" target="_blank" >
                <img src="/assets/Essen_logo.png" class="weblogo" alt="">
            </a>
            <p>Essen 埃森 留德华第一站</p>
        </el-col>
    </el-row>
    
        
    <!-- <el-button>默认按钮2</el-button> -->
    <!-- <el-col :span="18"  :xl="6" :lg="8" :md="12"::xs="12"> -->
 
 
</template>
  
  <script setup>
    
     import { ElButton, ElRow, ElCol } from 'element-plus';
     const components = { ElRow, ElCol, ElButton };
  </script>

<style scoped>
.rowcol {
    display: flex;
    justify-content:left
}
.weblogo{
    width: auto;
    height: 1.5625rem;
    margin-right: .625rem; 
}
* {
    margin: 0;
    padding: 0;
}
p {
    max-width: calc(100% - .625rem);
    margin: .625rem .625rem .625rem 0;
    padding: 0; 
}
h2{
    padding-bottom: 1.25rem;
}

.aldilogo {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-right: 40px;
}

</style>