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
        perguntas: {
          p1: string,
          p2: string,
          p3: string,
          p4: string,
          p5: string,
        }
        mensagemDeErro: {
          p1: string,
          p2: string,
          p5: string,
        },
        mapText: {
          title: string,
          subTitle: string
        }
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
      header: 'Enquete',
      perguntas: {
        p1: 'Qual o seu nome ?',
        p2: 'Qual o seu país de origem ?',
        p3: 'Há quanto tempo está no Brasil ?',
        p4: 'Atualmente você está empregado ?',
        p5: 'Qual é a maior dificuldade enfrentada como imigrante ?',
      },
      mensagemDeErro: {
        p1: 'Informe o nome',
        p2: 'Informe o pais',
        p5: 'Informe a descrição',
      }
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
      header: 'Enquete',
      perguntas: {
        p1: 'Qual o seu nome ?',
        p2: 'Qual o seu país de origem ?',
        p3: 'Há quanto tempo está no Brasil ?',
        p4: 'Atualmente você está empregado ?',
        p5: 'Qual é a maior dificuldade enfrentada como imigrante ?',
      },
      mensagemDeErro: {
        p1: 'Informe o nome',
        p2: 'Informe o pais',
        p5: 'Informe a descrição',
      },
      mapText: {
        title: 'Como Chegar !',
        subTitle: 'Clique no mapa para encontrar a sua rota'
      }
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
        header: 'Enquete',
        perguntas: {
          p1: 'Qual o seu nome ?',
          p2: 'Qual o seu país de origem ?',
          p3: 'Há quanto tempo está no Brasil ?',
          p4: 'Atualmente você está empregado ?',
          p5: 'Qual é a maior dificuldade enfrentada como imigrante ?',
        },
        mensagemDeErro: {
          p1: 'Informe o nome',
          p2: 'Informe o pais',
          p5: 'Informe a descrição',
        },
        mapText: {
          title: 'Como Chegar !',
          subTitle: 'Clique no mapa para encontrar a sua rota'
        }
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
        header: 'Survey',
        perguntas: {
          p1: 'What is your name ?',
          p2: 'Where are you from ?',
          p3: 'How long have you been in Brazil ?',
          p4: 'Are you currently employed ?',
          p5: 'What is the greatest difficulty have you faced as an immigrant ?',
        },
        mensagemDeErro: {
          p1: 'Inform the name',
          p2: 'Inform the coutry',
          p5: 'Inform the description',
        },
        mapText: {
          title: 'How to Get There !',
          subTitle: 'Click on the map to find your route'
        }
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
