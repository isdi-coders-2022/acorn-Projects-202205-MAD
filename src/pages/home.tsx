import { premadeMatches } from '../data/premade-matches';
import { iWeather } from '../models/interface';
import './home.css';
export function Home() {
    const weather: iWeather = {
        location: {
            name: '',
            region: '',
            country: '',
        },
        current: {
            temp_c: 25,
            condition: {
                text: '',
                finalText: 'caluroso',
            },
        },
    };
    const films = premadeMatches[weather.current.condition.finalText];
    let tresFilms = [];
    for (let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * films.length);
        tresFilms.push(films.splice(random, 1)[0]);
    }
    console.log(tresFilms);
    const template = (
        <>
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
                    <img src="img/jojoRabbit.jpeg" className="film_1" alt="" />
                    <figcaption>
                        {' '}
                        Y esas tardes de Otoño con aun un clima cálido en las
                        que disfrutar de peliculas de humor negro, con final
                        feliz.
                    </figcaption>
                </figure>
                <div>
                    <img src="images/left-quote.png" alt="" />
                </div>

                <div className="right_quote">
                    <img src="images/right-quote.png" alt="" />
                </div>
            </div>

            <h2 className="our_text">
                <strong>
                    Nueva forma <span> De sentir el cine</span>
                </strong>
            </h2>
            <p className="aboutDescription">
                Porque está demostrado, que la climatológia es uno de los
                factores que afecta a nuestro caracter e incluso a nuestra salud
                mental. "Let me see", nos proporciona una selección de films
                acorde al clima de tu zona y a tu posible estado de ánimo al
                respecto.
            </p>
            <div className="container">
                <h1 className="contact_text">
                    <strong>Prueba eligiendo el ambiente:</strong>
                </h1>
            </div>
            <div className="container">
                <div className="form-group">
                    <input
                        type="text"
                        className="email-bt"
                        placeholder="Ubicación               🧭"
                        name="Name"
                    />
                </div>

                <div className="form-group">
                    <select name="select">
                        <option value="value1">Caluroso</option>
                        <option value="value2">Soleado</option>
                        <option value="value3">Lluvioso</option>
                        <option value="value4">Frio y Nublado</option>
                        <option value="value5">Nieve</option>
                    </select>
                </div>
            </div>
            <p className="descriptionSelect">
                Selecciona uno de nuestros dos metodos para que "Let me see", te
                sugiera una película.{' '}
            </p>
            <p className="descriptionContinue">
                Tú decides, tu ubicación o el estado climático que tengas en
                mente¨
            </p>
            <div className="send_btn">
                <button type="button" className="main_bt">
                    <a href="#">Enviar</a>
                </button>
            </div>
        </>
    );
    return template;
}
