import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Datos = () => {
    return (
        <div class="main-content">
            <h1 style={{ textAlign: "center" }}>POLÍTICA GENERAL DE TRATAMIENTO DE DATOS PERSONALES DE ENGINEMASTERS AGENCY</h1>
            <p><span>CLIENTES, PROSPECTOS DE CLIENTES, FUNCIONARIOS RED ENGINEMASTERS AGENCY, PROVEEDORES Y VISITANTES</span></p>
            <p><span>ENTRADA EN VIGENCIA: SEPTIEMBRE DE 2016</span></p>
            <p><span>ÚLTIMA VERSIÓN: NOVIEMBRE 6 DE 2023</span></p>
            <p><span>&nbsp;</span></p>
            <h2>INTRODUCCIÓN</h2>
            <p><span>ENGINEMASTERS AGENCY DE COLOMBIA S.A.S.&nbsp;(en adelante,&nbsp;ENGINEMASTERS AGENCY) es responsable de los Datos Personales e información que le suministran sus clientes, prospectos de clientes proveedores, contratistas, y visitantes (en adelante,&nbsp;los Titulares).</span></p>
            <p><span>En la presente Política de Tratamiento se establecen las finalidades, medidas y procedimientos de las Bases de Datos de&nbsp;ENGINEMASTERS AGENCY&nbsp;así como los mecanismos con que los Titulares cuentan para conocer, actualizar, rectificar, suprimir los datos suministrados o revocar la autorización que se otorga con la aceptación de la presente Política de Tratamiento.</span></p>
            <p><span>La aceptación de propuestas, la celebración de contratos, el diligenciamiento de formatos, el acceso a los Servicios de la página web&nbsp;</span><a href="/" target="_blank"><b><span>www.EngineMastersAgency.com.co</span></b></a><span>&nbsp;(en adelante la Página Web), el ingreso a las instalaciones de&nbsp;ENGINEMASTERS AGENCY&nbsp;y/o la aceptación expresa o inequívoca de las presente políticas, implica la aceptación de los Titulares de la Política de Tratamiento y Protección de Datos Personales y su autorización para los usos y otros tratamientos que aquí se describen.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>I. &nbsp;DEFINICIONES</h2>
            <p><span>&nbsp;</span></p>
            <p><span>Para los efectos de la presente Política de Privacidad, se entiende por:</span></p>
            <p><span>1.1.&nbsp;Dato personal:&nbsp;Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</span></p>
            <p><span>1.2.&nbsp;Dato público:&nbsp;Dato personal que no es semiprivado, privado o sensible. Entre otros, son los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros y documentos públicos.</span></p>
            <p><span>1.3.&nbsp;Dato Privado:&nbsp;Es el dato que por su naturaleza íntima o reservada sólo es relevante para el Titular.</span></p>
            <p><span>1.4.&nbsp;Dato personal sensible:&nbsp;Se entiende como datos sensibles aquellos que afecten la intimidad del titular o cuyo uso indebido pueda afectar la intimidad del Titular o la potencialidad de generar su discriminación.</span></p>
            <p><span>1.5.&nbsp;Dato personal semiprivado:&nbsp;son aquellos datos que no tienen una naturaleza íntima, reservada, ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular, sino a un grupo de personas o a la sociedad en general. En este caso, para su Tratamiento se requiere a autorización expresa del Titular de la información. Por ejemplo: datos de carácter financiero, datos relativos a las relaciones con las entidades de seguridad social (EPS, AFP, ARL, Cajas de Compensación).</span></p>
            <p><span>1.6.&nbsp;Base de Datos:&nbsp;Conjunto organizado de Datos Personales que sea objeto de Tratamiento. Para los efectos del presente documento se entiende como Base de Datos, aquella que contiene información de los Titulares.</span></p>
            <p><span>1.7.&nbsp;Titular:&nbsp;Persona natural cuyos Datos Personales sean objeto de Tratamiento. Para los efectos del presente documento se entiende como Titulares, a los proveedores, contratistas, colaboradores, clientes, usuarios y visitantes de&nbsp;ENGINEMASTERS AGENCY.</span></p>
            <p><span>1.8.&nbsp;Responsable del Tratamiento:&nbsp;Es la Persona natural o jurídica de naturaleza pública o privada, que, actuando por ella misma o con otros, decida sobre la Base de Datos y/o el Tratamiento de los datos. Para los efectos de la presente Política para el Tratamiento de Datos Personales se entiende como Responsable del Tratamiento a&nbsp;ENGINEMASTERS AGENCY.</span></p>
            <p><span>1.9.&nbsp;Encargado del Tratamiento:&nbsp;Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento (ENGINEMASTERS AGENCY).</span></p>
            <p><span>1.10.&nbsp;Tratamiento:&nbsp;Cualquier operación o conjunto de operaciones sobre Datos Personales, tales como la recolección, almacenamiento, uso, circulación o supresión.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>II.&nbsp;RESPONSABLE Y ENCARGADO DEL TRATAMIENTO DE DATOS</h2>
            <p><span>El Responsable del Tratamiento de Datos Personales y otra información de los Titulares es ENGINEMASTERS AGENCY DE COLOMBIA S.A.S., NIT 900.703.240-3, domicilio y dirección en la Carrera 7° N° 75-66 oficinas 601 y 602, Bogotá, Colombia; teléfono: (031) 3073700 ; correo electrónico:</span><a href="mailto:servicioalcliente@EngineMasters.co"><strong><span>servicioalcliente@EngineMasters.co.</span></strong></a></p>
            <p><span>&nbsp;</span></p>
            <h2>III.&nbsp;FINALIDAD&nbsp;Y TRATAMIENTO</h2>
            <p><span>3.1.&nbsp;FINALIDADES</span></p>
            <p><span>Las finalidades para las cuales&nbsp;ENGINEMASTERS AGENCY&nbsp;tratará los Datos Personales de los Titulares son:</span></p>
            <p><span>3.1.1.&nbsp;En relación con la base de datos de clientes:&nbsp;</span></p>
            <p><span>a) Cumplir los contratos de servicios celebrados con clientes.<br></br> b) Utilizar los Datos Personales para mercadeo y/o comercialización de nuevos servicios o productos de&nbsp;ENGINEMASTERS AGENCY.<br></br> c) Medir niveles de satisfacción.<br></br> d) Realizar encuestas.<br></br> e) Contactar a los titulares para realizar recordatorios sobre mantenimientos y de vencimientos de garantías, así como para informarles sobre los causales que podrían llevar a la pérdida de cobertura.<br></br> f) Ejecutar campañas de fidelización.<br></br> g) Enviar invitaciones a eventos.<br></br> h) Ofrecer productos y servicios de&nbsp;ENGINEMASTERS AGENCY.<br></br> i) Comunicar información relacionada con productos para la financiación en la adquisición de bienes y servicios de&nbsp;ENGINEMASTERS AGENCY.&nbsp;</span></p>
            <p><span>3.1.2.&nbsp;En relación con la base de datos de prospectos de clientes</span></p>
            <p><span>a) Contactar a los Titulares para ofrecerles bienes y servicios de su interés, recibir ofertas de ENGINEMASTERS AGENCY, invitar a la participación en programas, proyectos eventos, socializar políticas, proyectos, programas, resultados y cambios organizacionales.<br></br> b) Suministrar la información y datos personales de los Titulares a las sociedades subsidiarias, filiales o afiliadas a&nbsp;ENGINEMASTERS AGENCY, aliados comerciales o a otras sociedades o personas que&nbsp;ENGINEMASTERS AGENCY encargue para realizar el procesamiento de la información y cumplir con las finalidades descritas en la presente Política.<br></br> c) Suministrar la información y datos personales de los Titulares a aliados comerciales para que estos contacten a los Titulares para ofrecerles bienes y servicios de su interés, recibir ofertas de los titulares, invitar a la participación en programas, proyectos eventos, socializar políticas, proyectos, programas, resultados y cambios organizacionales.</span></p>
            <p><span>3.1.3.&nbsp;En relación con la base de datos de Funcionarios de la Red de Concesionarios de ENGINEMASTERS AGENCY.</span></p>
            <p><span>a) Comunicar campañas comerciales y de posventa.<br></br> b) Invitar a eventos de&nbsp;ENGINEMASTERS AGENCY.<br></br> c) Informar sobre actividades de formación y actualización para el cumplimiento de los Estándares propuestos por la&nbsp;ENGINEMASTERS AGENCY.<br></br> d) Comunicar noticias y novedades sobre los productos y servicios de&nbsp;ENGINEMASTERS AGENCY.<br></br> e) Enviar claves de ingreso a las plataformas virtuales dispuestas para la Red&nbsp;ENGINEMASTERS AGENCY.<br></br> f) Enviar información para recuperar contraseñas de acceso a los sistemas dispuestos para la Red ENGINEMASTERS AGENCY.<br></br> g) Realizar actualización de datos.</span></p>
            <p><span>3.1.4.&nbsp;En relación con la base de datos de proveedores</span></p>
            <p><span>a) Realizar los respectivos pagos a proveedores y mantener relaciones comerciales.<br></br> b) Cumplir con los procesos internos de&nbsp;ENGINEMASTERS AGENCY&nbsp;en materia de administración de proveedores y contratistas.</span></p>
            <p><span>3.1.5.&nbsp;En relación con la base de datos de visitantes:</span></p>
            <p><span>a) El control y la preservación de la seguridad de las personas, bienes e información de&nbsp;ENGINEMASTERS AGENCY.</span></p>
            <p><span>3.1.6.&nbsp;Finalidades comunes a todas las bases de datos:</span></p>
            <p><span>a) Gestionar toda la información necesaria para el cumplimiento de las obligaciones tributarias y de registros comerciales, corporativos y contables de&nbsp;ENGINEMASTERS AGENCY.<br></br> b) La socialización de políticas, proyectos, programas y cambios organizacionales.<br></br> c) El control y la preservación de la seguridad de las personas, bienes e información de&nbsp;ENGINEMASTERS AGENCY.<br></br> d) Realizar procesos al interior de&nbsp;ENGINEMASTERS AGENCY, con fines de desarrollo u operativo y/o de administración de sistemas. &nbsp;<br></br> e) Sugerir productos o servicios (incluyendo los de terceros) que&nbsp;ENGINEMASTERS AGENCY&nbsp;considera que pueden ser de interés del Titular.<br></br> f) Contactarlo como potencial cliente para mantenerlo informado y ofrecerle nuestros servicios o mejorar los existentes.<br></br> g) Evaluar el nivel de satisfacción de nuestros servicios y los de la Página Web, realizar estudios sobre hábitos de consumo, preferencias y servicios de interés del Titular.<br></br> h) Mantener comunicación con el Titular.<br></br> i) Dar respuesta a preguntas, quejas, reclamos, comentarios o sugerencias respecto de los productos y/o servicios ofrecidos por&nbsp;ENGINEMASTERS AGENCY.<br></br> j) Realiza el proceso de archivo, de actualización de los sistemas, de protección y custodia de información y bases de datos de&nbsp;ENGINEMASTERS AGENCY.<br></br> k) Las demás finalidades que determinen los Responsables en procesos de obtención de Datos Personales para su Tratamiento, con el fin de dar cumplimiento a las obligaciones legales y regulatorias, así como de las políticas de&nbsp;ENGINEMASTERS AGENCY.</span></p>
            <p><span>3.2.&nbsp;TRATAMIENTO DE LOS DATOS PERSONALES</span></p>
            <p><span>ENGINEMASTERS AGENCY&nbsp;dará tratamiento a los Datos Personales de los Titulares para cumplir las finalidades descritas en esta Política. Dentro de dichos tratamientos,&nbsp;ENGINEMASTERS AGENCY&nbsp;podrá realizar los siguientes:</span></p>
            <p><span>a) La comunicación con los Titulares para efectos contractuales, informativos o comerciales.<br></br> b) Establecer comunicación entre&nbsp;ENGINEMASTERS AGENCY&nbsp;y los Titulares para cualquier propósito relacionado con las finalidades que se establecen en la presente política, ya sea mediante llamadas, mensajes de texto, correos electrónicos y/o físicos.<br></br> c) Ofrecer o informar al Titular sobre productos y/o servicios de&nbsp;ENGINEMASTERS AGENCY&nbsp;que puedan ser de su interés, así como suministrar información general por medio de correos electrónicos como parte de una novedad, comunicación, noticia o&nbsp;<i>Newsletter</i>.<br></br> d) De ser el caso, usar la información para dar trámite a los reclamos, quejas, sugerencias respecto de los servicios ofrecidos por&nbsp;ENGINEMASTERS AGENCY.<br></br> e) Efectuar o implementar la adquisición u oferta de productos o servicios por parte de&nbsp;ENGINEMASTERS AGENCY.<br></br> f) Recabar información acerca del dispositivo que se está utilizando para ver o utilizar la Pagina Web, como por ejemplo dirección IP o el tipo de explorador de Internet o sistema operativo utilizado y vincularla con información personal para garantizar que la Pagina Web brinden la mejor experiencia en línea.<br></br> g) Evaluar el uso de la Pagina Web (de manera anónima e integral), así como realizar estadísticas de las actividades de los Titulares, como, por ejemplo, horas de visitas, frecuencia con las que se visita y sitio web que transfirió a la Pagina Web, de manera que se personalice la experiencia de los Titulares en la Página Web.<br></br> h) Invitar y contactar a los Titulares para que participen en conferencias, talleres, y cualquier otro evento desarrollado por&nbsp;ENGINEMASTERS AGENCY.<br></br> i) Auditar, estudiar y analizar la información de las Bases de Datos para diseñar estrategias comerciales y aumentar y/o mejorar los productos y servicios que ofrece&nbsp;ENGINEMASTERS AGENCY.<br></br> j) Combinar los Datos Personales con la información que se obtenga de otros aliados o compañías o enviarla a los mismos para implementar estrategias comerciales conjuntas.<br></br> k) Suministrar la información y Datos Personales de los Titulares a las sociedades subsidiarias, filiales o afiliadas a&nbsp;ENGINEMASTERS AGENCY, aliados comerciales o a otras sociedades o personas que&nbsp;ENGINEMASTERS AGENCY encargue para realizar el procesamiento de la información y cumplir con las finalidades descritas en la presente Política.<br></br> l) Cuando la información deba ser revelada para cumplir con leyes, regulaciones o procesos legales, para asegurar el cumplimiento de los términos y condiciones, para detener o prevenir fraudes, ataques a la seguridad de&nbsp;ENGINEMASTERS AGENCY&nbsp;o de otros, prevenir problemas técnicos o proteger los derechos de otros como lo requieran los términos y condiciones o la ley.<br></br> m) Para los casos en que aplique, consultar, almacenar y usar la información financiera obtenida de terceros administradores de Bases de Datos, previa autorización expresa del Titular para dicha consulta.<br></br> n) Las demás descritos en la presente política o permitidos en la Ley, así como aquellos necesarios para cumplir las finalidades descritas en este documento.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>IV.&nbsp;DATOS SUMINISTRADOS Y FORMA DE OBTENCIÓN</h2>
            <p><span>ENGINEMASTERS AGENCY podrá pedir expresamente a los Titulares o recolectar de su comportamiento los datos que sean necesarios para cumplir la finalidad de las Bases de Datos, los cuales son, entre otros:</span></p>
            <p><span>4.1.&nbsp;EN RELACIÓN CON LAS BASES DE DATOS DE CLIENTES, PROVEEDORES Y VISITANTES</span></p>
            <p><span>Nombre y apellidos, número de identificación, fecha de nacimiento, dirección de correspondencia, teléfono de contacto, correo electrónico, antecedentes comerciales, judiciales, relaciones comerciales y familiares con otras compañías o con entidades públicas, necesidades e intereses, lugar de trabajo, huellas dactilares, fotografía o imágenes del rostro y corporales, firma, necesidades e intereses, fechas y horas de acceso a las instalaciones de&nbsp;ENGINEMASTERS AGENCY, cualquier otro dato que fuere necesario para lograr las finalidades descritas.</span></p>
            <p><span>4.2.&nbsp;DATOS RECOPILADOS PARA LA BASE DE DATOS DE FUNCIONARIOS DE LA RED DE CONCESIONAROS DE ENGINEMASTERS AGENCY</span></p>
            <p><span>Nombre y apellidos, número de identificación, Fecha de nacimiento y edad, dirección de correspondencia, barrio y teléfono de contacto, correo electrónico, firma, necesidades e intereses, empresa o compañía para la cual trabaja, cargo que desempeña en la empresa o compañía para la cual trabaja; información contable, financiera y crediticia, empresa promotora de salud, cualquier otro dato que fuere necesario para lograr las finalidades descritas.</span></p>
            <p><span>Los datos podrán ser suministrados explícitamente a&nbsp;ENGINEMASTERS AGENCY&nbsp;mediante formatos de ingreso o vinculación, recolectados personalmente a través de sus empleados, prestadores de servicios o representantes, obtenidos mediante consulta a terceros que administren Bases de Datos, o recolectados implícitamente de las operaciones de análisis de grupos objetivo, adquisición de los productos o servicios&nbsp;que son&nbsp;ofrecidos por&nbsp;ENGINEMASTERS AGENCY,&nbsp;o de los comportamientos de los Titulares como reclamaciones, solicitudes de información,&nbsp;encuestas, propuestas, ofertas, visita de las instalaciones de&nbsp;ENGINEMASTERS AGENCY, de participación en proyectos, programas y eventos, entre otros.&nbsp;ENGINEMASTERS AGENCY&nbsp;solo recopilará y/o tratará datos considerados como Datos Sensibles en los casos permitidos por la ley. Para estos casos, los Titulares que no están obligados a suministrar los referidos datos o a autorizar su tratamiento. Una vez suministrados dichos datos y otorgado el correspondiente consentimiento, los datos serán recopilados y tratados únicamente para las finalidades descritas en la presente Política de Privacidad.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>V.&nbsp;COOKIES</h2>
            <p><span>ENGINEMASTERS AGENCY&nbsp;utiliza cookies y otras herramientas que automáticamente recolectan información de las personas cuando usan la Pagina Web, entendiendo que el ingreso a la Pagina Web es una conducta inequívoca de autorización. El tipo de información que puede ser recolectada de esta manera incluye:</span></p>
            <p><span>Información sobre el Localizador de recursos uniforme (URL)</span></p>
            <p><span>Información acerca del explorador que utiliza el Titular</span></p>
            <p><span>Detalles de las páginas visitadas por el Titular</span></p>
            <p><span>Dirección IP</span></p>
            <p><span>Clicks</span></p>
            <p><span>Hipervínculos</span></p>
            <p><span>Consultas&nbsp;</span></p>
            <p><span>&nbsp;</span></p>
            <p><span>La mayoría de los exploradores de Internet están configurados para aceptar cookies. El usuario puede cambiar esta configuración para bloquearlas o que se le alerte cuando estén siendo enviadas a su equipo.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>VI.&nbsp;AUTORIZACIÓN PARA RECOLECCIÓN Y TRATAMIENTO DE DATOS PERSONALES Y OTRA INFORMACIÓN</h2>
            <p><span>Mediante el suministro voluntario de alguno de los Datos Personales en la forma señalada en la presente Política y/o la autorización expresa verbal o por escrito, el Titular autoriza expresa o inequívocamente a&nbsp;ENGINEMASTERS AGENCY&nbsp;para recolectar sus Datos Personales y cualquier otra información que llegare a suministrar, así como para realizar el Tratamiento sobre sus Datos Personales, de conformidad con esta Política de Privacidad y las normas legales aplicables.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>VII.&nbsp;CAMBIOS EN LA POLÍTICA DE TRATAMIENTO.</h2>
            <p><span>Cualquier cambio o modificación sustancial de la presente Políticas de Privacidad, será comunicado oportunamente a los Titulares mediante un comunicado en la Página Web o mediante correo electrónico.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>VIII.&nbsp;INFORMACIÓN Y DATOS DE MENORES DE EDAD</h2>
            <p><span>Por regla general,&nbsp;&nbsp;ENGINEMASTERS AGENCY&nbsp;no usa, ni almacena, o realiza tratamiento alguno sobre datos personales de menores de edad, salvo que fuere estrictamente necesario. Sin embargo, en caso de que por algún motivo se llegare a recopilar datos de menores de edad,&nbsp;ENGINEMASTERS AGENCY&nbsp;tendrá en cuenta el respeto y prevalencia de los derechos de los menores, su interés superior y sus derechos fundamentales, de conformidad con lo establecido en las normas de protección de datos personales<i>.</i></span></p>
            <p><i><span>&nbsp;</span></i></p>
            <h2>IX.&nbsp;ALMACENAMIENTO DE DATOS PERSONALES</h2>
            <p><span>El Titular autoriza de manera expresa a&nbsp;ENGINEMASTERS AGENCY&nbsp;para que almacene los Datos Personales de la forma que considere más segura y oportuna para la debida protección de los datos de los Titulares.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>X.&nbsp;MEDIDAS DE SEGURIDAD PARA LA PROTECCIÓN DE LOS DATOS PERSONALES Y OTRA INFORMACIÓN</h2>
            <p><span>Las medidas de seguridad con las que cuenta&nbsp;ENGINEMASTERS AGENCY&nbsp;buscan proteger los datos de los Titulares con el fin de impedir su pérdida, adulteración, usos y accesos no autorizados. Para ello,&nbsp;ENGINEMASTERS AGENCY&nbsp;de forma diligente implementa las medidas humanas, técnicas y administrativas que razonablemente están a su alcance. El Titular acepta expresamente esta forma de protección y declara que la considera conveniente y suficiente para todos los propósitos.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>XI. DERECHOS DE LOS TITULARES</h2>
            <p><span>ENGINEMASTERS AGENCY&nbsp;informa a los Titulares que, conforme a la legislación vigente, estos tienen el derecho de conocer, actualizar, rectificar su información, y/o revocar la autorización para su tratamiento. En particular, son derechos de los titulares según se establece en el artículo 8 de la Ley 1581 de 2012: a) Conocer, actualizar y rectificar sus Datos Personales b) Solicitar prueba de la autorización otorgada c) Ser informado, previa solicitud, respecto del uso que le ha dado a sus Datos Personales; d) Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la ley e) Revocar la autorización y/o solicitar la supresión del dato f) Acceder en forma gratuita a sus Datos Personales que hayan sido objeto de Tratamiento.</span></p>
            <p><span>11.1.&nbsp;ÁREA ENCARGADA DE PETICIONES, CONSULTAS Y RECLAMOS</span></p>
            <p><span>El área encargada de atender las peticiones, consultas y reclamos de los Titulares para ejercer sus derechos a conocer, actualizar, rectificar y suprimir sus datos y revocar su autorización es la Dirección de Servicio al Cliente de&nbsp;ENGINEMASTERS AGENCY&nbsp;la cual podrá ser contactada en el siguiente correo electrónico&nbsp;</span><a href="mailto:servicioalcliente@EngineMasters.co"><b><span>servicioalcliente@EngineMasters.co</span></b></a><span>&nbsp;y/o en el siguiente número de teléfono (031) 2537529 o 018000 112595.</span></p>
            <p><span>11.2. PROCEDIMIENTO PARA EJERCER SUS DERECHOS</span></p>
            <p><span>En caso de que desee ejercer sus derechos, el Titular deberá enviar un correo electrónico o físico a las direcciones de contacto establecidas en la presente Política de Privacidad. El procedimiento que se seguirá para dichas comunicaciones, serán los que se indican a continuación:</span></p>
            <p><span>a)&nbsp;Peticiones y Consultas Sobre Datos Personales. Cuando el Titular de los datos o sus causahabientes deseen consultar la información que reposa en las Bases de Datos,&nbsp;ENGINEMASTERS AGENCY responderá la solicitud en plazo de máximo diez (10) días hábiles. En cumplimiento a lo dispuesto en la Ley 1581 de 2012, cuando no fuere posible atender la consulta dentro de dicho término, se informará al Titular, se le expresará los motivos de la demora y se le señalará la fecha en que se atenderá su consulta, la cual no podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.</span></p>
            <p><span>b)&nbsp;Revocación de autorización, retiro o supresión de la Base de Datos y reclamos Sobre Datos Personales.&nbsp;Cuando el Titular de los datos o sus causahabientes consideren que la información contenida en las Bases de Datos debe ser objeto de corrección, actualización o supresión, o cuando adviertan el presunto incumplimiento de cualquiera de los deberes contenidos en la Ley 1581 de 2012, podrán presentar un reclamo ante&nbsp;ENGINEMASTERS AGENCY, el cual será tramitado bajo las siguientes reglas:</span></p>
            <p><span>El reclamo se formulará mediante solicitud dirigida a&nbsp;ENGINEMASTERS AGENCY&nbsp;con la identificación de los Titulares, la descripción de los hechos que dan lugar al reclamo, la dirección, y se anexarán los documentos que se quieran hacer valer. Si el reclamo resulta incompleto,&nbsp;ENGINEMASTERS AGENCY&nbsp;podrá requerir al interesado dentro de los cinco (5) días siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido del reclamo. En caso de que&nbsp;ENGINEMASTERS AGENCY&nbsp;no sea competente para resolver el reclamo, dará traslado a quien corresponda en un término máximo de dos (2) días hábiles e informará de la situación al Titular, con lo cual quedará relevada de cualquier reclamación o responsabilidad por el uso, rectificación o supresión de los datos.</span></p>
            <p><span>Una vez recibido el reclamo completo, cuando este no pueda ser resuelto de manera expedita y siempre y cuando sea técnicamente posible, se incluirá en la base de datos una leyenda que diga "reclamo en trámite" y el motivo del mismo, en un término no mayor a dos (2) días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido.&nbsp;</span></p>
            <p><span>El término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al Titular los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término. El retiro o supresión no procederá cuando exista un deber contractual de permanecer en la base de datos de&nbsp;ENGINEMASTERS AGENCY.&nbsp;</span></p>
            <p><span>&nbsp;</span></p>
            <h2>XII.&nbsp;CONTACTO</h2>
            <p><span>Cualquier duda o información adicional será recibida y tramitada mediante su envío a las direcciones de contacto establecidas en la presente Política de Privacidad.&nbsp;</span></p>
            <p><span>&nbsp;</span></p>
            <h2>XIII.&nbsp;TRANSFERENCIA Y TRANSMISIÓN INTERNACIONAL Y NACIONAL DE BASES DE DATOS</h2>
            <p><span>13.1. TRANSFERENCIA</span></p>
            <p><span>Es posible que ENGINEMASTERS AGENCY tenga que transferir información personal de los Titulares a otros Responsables en Colombia o a diferentes países, incluyendo a su matriz u otras compañías de su grupo empresarial. Al aceptar la presente Política para el Tratamiento de Datos Personales el Titular autoriza y da su consentimiento expreso para dicha Transferencia, a cualquier país o territorio.</span></p>
            <p><span>13.. TRANSMISIONES</span></p>
            <p><span>Con la autorización otorgada por cualquiera de los medios previstos para tal fin, el Titular autoriza que ENGINEMASTERS AGENCY realice transmisiones nacionales e internacionales de Datos Personales a un Encargado, para permitir que el Encargado realice el Tratamiento por cuenta de ENGINEMASTERS AGENCY. Estas transmisiones no requerirán ser informadas al Titular ni contar con un consentimiento expreso adicional.</span></p>
            <p><strong><span>XIV. PERÍODO DE VIGENCIA DE LA BASE DE DATOS</span></strong></p>
            <p><span>Las Bases de Datos de&nbsp;ENGINEMASTERS AGENCY, así como los Datos Personales incorporados en ellas, estarán vigentes durante el plazo necesario para cumplir sus finalidades.</span></p>
            <p><span>&nbsp;</span></p>
            <h2>XV.&nbsp;LEGISLACIÓN VIGENTE</h2>
            <p><span>La legislación nacional vigente en materia de protección de Datos Personales está contenida en la Ley 1581 de 2012, el Decreto 1377 de 2013 y la Ley 1266 de 2008 y las normas que las modifiquen o complementen.</span></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
    )
}
export default Datos