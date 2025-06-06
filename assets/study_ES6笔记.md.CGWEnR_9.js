import{_ as s,c as a,o as n,a4 as i}from"./chunks/framework.D1FvBl6c.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/ES6笔记.md","filePath":"study/ES6笔记.md","lastUpdated":null}'),p={name:"study/ES6笔记.md"},l=i(`<p>var的特点：变量声明提升，函数作用域，可重复声明，全局 1.在 JavaScript 中，使用 var 声明的变量会被提升到当前作用域的顶部，但赋值不会提升。 2.变量在函数内部有效，而不是块级作用域</p><blockquote><p><code>var</code>命令会发生“变量提升”现象，即变量可以在声明之前使用，值为<code>undefined</code></p></blockquote><p>let声明的变量只在花括号包起来的代码块生效，for循环的循环变量i，就很适合let命令。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 6</span></span></code></pre></div><blockquote><p>首先，代码使用var命令声明了一个空数组a，它的作用域是全局的。然后有一个for循环，var声明循环变量i从0开始，直到i小于10，每次递增i。在每次循环中，给数组a的第i项赋值为一个函数，这个函数内部会打印i的值。最后调用a，结果是10</p></blockquote><blockquote><ol><li><strong><code>let</code>的块级作用域</strong>： 使用<code>let</code>声明循环变量<code>i</code>时，每次迭代都会创建一个​<strong>​新的块级作用域​</strong>​。每个迭代中的<code>i</code>都是独立的，闭包（函数）会捕获​<strong>​当前迭代的<code>i</code>值​</strong>​。</li><li><strong>闭包的行为</strong>： 数组<code>a</code>中的每个函数都形成了一个闭包，保存了对应迭代时的<code>i</code>。调用<code>a[6]()</code>时，函数访问的是第6次迭代时的<code>i</code>（值为6）。</li><li><strong>对比<code>var</code>的情况</strong>： 如果使用<code>var</code>，由于没有块级作用域，所有闭包会共享同一个全局变量<code>i</code>。循环结束后<code>i</code>的值为10，所以所有函数调用都会输出10</li></ol></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for循环使用let声明i时，会为每次迭代创建一个新的独立的块作用域，i的值被保留在闭包中。</span></span>
<span class="line"><span>for循环使用var声明i时，i是同一个变量，没有新的作用域被创建，所以所有闭包都引用了同一个i</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for (let i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>  let i = &#39;abc&#39;;</span></span>
<span class="line"><span>  console.log(i);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(i);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// abc</span></span>
<span class="line"><span>// abc</span></span>
<span class="line"><span>// abc</span></span>
<span class="line"><span>// 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>  var i = &#39;abc&#39;;</span></span>
<span class="line"><span>  console.log(i);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(i);</span></span>
<span class="line"><span>// var存在变量提升</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SyntaxError: Identifier &#39;i&#39; has already been declared</span></span></code></pre></div><h3 id="查漏补缺" tabindex="-1">查漏补缺 <a class="header-anchor" href="#查漏补缺" aria-label="Permalink to &quot;查漏补缺&quot;">​</a></h3><blockquote><p>参数就是函数的输入值 函数接收输入，返回输出，是用来执行特定功能的代码块。</p></blockquote><blockquote><p>**匿名函数：**是指一种没有名称的函数，由于它们没有名称，因此无法直接通过函数名来调用，而是通过变量或表达式来调用。</p><p>匿名函数定义可以通过两种方式：函数表达式 和 箭头函数。</p><p>箭头函数的基本语法规则。当函数体只有一条表达式时，可以省略大括号和return关键字，直接返回表达式的结果。而如果使用了大括号，就必须显式地使用return，否则函数返回undefined。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 1.函数表达式</span></span>
<span class="line"><span>let add = function (a,b){</span></span>
<span class="line"><span>    return a + b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 2.箭头函数</span></span>
<span class="line"><span>// const add = (a, b) =&gt; a + b</span></span>
<span class="line"><span>// const add = (a, b) =&gt; { </span></span>
<span class="line"><span>	return a + b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用函数或者说执行函数</span></span>
<span class="line"><span>let result = add(10,20);</span></span>
<span class="line"><span>alert(result);</span></span></code></pre></div><blockquote><p>首先，用户的问题是关于使用 const 声明箭头函数add，然后调用它是否合法。用户可能认为，既然 const 定义的变量不能被重新赋值，那么函数调用是否算作改变了变量，从而引发错误。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const add = (a, b) =&gt; a + b;  // add 指向箭头函数的内存地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ✅ 合法操作（没有改变 add 的指向）</span></span>
<span class="line"><span>add(10, 20);    // 调用函数（操作的是函数内容）</span></span>
<span class="line"><span>add.toString(); // 读取函数属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ❌ 非法操作（试图改变 add 的绑定）</span></span>
<span class="line"><span>add = 123;      // 报错：Assignment to constant variable</span></span></code></pre></div><blockquote><p>操作本质​​：调用函数属于 ​​使用值的操作​​，不是 ​​改变变量绑定​</p></blockquote><blockquote><p><strong><code>const</code> 的核心特性</strong>：<strong>绑定不可变，但值可以改变</strong>（针对引用类型）。</p><ul><li><strong>不可重新赋值</strong>：用 <code>const</code> 声明的变量 <strong>不能被重新指向其他内存地址</strong></li><li><strong>可修改内容</strong>：如果 <code>const</code> 变量指向的是 <strong>对象/函数/数组等引用类型</strong>，其 <strong>内部属性或内容可以修改</strong></li></ul></blockquote><details><summary>查看答案</summary> 我是答案1 我是答案2 我是代码块1 </details><details><summary>我是展开细节标题</summary><code>console.log(&quot;Hello world!&quot;)</code></details>`,18),e=[l];function t(h,o,k,c,d,r){return n(),a("div",null,e)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
