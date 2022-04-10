// import React from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import est from './Home.module.css'
// export default class Home extends React.Component {
export default class Home extends Component {
  render() {
    return (
        <div>
          <h1 className={est.titulo}>BREAKING BAD </h1>
          <p className={est.parrafo}> 
            Es una serie de televisión dramática estadounidense creada y producida por Vince Gilligan. Narra la historia de Walter White (Bryan Cranston), un profesor de química con problemas económicos a quien le diagnostican un cáncer de pulmón inoperable. Para pagar su tratamiento y asegurar el futuro económico de su familia,
            comienza a cocinar y vender metanfetamina, junto con Jesse Pinkman (Aaron Paul), un antiguo alumno suyo. La serie, ambientada y producida en Albuquerque (Nuevo México), se caracteriza por sus escenarios desérticos y por la tendencia en la historia de poner a sus personajes en situaciones que aparentemente no tienen salida,
            lo que llevó a que su creador la describa como un wéstern contemporáneo.
            <br></br>
            <br></br>
            La serie se estrenó el 20 de enero de 2008 y es una producción de Sony Pictures Television. En Estados Unidos y Canadá se emitió por la cadena AMC. La temporada final se dividió en dos partes de ocho episodios cada una y se emitió en el transcurso de dos años: 
            la primera mitad se estrenó el 15 de julio de 2012 y concluyó el 2 de septiembre de 2012, mientras que la segunda mitad se estrenó el 11 de agosto de 2013 y concluyó el 29 de septiembre del mismo año.
            <br></br>
            <br></br>
            Breaking Bad ha sido aclamada con entusiasmo por buena parte de la crítica y del público, y está considerada como una de las mejores series televisivas de todos los tiempos. En 2013, Breaking Bad fue uno de los programas de televisión por cable más vistos en los Estados Unidos: la audiencia de la segunda mitad de la quinta temporada duplicó a la de la primera.
            <br></br>
            <br></br>
            La serie logró obtener tres años consecutivos el premio a la mejor serie por parte de los Premios WGA y ha ganado dieciséis premios Primetime Emmy, incluyendo cuatro galardones para Bryan Cranston en la categoría de mejor actor; tres para Aaron Paul al mejor actor de reparto; dos para Anna Gunn como mejor actriz de reparto; y otros dos como mejor serie dramática después de tres nominaciones.
            La serie también fue nominada a los premios Globo de Oro como mejor serie dramática y Cranston recibió tres nominaciones a mejor actor, además de cuatro ternas más en los premios del Sindicato de Actores en la misma categoría; en 2013 se alzó con el premio.
            <br></br>
            <br></br>
            En ese mismo año, el Gremio de Guionistas de los Estados Unidos nombró a Breaking Bad como la decimotercera serie mejor guionada de todos los tiempos. En septiembre, fue incorporada al Libro Guinness de los récords como la serie mejor valorada de la historia, con una puntuación de 99 sobre 100 en Metacritic en su quinta temporada. Stephen King la calificó como la mejor serie de televisión de la historia.
            <br></br>
            <br></br>
            Si quieres conocer los personajes que hacen parte de esta serie, dale click al boton de abajo.
            <br></br>
            <br></br>
            
            <div className={est.complemento}>
              <img className={est.imgj} src="https://th.bing.com/th/id/OIP.OBTvnwGZ09JPo04lpsje0QHaKI?pid=ImgDet&rs=1"/>
              <img className={est.imgj} src="https://5ivetv.net/wp-content/uploads/2020/05/breaking-bad-84-poster-683x1024.jpg"/>
              <img className={est.imgj} src="https://vignette.wikia.nocookie.net/breakingbad/images/5/58/BB_S1_poster.jpg/revision/latest?cb=201705241347431"/>
              <img className={est.imgj} src="https://uhuseries.com/wp-content/uploads/2019/09/Breaking-Bad-Season-5.jpg"/>
              <img className={est.imgj} src="https://3.bp.blogspot.com/-AYIn42411S0/V_ZRNBm4P4I/AAAAAAAAd3c/ULzb7QEbu4EuaC_EvIRcGR1TF_z4ZP2NwCLcB/s1600/breaking-bad-2010-201509430.jpg"/>
              <img className={est.imgj} src="https://th.bing.com/th/id/R.ff928d9a5f8a3f8df45cd5818e00a5a2?rik=BjiG3MtNsaGJhg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31000000%2f-Breaking-Bad-Season-5-Promotional-Poster-HQ-breaking-bad-31046820-1738-2560.jpg&ehk=i2oTKD7etqBzbeKTZa9HjJSGoidk2SoyEV07Z%2fPBQng%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            <Link to='/characters'><button className={est.myBoton} >Conoce los personajes</button></Link>
            </p>
            </div>
    );
  }
}
