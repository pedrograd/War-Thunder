# 🚀 Ücretsiz Web Sitesi Yayınlama Rehberi

Bu projeyi tamamen ücretsiz bir şekilde canlıya almak için adım adım rehber.

## 📋 Seçenekler

### 1. Vercel (Önerilen - En Kolay) ⭐
- ✅ Tamamen ücretsiz
- ✅ Otomatik SSL sertifikası
- ✅ Özel domain desteği
- ✅ GitHub ile otomatik deploy
- ✅ Sınırsız bant genişliği (hobby plan)
- ✅ Global CDN

### 2. Netlify (Alternatif)
- ✅ Tamamen ücretsiz
- ✅ Otomatik SSL
- ✅ GitHub entegrasyonu
- ✅ Form desteği

### 3. GitHub Pages (Statik siteler için)
- ⚠️ Next.js için ekstra yapılandırma gerekir
- ✅ Tamamen ücretsiz

---

## 🎯 Yöntem 1: Vercel ile Yayınlama (Önerilen)

### Adım 1: GitHub'a Yükleme

1. **GitHub hesabı oluşturun** (eğer yoksa):
   - [github.com](https://github.com) adresine gidin
   - "Sign up" ile ücretsiz hesap oluşturun

2. **Yeni repository oluşturun**:
   - GitHub'da sağ üstteki "+" → "New repository"
   - Repository adı: `war-thunder-academy` (veya istediğiniz isim)
   - Public veya Private seçin (Public önerilir)
   - "Create repository" butonuna tıklayın

3. **Kodunuzu GitHub'a yükleyin**:

   Terminal'de proje klasörünüzde şu komutları çalıştırın:

   ```bash
   # Git repository'sini başlat (eğer yapılmadıysa)
   git init
   
   # Tüm dosyaları ekle
   git add .
   
   # İlk commit'i yap
   git commit -m "Initial commit"
   
   # GitHub repository'nizi ekleyin (YOUR_USERNAME ve REPO_NAME'i değiştirin)
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   
   # Kodu GitHub'a yükle
   git branch -M main
   git push -u origin main
   ```

   **Not**: Eğer GitHub'da authentication sorunu yaşarsanız:
   - GitHub'da Settings → Developer settings → Personal access tokens
   - "Generate new token" ile token oluşturun
   - Token'ı şifre olarak kullanın

### Adım 2: Vercel'e Bağlama

1. **Vercel hesabı oluşturun**:
   - [vercel.com](https://vercel.com) adresine gidin
   - "Sign Up" butonuna tıklayın
   - "Continue with GitHub" ile GitHub hesabınızla giriş yapın
   - Vercel'in GitHub'a erişim izni isteyecek, "Authorize" deyin

2. **Projeyi İçe Aktarın**:
   - Vercel dashboard'da "Add New..." → "Project" butonuna tıklayın
   - GitHub repository'nizi listeden bulun ve "Import" butonuna tıklayın

3. **Yapılandırma** (Genellikle otomatik algılanır):
   - **Framework Preset**: `Next.js` ✅
   - **Root Directory**: `./` (varsayılan)
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `.next` ✅
   - **Install Command**: `npm install` ✅

4. **Deploy**:
   - "Deploy" butonuna tıklayın
   - 1-2 dakika bekleyin (build işlemi tamamlanacak)

5. **Web Siteniz Hazır!**:
   - Deploy tamamlandığında size bir URL verilecek:
     - `https://your-project-name.vercel.app`
   - Bu URL'yi herkesle paylaşabilirsiniz!

### Adım 3: Otomatik Güncellemeler

- Her `git push` yaptığınızda Vercel otomatik olarak yeni bir deploy yapacak
- Pull request'ler için otomatik preview URL'leri oluşturulur

---

## 🎯 Yöntem 2: Netlify ile Yayınlama

### Adım 1: GitHub'a Yükleme
(Yukarıdaki Adım 1 ile aynı)

### Adım 2: Netlify'e Bağlama

1. **Netlify hesabı oluşturun**:
   - [netlify.com](https://netlify.com) adresine gidin
   - "Sign up" → "GitHub" ile giriş yapın

2. **Yeni Site Oluştur**:
   - "Add new site" → "Import an existing project"
   - GitHub repository'nizi seçin

3. **Build Ayarları**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: `./` (varsayılan)

4. **Deploy**:
   - "Deploy site" butonuna tıklayın
   - URL'niz: `https://your-project-name.netlify.app`

---

## 🔧 Özel Domain Ekleme (İsteğe Bağlı)

### Vercel'de Özel Domain:

1. Vercel Dashboard → Projeniz → Settings → Domains
2. Domain'inizi ekleyin (örn: `warthunderacademy.com`)
3. DNS ayarlarını yapın:
   - Domain sağlayıcınızın DNS ayarlarına gidin
   - Vercel'in verdiği kayıtları ekleyin
4. SSL sertifikası otomatik olarak oluşturulur (5-10 dakika)

### Netlify'de Özel Domain:

1. Site settings → Domain management
2. "Add custom domain" butonuna tıklayın
3. DNS ayarlarını yapın
4. SSL otomatik olarak aktif olur

---

## ✅ Yayınlamadan Önce Kontrol Listesi

- [ ] `npm run build` komutu hatasız çalışıyor mu?
- [ ] `npm start` ile local'de test ettiniz mi?
- [ ] Tüm dosyalar GitHub'a yüklendi mi?
- [ ] `.env` dosyaları `.gitignore`'da mı? (güvenlik için)
- [ ] `node_modules` klasörü `.gitignore`'da mı?

---

## 🐛 Sorun Giderme

### Build Hatası Alıyorsanız:

1. **Local'de test edin**:
   ```bash
   npm run build
   ```
   Eğer local'de hata varsa, önce onu düzeltin.

2. **Vercel/Netlify loglarını kontrol edin**:
   - Dashboard'da "Deployments" → Build loglarına bakın
   - Hata mesajını okuyun ve düzeltin

3. **Node versiyonu kontrolü**:
   - Projeniz Node 18+ gerektiriyor
   - Vercel otomatik olarak Node 18 kullanır
   - Netlify'de `netlify.toml` dosyası ekleyebilirsiniz:
     ```toml
     [build]
       command = "npm run build"
       publish = ".next"
     
     [build.environment]
       NODE_VERSION = "18"
     ```

### Sayfalar 404 Veriyorsa:

- Next.js dynamic routes için `generateStaticParams` fonksiyonlarını kontrol edin
- Content dosyalarının `/content` klasöründe olduğundan emin olun

### Stil Sorunları:

- `globals.css` dosyasının `app/layout.tsx`'te import edildiğinden emin olun
- Tailwind config dosyasında tüm content path'lerinin olduğunu kontrol edin

---

## 📊 Ücretsiz Plan Limitleri

### Vercel Hobby Plan:
- ✅ Sınırsız proje
- ✅ Sınırsız bant genişliği
- ✅ 100GB bant genişliği/ay
- ✅ Otomatik SSL
- ✅ Global CDN
- ✅ Preview deployments

### Netlify Free Plan:
- ✅ 100GB bant genişliği/ay
- ✅ 300 build dakikası/ay
- ✅ Otomatik SSL
- ✅ Form desteği (100 submission/ay)

**Not**: Bu limitler çoğu proje için yeterlidir. Aylık 100GB bant genişliği yaklaşık 1 milyon sayfa görüntülemesine eşittir.

---

## 🎉 Başarılı!

Artık web siteniz canlıda! URL'nizi paylaşabilir, sosyal medyada duyurabilirsiniz.

**Sonraki Adımlar**:
- Google Analytics ekleyin (isteğe bağlı)
- SEO optimizasyonu yapın
- İçerik güncellemeleri yapın (otomatik deploy olacak)

---

## 💡 İpuçları

1. **Her değişiklikten sonra**:
   ```bash
   git add .
   git commit -m "Açıklayıcı mesaj"
   git push
   ```
   Bu komutlar otomatik olarak yeni bir deploy başlatacak.

2. **Preview URL'leri**: Her pull request için otomatik preview URL'leri oluşturulur. Bu sayede değişiklikleri canlıya almadan test edebilirsiniz.

3. **Environment Variables**: Eğer ileride API key'ler gibi gizli bilgiler eklerseniz, Vercel/Netlify dashboard'dan environment variables ekleyebilirsiniz.

---

**Sorularınız mı var?** Vercel ve Netlify'ın dokümantasyonlarına bakabilirsiniz:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

