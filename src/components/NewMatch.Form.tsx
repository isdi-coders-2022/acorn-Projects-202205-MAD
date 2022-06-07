export function Form() {
    const template = (
        <>
            <h3>CLIMA</h3>
            <select
                className="config__selector"
                name="weather-config"
                id="weather-config-match"
            >
                <option value="">--Selecciona un clima--</option>
                <option value="soleado">Soleado</option>
                <option value="caluroso">Caluroso</option>
                <option value="lluvia">Lluvia</option>
                <option value="frio y nublado">Frío y nublado</option>
                <option value="nieve">Nieve</option>
            </select>
        </>
    );
    return template;
}
