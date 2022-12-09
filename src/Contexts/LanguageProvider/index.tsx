import React, { createContext, Dispatch, SetStateAction, useState } from "react";
import { texts } from "../../@types/types";
import { languages, TextsEnglish, TextsPortuguese } from "../../Data/idiomas";

export type TpropsContext = {
  language: string,
  texts: texts,
  toggleLanguage: void | any
  setLanguage: Dispatch<SetStateAction<string>>
}

export const LanguageContext = createContext<TpropsContext>(
  {

    language: "portuguese",
    texts: TextsPortuguese,
    toggleLanguage: () => { },
    setLanguage: (): Dispatch<SetStateAction<string>> | void => { }

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
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );

};

export default LanguageContextProvider;
