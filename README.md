# Habitar lo digital | Ciudadanía, Bienestar y Convivencia Digital (EDyTIC 2027)

Artefacto educativo transversal orientado a **estudiantes, familias, docentes, equipos de centro, POITE (Secundaria) y contenidistas de Uruguay Educa (DGEIP · Primaria)** en Uruguay.

> **Estado del proyecto:** Versión de adecuación técnico-pedagógica (Entrega 0 + Rediseño P1, noviembre 2026) hacia el plan de trabajo integrado EDyTIC 2027. Este recurso **no sustituye** normativas oficiales de ANEP ni reglamentos internos de cada centro educativo.

---

## Autoría y marco de desarrollo

- **Artefacto digital de autoría y desarrollo del Prof. Esp. Santiago Hernández**, en el marco de **EDyTIC** (`shernandez@uruguayeduca.edu.uy` · [CVuy ANII](https://exportcvuy.anii.org.uy/cv/?8242b38f35c3b4fc9b8d3442700f810e)).
- **Adaptaciones y aportes:** Espacio reservado para registrar colaboraciones de equipos territoriales (EDyTIC / Inspección de Informática, POITE y Contenidistas de Uruguay Educa DGEIP) conforme se incorporen revisiones editoriales.

---

## Recorridos y módulos principales

1. **Inicio**: Presentación de *Habitar lo digital*, selección no identificatoria de recorrido, acceso directo a «Empezar un taller» y «Material para imprimir».
2. **Estudiantes**: Propuestas diferenciadas por tramo (3.º–4.º y 5.º–6.º de Primaria con mediación adulta; EBI 7.º–9.º en Secundaria) organizadas en **cinco ejes mínimos** y **8 situaciones didácticas (casos dilemáticos)** sin calificaciones deterministas.
3. **Familias**: Bienestar y hábitos digitales cotidianos, **submódulo «Mi primer celular»** (controles parentales Android/iOS, pautas **S.E.R.C.** organizadas en la plataforma), **diario opcional no persistente** de observación de pantallas, **guía de conversación** y **acuerdo familiar imprimible**.
4. **Docentes y centros**: Criterios pedagógicos, itinerario breve de formación de referentes, **rúbrica formativa ligera** para trabajo con dilemas y **acuerdo de convivencia áulica dialogado** (con opción de «guía para acordar» sin firma).
5. **POITE | Secundaria**: Kit territorial listo para talleres de 45–60 minutos (y opción extendida), con objetivos, preparación, actividad sin conexión, modo proyector, casos y rúbrica de cierre.
6. **Contenidistas Uruguay Educa DGEIP | Primaria**: Kit territorial diferenciado por tramos de Primaria (Inicial/primeros años, 3.º–4.º y 5.º–6.º), producciones creativas, conversatorios y materiales para adultos responsables.
7. **Fuentes, normativa y ayuda**:
   - **Resolución CODICEN N.º 1999/026, Acta N.º 25 (04/08/2026)** y anexo Informe del Grupo de Trabajo sobre Ciudadanía Digital (06/07/2026), diferenciando normas vigentes, recomendaciones y acuerdos institucionales.
   - **Aristas Media 2025 (INEEd, 2026, Cap. 5, pp. 132–140)** con denominadores, población y nota metodológica explícita (sin inferencias causales injustificadas).
   - **Directorio verificado de canales de ayuda y denuncia** (INAU Línea Azul, Ministerio del Interior / Cibercrimen, Fiscalía, AGESIC / CERTuy, Plan Ceibal) y **protocolo de actuación pedagógica** ante incidentes.
8. **Acerca de / Créditos / Privacidad / Licencias / Accesibilidad**: Política explícita de **cero recolección de datos personales** (sin encuestas, claves de investigador ni envíos remotos en la edición educativa pública), meta técnica WCAG 2.2 AA y desglose de licencias.

---

## Privacidad y separación de investigación

La edición educativa pública **no recolecta datos personales, no incluye formularios ni paneles de investigación, no almacena credenciales en el cliente y no realiza envíos a webhooks externos**. Toda interacción (checklist, diario de observación de pantallas, generador de acuerdos imprimibles) opera exclusivamente de forma local y volátil en la sesión del usuario.

---

## Cómo iniciar la plataforma localmente

```bash
npm install
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

Para compilar la versión de producción:

```bash
npm run build
```

---

## Licencias y derechos de uso

- **Contenidos originales de autoría propia:** Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es)).
- **Código fuente y dependencias de software:** El código de la aplicación utiliza React, Vite, Tailwind CSS, Lucide React, `canvas-confetti` y `qrcode.react` bajo sus respectivas licencias de código abierto (MIT).
- **Documentos y videos de terceros incluidos en la biblioteca:** Conservan la titularidad, autoría y términos de uso de sus organismos emisores (ANEP, DGEIP, DGES, AGESIC, URCDP, Plan Ceibal, UNICEF, UNESCO, entre otros). El uso institucional fuera del ámbito educativo no comercial requiere verificar los términos correspondientes.
