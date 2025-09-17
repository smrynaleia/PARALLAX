import { ThreatMapDomain, getThreatMapUrl } from '@config/domain';

const CallToAction = () => {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="badge">Başlamak için hazır mısınız?</div>
      <h2 className="section__title" style={{ marginTop: '1.5rem' }}>
        {ThreatMapDomain} ile 72 saat içinde canlıya çıkın.
      </h2>
      <p className="section__subtitle">
        Güvenlik operasyon merkezinizi güçlendirmek için ThreatMap deneme ortamını hemen
        dağıtın ve tehdit istihbaratı akışını kurum içi sistemlerinize bağlayın.
      </p>
      <div className="hero__actions" style={{ justifyContent: 'center' }}>
        <a href={getThreatMapUrl('signup')} className="button button--primary">
          Ücretsiz Deneme Başlat
        </a>
        <a href={getThreatMapUrl('partners')} className="button button--secondary">
          İş Ortaklıkları
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
