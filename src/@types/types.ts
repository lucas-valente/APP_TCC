export type texts = {
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

export type TPost = {
    id: number
    post_titulo: string
    post_descricao: string
    post_conteudo: string
    imagem: string
    user: number
    idioma: number
    link: string
}

export type TPerguntas = {
    id: number,
    perguntas_descri: string
}

export type TFormDataProps = {
    nome: string
    pais_de_origem: string,
    tempo_no_brasil: string,
    esta_empregado: string,
    dificuldade_imigrante: string,
}

export type TPais = {
    gentilico: string,
    nome_pais: string,
    nome_pais_int: string,
    sigla: string
}
