---
permalink: /
title: "Home"
layout: single
author_profile: false
classes: wide
redirect_from:
  - /about/
  - /about.html
---

<style>
.portfolio-home{--ink:#152238;--muted:#58677a;--line:#dce4ed;--accent:#345de3;--surface:#f6f8fc;color:var(--ink);max-width:1120px;margin:auto}
.portfolio-home *{box-sizing:border-box}
.portfolio-home a{text-decoration:none}
.portfolio-home .eyebrow{font-size:.82rem;font-weight:750;letter-spacing:.15em;text-transform:uppercase;color:var(--accent)}
.portfolio-home h1{font-size:clamp(2.7rem,6vw,5.4rem);line-height:1.07;letter-spacing:-.055em;margin:.5rem 0 1.3rem;color:var(--ink)}
.portfolio-home h2{font-size:clamp(1.6rem,3vw,2.3rem);letter-spacing:-.035em;color:var(--ink)}
.portfolio-home p{font-size:1.08rem;line-height:1.8;color:var(--muted)}
.portfolio-home .hero{padding:4.8rem 0 4rem;border-bottom:1px solid var(--line)}
.portfolio-home .hero p{max-width:720px}
.portfolio-home .actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:2rem}
.portfolio-home .btn{display:inline-flex;align-items:center;padding:.82rem 1.2rem;border-radius:12px;font-weight:700;border:1px solid var(--line);transition:transform .2s,box-shadow .2s}
.portfolio-home .btn:hover{transform:translateY(-2px);box-shadow:0 8px 22px #132c5015}
.portfolio-home .btn-primary{background:var(--ink);color:#fff!important;border-color:var(--ink)}
.portfolio-home .btn-secondary{color:var(--ink)!important;background:#fff}
.portfolio-home section{padding:3rem 0;border-bottom:1px solid var(--line)}
.portfolio-home .section-intro{max-width:750px}
.portfolio-home .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin-top:1.6rem}
.portfolio-home .card{padding:1.55rem;border:1px solid var(--line);border-radius:18px;background:var(--surface);min-height:205px}
.portfolio-home .card h3{font-size:1.17rem;color:var(--ink);margin:.3rem 0 .7rem}
.portfolio-home .card p{font-size:.96rem;margin:0}
.portfolio-home .tag{font-size:.75rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.09em}
.portfolio-home .footlinks{display:flex;gap:1.5rem;flex-wrap:wrap}
.portfolio-home .footlinks a{font-weight:700}
@media(max-width:780px){.portfolio-home .grid{grid-template-columns:1fr}.portfolio-home .hero{padding:2.5rem 0}.portfolio-home section{padding:2.2rem 0}}
@media(prefers-reduced-motion:reduce){.portfolio-home .btn{transition:none}}
@media(prefers-color-scheme:dark){.portfolio-home{--ink:#edf2fc;--muted:#b8c4d5;--line:#38455a;--accent:#a4b9ff;--surface:#202b3c}.portfolio-home .btn-primary{background:#edf2fc;color:#172239!important;border-color:#edf2fc}.portfolio-home .btn-secondary{background:transparent}}
</style>

<div class="portfolio-home">
  <header class="hero">
    <div class="eyebrow">Data Analytics · Business Intelligence · Applied AI</div>
    <h1>Hi, I'm Bhagyashri.<br>I turn complex data into clarity.</h1>
    <p>I'm a data and business intelligence professional focused on transforming complicated problems into actionable insights, intuitive dashboards, and reliable analytical solutions.</p>
    <div class="actions">
      <a class="btn btn-primary" href="/projects/">Explore my work ↗</a>
      <a class="btn btn-secondary" href="https://www.linkedin.com/in/bhagyashripatil/">Connect on LinkedIn ↗</a>
    </div>
  </header>

  <section aria-labelledby="about-heading">
    <div class="eyebrow">01 / About</div>
    <h2 id="about-heading">Analytical thinking. Practical impact.</h2>
    <p class="section-intro">My experience spans business intelligence, data modeling, dashboard development, and machine learning. I enjoy connecting technical depth with the questions that matter most to stakeholders—and building solutions people can actually use.</p>
  </section>

  <section aria-labelledby="focus-heading">
    <div class="eyebrow">02 / What I do</div>
    <h2 id="focus-heading">Where I focus</h2>
    <div class="grid">
      <div class="card"><div class="tag">Analytics</div><h3>Business intelligence</h3><p>Decision-ready dashboards, KPI frameworks, and clear performance storytelling.</p></div>
      <div class="card"><div class="tag">Engineering</div><h3>Data foundations</h3><p>Data modeling, SQL, ETL, and dependable reporting workflows.</p></div>
      <div class="card"><div class="tag">Innovation</div><h3>Applied machine learning</h3><p>Exploring practical uses of NLP, predictive models, and AI-driven insights.</p></div>
    </div>
  </section>

  <section aria-labelledby="work-heading">
    <div class="eyebrow">03 / Selected work</div>
    <h2 id="work-heading">Explore the projects behind the work.</h2>
    <p class="section-intro">A collection of technical projects, experiments, and approaches to solving real-world data problems.</p>
    <div class="actions"><a class="btn btn-primary" href="/projects/">View projects ↗</a><a class="btn btn-secondary" href="/research/">Explore research ↗</a></div>
  </section>

  <section aria-labelledby="connect-heading">
    <div class="eyebrow">04 / Connect</div>
    <h2 id="connect-heading">Let's build something meaningful.</h2>
    <p>Interested in analytics, data products, or applied AI? I'd love to connect.</p>
    <div class="footlinks"><a href="https://www.linkedin.com/in/bhagyashripatil/">LinkedIn ↗</a><a href="https://github.com/patilbp">GitHub ↗</a><a href="/personal/">Beyond work ↗</a></div>
  </section>
</div>
