export default async function fetchCitizenData(cedula) {
  const url = `https://postulacion.juventud.gov.py/api/sii/identificaciones/${cedula}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      let { obtenerPersonaPorNroCedulaResponse: res } = data;
      if (res) {
        throw new Error("Cedula is not valid");
      }
      return data;
    });
}
