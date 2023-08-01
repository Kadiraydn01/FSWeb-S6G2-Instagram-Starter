/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

import React, { useState } from "react";
import "./bilesenler/AramaCubugu";
import "./bilesenler/Gonderiler";
import "./App.css";
import sahteVeri from "./sahte-veri";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriterleri, setAramaKriterleri] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    setGonderiler((x) => {
      return x.map((gonderi) => {
        if (gonderi.id === gonderiID) {
          return {
            ...gonderi,
            begeniSayisi: gonderi.begeniSayisi + 1,
          };
        }
        return gonderi;
      });
    });
  };

  return (
    <div className="App">
      <AramaCubugu
        aramaKriterleri={aramaKriterleri}
        setAramaKriterleri={setAramaKriterleri}
      />
      <Gonderiler gonderiler={gonderiler} gonderiyiBegen={gonderiyiBegen} />
    </div>
  );
};

export default App;
