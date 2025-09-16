import { ThreatMapDomain, getThreatMapUrl } from '@config/domain';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="platform">
      <div className="footer__top">
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>PARALLAX ThreatMap</div>
          <p style={{ maxWidth: '40ch', marginTop: '0.5rem' }}>
            Global tehdit görünürlüğünüzü {ThreatMapDomain} üzerinde çalışan güvenilir
            analitik motoru ile yönetin.
          </p>
        </div>
        <div className="footer__social">
          <a href={getThreatMapUrl('status')} aria-label="Platform durumu">
            <span>ST</span>
          </a>
          <a href={getThreatMapUrl('community')} aria-label="Topluluk">
            <span>CM</span>
          </a>
          <a href={getThreatMapUrl('docs')} aria-label="Dokümantasyon">
            <span>DC</span>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {year} PARALLAX Güvenlik</span>
        <span>
          <a href={getThreatMapUrl('legal/gizlilik')}>Gizlilik</a> ·{' '}
          <a href={getThreatMapUrl('legal/kullanim')}>Kullanım Şartları</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
