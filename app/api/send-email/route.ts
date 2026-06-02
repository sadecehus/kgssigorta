import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Environment variables validation
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

if (!EMAIL_USER || !EMAIL_PASSWORD) {
  throw new Error('Missing required environment variables: EMAIL_USER, EMAIL_PASSWORD')
}

// Gmail SMTP yapılandırması
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
})

// HTML email template'i
const getEmailTemplate = (formData: any) => {
  // Sigorta türü mapping
  const insuranceTypeMap: { [key: string]: string } = {
    'kasko': 'Kasko Sigortası',
    'trafik': 'Trafik Sigortası',
    'saglik': 'Sağlık Sigortası',
    'konut': 'Konut Sigortası',
    'dask': 'DASK (Deprem) Sigortası',
    'seyahat': 'Seyahat Sigortası',
    'diger': 'Diğer'
  }

  const insuranceTypeName = insuranceTypeMap[formData.insuranceType] || formData.insuranceType
  const companyEmail = EMAIL_USER || 'info@kgssigorta.com'

  return `
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mesajınızı Aldık - KGS Sigorta</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8fafc;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #0a2d5f 0%, #1e3a8a 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        .logo {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }
        .tagline {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 0;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 24px;
          color: #0a2d5f;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .message {
          font-size: 16px;
          color: #374151;
          margin-bottom: 30px;
        }
        .form-details {
          background-color: #f8fafc;
          border-left: 4px solid #0a2d5f;
          padding: 20px;
          margin: 30px 0;
          border-radius: 0 8px 8px 0;
        }
        .form-details h3 {
          color: #0a2d5f;
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 18px;
        }
        .detail-item {
          margin-bottom: 12px;
          display: flex;
          align-items: flex-start;
        }
        .detail-label {
          font-weight: 600;
          color: #374151;
          min-width: 120px;
          margin-right: 10px;
        }
        .detail-value {
          color: #6b7280;
          flex: 1;
        }
        .next-steps {
          background-color: #ecfdf5;
          border: 1px solid #d1fae5;
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
        }
        .next-steps h3 {
          color: #065f46;
          margin-top: 0;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }
        .next-steps ul {
          margin: 0;
          padding-left: 20px;
          color: #374151;
        }
        .next-steps li {
          margin-bottom: 8px;
        }
        .contact-info {
          background-color: #f1f5f9;
          border-radius: 8px;
          padding: 25px;
          margin: 30px 0;
        }
        .contact-info h3 {
          color: #0a2d5f;
          margin-top: 0;
          margin-bottom: 15px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          color: #374151;
        }
        .contact-icon {
          width: 18px;
          height: 18px;
          margin-right: 12px;
          color: #0a2d5f;
        }
        .footer {
          background-color: #0a2d5f;
          color: white;
          padding: 30px;
          text-align: center;
        }
        .footer-links {
          margin-top: 20px;
        }
        .footer-links a {
          color: #93c5fd;
          text-decoration: none;
          margin: 0 15px;
          font-size: 14px;
        }
        .footer-links a:hover {
          color: white;
        }
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
          margin: 30px 0;
        }
        @media (max-width: 600px) {
          .container {
            margin: 0;
          }
          .content {
            padding: 30px 20px;
          }
          .detail-item {
            flex-direction: column;
          }
          .detail-label {
            min-width: auto;
            margin-bottom: 5px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">KGS SİGORTA</div>
          <p class="tagline">Türkiye'nin Güvenilir Sigorta Aracısı</p>
        </div>
        
        <div class="content">
          <h2 class="greeting">Sayın ${formData.firstName} ${formData.lastName},</h2>
          
          <p class="message">
            Sigorta teklif talebinizi başarıyla aldık! Size en uygun teklifi hazırlamak için uzman ekibimiz 
            hemen çalışmaya başladı. En kısa sürede size geri dönüş yapacağız.
          </p>
          
          <div class="form-details">
            <h3>📋 Talep Detaylarınız</h3>
            <div class="detail-item">
              <span class="detail-label">Ad Soyad:</span>
              <span class="detail-value">${formData.firstName} ${formData.lastName}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Telefon:</span>
              <span class="detail-value">${formData.phone}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">E-posta:</span>
              <span class="detail-value">${formData.email}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Sigorta Türü:</span>
              <span class="detail-value">${insuranceTypeName}</span>
            </div>
            ${formData.message ? `
            <div class="detail-item">
              <span class="detail-label">Mesajınız:</span>
              <span class="detail-value">${formData.message}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="next-steps">
            <h3>🚀 Sonraki Adımlar</h3>
            <ul>
              <li><strong>24 saat içinde</strong> uzman danışmanımız sizinle iletişime geçecek</li>
              <li>İhtiyaçlarınıza özel <strong>3 farklı şirketten</strong> teklif alacağız</li>
              <li>Size <strong>en uygun fiyat ve kapsamda</strong> seçenekleri sunacağız</li>
              <li>Tüm işlemlerinizi <strong>hızlı ve güvenli</strong> şekilde tamamlayacağız</li>
            </ul>
          </div>
          
          <div class="divider"></div>
          
          <div class="contact-info">
            <h3>📞 Acil Durumlar İçin</h3>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span><strong>WhatsApp:</strong> +90 553 557 45 41</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">☎️</span>
              <span><strong>Telefon:</strong> +90 553 557 45 41</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span><strong>E-posta:</strong> ${companyEmail}</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span><strong>Adres:</strong> TADU BLACK OFFICE, Körfez, ANKARA YOLU CADDESİ NO:12 41060 İzmit/Kocaeli</span>
            </div>
          </div>
          
          <p class="message">
            <strong>Partner şirketlerimiz:</strong> Hepiyi Sigorta, Doğa Sigorta ve Sompo Sigorta ile çalışarak 
            size en avantajlı teklifleri sunuyoruz.
          </p>
        </div>
        
        <div class="footer">
          <p><strong>KGS Sigorta</strong> - İzmit Kocaeli'nin güvenilir sigorta aracısı</p>
          <p style="font-size: 14px; opacity: 0.8; margin-top: 10px;">
            Bu e-posta otomatik olarak gönderilmiştir. Lütfen yanıtlamayın.
          </p>
          <div class="footer-links">
            <a href="tel:+905535574541">Bizi Arayın</a>
            <a href="https://wa.me/905535574541">WhatsApp</a>
            <a href="mailto:${companyEmail}">E-posta</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

// Admin için bildirim email template'i
const getAdminEmailTemplate = (formData: any) => {
  // Sigorta türü mapping
  const insuranceTypeMap: { [key: string]: string } = {
    'kasko': 'Kasko Sigortası',
    'trafik': 'Trafik Sigortası',
    'saglik': 'Sağlık Sigortası',
    'konut': 'Konut Sigortası',
    'dask': 'DASK (Deprem) Sigortası',
    'seyahat': 'Seyahat Sigortası',
    'diger': 'Diğer'
  }

  const insuranceTypeName = insuranceTypeMap[formData.insuranceType] || formData.insuranceType
  const companyName = 'KGS Sigorta'

  return `
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Yeni Teklif Talebi - KGS Sigorta</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8fafc;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          padding: 25px 20px;
          text-align: center;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .alert {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
          color: #991b1b;
          font-weight: 600;
        }
        .content {
          padding: 30px;
        }
        .form-details {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 25px;
          margin: 20px 0;
        }
        .form-details h3 {
          color: #0a2d5f;
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 18px;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 10px;
        }
        .detail-row {
          display: flex;
          margin-bottom: 15px;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          font-weight: 600;
          color: #374151;
          min-width: 130px;
          margin-right: 15px;
        }
        .detail-value {
          color: #1f2937;
          flex: 1;
          font-weight: 500;
        }
        .timestamp {
          background-color: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 6px;
          padding: 15px;
          margin: 20px 0;
          color: #0c4a6e;
          text-align: center;
          font-weight: 600;
        }
        .actions {
          background-color: #f8fafc;
          border-radius: 8px;
          padding: 20px;
          margin: 25px 0;
          text-align: center;
        }
        .action-button {
          display: inline-block;
          background-color: #0a2d5f;
          color: white;
          text-decoration: none;
          padding: 12px 25px;
          border-radius: 6px;
          margin: 5px 10px;
          font-weight: 600;
          transition: background-color 0.3s;
        }
        .action-button:hover {
          background-color: #1e3a8a;
        }
        .whatsapp-button {
          background-color: #25d366;
        }
        .whatsapp-button:hover {
          background-color: #22c55e;
        }
        .footer {
          background-color: #f8fafc;
          padding: 20px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🚨 YENİ TEKLİF TALEBİ</div>
          <p style="margin: 0; opacity: 0.9;">${companyName} Admin Panel</p>
        </div>
        
        <div class="content">
          <div class="alert">
            ⚡ Acil: Yeni bir müşteri sigorta teklifi talebinde bulundu!
          </div>
          
          <div class="timestamp">
            📅 Talep Zamanı: ${new Date().toLocaleString('tr-TR', {
              timeZone: 'Europe/Istanbul',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
          
          <div class="form-details">
            <h3>👤 Müşteri Bilgileri</h3>
            <div class="detail-row">
              <span class="detail-label">Ad Soyad:</span>
              <span class="detail-value">${formData.firstName} ${formData.lastName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Telefon:</span>
              <span class="detail-value">${formData.phone}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">E-posta:</span>
              <span class="detail-value">${formData.email}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Sigorta Türü:</span>
              <span class="detail-value"><strong>${insuranceTypeName}</strong></span>
            </div>
            ${formData.message ? `
            <div class="detail-row">
              <span class="detail-label">Özel Mesaj:</span>
              <span class="detail-value">${formData.message}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="actions">
            <h3 style="color: #0a2d5f; margin-top: 0;">📞 Hızlı İletişim</h3>
            <a href="tel:${formData.phone}" class="action-button">Telefon Et</a>
            <a href="https://wa.me/90${formData.phone.replace(/[^\d]/g, '').substring(1)}" class="action-button whatsapp-button">WhatsApp</a>
            <a href="mailto:${formData.email}" class="action-button">E-posta Gönder</a>
          </div>
          
          <div style="background-color: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 15px; text-align: center; color: #92400e;">
            <strong>💡 Hatırlatma:</strong> Müşteriye 24 saat içinde geri dönüş yapılması gerekmektedir.
          </div>
        </div>
        
        <div class="footer">
          Bu e-posta ${companyName} web sitesinden otomatik olarak gönderilmiştir.
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Environment variables kontrolü
    if (!EMAIL_USER || !EMAIL_PASSWORD) {
      console.error('Missing environment variables:', {
        EMAIL_USER: !!EMAIL_USER,
        EMAIL_PASSWORD: !!EMAIL_PASSWORD
      })
      return NextResponse.json(
        { 
          error: 'Server yapılandırma hatası. Lütfen site yöneticisiyle iletişime geçin.',
          details: 'Email environment variables are not configured'
        },
        { status: 500 }
      )
    }

    const formData = await request.json()
    
    // Form verilerini doğrula
    const { firstName, lastName, phone, email, insuranceType, message } = formData
    
    if (!firstName || !lastName || !phone || !email || !insuranceType) {
      return NextResponse.json(
        { error: 'Gerekli alanlar eksik' },
        { status: 400 }
      )
    }

    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi girin' },
        { status: 400 }
      )
    }

    // Sigorta türü mapping
    const insuranceTypeMap: { [key: string]: string } = {
      'kasko': 'Kasko Sigortası',
      'trafik': 'Trafik Sigortası',
      'saglik': 'Sağlık Sigortası',
      'konut': 'Konut Sigortası',
      'dask': 'DASK (Deprem) Sigortası',
      'seyahat': 'Seyahat Sigortası',
      'diger': 'Diğer'
    }

    const insuranceTypeName = insuranceTypeMap[insuranceType] || insuranceType

    // Müşteriye teşekkür e-postası gönder
    const customerMailOptions = {
      from: `"KGS Sigorta" <${EMAIL_USER}>`,
      to: email,
      subject: '✅ Mesajınızı Aldık - KGS Sigorta Teklif Talebi',
      html: getEmailTemplate(formData),
    }

    // Admin'e bildirim e-postası gönder
    const adminMailOptions = {
      from: `"KGS Sigorta Web Sitesi" <${EMAIL_USER}>`,
      to: EMAIL_USER, // Aynı adrese gönder
      subject: `🚨 YENİ TEKLİF TALEBİ - ${firstName} ${lastName} (${insuranceTypeName})`,
      html: getAdminEmailTemplate(formData),
    }

    // E-postaları gönder
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(adminMailOptions)
    ])

    return NextResponse.json(
      { 
        success: true, 
        message: 'E-postalar başarıyla gönderildi',
        customerEmail: email
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('E-posta gönderme hatası:', error)
    return NextResponse.json(
      { 
        error: 'E-posta gönderilirken bir hata oluştu',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    )
  }
}
