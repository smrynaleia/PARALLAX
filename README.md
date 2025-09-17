# PARALLAX ThreatMap

Bu depo, PARALLAX ThreatMap deneyimini sergilemek için hazırlanmış modern web arayüzünü ve ilişkili varlıkları içerir. Yeni proje yapısı `web/` klasörü altında konumlandırılmıştır ve React + Vite + TypeScript yığınını kullanır.

## Proje Yapısı

```
web/
├── config/               # Alan adı yapılandırması ve yardımcı fonksiyonlar
├── src/                  # React bileşenleri, bölümler ve stil dosyaları
├── index.html            # Vite giriş noktası
├── package.json          # Bağımlılıklar ve npm script'leri
└── vite.config.ts        # Vite yapılandırması
```

## Alan Adı

ThreatMap ürünü için satın alınabilir alan adı olarak **parallax-threatmap.com** seçildi. Tüm sayfa ve bileşen referansları bu alan adını `web/config/domain.ts` dosyasında tanımlanan `ThreatMapDomain` sabiti üzerinden kullanır.

## Geliştirme

1. Gerekli bağımlılıkları yükleyin:
   ```bash
   cd web
   npm install
   ```
2. Geliştirme sunucusunu çalıştırın:
   ```bash
   npm run dev
   ```
3. Tarayıcınızdan [http://localhost:5173](http://localhost:5173) adresine giderek arayüzü görüntüleyin.

## Build Alma

Statik üretim çıktısını oluşturmak için aşağıdaki komutu kullanın:
```bash
npm run build
```
Komut `web/dist` klasöründe dağıtıma hazır dosyaları üretir. Çıktıyı lokalde doğrulamak için:
```bash
npm run preview
```

## Dağıtım Önerisi

Oluşturulan statik dosyalar herhangi bir CDN veya statik site barındırıcısına (örn. Vercel, Netlify, AWS S3 + CloudFront) yüklenebilir. Alan adınızı (parallax-threatmap.com) tercih ettiğiniz DNS sağlayıcısı üzerinden barındırma hedefinize yönlendirerek üretim ortamını kullanıma açabilirsiniz.
