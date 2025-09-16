import { ThreatMapDomain, getThreatMapUrl } from '@config/domain';

const Header = () => {
  return (
    <header
      style={{
        padding: '1.25rem 1.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(16px)',
        background: 'rgba(248, 250, 252, 0.92)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
        zIndex: 10
      }}
    >
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '1.15rem',
            letterSpacing: '0.04em'
          }}
        >
          PX
        </span>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0f172a' }}>
            PARALLAX ThreatMap
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(15, 23, 42, 0.6)' }}>
            {ThreatMapDomain}
          </div>
        </div>
      </a>
      <nav
        style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          fontSize: '0.95rem',
          color: 'rgba(15, 23, 42, 0.7)'
        }}
      >
        <a href="#features">Özellikler</a>
        <a href="#intel">Tehdit Zekası</a>
        <a href="#platform">Platform</a>
        <a
          href={getThreatMapUrl('contact')}
          className="button button--primary"
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
        >
          Satışla İletişim
        </a>
      </nav>
    </header>
  );
};

export default Header;
