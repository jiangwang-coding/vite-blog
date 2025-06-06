import{_ as n,c as a,a as p,a4 as s,o as e}from"./chunks/framework.D1FvBl6c.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"study/JS闭包.md","filePath":"study/JS闭包.md","lastUpdated":null}'),l={name:"study/JS闭包.md"},t=s(`<p>我来为这段代码逐行添加通俗易懂的中文注释，并用 🚀 符号标记闭包相关的关键点：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 定义外层函数 makeFunc</span></span>
<span class="line"><span>function makeFunc() {</span></span>
<span class="line"><span>  // 创建局部变量 name，这个变量将成为闭包的一部分 🚀</span></span>
<span class="line"><span>  const name = &quot;Mozilla&quot;; // 🚀 即使外层函数执行完毕，这个变量也不会被销毁</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 定义内部函数 displayName</span></span>
<span class="line"><span>  function displayName() {</span></span>
<span class="line"><span>    // 这里能访问到外层函数的 name 变量 🚀</span></span>
<span class="line"><span>    console.log(name); // 🚀 关键点：内部函数引用了外部变量，形成闭包</span></span>
<span class="line"><span>// 返回内部函数（尚未执行），此时闭包已经形成 🚀</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return displayName; // 🚀 闭包会&quot;记住&quot; name 变量</span></span>
<span class="line"><span>// 调用 makeFunc()，此时：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 创建 name 变量</span></span>
<span class="line"><span>// 2. 创建 displayName 函数</span></span>
<span class="line"><span>// 3. 返回 displayName 函数（带着闭包）</span></span>
<span class="line"><span>const myFunc = makeFunc(); // 🚀 注意：此时 makeFunc 的执行上下文已经结束</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用返回的函数，依然能访问到 name 变量</span></span>
<span class="line"><span>myFunc(); // 输出 &quot;Mozilla&quot; 🚀 证明闭包成功保持了变量访问</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>关键点注释说明：<br> 🚀 标记了所有与闭包形成相关的代码位置</p><p>即使外层函数执行完毕，内部函数依然保持对变量的访问</p><p>闭包的形成是自动的，只需要满足函数嵌套 + 内部函数使用外部变量 + 内部函数被导出这三个条件</p><hr>`,6),c=s(`<p><strong>闭包背包示意图</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>myFunc = {</span></span>
<span class="line"><span>  function: displayName,</span></span>
<span class="line"><span>  closure: {</span></span>
<span class="line"><span>    name: &quot;Mozilla&quot; 👈 这就是闭包保存的变量</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="工厂函数的特点" tabindex="-1">工厂函数的特点： <a class="header-anchor" href="#工厂函数的特点" aria-label="Permalink to &quot;工厂函数的特点：&quot;">​</a></h3><ol><li><strong>封装创建过程</strong> 把复杂的创建逻辑（比如闭包变量的初始化）隐藏在函数内部，使用者只需要简单调用。</li><li><strong>独立闭包环境</strong> 每次调用工厂函数都会生成一个全新的闭包环境（比如每次调用 <code>makeFunc()</code> 都会创建新的 <code>name</code> 变量）。</li><li><strong>避免重复代码</strong> 如果你需要创建多个类似的函数/对象，不需要每次都重写闭包逻辑。</li></ol>`,4);function i(o,d,r,u,_,m){return e(),a("div",null,[t,p(" `const`声明的作用，即`myFunc`作为一个常量，存储的是函数的引用，而不是函数本身， "),c])}const y=n(l,[["render",i]]);export{g as __pageData,y as default};
