export function Configuration() {
    const template = (
        <>
            {' '}
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
