import React, { useState } from "react"; // State hook'u import edin
import "./App.css";
import AramaÇubuğu from "./bilesenler/AramaCubugu/AramaCubugu"; // AramaÇubuğu bileşenini import edin
import Gönderiler from "./bilesenler/Gonderiler/Gonderiler"; // Gönderiler bileşenini import edin
import sahteVeri from "./sahte-veri"; // sahteVeri'yi import edin

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, sahteVeri'yi yükleyin.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  const [gonderiler, setGonderiler] = useState(sahteVeri);

  // Arama çubuğunun çalışması için, arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [aramaKriteri, setAramaKriteri] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

      "setGonderi" yi çağırın ve state ine "gonderiler.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
    */
    setGonderiler((prevGonderiler) =>
      prevGonderiler.map((gonderi) =>
        gonderi.id === gonderiID
          ? { ...gonderi, likes: gonderi.likes + 1 }
          : gonderi
      )
    );
  };

  return (
    <div className="App">
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
      <AramaÇubuğu
        aramaKriteri={aramaKriteri}
        setAramaKriteri={setAramaKriteri}
      />
      <Gönderiler
        gonderiler={gonderiler}
        gonderiyiBegen={gonderiyiBegen}
        aramaKriteri={aramaKriteri}
      />
    </div>
  );
};

export default App;
