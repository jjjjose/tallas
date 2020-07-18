import medidas from "./medidas";

// simulando una api interna

const contents = JSON.stringify(
  medidas.map((med) => {
    return {
      nombre: med.nombre,
      medida: med.medida,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
