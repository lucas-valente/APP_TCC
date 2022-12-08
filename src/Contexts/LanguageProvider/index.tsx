import React, { createContext, useState } from "react";
import { texts } from "../../@types/types";
import { initialValue, languages, TextsEnglish, TextsPortuguese } from "../../Data/idiomas";

type propsContext = {
  language: "portuguese",
  texts: texts,
  toggleLanguagePortuguese: void,
  toggleLanguageEnglish: void,
  toggleLanguage: void
}

export const LanguageContext = createContext({

  language: "portuguese",
  texts: initialValue,
  toggleLanguagePortuguese: () => { },
  toggleLanguageEnglish: () => { },
  toggleLanguage: () => { }

});

type props = {
  children: React.ReactNode
}

const LanguageContextProvider = ({ children }: props) => {

  const [language, setLanguage] = useState("portuguese");

  const [texts, setTexts] = useState<texts | any>(initialValue);

  const toggleLanguagePortuguese = () => {

    return setLanguage("portuguese"), setTexts(TextsPortuguese);

  };

  const toggleLanguageEnglish = () => {

    return setLanguage("english"), setTexts(TextsEnglish);

  };

  const toggleLanguage = (): void => {

    switch (language) {

      case languages.ptBr:
        return setLanguage(languages.ptBr), setTexts(TextsPortuguese);
        break;

      case languages.enUs:
        return setLanguage(languages.enUs), setTexts(TextsEnglish);
        break;

      default:
        return setLanguage(languages.ptBr), setTexts(TextsPortuguese);
        break;
    }

  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguagePortuguese, toggleLanguageEnglish, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );

};

export default LanguageContextProvider;
