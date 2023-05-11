console.log("cosos");

const gob = [
  {
    LISTA: "210",
    PARTIDO: "CAMINO A LA LEALTAD",
    CANDIDATO: "BURGOS, LUIS BENJAMIN",
    VOTOS: "23",
  },
  {
    LISTA: "219",
    PARTIDO: "NOS UNE EL CAMBIO",
    CANDIDATO: "CORIA VIGNOLO, JUAN IGNACIO",
    VOTOS: "23",
  },
  {
    LISTA: "829",
    PARTIDO: "POLITICA OBRERA",
    CANDIDATO: "GRASSINO, MARGARITA RAQUEL",
    VOTOS: "23",
  },
  {
    LISTA: "830",
    PARTIDO: "FRENTE DE TODOS POR TUCUMAN",
    CANDIDATO: "JALDO, OSVALDO FRANCISCO",
    VOTOS: "23",
  },
  {
    LISTA: "831",
    PARTIDO: 'FRENTE "JUNTOS POR EL CAMBIO"',
    CANDIDATO: "SANCHEZ, ROBERTO ANTONIO",
    VOTOS: "23",
  },
  {
    LISTA: "832",
    PARTIDO: "FRENTE DE IZQUIERDA Y DE TRABAJADORES - UNI",
    CANDIDATO: "CORREA TEJERIZO, JOSE MARTIN",
    VOTOS: "23",
  },
  {
    LISTA: "901",
    PARTIDO: "FUERZA REPUBLICANA",
    CANDIDATO: "BUSSI, RICARDO ARGENTINO",
    VOTOS: "23",
  },
  {
    LISTA: "929",
    PARTIDO: "MOVIMIENTO LIBRES DEL SUR",
    CANDIDATO: "MASSO, FEDERICO AUGUSTO",
    VOTOS: "23",
  },
  { LISTA: "", PARTIDO: "", CANDIDATO: "TOTAL", VOTOS: "184" },
  { LISTA: "", PARTIDO: "", CANDIDATO: "BLANCOS", VOTOS: "23" },
  { LISTA: "", PARTIDO: "", CANDIDATO: "NULOS", VOTOS: "23" },
  { LISTA: "", PARTIDO: "", CANDIDATO: "RECURRIDOS", VOTOS: "23" },
  { LISTA: "", PARTIDO: "", CANDIDATO: "IMPUGNADOS", VOTOS: "23" },
];

function convertirObjeto(data) {
  var obj = {};
  obj = data.table.rows.map(function(item) {
    return {
      LISTA: item.c[0].v.toString(),
      PARTIDO: item.c[1].v.toString(),
      CANDIDATO: item.c[2].v.toString(),
      VOTOS: item.c[3].v.toString()
    }
  });
  return obj;
}



// función asíncrona que hace el llamado a la API de Google Sheets y retorna los datos como un objeto JSON
async function obtenerDatosDeSpreadsheet() {  
  const url = "https://docs.google.com/spreadsheets/d/1C4sBJ9SoTKKyLLpnMUxZmhFPJLt3u6VkQoauOZIWZTo/gviz/tq?tqx=out:json&gid=593516931";
  // Se hace el llamado a la API y se espera la respuesta
  const response = await fetch(url);
  // Se obtiene el cuerpo de la respuesta en formato de texto
  const text = await response.text();
  // Se parsea el texto eliminando los primeros 47 caracteres y los últimos 2
  const data = JSON.parse(text.substring(47, text.length - 2));
  // Se retorna el objeto JSON con los datos de la hoja de Google Sheets
  return data;
}

// función que imprime los datos obtenidos de la hoja de Google Sheets en la consola
async function imprimirDatosDeSpreadsheet() {
  try {
    // Se obtienen los datos de la hoja de Google Sheets
    const datos = await obtenerDatosDeSpreadsheet();
    // Se imprimen los datos en la consola
    console.log("DATOS", datos);
    console.log(convertirObjeto(datos));
  } catch (error) {
    console.error(error);
  }
}

// se llama a la función para imprimir los datos en la consola
imprimirDatosDeSpreadsheet();
