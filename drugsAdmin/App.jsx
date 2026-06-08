import "./styles.css";

export default function App() {
  const reviews = [
    ["Mason W.", "Lex rebuilt our economy core and optimized the entire server. Peak player count doubled."],
    ["DutchRP", "Best RedM developer I’ve worked with. Cinematic UI and clean scripting."],
    ["Frontier County", "Our horse systems, banking and sheriff jobs feel AAA now."],
    ["Valley Roleplay", "Fast delivery and extremely professional communication."],
    ["Saint Denis RP", "Optimization improvements were insane."],
    ["Blackwater RP", "Custom MLOs and map edits changed our server identity."],
    ["Westbound RP", "Every script feels polished and immersive."],
    ["Dust Trails RP", "Lex understands serious roleplay communities."],
    ["Outlaw Nation", "The UI work made our server look premium."],
    ["New Austin RP", "Reliable, creative and always delivers beyond expectations."]
  ];

  return (
    <div className="app">
      <video autoPlay muted loop className="bg-video">
        <source src="https://cdn.coverr.co/videos/coverr-horse-riding-through-field-1563646530863?download=1080p" />
      </video>

      <header className="navbar">
        <div className="brand">
          <img src="/logo.jpg" alt="Lex Logo" />
          <div>
            <h2>Lex</h2>
            <span>Professional RedM Developer</span>
          </div>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="badge">Building Serious RedM Experiences</p>
          <h1>PREMIUM REDM DEVELOPMENT</h1>
          <p className="subtitle">
            Custom scripts, cinematic UI, optimized frameworks, MLO integrations
            and immersive roleplay systems built for serious RedM communities.
          </p>

          <div className="buttons">
            <a className="primary" href="#contact">Hire Developer</a>
            <a className="secondary" href="https://discord.gg/3ajDnvSM9x" target="_blank">
              Join Discord
            </a>
          </div>

          <div className="stats">
            <div><h3>1K+</h3><p>Satisfied Clients</p></div>
            <div><h3>120+</h3><p>Systems Built</p></div>
            <div><h3>99%</h3><p>Optimization Score</p></div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid">
          {[
            "Custom RedM Scripts",
            "MLO & Maps",
            "Optimization",
            "Economy Systems",
            "Cinematic UI",
            "Framework Development"
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>Premium quality development focused on immersion and performance.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section dark">
        <h2>Past Systems Built</h2>
        <div className="grid">
          {[
            "Horse Bonding System",
            "Sheriff MDT",
            "Custom Banking UI",
            "Saint Denis MLO",
            "Realistic Economy",
            "Advanced Inventory"
          ].map((item) => (
            <div className="project" key={item}>
              <img src={`https://picsum.photos/600/40${Math.floor(Math.random()*9)}`} />
              <div className="project-body">
                <h3>{item}</h3>
                <p>Immersive RedM roleplay system built for premium servers.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Optimization Metrics</h2>
        <div className="metrics">
          <div>
            <p>Before Optimization</p>
            <div className="bar"><span style={{width:'42%'}}></span></div>
          </div>

          <div>
            <p>After Lex Optimization</p>
            <div className="bar"><span style={{width:'96%'}}></span></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="section dark">
        <h2>Trusted By 1,000+ Clients</h2>
        <div className="grid">
          {reviews.map(([name, review]) => (
            <div className="review" key={name}>
              <img src={`https://i.pravatar.cc/100?u=${name}`} />
              <h3>{name}</h3>
              <span>Server Owner</span>
              <p>"{review}"</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Start Your Project</h2>

        <form className="contact-form">
          <input placeholder="Your Email" />
          <input placeholder="Discord Username" />
          <input placeholder="Budget" />

          <select>
            <option>Select Framework</option>
            <option>VORP</option>
            <option>RSG</option>
            <option>Custom Framework</option>
          </select>

          <textarea placeholder="Project Details"></textarea>

          <button type="button">Submit Request</button>
        </form>
      </section>

      <footer>
        <p>Discord Username: <strong>coderlex</strong></p>
        <a href="https://discord.gg/3ajDnvSM9x" target="_blank">
          Join Developer Discord
        </a>
      </footer>
    </div>
  );
}
