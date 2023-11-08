import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Privacidad = () => {
    return (
        <div class="main-content" >
            <h1 style={{textAlign:"center"}}>POLÍTICAS DE PRIVACIDAD ENGINEMASTERS AGENCY</h1>
            <h2><b>AUTORIZACIÓN TRATAMIENTO DE DATOS PERSONALES CLIENTES</b></h2>
            <p>De conformidad con lo dispuesto en la Ley 1581 de 2012 y el Decreto 1377 de 2013, declaro que entrego de forma libre y voluntaria mis Datos Personales y con mi aceptación y/o firma autorizo a EngineMasters Agency, para que, como Responsable, realice Ia recolección y tratamiento de mis datos personales para las finalidades indicadas más adelante y de conformidad con la Política de tratamiento de la información de MCOL, la cual está disponible en la página web<strong><a title="Politicas Datos" href="/politicas-datos"> Politicas Datos</a></strong></p>
            <h2><b>RESPONSABLE DEL TRATAMIENTO</b></h2>
            <p>EngineMasters Agency<br></br> NIT: 900.703.240-3<br></br> Teléfono: (601) 3073700<br></br> Dirección: Carrera 7 No. 75-66 oficina 602<br></br> Página web: <strong><a href="/">www.EngineMastersAgency.com.co</a></strong><br></br> correo electrónico: <strong><a title="servicioalcliente@EngineMasters.com" href="mailto:servicioalcliente@EngineMasters.com">servicioalcliente@EngineMasters.com</a></strong></p>
                <h3><b>DATOS PERSONALES OBJETO DE TRATAMIENTO</b></h3>
                <p>Información de identificación. Por ejemplo, podemos recopilar su(s) nombre(s), apellido(s) su número de identificación, su dirección de residencia, su dirección de correo electrónico, su número de teléfono y celular.</p>
                <p>Información demográfica y socioeconómica. Por ejemplo, edad, género, educación, profesión, ocupación, salario, ingreso familiar, actividad económica preferencias e intereses.</p>
                <p>Información de Internet, dispositivo y otra actividad en las redes. Por ejemplo, podemos recopilar el tipo de dispositivo, un identificador para su dispositivo, su dirección IP o su sistema operativo móvil. Si usa nuestro sitio web, podemos recopilar información del navegador que usa, las páginas que visitó en nuestro sitio, los sitios de donde proviene o qué sitios visita cuando nos abandona.</p>
                <p>Información de compras y formas de pago. Por ejemplo, las compras de vehículos, taller o repuestos realizadas directamente a EngineMasters Agency o alguno de sus encargados. Si ha solicitado financiación para Ia compra del vehículo por medio de EngineMasters Agency Direct Credit, también recopilaremos información relacionada con el estado del crédito del vehículo.</p>
                <p>Información audiovisual. Por ejemplo, grabaciones de audio de llamadas realizadas a Atención al Cliente de EngineMasters Agency, fotografías y videos si participa en alguno de los eventos de EngineMasters Agency o videos de seguridad al visitar las instalaciones de EngineMasters Agency.</p>
                <p>Información del vehículo. Por ejemplo, recopilamos Ia información completa de identificación de su vehículo como la marca, el modelo, color, el número de identificación vehicular (VIN) y el número del motor.</p>
                <p>Información del historial de servicio del vehículo. Por ejemplo, las fechas, motivos, ubicaciones y operaciones realizadas durante el servicio. También tenemos el historial de garantías y campañas de seguridad.</p>
                <p>Información de las redes sociales. Podemos recopilar Ia información que publica en nuestras páginas de redes sociales. También podemos recopilar información de su perfil en las redes sociales.</p>
                <p>Información que usted proporciona. Por ejemplo, la información que ofrece en relación con encuestas, promociones y eventos de comercialización.</p>
                <h3><b>FINALIDADES DEL TRATAMIENTO</b></h3>
                <ul>
                    <li>Atender Ia consulta o solicitud presentada por el Titular a través de cualquiera de los canales de comunicación dispuestos por MCOL.</li>
                    <li>Confirmar, actualizar y verificar la información e identidad.</li>
                    <li>Efectuar las gestiones pertinentes para el desarrollo de la relación comercial cumpliendo las obligaciones legales, contractuales, tributarias, financieras y/o contables.</li>
                    <li>Enviar publicidad, información comercial o de mercadeo que puedan ser relevantes para el Titular, en el horario y términos establecidos por Ia ley 2300/2023. Entre Ia información que puede recibir se encuentra, pero no se limita a:</li>
                    <li>Noticias, historias, reconocimientos y novedades de Ia marca.</li>
                    <li>Invitaciones a eventos de la marca EngineMasters Agency o sus aliados comerciales.</li>
                    <li>Ofrecer productos, servicios, programas de fidelización, invitaciones a realizar pruebas de vehículos, descuentos, promociones, sorteos, entre otros.</li>
                    <li>Rutinas de mantenimiento, recordatorios de servicio, confirmación de citas, cobertura de garantía, fechas de vencimiento seguros, entre otros.</li>
                    <li>Ofrecer y comunicar información relacionada con productos para Ia financiación en Ia adquisición de nuestros bienes y servicios, para lo cual MCOL o sus aliados comerciales podrán verificar y analizar el comportamiento crediticio actual e histórico, estimar los niveles de ingresos y realizar estudios de crédito.</li>
                    <li>Para fines estadísticos, perfilamiento, preferencias, análisis de navegación y consumo y para Ia elaboración de estos dos tipos de estudios.</li>
                    <li>Realizar evaluaciones, encuestas e investigaciones de mercado para evaluar Ia satisfacción y mejorar la experiencia con los productos y servicios ofrecidos por MCOL o por algún aliado comercial de la compañía.</li>
                    <li>Gestionar trámites relacionados con las solicitudes, quejas y reclamos relacionados con los titulares de la información.</li>
                    <li>Validación de la información con el fin de dar cumplimiento a la regulación de Lavado de Activos y Financiación del Terrorismo por parte de Ia Compañía o con terceros contratados para dicho fin.</li>
                    <li>Transmitir nacional o internacionalmente la información y datos personales de los titulares a las sociedades subsidiarias, filiales o afiliadas a EngineMasters Agency, aliados comerciales o a otras sociedades o personas que MCOL delegue como encargados para realizar el procesamiento de Ia información y cumplir con las finalidades descritas en esta autorización y en la Política de tratamiento de datos.</li>
                </ul>
                <h3 ><b>DERECHOS DEL TITULAR</b></h3>
                <p>En relación con los Datos Personales recolectados y tratados, he sido informado que tengo los siguientes derechos: (i) Conocer, actualizar y rectificar mi información frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o a aquellos cuyo tratamiento esté prohibido o no haya sido autorizado; (ii) Requerir prueba del consentimiento otorgado para Ia recolección y el tratamiento de mis Datos Personales; (iii) Ser informado por MCOL y sus encargados del uso que se le han dado a mis Datos Personales; (iv) Realizar consultas 0 reclamos a IMCOL relacionados con el tratamiento de mis Datos Personales; (v) Presentar quejas ante la Superintendencia de Industria y Comercio en el caso en que haya una violación por parte de MCOL, de las disposiciones de la Ley 1581 de 2012, el Decreto 1377 de 2013 y otras normas que los modifiquen, adicionen o complementen, de conformidad con las disposiciones sobre el requisito de procedibilidad establecido en el artículo 16 Ley 1581 de 2012; (vi) Revocar la autorización otorgada para el tratamiento de mis Datos Personales; (vii) Solicitar ser eliminado de su base de datos; (viii) Tener acceso a mis Datos Personales que IMCOL haya recolectado y tratado.</p>
                <h3 ><b>CANALES PARA EJERCER LOS DERECHOS</b></h3>
                <p>Con el fin de ejercer los derechos anteriormente descritos puedo contactar a Ia Dirección de Servicio al cliente de MCOL:</p>
                <p><b>Teléfono:</b> (601) 2357529<br></br> <b>Línea nacional gratuita:</b> 018000112595<br></br> <b>Correo electrónico:</b> <strong><a title="servicioalcliente@EngineMasters.com" href="mailto:servicioalcliente@EngineMasters.com">servicioalcliente@EngineMasters.com</a></strong></p>
                    <p>&nbsp;</p>
                </div>
                    )
}
export default Privacidad