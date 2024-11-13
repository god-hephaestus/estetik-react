import ParentState from "@/components/plastik-cerrahi-istanbul/ParentState";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estetik International | Karın Germe",
  description:
    "Karın germe ile daha düz bir karın hayaliniz gerçek olsun! Estetik International'da güvenli ve etkili yöntemlerle randevu alın!",
};

const buttonsData = [
  {
    label: "Meme Estetiği",
    image1: "/BeforeAfter/breast.webp",
    image2: "/BeforeAfter/breast2.webp",
    faqs: [
      {
        question:
          "Hangi meme ameliyatının bana uygun olduğunu nasıl anlayabilirim?",
        answer:
          "Cerrahlarımız, uzmanlıklarıyla ihtiyaçlarınızı ve beklentilerinizi anlamak için size özel bir danışmanlık sunuyor. Böylece, size en uygun işlemi belirleyerek doğru yönlendirmeyi yapabiliyoruz.",
      },
      {
        question: "Meme ameliyatı sonrası iyileşme süresi ne kadar sürer?",
        answer:
          "İyileşme süresi kişiden kişiye değişiklik gösterebilir, ancak çoğu hasta 1-2 hafta içinde hafif aktivitelere dönebilir. Tam iyileşme ise işlemin türüne göre 4-6 haftayı bulabilir. Sizin için hazırladığımız detaylı bakım talimatlarıyla süreci en rahat şekilde geçirmenizi sağlıyoruz.",
      },
      {
        question: "İyileşme sürecinde ameliyat izleri nasıl azaltılır?",
        answer:
          "Cerrahlarımız izleri en aza indirmek için en yeni teknikleri kullanır. İyileşme sürecinde ise cilt dokusunun yenilenmesine yardımcı olan bakım önerileri ve tedavilerle izlerin görünümünü daha da azaltıyoruz.",
      },
      {
        question: "Meme ameliyatı emzirmeyi etkiler mi?",
        answer:
          "Meme implantları genellikle emzirmeyi etkilemez. Ancak, meme dikleştirme veya küçültme gibi işlemlerde, doku değişimlerine bağlı olarak emzirme üzerinde etkisi olabilir. Bu konuda en doğru bilgi için cerrahınızla görüşmeniz önemlidir.",
      },
      {
        question: "Ameliyat sonuçları ne kadar kalıcı olur?",
        answer:
          "Meme ameliyatının sonuçları uzun süreli olabilir ancak yaşlanma ve kilo değişimleri gibi faktörler zamanla bu sonuçları etkileyebilir. Cerrahınızın önerilerine uymak ve sağlıklı bir yaşam tarzı sürdürmek, sonuçların kalıcılığını artıracaktır.",
      },
      {
        question:
          "Ameliyattan ne kadar süre sonra günlük yaşantıma dönebilirim?",
        answer:
          "Genellikle hafif aktivitelere 1-2 hafta içinde dönebilirsiniz, ancak yorucu egzersizlerden ve ağır kaldırmaktan yaklaşık 4-6 hafta boyunca kaçınmanız önerilir. Cerrahınız, iyileşme süreciniz boyunca size özel bir planla rehberlik edecektir.",
      },
    ],
    stateKey: "gallery1",
  },
  {
    label: "BBL",
    image1: "/BeforeAfter/bbl.webp",
    image2: "/BeforeAfter/bbl2.webp",
    faqs: [
      {
        question:
          "Brezilya Poposu (BBL) nedir ve popo implantlarından nasıl farklıdır?",
        answer:
          "BBL, doğal görünümlü popo büyütme için kendi yağınızı kullanırken, implantlar sentetiktir.",
      },
      {
        question: "BBL işlemi için en uygun aday kimdir?",
        answer:
          "BBL, genel sağlık durumu iyi olan ve belirli bölgelerde yeterli yağ rezervine sahip olan kişilere önerilir. Ayrıca, vücut hatlarını doğal bir şekilde geliştirmek isteyenler için de uygundur.",
      },
      {
        question: "BBL işlemi sonrası yağın kalıcılığı ne kadar?",
        answer:
          "BBL işlemiyle transfer edilen yağın bir kısmı zamanla vücut tarafından emilebilir, ancak sağlıklı bir yaşam tarzı sürdürüldüğünde, geri kalan yağın kalıcılığı genellikle uzun vadede devam eder.",
      },
      {
        question:
          "BBL'yi vücut şeklimi iyileştirmek için liposuction veya karın germe gibi diğer cerrahilerle birleştirebilir miyim?",
        answer:
          "Evet, birçok hasta daha kapsamlı bir vücut kontörleme için BBL'yi diğer işlemlerle birleştirir.",
      },
      {
        question:
          "BBL sonuçlarımı korumak için ne yapabilirim ve gelecekte takip tedavilerine ihtiyaç duyacak mıyım?",
        answer:
          "BBL sonuçlarınızı uzun süre korumak için dengeli bir kiloyu sürdürün ve sağlıklı bir yaşam tarzına uyun. Genellikle takip tedavilerine ihtiyaç duyulmaz.",
      },
      {
        question: "BBL'min nihai sonuçlarını görmek ne kadar sürecek?",
        answer:
          "Şekilde anında bir değişiklik fark edeceksiniz, ancak nihai sonuçlar genellikle şişlikler indiğinde ve vücudunuz yağ transferine alıştığında 3-6 ay sonra görünür hale gelir.",
      },
    ],
    stateKey: "gallery2",
  },
  {
    label: "Total Body",
    image1: "/BeforeAfter/totalbody.webp",
    image2: "/BeforeAfter/totalbody2.webp",
    faqs: [
      {
        question:
          "Total Body Reshaping ameliyatı sonrası iyileşme süresi ne kadardır?",
        answer:
          "İyileşme süreci birkaç hafta sürebilir. Çoğu hasta 2-3 hafta içinde hafif aktivitelere dönebilirken, tam iyileşme ve nihai sonuçlar birkaç ayı bulabilir.",
      },
      {
        question: "Total Body Reshaping ile ciddi bir kilo kaybı yaşar mıyım?",
        answer:
          "Total Body Reshaping, daha çok vücut hatlarınızı belirginleştirmek ve şekillendirmek için yapılan bir işlemdir; esas amacı kilo kaybı değildir. Bu operasyon, genellikle hedef kilosuna ulaşmış olan hastalar için daha uygundur.",
      },
      {
        question: "Total Body Reshaping sonuçları ne kadar kalıcı olur?",
        answer:
          "Sonuçlar, kilonuzu koruduğunuz ve sağlıklı bir yaşam tarzı sürdürdüğünüz sürece uzun süre kalıcı olabilir. Ancak, zamanla doğal yaşlanma vücudunuzun görünümünü etkileyebilir.",
      },
      {
        question:
          "Total Body Reshaping tam olarak nedir ve istediğim vücut formuna ulaşmama nasıl yardımcı olabilir?",
        answer:
          "Toplam vücut şekillendirme, vücut hatlarını iyileştirmek ve oranları dengeli hale getirmek için birden fazla işlemi bir araya getirir. Bu süreçte inatçı yağ birikimleri, gevşek cilt veya kas tonusuna odaklanarak daha şekilli bir görünüm elde etmenizi sağlar.",
      },
      {
        question:
          "İşlem sonrasında doğal ve dengeli bir görünüm elde edebilir miyim?",
        answer:
          "Evet, toplam vücut şekillendirme, doğal bir görünüme sahip olmanız için özenle planlanır. Vücudun orantısına dikkat edilerek yapılan işlemler, sonuçların doğal ve estetik görünmesini sağlar.",
      },
      {
        question:
          "Total Body Reshaping sonuçlarını nasıl koruyabilirim ve hangi yaşam tarzı değişikliklerini yapmam gerekir?",
        answer:
          "Sonuçları korumak için dengeli bir beslenme, düzenli egzersiz ve büyük kilo dalgalanmalarından kaçınmak önemlidir. Bu faktörler, vücut şekillendirme işlemlerinizin uzun vadeli sonuçlarını etkileyebilir.",
      },
    ],
    stateKey: "gallery3",
  },
  {
    label: "Karın Germe",
    image1: "/BeforeAfter/tummytuck.webp",
    image2: "/BeforeAfter/tummytuck2.webp",
    faqs: [
      {
        question:
          "Karın Germe (Tummy Tuck) nedir ve liposuction'dan nasıl farklıdır?",
        answer:
          "Karın germe işlemi, karın kaslarını sıkılaştırır ve fazla deriyi alarak daha düz bir karın görünümü sağlar. Liposuction ise yağın alınmasına odaklanır ve sarkan cilt ya da kas gevşekliği ile ilgilenmez.",
      },
      {
        question:
          "Karın germe sonrası iyileşme süreci ne kadar sürer ve günlük aktivitelerime ne zaman dönebilirim?",
        answer:
          "İyileşme genellikle 4-6 hafta sürer. Hafif aktiviteler 2 hafta sonra yeniden başlayabilir, ancak tam iyileşme süresi boyunca ağır aktivitelerden kaçınılmalıdır.",
      },
      {
        question:
          "Karın germe sonrası cilt elastikiyetimi nasıl koruyabilirim?",
        answer:
          "Karın germe sonrası cilt elastikiyetini korumak için dengeli bir beslenme, düzenli egzersiz ve bol su içmek önemlidir. Ayrıca, cildin nemli kalmasını sağlamak ve güneşten korumak da faydalı olabilir.",
      },
      {
        question:
          "Karın germe işlemini, vücut şeklimi iyileştirmek için liposuction veya BBL gibi diğer prosedürlerle birleştirebilir miyim?",
        answer:
          "Evet, karın germe işlemini liposuction veya Brezilya Popo Kaldırma gibi diğer işlemlerle birleştirmek, daha kapsamlı vücut kontürleme sonuçları elde etmeye yardımcı olabilir.",
      },
      {
        question:
          "Karın germeden sonra nihai sonuçlarımı görmek ne kadar sürecek?",
        answer:
          "Ameliyattan hemen sonra bazı sonuçlar görünürken, nihai sonuçlar genellikle şişlikler azaldıktan ve iyileşme süreci tamamlandıktan sonra 3-6 ay içinde görünür hale gelir.",
      },
      {
        question: "Karın germe, çatlak izlerini kaldırmaya yardımcı olur mu?",
        answer:
          "Karın germe işlemi, göbek altında yer alan alt karın bölgesindeki çatlak izlerini azaltabilir veya ortadan kaldırabilir, çünkü bu cilt genellikle prosedür sırasında çıkarılır. Bu alanın dışındaki çatlak izleri etkilenmeyebilir.",
      },
    ],
    stateKey: "gallery4",
  },
  {
    label: "Rinoplasti",
    image1: "/BeforeAfter/rhinof.webp",
    image2: "/BeforeAfter/rhinof2.webp",
    faqs: [
      {
        question:
          "Rinoplasti nedir ve cerrahi olmayan burun şekillendirmeden nasıl farklıdır?",
        answer:
          "Rinoplasti, estetik veya fonksiyonel amaçlarla burun yapısını değiştiren cerrahi bir prosedürdür; cerrahi olmayan şekillendirme ise, kemik veya kıkırdağı değiştirmeden, dolgu maddeleri kullanarak küçük kontur değişiklikleri yapar.",
      },
      {
        question:
          "Rinoplasti sonrası iyileşme süreci ne kadar sürer ve günlük aktivitelere ne zaman dönebilirim?",
        answer:
          "İyileşme genellikle başlangıçta 1-2 hafta sürer ve şişlik aylar içinde yavaşça azalır. Hafif aktiviteler genellikle bir hafta sonra yeniden başlayabilirken, zorlayıcı aktiviteler birkaç hafta boyunca kaçınılmalıdır.",
      },
      {
        question:
          "Rinoplasti ile ilişkili herhangi bir risk var mı ve güvenli ve başarılı bir sonuç için neler yapabilirim?",
        answer:
          "Riskler, deneyimli bir cerrah tarafından gerçekleştirildiğinde en aza indirilir. İyileşme sürecinde şişliği azaltmak ve burnu korumak için tüm bakım talimatlarına uymak, güvenli bir iyileşme için önemlidir.",
      },
      {
        question:
          "Rinoplasti, nefes almamı iyileştirir mi ve eğri septum gibi sorunları giderir mi?",
        answer:
          "Rinoplasti, burun septumunu düzleştiren septoplasti ile birleştirildiğinde nefes almayı iyileştirebilir. Bu seçenek, hem fonksiyonel hem de estetik endişeleri ele alır.",
      },
      {
        question:
          "Rinoplasti sonrası burnumda değişiklikler olmaya devam edecek mi ve sonuçlar ne kadar sürer?",
        answer:
          "Şişlik, ilk yıl burnun görünümünü değiştirebilirken, sonuçlar genellikle uzun ömürlüdür. Yaşlanma nedeniyle zamanla küçük değişiklikler olabilir, ancak yeni şekliniz büyük ölçüde kalıcı olacaktır.",
      },
      {
        question:
          "Rinoplasti öncesinde ve sonrasında en iyi sonuçları sağlamak için nelerden kaçınmalıyım?",
        answer:
          "Ameliyattan önce, iyileşmeyi etkileyebileceğinden sigara içmek ve belirli ilaçlardan kaçının. Ameliyattan sonra, optimal sonuçlar sağlamak için zorlayıcı aktivitelerden, burun silmekten ve buruna herhangi bir baskı yapmaktan kaçının.",
      },
    ],
    stateKey: "gallery5",
  },
];
const GalleryImgsData = {
  gallery1: [
    {
      src: "/BeforeAfter/gallery/breast/Meme - 1.webp",
      alt: "Meme Estetiği",
    },
    {
      src: "/BeforeAfter/gallery/breast/Meme - 2.webp",
      alt: "Meme Estetiği",
    },
    {
      src: "/BeforeAfter/gallery/breast/Meme - 3.webp",
      alt: "Meme Estetiği",
    },
    {
      src: "/BeforeAfter/gallery/breast/Meme - 4.webp",
      alt: "Meme Estetiği",
    },
    {
      src: "/BeforeAfter/gallery/breast/Meme - 5.webp",
      alt: "Meme Estetiği",
    },
  ],
  gallery2: [
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 1.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 2.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 3.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 4.webp",
      alt: "BBL",
    },
    {
      src: "/BeforeAfter/gallery/bbl/Bbl - 6.webp",
      alt: "BBL",
    },
  ],
  gallery3: [
    {
      src: "/BeforeAfter/gallery/total/Total - 1.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 2.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 3.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 4.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 5.webp",
      alt: "Total Body",
    },
    {
      src: "/BeforeAfter/gallery/total/Total - 6.webp",
      alt: "Total Body",
    },
  ],
  gallery4: [
    {
      src: "/BeforeAfter/gallery/tummy/Tummytuck1.webp",
      alt: "Tummy Tuck",
    },
    {
      src: "/BeforeAfter/gallery/tummy/Tummytuck2.webp",
      alt: "Tummy Tuck",
    },
    {
      src: "/BeforeAfter/gallery/tummy/Tummytuck3.webp",
      alt: "Tummy Tuck",
    },
    {
      src: "/BeforeAfter/gallery/tummy/Tummytuck4.webp",
      alt: "Tummy Tuck",
    },
    {
      src: "/BeforeAfter/gallery/tummy/Tummytuck5.webp",
      alt: "Tummy Tuck",
    },
  ],
  gallery5: [
    {
      src: "/BeforeAfter/gallery/rhinoplasty-female/Rhino1.webp",
      alt: "Rhinoplasty",
    },
    {
      src: "/BeforeAfter/gallery/rhinoplasty-female/Rhino2.webp",
      alt: "Rhinoplasty",
    },
    {
      src: "/BeforeAfter/gallery/rhinoplasty-female/Rhino3.webp",
      alt: "Rhinoplasty",
    },
    {
      src: "/BeforeAfter/gallery/rhinoplasty-female/Rhino4.webp",
      alt: "Rhinoplasty",
    },
    {
      src: "/BeforeAfter/gallery/rhinoplasty-female/Rhino5.webp",
      alt: "Rhinoplasty",
    },
  ],
};
const testimonialsData = {
  gallery1: [
    {
      name: "Yekaterina K.",
      operation: "Meme Büyütme",
      message:
        "Meme büyütme operasyonum mükemmel geçti! Ekip son derece profesyonel ve sıcakkanlıydı, tüm süreç boyunca kendimi rahat hissettim.",
      genderFemale: true,
    },
    {
      name: "Olha B.",
      operation: "Meme Estetiği",
      message:
        "Meme estetiği yaptırdım ve sonuçlardan daha mutlu olamazdım. Aldığım bakım gerçekten üst düzeydi!",
      genderFemale: true,
    },
    {
      name: "Irina S.",
      operation: "Meme Dikleştirme",
      message:
        "Meme dikleştirme işlemi yaptırdım ve tüm süreç çok pürüzsüz geçti. İlgi harikaydı, kendimi güvende ve desteklenmiş hissettim.",
      genderFemale: true,
    },
    {
      name: "Maria J.",
      operation: "Meme Küçültme",
      message:
        "Meme küçültme yaptırdım ve sonuçlar beklentilerimin ötesinde oldu. Doktorlar inanılmaz yetenekliydi.",
      genderFemale: true,
    },
    {
      name: "Begüm K.",
      operation: "Meme Büyütme",
      message:
        "Meme büyütme yaptırdım ve sonuçlardan çok memnunum. Ekip hem ilgili hem de profesyoneldi. Özellikle Tahir ve Sabir’e desteklerinden dolayı teşekkürler.",
      genderFemale: true,
    },
    {
      name: "Katrina S.",
      operation: "Meme Büyütme",
      message:
        "Meme büyütme yaptırdım, ameliyat hızlı ve iyileşme süreci çok rahat geçti. 10 gün sonra ağrılar neredeyse geçmişti, şimdi ise üç ay oldu ve sonuçlara bayılıyorum!",
      genderFemale: true,
    },
    {
      name: "Elena J.",
      operation: "Meme Büyütme",
      message:
        "Meme büyütme işlemi aldığım hizmete göre gerçekten çok uygun fiyatlıydı. Konsültasyondan iyileşme sürecine kadar her şey çok pürüzsüz geçti. Oda ve yemek servisleri de mükemmeldi!",
      genderFemale: true,
    },
    {
      name: "Natasha D.",
      operation: "Meme Büyütme",
      message:
        "Meme büyütme sonrası kendimi çok iyi bakılmış hissettim, özellikle konsültasyon ve sonrasındaki bakım çok iyiydi. Harika bir deneyimdi!",
      genderFemale: true,
    },
    {
      name: "Cathy K.",
      operation: "Meme Dikleştirme ve İple Yüz Germe",
      message:
        "Meme dikleştirme ve yüz germe işlemi yaptırdım. Sonuçlar harika; iyileşme süreci sorunsuz ve izler minimum seviyede kaldı. Ekip çok destekleyici ve profesyoneldi. Estetik International’ı kesinlikle tavsiye ederim.",
      genderFemale: true,
    },
    {
      name: "Sena U.",
      operation: "Meme İmplantı",
      message:
        "Türkiye’nin en iyi doktorları burada. Ameliyat çok basitti ve iyileşme süresi beklediğimden daha kısaydı. Çok teşekkürler!",
      genderFemale: true,
    },
  ],
  gallery2: [
    {
      name: "Gabriella T.",
      operation: "BBL",
      message:
        "Brezilya Popo Kaldırma (BBL) işlemi yaptırdım ve sonuçlardan çok memnunum. Ekip, süreci çok rahat ve konforlu hale getirdi.",
      genderFemale: true,
    },
    {
      name: "Victoria L.",
      operation: "BBL",
      message:
        "Endişelerime rağmen, Estetik International BBL için en iyi bakımı sağladı. Ekip oldukça olumlu ve profesyoneldi.",
      genderFemale: true,
    },
    {
      name: "Kvitalina R.",
      operation: "BBL ve Meme Büyütme",
      message:
        "Burada BBL ve meme büyütme işlemi yaptırdım ve sonuçlar beklentimin çok üzerinde! Yeni şeklimi seviyorum.",
      genderFemale: true,
    },
    {
      name: "Nurgül Z.",
      operation: "BBL and Liposuction",
      message:
        "Estetik International'da BBL ve liposuction yaptırdım ve hayal ettiğim bedene kavuştum! Sonuçlar o kadar doğal görünüyor ki, klinik ekibi başlangıçtan sona kadar destekleyiciydi. Şiddetle tavsiye ediyorum!",
      genderFemale: true,
    },
    {
      name: "Ariana P.",
      operation: "BBL ve Meme Büyütme",
      message:
        "BBL ve meme ameliyatımı gerçekleştirdi ve bundan daha fazla heyecan duyamazdım! Tüm deneyim akıcı ve profesyoneldi!",
      genderFemale: true,
    },
    {
      name: "Natalya A.",
      operation: "BBL",
      message:
        "Estetik International'da bbl yaptırdım ekip son derece profesyoneldi ve sonuçlar etkileyici. Harika desteği için  ekibe özel teşekkürler!",
      genderFemale: true,
    },
    {
      name: "Jennifer T.",
      operation: "BBL",
      message:
        "İki ay önce BBL yaptırdım ve sonuçlardan çok memnunum. Bu kliniği kesinlikle tavsiye ediyorum ve gelecek yıl karın germe ameliyatımı dört gözle bekliyorum!",
      genderFemale: true,
    },
    {
      name: "Elif D.",
      operation: "BBL and Liposuction",
      message:
        "Tekrar gitmek isteyeceğiniz bir klinik. Her şey en üst seviyede. Güleryüzlü, dikkatli doktorlar ve alanında profesyoneller.",
      genderFemale: true,
    },
    {
      name: "Yevgeniya S.",
      operation: "BBL and Meme Büyütme",
      message:
        "BBL ve meme büyütme işlemi yaptım. Sonuçlar gerçekten mükemmel!",
      genderFemale: true,
    },
    {
      name: "Anastasia P.",
      operation: "BBL ve Liposuction",
      message:
        "BBL işlemim doğal gözüküyor. Ekip süreç boyunca mükemmel destek sağladılar.",
      genderFemale: true,
    },
  ],
  gallery3: [
    {
      name: "Daniela A.",
      operation: "Total Body Reshaping ve Spider Web Estetiği",
      message:
        "Estetik International ekibine bedenimi dönüştürdükleri için teşekkür ederim! Spider Web ve toplam vücut sonuçları muhteşem. Harika bir klinik ve personel. Arkadaşlarıma şiddetle tavsiye ediyorum!",
      genderFemale: true,
    },
    {
      name: "Dilek S.",
      operation: "Total Body Reshaping",
      message:
        "Doktor ve ekibiyle inanılmaz bir deneyim yaşadım. Ameliyat çok düzgün geçti, personel destekleyiciydi ve hastane beş yıldızlı bir otel gibi hissettirdi. Sonuçlardan çok mutluyum!",
      genderFemale: true,
    },
    {
      name: "Emily S.",
      operation: "Total Body Reshaping",
      message:
        "Tüm vücut şekillendirme işlemi yaptırdım ve sonuçlar harikaydı! Ekip destekleyiciydi ve iyileşme sürecim beklediğimden daha hızlı geçti.",
      genderFemale: true,
    },
    {
      name: "Esther D.",
      operation: "Total Body Reshaping",
      message:
        "Her şey %100 yapıldı. Kendimi güvende hissettim ve hemşireler ile ekip harikaydı. Doktorum harika bir iş çıkardı. Çok memnun ve mutluyum.",
      genderFemale: true,
    },
    {
      name: "Hilal Ş.",
      operation: "Total Body Reshaping",
      message:
        "Teşekkürler Estetik International. Ameliyatımdan çok memnun kaldım. Doktorlar şahane, yer mükemmel!",
      genderFemale: true,
    },
    {
      name: "Sophia R.",
      operation: "Total Body Reshaping",
      message:
        "Vücut şekillendirme tedavimden son derece memnunum! Hastane ekibi olağanüstüydü ve sonuçlar kusursuz.",
      genderFemale: true,
    },
    {
      name: "Zeynep D.",
      operation: "Total Body Reshaping",
      message:
        "Burada profesyonellik en üst düzeyde. Ekipteki herkesin kalbi çok güzel. Odalar tek kişilik ve işin en iyi şekilde yapılması için en iyi ekipmanlarla donatılmış. Hala karar vermeyenlere tavsiye ederim.",
      genderFemale: true,
    },
    {
      name: "Maria T.",
      operation: "Total Body Reshaping",
      message:
        "Vücut şekilendirme işlemi yaptırdım ve sonuçlar muhteşem. Personel beni rahat hissettirdi ve her şey sorunsuz gitti.",
      genderFemale: true,
    },
    {
      name: "Francesca J.",
      operation: "Total Body Reshaping",
      message:
        "Estetik International'daki hizmetten çok memnunum. Klinik mükemmel ve tüm estetik işlemlerim başarılı geçti. Teşekkür ederim!",
      genderFemale: true,
    },
    {
      name: "Isabel R.",
      operation: "Total Body Reshaping",
      message:
        "Estetik'teki ameliyatımdan çok memnun kaldım. Doktor ve personel harikaydı, sağlık danışmanlarım her aşamada mükemmel destek sağladı. Hemşireler de oldukça dikkatliydi. Tüm ekibe teşekkürler!",
      genderFemale: true,
    },
  ],
  gallery4: [
    {
      name: "Sarah P.",
      operation: "Karın Germe",
      message:
        "Karın germe işlemim mükemmel geçti. Sonuçlar harika ve bakım çok kaliteli.",
      genderFemale: true,
    },
    {
      name: "Jeniffer B.",
      operation: "Karın Germe",
      message:
        "Estetik International'de yaptığım karın germe harikaydı! Gelecek yaz bikinimi giymek için süper heyecanlıyım!",
      genderFemale: true,
    },
    {
      name: "Maria Y.",
      operation: "Karın Germe",
      message:
        "Estetik International ekibi inanılmazdı! Karın germe ve lifting yaptırdım, sonuçları çok seviyorum. Her adımda kendimi güvende hissettim ve konaklama harikaydı.",
      genderFemale: true,
    },
    {
      name: "Angel B.",
      operation: "Karın Germe",
      message:
        "Doktor ve personel dikkatlidir, hızlı ve etkilidir. Ferah bir oda ve genel olarak harika bir deneyim. Kesinlikle tavsiye ediyorum!",
      genderFemale: true,
    },
    {
      name: "Ariana P.",
      operation: "Karın Germe ve Meme Büyütme",
      message:
        "Dikkatli doktor ve destekleyici hemşireler. Geri dönmek isteyeceğiniz bir klinik! Her adımda yüksek kaliteli bakım. Teşekkürler, Estetik International.",
      genderFemale: true,
    },
    {
      name: "Caroline N.",
      operation: "Lipo 360 ve Karın Germe",
      message:
        "Lipo 360 + Karın Germe. Şimdi ameliyattan 23 gün sonra, sonuçlardan çok memnunum. Hayatımı değiştiren bir deneyim!",
      genderFemale: true,
    },
    {
      name: "Jennifer O.",
      operation: "Karın Germe",
      message:
        "Dr. B'nin yaptığı karın germe işlemi başarılıydı. Ameliyattan 5 hafta sonra sonuçlardan çok mutluyum. Estetik'in harika ekibine minnettarım.",
      genderFemale: true,
    },
    {
      name: "Charlotte R.",
      operation: "Lipo ve Karın Germe",
      message:
        "Geri dönmek isteyeceğiniz bir klinik! Her şey en yüksek seviyede. Samimi bir gülümsemeye sahip dikkatli doktorlar, alanında profesyoneller.",
      genderFemale: true,
    },
    {
      name: "Yana M. ",
      operation: "Karın Germe ve Rinoplasti",
      message:
        "Estetik International'daki deneyimim mükemmeldi! Profesyonellikleri beş yıldızı hak ediyor!",
      genderFemale: true,
    },
    {
      name: "Esra D.",
      operation: "Karın Germe",
      message:
        "Estetik International'daki ameliyatım başarılı geçti. Hizmet kıymetli ve personel çok ilgili. Kesinlikle tavsiye ederim.",
      genderFemale: true,
    },
  ],
  gallery5: [
    {
      name: "Fatos S.",
      operation: "Rinoplasti",
      message:
        "Kesinlikle tavsiye ediyorum! Estetik International'daki karın germe mükemmel sonuçlar verdi. Etkileyici sonuçlar ve profesyonel destek.",
      genderFemale: true,
    },
    {
      name: "Maryam A.",
      operation: "Rinoplasti",
      message:
        "Estetik International ekibiyle son derece memnunum. Kendimi çok rahatsız hissettiğim bir konuda bana yardımcı olduğunuz için teşekkürler!",
      genderFemale: true,
    },
    {
      name: "Gizem B.",
      operation: "Rinoplasti",
      message:
        "Estetik International tüm hizmetleriyle bir numara! Bundan sonra sizi tercih etmeye devam edeceğim.",
      genderFemale: true,
    },
    {
      name: "Veronika K.",
      operation: "Rinoplasti",
      message:
        "Doktor harikaydı. Ameliyat sonrasında dinlenmek için zaman ayırdı, dürüst geri bildirimde bulundu. Klinik temiz, personel dost canlısı. Başından sonuna kadar kendimi hoş karşılanmış ve sakin hissettim.",
      genderFemale: true,
    },
    {
      name: "Linda B.",
      operation: "Rinoplasti",
      message:
        "Estetik International’da rinoplasti ve BBL yaptırdım, sonuçlardan çok memnunum. Doğal sonuçlar, harika bir ekip ve büyük bir özgüven artışı!",
      genderFemale: true,
    },
    {
      name: "Dana M.",
      operation: "Rinoplasti",
      message:
        "Estetik International’daki rinoplasti beklentilerimi aştı! Doktorun becerisi, destekleyici personel ve muhteşem sonuçlar, burası estetik için en iyi yer!",
      genderFemale: true,
    },
    {
      name: "Maria S.",
      operation: "Rinoplasti",
      message:
        "Estetik International’da olağanüstü bir deneyim yaşadım! BBL, liposuction ve rinoplasti harika sonuçlar verdi. Profesyonel bir ekip, kesinlikle tavsiye ederim!",
      genderFemale: true,
    },
    {
      name: "Marva W.",
      operation: "Rinoplasti",
      message:
        "Estetik International’da rinoplasti yaptırdım ve sonuçlardan çok mutluyum. Burnum doğal ve estetik görünüyor, gerçekten profesyonel bir klinik.",
      genderFemale: true,
    },
    {
      name: "Dilek E.",
      operation: "Rinoplasti",
      message:
        "Burun düzeltme için Estetik International’a gittim. Burnum tam istediğim gibi oldu.",
      genderFemale: true,
    },
    {
      name: "Fatima A.",
      operation: "Rinoplasti",
      message:
        "Septorinoplasti ile nefes alma sorunlarımı çözdüler ve burnuma harika bir şekil verdiler. Estetik International'dan son derece memnunum.",
      genderFemale: true,
    },
  ],
};
const doctorsData = [
  {
    imageSrc: "/img/doctors/bulentcihantimur.webp",
    doctorName: "Op. Dr. Bülent Cihantimur (Dr. B)",
    doctorText:
      "Dr. B, 30 yılı aşkın tecrübesiyle, yenilikçi teknikleri ve Estetik International'ın kurucusu olarak tanınmaktadır.",
    doctorArea: "Estetik, Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/cenksen.webp",
    doctorName: "Prof. Dr. Cenk Şen",
    doctorText:
      "Dr. Cenk Şen, 30 yılı aşkın tecrübesiyle rinoplasti ve yüz estetiğinde uzmanlaşmış, doğal ve hassas sonuçları ile bilinen bir doktordur.",
    doctorArea: "Estetik, Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/fevzikuntererten.webp",
    doctorName: "Op. Dr. Fevzi Kunter Erten",
    doctorText:
      "Dr. Fevzi Kunter Erten, yüz germe, rinoplasti ve meme estetiği konularında uzmanlaşmış bir plastik cerrahi uzmanıdır.",
    doctorArea: "Estetik, Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/murattezcan.webp",
    doctorName: "Op. Dr. Murat Tezcan",
    doctorText:
      "25 yılı aşkın tecrübesiyle Dr. Murat Tezcan, meme cerrahisi, liposuction ve 'Mommy Makeover' uygulamalarında uzmanlaşmıştır.",
    doctorArea: "Estetik, Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/omerbuhsem.webp",
    doctorName: "Op. Dr. Ömer Buhşem",
    doctorText:
      "Dr. Ömer Buhşem, 20 yılı aşkın deneyimi ile rinoplasti, dolgu enjeksiyonları ve meme büyütme alanlarında uzmanlaşmıştır.",
    doctorArea: "Estetik, Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/seziceylan.webp",
    doctorName: "Op. Dr. Sezi Ceylan",
    doctorText:
      "10 yılı aşkın tecrübesiyle Dr. Sezi Ceylan, çeşitli rekonstrüktif ve estetik cerrahi alanlarında uzmanlaşmıştır.",
    doctorArea: "Estetik, Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/ismailmuratonyedi.webp",
    doctorName: "Op. Dr. İsmail Murat Onyedi",
    doctorText:
      "15 yılı aşkın tecrübesiyle Dr. İsmail Murat Onyedi, estetik ve rekonstrüktif cerrahilerde uzmanlaşmıştır.",
    doctorArea: "Estetik, Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/cagataygungorsun.webp",
    doctorName: "Dr. Çağatay Güngörsün",
    doctorText:
      "Dr. Çağatay Güngörsün, 15 yılı aşkın tecrübesiyle Fransız Askısı ve Örümcek Ağı gibi yaşlanma karşıtı tedavilerde uzmanlaşmıştır.",
    doctorArea: "Medikal Estetik Hekimi",
  },
  {
    imageSrc: "/img/doctors/ginamoret.webp",
    doctorName: "Dr. Gina Moret",
    doctorText:
      "Dr. Gina Moret, 15 yılı aşkın tecrübesiyle yüz harmonisi, dolgu uygulamaları ve yenileyici tedavilerde uzmanlaşmış bir estetik hekimdir.",
    doctorArea: "Medikal Estetik Hekimi",
  },
  {
    imageSrc: "/img/doctors/metintekcan.webp",
    doctorName: "Dr. Metin Tekcan",
    doctorText:
      "20 yıllık tecrübesiyle Dr. Metin Tekcan, GETAT ve hacamat tedavilerinde uzmandır.",
    doctorArea: "Medikal Estetik Hekimi",
  },
  {
    imageSrc: "/img/doctors/aysunuysalsoylu.webp",
    doctorName: "Dr. Aysun Uysal Soylu",
    doctorText:
      "10 yılı aşkın tecrübesiyle Dr. Aysun Uysal, Botox, dolgu ve cilt gençleştirme işlemlerinde uzmanlaşmıştır.",
    doctorArea: "Medikal Estetik Hekimi",
  },
  {
    imageSrc: "/img/doctors/aliekberyurekli.webp",
    doctorName: "Dr. Ali Ekber Yürekli",
    doctorText:
      "15 yılı aşkın tecrübesiyle Dr. Ali Ekber Yürekli, Organik Saç Ekimi, FUE ve DHI tekniklerinde uzmanlaşmış bir saç ekim uzmanıdır.",
    doctorArea: "Saç Ekimi Uzmanı",
  },
  {
    imageSrc: "/img/doctors/irfantarhan.webp",
    doctorName: "Dr. İrfan Tarhan",
    doctorText:
      "25 yılı aşkın tecrübesiyle Dr. İrfan Tarhan, kadın sağlığı alanında genital estetik ve üreme destekli tedavilere odaklanmaktadır.",
    doctorArea: "Kadın Hastalıkları ve Doğum Uzmanı",
  },
  {
    imageSrc: "/img/doctors/barisnuhoglu.webp",
    doctorName: "Prof. Dr. Barış Nuhoğlu",
    doctorText:
      "30 yılı aşkın tecrübesiyle Dr. Barış Nuhoğlu, penis estetiği ve medikal tedavi alanında uzmanlaşmıştır.",
    doctorArea: "Üroloji Uzmanı",
  },
  {
    imageSrc: "/img/doctors/kubrademir.webp",
    doctorName: "Dt. Kübra Demir",
    doctorText:
      "5 yılı aşkın tecrübesiyle Dt. Kübra Demir, diş beyazlatma, diş implantları ve Hollywood Gülüşü ile gülüş tasarımı konularında uzmanlaşmıştır.",
    doctorArea: "Diş Hekimi",
  },
];
const HeroBgData = {
  gallery1: {
    src: ["breast.mp4"],
  },
  gallery2: {
    src: ["bbl.mp4"],
  },
  gallery3: {
    src: ["total-body.mp4"],
  },
  gallery4: {
    src: ["tummy-tuck.mp4"],
  },
  gallery5: {
    src: ["rhinoplasty.mp4"],
  },
};

export default function ComparisonPage() {
  return (
    <div className="">
      <div className="w-full lg:mb-24">
        <ParentState
          activeState="gallery4"
          buttonsData={buttonsData}
          GalleryImgsData={GalleryImgsData}
          testimonialsData={testimonialsData}
          heroBgData={HeroBgData}
          doctorsData={doctorsData}
        ></ParentState>
      </div>
    </div>
  );
}
