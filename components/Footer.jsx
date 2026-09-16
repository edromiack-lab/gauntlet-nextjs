import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand-block">
          <h4>The <span className="accent">Gauntlet.</span></h4>
          <p>Real leasing training under real pressure. Nine operations. Fair housing built in. Boiler Room timer training. Built by leasing professionals.</p>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <Link href="/features">Features</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/demo">Live Demo</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h5>Get In Touch</h5>
          <a href="mailto:boomboom@thesalesgauntlet.co">boomboom@thesalesgauntlet.co</a>
          <a href="tel:6025131132">(602) 513-1132</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Boom Boom · The Sales Gauntlet. Built by Eames.
      </div>
    </footer>
  );
}
