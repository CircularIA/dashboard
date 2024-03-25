//Recursos
import ImagenAmbiental from "./../../../assets/seleccionador/Ambiental.svg";
import ImagenAmbientalHover from "./../../../assets/seleccionador/AmbientalHover.svg";
import ImagenEconomico from "../../../assets/seleccionador/Economico.svg";
import ImagenEconomicoHover from "../../../assets/seleccionador/EconomicoHover.svg";
import ImagenSocial from "../../../assets/seleccionador/Social.svg";
import ImagenSocialHover from "../../../assets/seleccionador/SocialHover.svg";
import ImagenFlujos from "../../../assets/Iconos/Flujos.svg";
import ImagenFlujosHover from "../../../assets/Iconos/FlujosHover.svg";
import ImagenAgua from "../../../assets/Iconos/Agua.svg";
import ImagenAguaHover from "../../../assets/Iconos/AguaHover.svg";
import ImagenEmisiones from "../../../assets/Iconos/Emisiones.svg";
import ImagenEmisionesHover from "../../../assets/Iconos/EmisionesHover.svg";
import ImagenEnergia from "../../../assets/Iconos/Energia.svg";
import ImagenEnergiaHover from "../../../assets/Iconos/EnergiaHover.svg";
import ImagenCadenaSuministros from "../../../assets/Iconos/CadenaSuministros.svg";
import ImagenCadenaSuministrosHover from "../../../assets/Iconos/CadenaSuministrosHover.svg";
import ImagenIngresoCircular from "../../../assets/Iconos/IngresoCircular.svg";
import ImagenIngresoCircularHover from "../../../assets/Iconos/IngresoCircularHover.svg";
import ImagenInversionCircular from "../../../assets/Iconos/InversionCircular.svg";
import ImagenInversionCircularHover from "../../../assets/Iconos/InversionCircularHover.svg";
import ImagenAhorro from "../../../assets/Iconos/Ahorro.svg";
import ImagenAhorroHover from "../../../assets/Iconos/AhorroHover.svg";
import ImagenEmpleos from "../../../assets/Iconos/Empleos.svg";
import ImagenEmpleosHover from "../../../assets/Iconos/EmpleosHover.svg";
import ImagenEducacion from "../../../assets/Iconos/Educacion.svg";
import ImagenEducacionHover from "../../../assets/Iconos/EducacionHover.svg";
import ImagenSeguridad from "../../../assets/Iconos/Seguridad.svg";
import ImagenSeguridadHover from "../../../assets/Iconos/SeguridadHover.svg";
import ImagenSinergia from "../../../assets/Iconos/Sinergia.svg";
import ImagenSinergiaHover from "../../../assets/Iconos/SinergiaHover.svg";
import ImagenCulturaInterna from "../../../assets/Iconos/CulturaInterna.svg";
import ImagenCulturaInternaHover from "../../../assets/Iconos/CulturaInternaHover.svg";
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
    imagenHover: ImagenFlujosHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Agua",
    imagen: ImagenAgua,
    imagenHover: ImagenAguaHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Emisiones",
    imagen: ImagenEmisiones,
    imagenHover: ImagenEmisionesHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Energia",
    imagen: ImagenEnergia,
    imagenHover: ImagenEnergiaHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Cadena de Suministros",
    imagen: ImagenCadenaSuministros,
    imagenHover: ImagenCadenaSuministrosHover,
    descripcion:
      "Indicadores relacionados con la entrada y salida de materiales",
  },
];

export const datosGeneral = [
  {
    nombre: "Porcentaje de valorización ciclo biológico",
    descripcion:
      "Residuos que son valorizados del total de los organicos producidos",
    fuente: "CTI",
    categoria: "Ambiental",
    tipo: "Flujos",
    medicion: "Porcentaje de recuperación real",
    porcentajeRR: {
      formula: {
        expresion: "ax+by+c",
        cVariables: 3,
      },
      residuos: {
        generadosTotales: 30,
        recuperadosBiologicos: 50,
        recuperadosTecnicos: 70,
      },
      total: 24,
    },
  },
  {
    nombre: "Porcentaje de valorización ciclo técnico",
    descripcion:
      "Residuos que son valorizados del total de los imperecedores producidos",
    fuente: "CTI",
    categoria: "Ambiental",
    tipo: "Flujos",
    medicion: "Porcentaje de recuperación real",
    porcentajeRR: {
      formula: {
        expresion: "ax+by+c",
      },
      residuos: {
        generadosTotales: 30,
        recuperadosBiologicos: 50,
        recuperadosTecnicos: 70,
      },
      total: 34,
    },
  },
  {
    nombre: "Porcentaje circularidad de entrada",
    descripcion:
      "Materiales de origen sostenible del total de los utilizados en los procesos de la empresa",
    fuente: "CTI",
    categoria: "Ambiental",
    tipo: "Flujos",
    medicion: "Porcentaje de recuperación real",
    porcentajeRR: {
      formula: {
        expresion: "ax+by+c",
      },
      residuos: {
        generadosTotales: 30,
        recuperadosBiologicos: 50,
        recuperadosTecnicos: 70,
      },
      total: 44,
    },
  },
  {
    nombre: "Porcentaje circularidad de salida",
    descripcion:
      "Residuos que son valorizados del total de los generados en los procesos de la empresa",
    fuente: "CTI",
    tipo: "Flujos",
    medicion: "Porcentaje de recuperación real",
    porcentajeRR: {
      formula: {
        expresion: "ax+by+c",
      },
      residuos: {
        generadosTotales: 30,
        recuperadosBiologicos: 50,
        recuperadosTecnicos: 70,
      },
      total: 80,
    },
  },
  {
    nombre: "Porcentaje circularidad de salida",
    descripcion:
      "Residuos que son valorizados del total de los generados en los procesos de la empresa",
    fuente: "CTI",
    tipo: "Flujos",
    medicion: "Porcentaje de recuperación real",
    porcentajeRR: {
      formula: {
        expresion: "ax+by+c",
      },
      residuos: {
        generadosTotales: 30,
        recuperadosBiologicos: 50,
        recuperadosTecnicos: 70,
      },
      total: 25,
    },
  },
];
export const tiposEconomico = [
  {
    nombre: "Ingreso Circ.",
    imagen: ImagenIngresoCircular,
    imagenHover: ImagenIngresoCircularHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Inversion Circ.",
    imagen: ImagenInversionCircular,
    imagenHover: ImagenInversionCircularHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Ahorro",
    imagen: ImagenAhorro,
    imagenHover: ImagenAhorroHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
];

export const tiposSocial = [
  {
    nombre: "Empleos",
    imagen: ImagenEmpleos,
    imagenHover: ImagenEmpleosHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Educacion",
    imagen: ImagenEducacion,
    imagenHover: ImagenEducacionHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Seguridad",
    imagen: ImagenSeguridad,
    imagenHover: ImagenSeguridadHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Sinergía",
    imagen: ImagenSinergia,
    imagenHover: ImagenSinergiaHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
  {
    nombre: "Interno",
    imagen: ImagenCulturaInterna,
    imagenHover: ImagenCulturaInternaHover,
    descripcion:
      "Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida",
  },
];
