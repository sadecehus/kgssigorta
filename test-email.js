// Test email functionality
const testFormData = {
  firstName: "Test",
  lastName: "Kullanıcı",
  phone: "05551234567",
  email: "test@example.com", // Bu kısmı gerçek email ile değiştirin
  insuranceType: "kasko",
  message: "Bu bir test mesajıdır. Kasko sigortası için teklif almak istiyorum."
};

async function testEmail() {
  try {
    console.log('Email test başlatılıyor...');
    
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFormData),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Email başarıyla gönderildi!');
      console.log('Response:', result);
    } else {
      console.error('❌ Email gönderilirken hata oluştu:');
      console.error('Error:', result.error);
      console.error('Details:', result.details);
    }
  } catch (error) {
    console.error('❌ Request hatası:', error.message);
  }
}

// Test çalıştır
testEmail();
