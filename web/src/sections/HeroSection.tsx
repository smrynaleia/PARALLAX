import { ThreatMapDomain, getThreatMapUrl } from '@config/domain';
import threatMapVisual from '@/assets/threatmap-grid.svg';

const HeroSection = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__background" aria-hidden />
      <div className="hero__content">
        <span className="hero__eyebrow">Gerçek zamanlı siber tehditler</span>
        <h1 className="hero__title">
          PARALLAX ThreatMap ile küresel saldırı yüzeyinizi anlık olarak görün.
        </h1>
        <p className="hero__description">
          {ThreatMapDomain} üzerinde barındırılan ThreatMap platformu, siber saldırıları
          milisaniye hassasiyetinde izleyerek ekibinizin kritik anlarda hızlı karar
          almasını sağlar.
        </p>
        <div className="hero__actions">
          <a href={getThreatMapUrl('demo')} className="button button--primary">
            Canlı Demoyu Gör
          </a>
          <a href={getThreatMapUrl('pricing')} className="button button--secondary">
            Planları İncele
          </a>
        </div>
        <div className="hero__visual">
          <img src={threatMapVisual} alt="ThreatMap canlı trafik ısı haritası" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
