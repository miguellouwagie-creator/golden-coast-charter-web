import LegalLayout, { LegalSection, Pending } from "@/components/LegalLayout";

const AvisoLegal = () => (
  <LegalLayout title="Aviso Legal" lastUpdated="Febrero 2026">

    <LegalSection title="1. Datos identificativos del titular">
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos del titular:
      </p>
      <ul className="list-none space-y-1.5 mt-2">
        <li><strong>Denominación comercial:</strong> Golden Coast Charter</li>
        <li><strong>Razón social:</strong> <Pending label="RELLENAR RAZÓN SOCIAL COMPLETA" /></li>
        <li><strong>NIF / CIF:</strong> <Pending label="RELLENAR NIF/CIF" /></li>
        <li><strong>Domicilio fiscal:</strong> <Pending label="CALLE, NÚMERO, PISO" />, Dénia, 03700, Alicante, España</li>
        <li><strong>Teléfono:</strong> +34 676 26 26 28</li>
        <li><strong>Correo electrónico:</strong> goldencoastcharterdenia@gmail.com</li>
        <li><strong>Actividad:</strong> Alquiler de embarcaciones de recreo y servicios de chárter náutico</li>
      </ul>
    </LegalSection>

    <LegalSection title="2. Objeto y ámbito de aplicación">
      <p>
        El presente Aviso Legal regula el acceso y uso del sitio web de Golden Coast Charter (en adelante, «el Sitio
        Web»), con el fin de ofrecer información sobre sus servicios de alquiler de embarcaciones de recreo en Dénia
        (Alicante, España).
      </p>
      <p>
        El acceso al Sitio Web implica la aceptación plena y sin reservas de este Aviso Legal. Golden Coast Charter
        se reserva el derecho a modificarlo en cualquier momento. Se recomienda consultarlo periódicamente.
      </p>
    </LegalSection>

    <LegalSection title="3. Propiedad intelectual e industrial">
      <p>
        Todos los contenidos del Sitio Web —textos, fotografías, imágenes, logotipos, iconos, código fuente y
        diseño— son propiedad de Golden Coast Charter o de sus licenciantes, y están protegidos por la Ley de
        Propiedad Intelectual (Real Decreto Legislativo 1/1996) y demás normativa aplicable.
      </p>
      <p>
        Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación total o
        parcial de dichos contenidos sin autorización escrita del titular.
      </p>
    </LegalSection>

    <LegalSection title="4. Responsabilidad y exclusión de garantías">
      <p>
        Golden Coast Charter no garantiza la disponibilidad continua ni la exactitud de los contenidos del Sitio Web.
        No se responsabiliza de los daños derivados del uso o mal uso del mismo, ni de las interrupciones causadas por
        fallos técnicos, ataques informáticos o causas de fuerza mayor.
      </p>
      <p>
        Tampoco responde del contenido de sitios web de terceros accesibles mediante hipervínculos desde este Sitio
        Web.
      </p>
    </LegalSection>

    <LegalSection title="5. Política de enlaces">
      <p>
        El Sitio Web puede contener enlaces a páginas externas. Golden Coast Charter no controla ni asume
        responsabilidad sobre dichos sitios. La inclusión de un enlace no implica asociación ni respaldo del sitio
        enlazado.
      </p>
    </LegalSection>

    <LegalSection title="6. Legislación aplicable y jurisdicción">
      <p>
        Este Aviso Legal se rige por la legislación española vigente. Para la resolución de cualquier controversia
        derivada del acceso o uso del Sitio Web, las partes se someten expresamente a los Juzgados y Tribunales de
        Dénia (Alicante), con renuncia a cualquier otro fuero que pudiera corresponderles.
      </p>
    </LegalSection>

  </LegalLayout>
);

export default AvisoLegal;
