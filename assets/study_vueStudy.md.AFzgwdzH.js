import{_ as n,c as s,o as a,a4 as p}from"./chunks/framework.D1FvBl6c.js";const m=JSON.parse('{"title":"吾尝终日而思矣，不如须臾之所学也","description":"","frontmatter":{},"headers":[],"relativePath":"study/vueStudy.md","filePath":"study/vueStudy.md","lastUpdated":null}'),t={name:"study/vueStudy.md"},l=p(`<h1 id="吾尝终日而思矣-不如须臾之所学也" tabindex="-1">吾尝终日而思矣，不如须臾之所学也 <a class="header-anchor" href="#吾尝终日而思矣-不如须臾之所学也" aria-label="Permalink to &quot;吾尝终日而思矣，不如须臾之所学也&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Vue核心语法学习代码&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;style&gt;&lt;/style&gt;</span></span>
<span class="line"><span>    &lt;!-- &lt;div id=&quot;box&quot;&gt;&lt;/div&gt; --&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 插值表达式进行渲染 --&gt;</span></span>
<span class="line"><span>      &lt;p&gt;message:{{message}}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;title:{{title}}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;content:{{content}}&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- methods方法 --&gt;</span></span>
<span class="line"><span>      &lt;p&gt;{{output()}}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;{{output()}}&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- computed计算属性 --&gt;</span></span>
<span class="line"><span>      &lt;p&gt;{{outputContent}}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p&gt;{{outputContent}}&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- 指令 --&gt;</span></span>
<span class="line"><span>      &lt;!-- 内容指令 --&gt;</span></span>
<span class="line"><span>      &lt;!-- v-text 渲染纯文本数据 类似js中textContent--&gt;</span></span>
<span class="line"><span>      &lt;!-- v-html 渲染html语句数据 类似js中innerHtml--&gt;</span></span>
<span class="line"><span>      &lt;!-- 都会覆盖标签原始内容 --&gt;</span></span>
<span class="line"><span>      &lt;p v-text=&quot;htmlContent&quot;&gt;123&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p v-html=&quot;htmlContent&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- 渲染指令 --&gt;</span></span>
<span class="line"><span>      &lt;!-- v-for for循环 渲染重复数据 --&gt;</span></span>
<span class="line"><span>      &lt;!-- 值，键，索引 数组里面key相当于索引index--&gt;</span></span>
<span class="line"><span>      &lt;!-- &lt;p v-for=&quot;item in a&quot;&gt;重复数据{{item}}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p v-for=&quot;(item,key) in arr&quot;&gt;示例数组数据：{{item}},索引：{{key}}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p v-for=&quot;(item,key,index) in obj&quot;&gt;示例对象数据：{{item}},键：{{key}},索引：{{index}}&lt;/p&gt; --&gt;</span></span>
<span class="line"><span>      &lt;!-- v-if 判断元素是否创建或销毁 一次显示隐藏 --&gt;</span></span>
<span class="line"><span>      &lt;p v-if=&quot;true&quot;&gt;创建指令v-if内容&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p v-if=&quot;false&quot;&gt;销毁指令v-if内容&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;!-- v-show 控制元素的显示与隐藏 多次显示隐藏 实际效果为增加style样式display:none --&gt;</span></span>
<span class="line"><span>      &lt;p v-show=&quot;isShow&quot;&gt;指令v-show内容&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- 属性指令 --&gt;</span></span>
<span class="line"><span>      &lt;!-- v-bind 属性绑定指令 可以简写仅保留: --&gt;</span></span>
<span class="line"><span>      &lt;p v-bind:title=&quot;title&quot;&gt;v-bind文本内容&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;p :title=&quot;title&quot;&gt;v-bind文本内容&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- 事件指令 --&gt;</span></span>
<span class="line"><span>      &lt;!-- v-on 事件绑定指令可以简写为@ --&gt;</span></span>
<span class="line"><span>      &lt;button v-on:click=&quot;btn1&quot;&gt;这是改变按钮&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;btn2&quot;&gt;这是恢复按钮&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- 表单指令 --&gt;</span></span>
<span class="line"><span>      &lt;!-- 之前仅有数据修改，界面（视图）更新的单向绑定 --&gt;</span></span>
<span class="line"><span>      &lt;!-- v-model 实现表单数据的双向绑定 数据与视图双向绑定更新--&gt;</span></span>
<span class="line"><span>      &lt;!-- 开始时显示默认内容，数据更新到视图 --&gt;</span></span>
<span class="line"><span>      &lt;!-- 随后在input输入框修改数据，界面修改，数据也会随之更新--&gt;</span></span>
<span class="line"><span>      &lt;!-- 比如输入框输入默认内容111 p标签的显示的数据内容也会改变 --&gt;</span></span>
<span class="line"><span>      &lt;p&gt;--------换行-------&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; v-model=&quot;inputValue&quot;&gt;</span></span>
<span class="line"><span>      &lt;p v-text=&quot;inputValue&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;!-- 修饰符  --&gt;</span></span>
<span class="line"><span>      &lt;!-- 实现与指令相关的常用操作 --&gt;</span></span>
<span class="line"><span>      &lt;!-- .trim 去除内容两端空格的字符串方法 --&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; v-model.trim=&quot;inputValue&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;js/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      /*  let value = &#39;这是内容&#39;</span></span>
<span class="line"><span>        document.getElementById(&#39;box&#39;).textContent = value</span></span>
<span class="line"><span>        value=&#39;新内容&#39;</span></span>
<span class="line"><span>        document.getElementById(&#39;box&#39;).textContent = value */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //原生js中，进行数据修改时，需要进行的数据逻辑处理也就是重新赋值</span></span>
<span class="line"><span>      //界面也需要手动改变，需要进行dom操作来渲染数据</span></span>
<span class="line"><span>      //这样比较繁琐，vue提供内置代码简化dom操作</span></span>
<span class="line"><span>      //实现数据与界面分离  响应式  数据改变,界面即时更新数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //构造函数 创建vue实例 配置参数列表属性</span></span>
<span class="line"><span>      const vm = new Vue({</span></span>
<span class="line"><span>        // 1.选择vue实例生效范围 如id为app的div容器</span></span>
<span class="line"><span>        el: &#39;#app&#39;,</span></span>
<span class="line"><span>        // 2.声明响应式数据统一管理，然后利用插值表达式进行渲染</span></span>
<span class="line"><span>        data() {</span></span>
<span class="line"><span>          return{</span></span>
<span class="line"><span>            message: &quot;hello world&quot;,</span></span>
<span class="line"><span>            title:&#39;这是标题文本&#39;,</span></span>
<span class="line"><span>            content:&#39;这是内容文本&#39;,</span></span>
<span class="line"><span>            htmlContent:&#39;这是&lt;span&gt;span&lt;/span&gt;标签&#39;,</span></span>
<span class="line"><span>            a:[&#39;1&#39;,&#39;2&#39;,&#39;3&#39;],</span></span>
<span class="line"><span>            arr:[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;],</span></span>
<span class="line"><span>            obj:{a:10,b:20,c:30},</span></span>
<span class="line"><span>            isShow:true,</span></span>
<span class="line"><span>            inputValue:&#39;默认内容&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 3.编写函数或方法 封装复杂的逻辑代码</span></span>
<span class="line"><span>        methods: {</span></span>
<span class="line"><span>          btn1() {</span></span>
<span class="line"><span>            this.message = &quot;Hello World&quot;;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          btn2() {</span></span>
<span class="line"><span>            this.message = &quot;hello world&quot;;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          output(){</span></span>
<span class="line"><span>            console.log(&quot;执行了methods&quot;);</span></span>
<span class="line"><span>            return &#39;标题为：&#39; + this.title + &#39;,&#39;+&#39;内容为：&#39; + this.content</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 4.计算属性，具有缓存性，结果不变，不做重复计算，优化性能，渲染时不加括号</span></span>
<span class="line"><span>        computed:{</span></span>
<span class="line"><span>          outputContent(){</span></span>
<span class="line"><span>            console.log(&quot;执行了computed&quot;);</span></span>
<span class="line"><span>            return &#39;标题为：&#39; + this.title + &#39;,&#39;+&#39;内容为：&#39; + this.content</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 5.侦听器watch 数据修改时，除了页面更新以外，实现进行其他的操作</span></span>
<span class="line"><span>        watch:{</span></span>
<span class="line"><span>          title(newValue,oldValue){</span></span>
<span class="line"><span>            console.log(newValue,oldValue);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,2),e=[l];function i(c,o,u,g,d,q){return a(),s("div",null,e)}const v=n(t,[["render",i]]);export{m as __pageData,v as default};
