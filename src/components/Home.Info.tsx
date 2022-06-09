export function Info() {
    const template = (
        <>
            <div className="box__imgs">
                <div className="img-box">
                    <figure className="poster_film">
                        <img
                            src="img/strangerThings.jpeg"
                            className="film_1"
                            alt=""
                        />
                        <figcaption>
                            Que mejor momento para ver la última temporada de tu
                            serie favorita que un Domingo de viento fuerte y
                            truenos, en casa con la manta
                        </figcaption>
                    </figure>
                    <div>
                        <img
                            className="acentuacio_inicial"
                            src="images/left-quote.png"
                            alt=""
                        />
                    </div>

                    <div className="right_quote">
                        <img
                            className="acentuacion_final"
                            src="images/right-quote.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className="img-box">
                    <figure className="poster_film">
                        <img src="img/requiem.jpeg" className="film_1" alt="" />
                        <figcaption>
                            Un día gris y de lluvia?, no te preocupes tenemos tu
                            pelicula
                        </figcaption>
                    </figure>
                    <div>
                        <img src="images/left-quote.png" alt="" />
                    </div>

                    <div className="right_quote">
                        <img src="images/right-quote.png" alt="" />
                    </div>
                </div>

                <div className="img-box">
                    <figure className="poster_film">
                        <img
                            src="img/jojoRabbit.jpeg"
                            className="film_1"
                            alt=""
                        />
                        <figcaption>
                            Y esas tardes de Otoño con aun un clima cálido en
                            las que disfrutar de peliculas de humor negro, con
                            final feliz.
                        </figcaption>
                    </figure>
                    <div>
                        <img src="images/left-quote.png" alt="" />
                    </div>

                    <div className="right_quote">
                        <img src="images/right-quote.png" alt="" />
                    </div>
                </div>
            </div>

            <h2 className="our_text">
                <strong>Nueva forma De sentir el cine</strong>
            </h2>
            <p className="aboutDescription">
                Porque está demostrado, que la climatológia es uno de los
                factores que afecta a nuestro caracter e incluso a nuestra salud
                mental. "Let me see", nos proporciona una selección de films
                acorde al clima de tu zona y a tu posible estado de ánimo al
                respecto.
            </p>
        </>
    );
    return template;
}
