<template>
  <main class="phone-shell">
    <section class="hero">
      <div class="brand-row">
        <div class="logo-mark">♨</div>
        <div class="brand-text">厨神</div>
        <div class="top-actions">
          <button class="mini-action"><span>☑</span><b>签到</b></button>
          <button class="mini-action notice"><span>💬</span><b>消息</b></button>
        </div>
      </div>

      <div class="title-block">
        <h1>做什么，今天更好吃？☺</h1>
        <p>让灵感来敲门，今晚不再纠结！</p>
      </div>

      <div class="hero-illustration">
        <div class="chef-bubble">交给灵感吧！</div>
        <div class="chef-girl"><span>👩‍🍳</span></div>
        <i class="float tomato">🍅</i>
        <i class="float leaf">🌿</i>
        <i class="float spoon">🥄</i>
      </div>
    </section>

    <section class="fridge-panel card">
      <div class="fridge">
        <div class="shelf top"><span>🥚</span><span>🍄</span><span>🥬</span></div>
        <div class="shelf middle"><span>🍅</span><span>🍋</span><span>🥕</span><span>🥒</span></div>
        <div class="shelf bottom"><span>🥦</span><span>🫑</span><span>🥗</span></div>
        <div class="fridge-note">冰箱里有什么？<br />智能识别推荐</div>
        <button class="camera-btn">📷 拍一拍</button>
      </div>

      <div class="ingredient-area">
        <h2>根据你常备的食材，智能推荐美味菜谱</h2>
        <div class="ingredient-list">
          <button v-for="item in ingredients" :key="item.name" class="ingredient-card">
            <span>{{ item.icon }}</span><b>{{ item.name }}</b>
          </button>
          <button class="ingredient-card add-card"><span>＋</span><b>更多</b></button>
        </div>
        <h3>想吃什么风味？</h3>
        <div class="taste-list">
          <button v-for="taste in tastes" :key="taste" :class="['taste-pill', { active: taste === '下饭' }]">{{ taste }}</button>
          <button class="taste-pill">更多⌄</button>
        </div>
      </div>
    </section>

    <section class="ai-card card">
      <div class="section-head">
        <div><h2>AI 智能推荐 ✨</h2><p>为你量身定制的美味灵感</p></div>
        <button>换一批 ↻</button>
      </div>
      <div class="ai-tags">
        <div v-for="tag in aiTags" :key="tag.title" class="ai-tag">
          <span>{{ tag.icon }}</span>
          <div><b>{{ tag.title }}</b><small>{{ tag.desc }}</small></div>
        </div>
      </div>
    </section>

    <section class="spin-card card">
      <div class="spin-copy">
        <h2>灵感转盘</h2>
        <p>转一转，发现惊喜美味 ✨</p>
        <button>转动转盘 ›</button>
        <small>今日剩余 3 次</small>
      </div>
      <div class="dish-wheel">
        <div class="dish-label top">番茄炖牛腩</div>
        <div class="dish-label right">酸辣土豆丝</div>
        <div class="dish-label bottom-left">香煎鸡胸肉</div>
        <div class="dish-label bottom-right">清炒时蔬</div>
        <div class="pin">📍</div>
        <div class="main-dish"><span>🍤🥦</span><b>蒜蓉虾仁西兰花</b></div>
      </div>
      <div class="paper-note">换个组合<br />也很美味哦~ ☺</div>
    </section>

    <section class="picked-section">
      <div class="picked-title"><h2>为你精选 3 道灵感菜 ♡</h2><a>更多推荐 ›</a></div>
      <div class="recipe-grid">
        <article v-for="recipe in recipes" :key="recipe.name" class="recipe-card">
          <div class="recipe-img"><span class="badge">{{ recipe.badge }}</span><em>{{ recipe.emoji }}</em></div>
          <div class="recipe-body"><h3>{{ recipe.name }}</h3><p>{{ recipe.desc }}</p><div><span>◷ {{ recipe.time }}</span><span>{{ recipe.kind }}</span><b>★ {{ recipe.rate }}</b></div></div>
        </article>
      </div>
    </section>

    <section class="random-card card">
      <div><h2>没灵感？交给厨神决定！</h2><p>一键随机推荐，惊喜菜谱马上来</p></div>
      <div class="random-chef">👩‍🍳</div>
      <button>🎲 随机推荐 ›</button>
      <small>今日剩余 3 次</small>
    </section>

    <nav class="tabbar">
      <button><span>⌂</span><b>首页</b></button>
      <button><span>☰</span><b>菜谱</b></button>
      <button class="publish"><span>＋</span><b>发布</b></button>
      <button class="active"><span>◒</span><b>发现</b></button>
      <button><span>♙</span><b>我的</b></button>
    </nav>
  </main>
</template>

<script setup lang="ts">
const ingredients = [
  { name: '鸡蛋', icon: '🥚' },
  { name: '番茄', icon: '🍅' },
  { name: '青菜', icon: '🥬' },
  { name: '鸡胸肉', icon: '🍗' },
  { name: '豆腐', icon: '◻️' },
]

const tastes = ['下饭', '快手', '低脂', '一人食', '宴客']

const aiTags = [
  { title: '最近常做', desc: '换点新口味', icon: '🍳' },
  { title: '天气变热', desc: '清爽开胃菜', icon: '🌤️' },
  { title: '想吃肉', desc: '满足口腹之欲', icon: '🥩' },
  { title: '孩子爱吃', desc: '营养又好吃', icon: '👶' },
  { title: '减脂计划', desc: '低卡美味', icon: '🥕' },
]

const recipes = [
  { name: '黄焖鸡米饭', desc: '酱香浓郁，米饭杀手', time: '25分钟', kind: '🔥 下饭', rate: '4.9', badge: '下饭首选', emoji: '🍗' },
  { name: '青瓜虾仁沙拉', desc: '低脂高蛋白，清爽开胃', time: '15分钟', kind: '🌿 低脂', rate: '4.8', badge: '清爽快手', emoji: '🥒' },
  { name: '菌菇豆腐汤', desc: '鲜美暖胃，简单营养', time: '20分钟', kind: '⚡ 快手', rate: '4.8', badge: '暖心汤羹', emoji: '🍲' },
]
</script>
