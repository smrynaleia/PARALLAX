import { getThreatMapUrl } from '@config/domain';

const intelligenceHighlights = [
  {
    title: 'APT odaklı ısı haritaları',
    body:
      'Devlet destekli tehdit aktörlerinin saldırı desenlerini, kaynak IP kümelerini ve hedeflenen sektörleri gerçek zamanlı izleyin.'
  },
  {
    title: 'Saldırı yüzeyi envanteri',
    body:
      'Kurumsal varlık envanterinizi sürekli tarayarak zafiyetleri ve yanlış yapılandırmaları otomatik olarak tespit edin.'
  },
  {
    title: 'Playbook otomasyonu',
    body:
      'SIEM ve SOAR entegrasyonlarıyla olay müdahale adımlarını tetikleyerek ortalama yanıt süresini kısaltın.'
  }
];

const ThreatHighlights = () => {
  return (
    <section className="section section--dark" id="intel">
      <div className="section__title" style={{ textAlign: 'center' }}>
        ThreatMap istihbaratı ile gelen üstün görünürlük
      </div>
      <p className="section__subtitle">
        Saldırı kampanyalarını izlemenin ötesine geçin. Veri kümelerimizi kendi analitik
        süreçlerinize aktararak karar alma döngüsünü hızlandırın.
      </p>
      <div className="grid grid--three">
        {intelligenceHighlights.map((item) => (
          <div className="card card--dark" key={item.title}>
            <div className="card__title">{item.title}</div>
            <p className="card__body">{item.body}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href={getThreatMapUrl('intel')} className="button button--secondary">
          Threat Intel API Dokümanları
        </a>
      </div>
    </section>
  );
};

export default ThreatHighlights;
