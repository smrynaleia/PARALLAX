import { ThreatMapDomain } from '@config/domain';

const features = [
  {
    title: 'Gerçek zamanlı saldırı akışı',
    description:
      "Saniyede 40.000'den fazla olay yakalayarak küresel saldırı kampanyalarını gecikme olmadan görselleştirin."
  },
  {
    title: 'Otomatik risk korelasyonu',
    description:
      'Kurumsal varlıklarınızı tehdit verileriyle eşleştirerek kritik sistemler için önceliklendirilmiş alarm üretir.'
  },
  {
    title: 'Sınır ötesi veri egemenliği',
    description:
      `${ThreatMapDomain} altyapısı, verilerinizi AB merkezli veri merkezlerinde tutarak regülasyonlara tam uyum sağlar.`
  }
];

const FeatureShowcase = () => {
  return (
    <section className="section" id="features">
      <div className="section__title" style={{ textAlign: 'center' }}>
        Tehdit tespitine hız kazandıran çekirdek yetenekler
      </div>
      <p className="section__subtitle">
        Güçlü görselleştirmeler, istihbarat akışı ve otomasyon modülleri ile SOC ekibinizin
        saldırı penceresini kapatın.
      </p>
      <div className="grid grid--three">
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <div className="card__title">{feature.title}</div>
            <p className="card__body">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcase;
