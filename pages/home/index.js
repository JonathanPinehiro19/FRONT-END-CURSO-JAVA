$(document).ready(myHome)

/**
 * Função principal da página "Home".
 **/
 function myHome() {
    /**
     * Altera o título da página quando 'home' for acessada.
     **/
    changeTitle()

    $.get(app.apiArticlesURL)
        .done((data) => {

            data.forEach((art) => {

                console.log(
                    art.id,
                    art.thumbnail,
                    art.title,
                    art.resume
                )
                
            });

        })
}
