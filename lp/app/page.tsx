import Image from "next/image";
import { ArrowDown, ArrowRight, Film, Play, Quote, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/accordion";

const scenes = [
  { src: "/images/scenes/scene-01.png", label: "01", alt: "感情銀行でカードを受け取る少年" },
  { src: "/images/scenes/scene-05.png", label: "05", alt: "静かな図書室で本を開く少年" },
  { src: "/images/scenes/scene-09.png", label: "09", alt: "雨の気配が残る街の場面" },
  { src: "/images/scenes/scene-15.png", label: "15", alt: "陽から人の形をした影が現れる場面" },
  { src: "/images/scenes/scene-19.png", label: "19", alt: "ひとりで佇む少年" },
  { src: "/images/scenes/scene-23.png", label: "23", alt: "学校の廊下を歩く人物" },
  { src: "/images/scenes/scene-27.png", label: "27", alt: "教室で向かい合う生徒たち" },
  { src: "/images/scenes/scene-31.png", label: "31", alt: "青空の屋上で距離を置いて座る二人" },
];

const faqs = [
  { question: "『LOVED GUN』はどんな作品ですか？", answer: "亡くした恋人を忘れるための銃を渡された高校生・陽が、その銃口を自分自身の悲しみへ向け、痛みを抱えたまま生きることを選ぶ物語です。" },
  { question: "本編の上映時間と形式は？", answer: "上映時間9分の、2D短編アニメーション映画です。" },
  { question: "ラブドガンとは何ですか？", answer: "人を撃つための銃ではありません。持ち主が見ないようにしている感情を撃ち抜き、向き合うための古い拳銃です。" },
  { question: "舞台や設定は実在しますか？", answer: "舞台は現代日本のどこかにある架空の地方都市です。地名、「感情銀行」、ラブドガン、登場人物、出来事はすべて創作です。" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="LOVED GUN トップへ">
          <span>LOVED GUN</span><small>ラブドガン</small>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#story">Story</a><a href="#world">World</a><a href="#movie">Movie</a><a href="#gallery">Gallery</a>
        </nav>
        <Button asChild variant="outline" className="header-cta"><a href="#movie"><Play size={14} fill="currentColor" />予告編</a></Button>
      </header>

      <section className="hero" id="top" aria-label="キービジュアル">
        <Image src="/images/key-visual.png" alt="青空の学校屋上で離れて座る陽と栞、LOVED GUN キービジュアル" fill priority sizes="100vw" className="hero-image hero-image--desktop" />
        <Image src="/images/key-visual-clean.png" alt="青空の学校屋上で離れて座る陽と栞" fill priority sizes="(max-width: 900px) 100vw, 1px" className="hero-image hero-image--mobile" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">AN ORIGINAL ANIMATION PROJECT</p>
          <h1>忘れたいのは、<br />君じゃなかった。</h1>
          <p className="hero-lead">亡くした恋人を忘れるための銃を渡された少年が、<br />悲しみを抱えたまま生きることを選ぶ。</p>
          <Button asChild><a href="#movie"><Play size={16} fill="currentColor" />予告編を見る</a></Button>
        </div>
        <a className="scroll-cue" href="#intro"><span>SCROLL</span><ArrowDown size={16} /></a>
      </section>

      <section className="intro section" id="intro">
        <div className="section-index"><span>01</span><b>INTRODUCTION</b></div>
        <div className="intro-copy">
          <p className="eyebrow">GRIEF × MEMORY × COURAGE</p>
          <h2>悲しみは、<br />消さなくていい。</h2>
          <p>亡くした恋人を「忘れるための銃」を渡された少年は、<br />その銃口を自分自身の悲しみへ向ける。</p>
          <p>痛みから逃れるのではなく、抱えたまま生きる。<br />それは、忘れずに前へ進むための選択だった。</p>
        </div>
        <aside className="format-card">
          <span>RUNTIME</span><strong>9</strong><em>MIN.</em>
          <dl><div><dt>STYLE</dt><dd>2D ANIMATION</dd></div><div><dt>FORMAT</dt><dd>SHORT FILM</dd></div></dl>
        </aside>
      </section>

      <section className="movie section-dark" id="movie">
        <div className="movie-head">
          <div><p className="eyebrow light">OFFICIAL PROMOTION VIDEO</p><h2>世界が、<br />一度だけ息を止める。</h2></div>
          <p className="sound-note"><Volume2 size={17} />音声をオンにしてご覧ください</p>
        </div>
        <div className="video-frame">
          <video controls playsInline preload="metadata" poster="/images/key-visual.png"><source src="/media/loved-gun-pv.mp4" type="video/mp4" />動画を再生できるブラウザでご覧ください。</video>
          <div className="frame-corner frame-corner--tl" /><div className="frame-corner frame-corner--br" />
        </div>
      </section>

      <section className="story section" id="story">
        <div className="section-index"><span>02</span><b>STORY</b></div>
        <div className="story-grid">
          <div className="story-title"><p className="eyebrow">THE GRIEF LEFT BEHIND</p><h2>雨の路地裏に、<br />古い銃が眠っている。</h2></div>
          <div className="story-body">
            <p>灰色の空に細い雨が降る朝。高校生の陽は、同級生だった栞を亡くしてから、色褪せた一枚の写真を胸ポケットにしまったまま歩いている。交差点で立ち止まった陽は、自分の足元の影がわずかに遅れて動くことに気づく。</p>
            <p>導かれるように迷い込んだ路地の奥、古い看板を掲げた店「感情銀行」。店主のクラは、壁のガラスケースに眠る古い拳銃「ラブドガン」を差し出す。人を撃つための銃ではない、見ないようにしているものを撃ち抜くための銃だと。</p>
            <p>陽が白い壁に向けて放った一発は、壁ではなく陽自身の足元から人の形をした「影」を引きずり出す。栞だと思ったそれは、陽自身の感情そのものだとクラは告げる。逃れようとする陽に、影は写真へ手を伸ばし、部屋を黒い粒子が這う。</p>
            <p>屋上で交わした「また来ようね」の記憶と、「忘れてもいいよ」と笑った栞の言葉を思い出しながら、陽は最後の一発を、他の誰でもない自分の胸へ向ける。</p>
            <p>「これは痛いよ」とクラが言う。陽は答える。「忘れない。君と一緒に生きる」。悲しみは消えない。それでも陽は影を連れたまま、雨上がりの街へ一歩を踏み出す。</p>
          </div>
        </div>
        <div className="quote-band"><Quote size={24} /><p>忘れない。<br />君と一緒に生きる。</p><span>— HINATA</span></div>
      </section>

      <section className="world section" id="world">
        <div className="section-index pale"><span>03</span><b>THE WORLD</b></div>
        <div className="world-head"><p className="eyebrow light">THREE KEYS TO THE STORY</p><h2>悲しみと向き合う、<br />三つの存在。</h2></div>
        <div className="world-cards">
          <article><span>01</span><h3>感情銀行</h3><small>EMOTION BANK</small><p>雨の路地裏に現れる、古い看板を掲げた店。クラがラブドガンを保管している。</p></article>
          <article className="featured"><span>02</span><h3>ラブドガン</h3><small>LOVED GUN</small><p>人を撃つためではなく、持ち主が見ないようにしている感情を撃ち抜く古い拳銃。</p></article>
          <article><span>03</span><h3>影</h3><small>THE SHADOW</small><p>陽自身の感情の具現。顔を持たず、陽と同じ動きを半拍遅れて追い続ける。</p></article>
        </div>
      </section>

      <section className="characters section" id="characters">
        <div className="section-index"><span>04</span><b>CHARACTERS</b></div>
        <div className="characters-head">
          <p className="eyebrow">FOUR PRESENCES, ONE GRIEF</p>
          <h2>痛みの向こうで、<br />それぞれが待っている。</h2>
        </div>
        <div className="character-grid">
          <article>
            <div className="character-image"><Image src="/images/characters/you.png" alt="亡くした栞の写真を見つめる高校生・陽" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="character-copy"><span className="character-num">H / 01</span><small>高校生・17歳</small><h3>陽</h3><em>HINATA</em><p>亡くした同級生・栞の写真を持ち歩いている。悲しみを抱えたまま生きることを選ぶ。</p><b>「忘れない。君と一緒に生きる。」</b></div>
          </article>
          <article>
            <div className="character-image character-image--shiori"><Image src="/images/scenes/scene-09.png" alt="陽の回想に現れる同級生・栞" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="character-copy"><span className="character-num">S / 02</span><small>陽の同級生・17歳</small><h3>栞</h3><em>SHIORI</em><p>すでに亡くなっており、陽の回想の中にだけ現れる。屋上で陽と未来の約束を交わした。</p><b>「忘れてもいいよ。」</b></div>
          </article>
          <article>
            <div className="character-image character-image--kura"><Image src="/images/characters/kura.png" alt="感情銀行の主でパーマの男・クラ" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="character-copy"><span className="character-num">K / 03</span><small>感情銀行の主・29歳</small><h3>クラ</h3><em>KURA</em><p>路地裏の店「感情銀行」の主。古い拳銃ラブドガンを扱い、陽を悲しみへ向き合わせる。</p><b>「これは痛いよ。」</b></div>
          </article>
          <article>
            <div className="character-image character-image--shadow"><Image src="/images/scenes/scene-15.png" alt="陽の足元から現れた顔のない影" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <div className="character-copy"><span className="character-num">S / 04</span><small>陽の感情の具現</small><h3>影</h3><em>THE SHADOW</em><p>顔はなく、陽と同じ動きを半拍遅れて追う。消すべき怪物ではなく、陽自身の悲しみそのもの。</p><b>悲しみは、消えない。</b></div>
          </article>
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="gallery-head"><div className="section-index"><span>05</span><b>SCENE GALLERY</b></div><p>言葉になる前の感情を、<br />光と余白で描く。</p></div>
        <div className="gallery-grid">
          {scenes.map((scene, index) => <figure key={scene.src} className={index === 0 || index === 5 ? "wide" : ""}><Image src={scene.src} alt={scene.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>CUT / {scene.label}</figcaption></figure>)}
        </div>
      </section>

      <section className="production section">
        <div className="production-copy"><p className="eyebrow">PROJECT NOTES</p><h2>悲しみは消えなくても、<br />抱えたまま歩ける。</h2><p>喪失を受け入れる勇気。忘れることと前へ進むことの違い。細い雨、半拍遅れて動く影、黒い粒子、雨上がりの光を通して、言葉になる前の感情を描く短編作品です。</p></div>
        <div className="production-stats"><div><strong>9</strong><span>MINUTE SHORT FILM</span></div><div><strong>2D</strong><span>ANIMATION</span></div><div><strong>JP</strong><span>FICTIONAL CITY</span></div></div>
      </section>

      <section className="faq section"><div><p className="eyebrow">QUESTIONS & ANSWERS</p><h2>作品について</h2></div><FaqAccordion items={faqs} /></section>

      <section className="final-cta">
        <Image src="/images/scenes/scene-31.png" alt="屋上の陽と栞" fill sizes="100vw" />
        <div className="final-overlay" /><div className="final-copy"><Film size={28} /><p>忘れたいのは、君じゃなかった。</p><h2>LOVED GUN</h2><span>ラブドガン</span><Button asChild><a href="#movie"><Play size={16} fill="currentColor" />予告編をもう一度見る</a></Button></div>
      </section>

      <footer><div className="footer-mark"><strong>LOVED GUN</strong><span>ラブドガン</span></div><div className="footer-links"><a href="#story">Story</a><a href="#world">World</a><a href="#movie">Movie</a><a href="#gallery">Gallery</a></div><p>Original Story / Screenplay / Project by damefuri<br />© 2026 LOVED GUN Project</p><a className="back-top" href="#top">BACK TO TOP <ArrowRight size={14} /></a></footer>
    </main>
  );
}
