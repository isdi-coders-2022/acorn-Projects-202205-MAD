export function Configuration() {
    const template = (
        <section className="config">
            <select
                className="config__selector"
                name="weather-config"
                id="weather-config"
            >
                <option value="">--Selecciona un clima--</option>
                <option value="soleado">Soleado</option>
                <option value="caluroso">Caluroso</option>
                <option value="lluvia">Lluvia</option>
                <option value="frio y nublado">Frío y nublado</option>
                <option value="nieve">Nieve</option>
            </select>
        </section>
    );
    return template;
}
