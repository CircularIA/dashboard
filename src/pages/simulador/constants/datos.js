//Recursos
import ImagenAmbiental from "./../../../assets/seleccionador/Ambiental.svg";
import ImagenAmbientalHover from "./../../../assets/seleccionador/AmbientalHover.svg";
import ImagenEconomico from "../../../assets/seleccionador/Economico.svg";
import ImagenEconomicoHover from "../../../assets/seleccionador/EconomicoHover.svg";
import ImagenSocial from "../../../assets/seleccionador/Social.svg";
import ImagenSocialHover from "../../../assets/seleccionador/SocialHover.svg";
import ImagenFlujos from "../../../assets/Iconos/Flujos.svg";
import ImagenAgua from "../../../assets/Iconos/Agua.svg";
import ImagenEmisiones from "../../../assets/Iconos/Emisiones.svg";
import ImagenEnergia from "../../../assets/Iconos/Energia.svg";
import ImagenEficiencia from "../../../assets/Iconos/Eficiencia.svg";
import ImagenOrganizacional from "../../../assets/Iconos/Organizacional.svg";

export const datos = [
  {
    titulo: "AMBIENTAL",
    descripcion:
      "La capacidad de mantener la productividad y biodiversidad de los recursos naturales a lo largo del plazo",
    imagen: ImagenAmbiental,
    imagenHover: ImagenAmbientalHover,
  },
  {
    titulo: "ECONÓMICO",
    descripcion:
      "La capacidad de mantener la productividad y biodiversidad de los recursos naturales a lo largo del plazo",
    imagen: ImagenEconomico,
    imagenHover: ImagenEconomicoHover,
  },
  {
    titulo: "SOCIAL",
    descripcion:
      "La capacidad de mantener la productividad y biodiversidad de los recursos naturales a lo largo del plazo",
    imagen: ImagenSocial,
    imagenHover: ImagenSocialHover,
  },
];

export const tiposAmbiental = [
  {
    nombre: "Valorización de Residuos",
    imagen: ImagenFlujos,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Agua",
    imagen: ImagenAgua,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Emisiones",
    imagen: ImagenEmisiones,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Energia",
    imagen: ImagenEnergia,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Cadena de Suministros",
    imagen: ImagenEficiencia,
    descripcion:
      "Indicadores relacionados con la entrada y salida de materiales",
  },
];

export const tiposEconomico = [
  {
    nombre: "Ingreso Circ.",
    imagen: ImagenFlujos,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Inversion Circ.",
    imagen: ImagenEmisiones,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Ahorro",
    imagen: ImagenAgua,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
];

export const tiposSocial = [
  {
    nombre: "Empleos",
    imagen: ImagenFlujos,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Educacion",
    imagen: ImagenAgua,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Seguridad",
    imagen: ImagenEmisiones,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Sinergía",
    imagen: ImagenEmisiones,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Interno",
    imagen: ImagenEmisiones,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
];

export const opcionesTarjetas = {
  // Estas opciones ahora son "InputDats", a diferencia de antes que eran indicadores.
  'Valorización De Residuos': [
    { id: 1, nombre: 'Salida compostaje de lodo generado', valor: 'generación de lodo' },
    { id: 2, nombre: 'Salida compostaje', valor: 'valorización compostaje' },
    { id: 3, nombre: 'Salida masas', valor: 'valorización masas' },
    { id: 4, nombre: 'Salida biodigestión', valor: 'valorización biodigestión' },
    { id: 5, nombre: 'Salida riles tratados', valor: 'val planta de riles' },
    { id: 6, nombre: 'Salida residuos municipales', valor: 'entrada residuos municipales' },
    { id: 7, nombre: 'Salida Cartón/Papel', valor: 'Salida Cartón/Papel' },
    { id: 8, nombre: 'Salida Plástico', valor: 'salida plástico' },
    { id: 9, nombre: 'Salida aluminio', valor: 'Salida aluminio' },
    { id: 10, nombre: 'Salida tetrapack', valor: 'Salida tetrapack' },
    { id: 11, nombre: 'Salida Incineración de biomasa', valor: 'Salida Incineración de biomasa' },
    { id: 12, nombre: 'Salida coproceso', valor: 'Salida coproceso' },
    { id: 13, nombre: 'Salida reutilización', valor: 'Salida reutilización' },
    { id: 14, nombre: 'Salida peligrosos', valor: 'Salida peligrosos' },
    { id: 15, nombre: 'Salida inertes', valor: 'Salida inertes' },
  ],
  'Agua': [
    { id: 1, nombre: 'Entrada agua total', valor: 'Entrada agua matriz' },
    { id: 2, nombre: 'Entada circular de agua de mar', valor: 'ENTRADA circular agua' },
    { id: 3, nombre: 'Entrada circular agua superficial y pozos de agua subterránea', valor: 'ENTRADA circular agua' },
    { id: 4, nombre: 'Entrada circular  de agua regenerada', valor: 'ENTRADA circular agua' },
    { id: 5, nombre: 'Salida de agua circular', valor: 'SALIDA agua circular' },
    { id: 6, nombre: 'Salida de agua lineal por consumo', valor: 'SALIDA agua' },
    { id: 7, nombre: 'Salida agua lineal por evaporación', valor: 'SALIDA agua lineal' },
    { id: 8, nombre: 'Salida agua lineal por residuo de agua', valor: 'SALIDA agua lineal' },
    { id: 9, nombre: 'Salida agua lineal por exportación de agua', valor: 'SALIDA agua lineal' },
  ],
  Emisiones: [
    { id: 1, nombre: 'Salida emisiones directas', valor: 'GENERACIÓN emisiones directas' },
    { id: 2, nombre: 'Salida emisiones indirectas', valor: 'GENERACIÓN emisiones indirectas' },
    { id: 3, nombre: 'Salida emisiones otras indirectas', valor: 'GENERACIÓN emisiones otras indirectas' },
  ],
  Energia: [
    { id: 1, nombre: 'Entrada combustible carbón', valor: 'Entrada combustible carbón' },
    { id: 2, nombre: 'Entrada combustible petroleo 2 (Diesel)', valor: 'Entrada combustible petroleo 2 (Diesel)' },
    { id: 3, nombre: 'Entrada combustible petroleo 6', valor: 'Entrada combustible petroleo 6' },
    { id: 4, nombre: 'Entrada combustible gas natural', valor: 'Entrada combustible gas natural' },
    { id: 5, nombre: 'Entrada combustible gas licuado petroleo (GLP)', valor: 'Entrada combustible gas licuado petroleo (GLP)' },
    { id: 6, nombre: 'Entrada combustible Gasolina', valor: 'Entrada combustible Gasolina' },
    { id: 7, nombre: 'Entrada electricidad, calor, vapor, refrigeración', valor: 'Entrada electricidad, calor, vapor, refrigeración' },
    { id: 8, nombre: 'Entrada otros combustibles no renovables', valor: 'Entrada otros combustibles no renovables' },
    { id: 9, nombre: 'Entrada combustible fuente renovables', valor: 'Entrada combustible fuente renovables' },
    { id: 10, nombre: 'Entrada electricidad fuente renovable', valor: 'Entrada electricidad fuente renovable' },
    { id: 11, nombre: 'Entrada energía autogenerada renovable', valor: 'Entrada energía autogenerada renovable' },
  ],
  'Cadena De Suministros': [
    { id: 1, nombre: 'Entrada de suministros biológicos renovables', valor: 'Entrada de suministros biológicos renovables' },
    { id: 2, nombre: 'Entrada de suministros técnicos de material no virgen', valor: 'Entrada de suministros técnicos de material no virgen' },
    { id: 3, nombre: 'Entrada de suministros totales', valor: 'Entrada de suministros totales' },
    { id: 4, nombre: 'Costos gastados en proveedores locales', valor: 'Costos gastados en proveedores locales' },
    { id: 5, nombre: 'Costos totales gastados en proveedores', valor: 'Costos totales gastados en proveedores' },
  ],
  'Ingreso Circ.': [
    { id: 1, nombre: 'Expresa el valor que una compañía genera por unidad de flujo lineal.' },
    { id: 2, nombre: 'Cierre del loop: Relación objetiva y cuantitativa con impacto financiero.' },
    { id: 3, nombre: 'Es la suma de los CTI ingresos por productos para calcular el total de la compañía.' },
    { id: 4, nombre: 'Es el porcentaje de ingresos proveniente de actividades circulares en relación al total de ingresos' },
  ],
  Empleos: [
    { id: 1, nombre: 'Cantidad de metano que se convierte en energía' },
    { id: 2, nombre: 'Emisiones en CO2eq que produce cada proceso y la planta' },
    { id: 3, nombre: 'TonCO2eq/ton dispuesta' },
    { id: 4, nombre: 'Emisiones evitadas: TonCO2eq/ton valorizada vs. disposición, factores de emisión' },
  ],
  // ... otras opciones para las demás tarjetas
};