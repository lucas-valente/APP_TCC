import React, { createContext, useState } from "react";

import { texts } from "../../@types/types";
import { languages, TextsEnglish, TextsPortuguese } from "../../Data/idiomas";

type TpropsContext = {
  language: string,
  texts: texts,
  toggleLanguage: void | any
}

export const LanguageContext = createContext<TpropsContext>(
  {

    language: "portuguese",
    texts: TextsPortuguese,
    toggleLanguage: () => { }

  }
);

type props = { children: React.ReactNode }

const LanguageContextProvider = ({ children }: props) => {

  const [language, setLanguage] = useState("portuguese");

  const [texts, setTexts] = useState<texts>(TextsPortuguese);

  const toggleLanguage = (language: string): void => {

    switch (language) {

      case languages.ptBr:
        return setLanguage(languages.ptBr), setTexts(TextsPortuguese);

      case languages.enUs:
        return setLanguage(languages.enUs), setTexts(TextsEnglish);

      default:
        return setLanguage(languages.ptBr), setTexts(TextsPortuguese);

    }

  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );

};

export default LanguageContextProvider;
