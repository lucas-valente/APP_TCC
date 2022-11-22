import React, { createContext, useState } from "react";
type texts = {
  texts: {
    home: {
      header: string
    },
    enquete: {
      header: string
    },
    posts: {
      header: string
    },
    tabBarLabel: {
      home: {
        header: string
      },
      enquete: {
        header: string
      },
      idioma: {
        header: string
      },
    }
  }
}

const initialValue = {
  texts: {
    home: {
      header: 'Casa'
    },
    enquete: {
      header: 'Enquete'
    },
    posts: {
      header: 'Posts'
    },
    tabBarLabel: {
      home: {
        header: 'HOME'
      },
      enquete: {
        header: 'ENQUETE'
      },
      idioma: {
        header: 'IDIOMA'
      },
    }
  }
}

export const LanguageContext = createContext({
  language: "portuguese",
  texts: {
    home: {
      header: 'Casa'
    },
    enquete: {
      header: 'Enquete'
    },
    posts: {
      header: 'Posts'
    },
    tabBarLabel: {
      home: {
        header: 'HOME'
      },
      enquete: {
        header: 'ENQUETE'
      },
      idioma: {
        header: 'IDIOMA'
      },
    }
  },
  toggleLanguageP: () => { },
  toggleLanguageI: () => { }
});

type props = {
  children: React.ReactNode
}

const LanguageContextProvider = ({ children }: props) => {

  const [language, setLanguage] = useState("portuguese");
  const [texts, setTexts] = useState<texts | any>(initialValue);

  const toggleLanguageP = () => {

    const Textos = {
      home: {
        header: 'Casa'
      },
      enquete: {
        header: 'Enquete'
      },
      posts: {
        header: 'Posts'
      },
      tabBarLabel: {
        home: {
          header: 'HOME'
        },
        enquete: {
          header: 'ENQUETE'
        },
        idioma: {
          header: 'IDIOMA'
        },
      }
    }


    return setLanguage("portuguese"), setTexts(Textos);

  };
  const toggleLanguageI = () => {

    const Textos = {
      home: {
        header: 'Home'
      },
      enquete: {
        header: 'Survey'
      },
      posts: {
        header: 'Posts'
      },
      tabBarLabel: {
        home: {
          header: 'HOME'
        },
        enquete: {
          header: 'SURVEY'
        },
        idioma: {
          header: 'LANGUAGE'
        },
      }
    }

    return setLanguage("english"), setTexts(Textos);

  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguageP, toggleLanguageI, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
