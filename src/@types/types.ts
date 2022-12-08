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