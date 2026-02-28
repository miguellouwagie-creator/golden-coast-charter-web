import LegalLayout, { LegalSection, Pending } from "@/components/LegalLayout";

const PoliticaPrivacidad = () => (
  <LegalLayout title="Política de Privacidad" lastUpdated="Febrero 2026">

    <p className="text-sm text-muted-foreground leading-relaxed">
      En Golden Coast Charter tratamos sus datos personales de conformidad con el Reglamento (UE) 2016/679 del
      Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre,
      de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
    </p>

    <LegalSection title="1. Responsable del tratamiento">
      <ul className="list-none space-y-1.5">
        <li><strong>Denominación:</strong> Golden Coast Charter</li>
        <li><strong>NIF / CIF:</strong> <Pending label="RELLENAR NIF/CIF" /></li>
        <li><strong>Domicilio:</strong> <Pending label="DIRECCIÓN FISCAL" />, Dénia, 03700, Alicante, España</li>
        <li><strong>Correo electrónico de contacto:</strong> goldencoastcharterdenia@gmail.com</li>
        <li><strong>Teléfono:</strong> +34 676 26 26 28</li>
      </ul>
    </LegalSection>

    <LegalSection title="2. Datos tratados y finalidades">
      <p>
        Golden Coast Charter no dispone de formularios de registro ni almacena datos en servidores propios. El
        contacto se produce exclusivamente a través de:
      </p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>
          <strong>WhatsApp (+34 676 26 26 28):</strong> cuando el usuario pulsa voluntariamente el botón de
          reserva o consulta, inicia una conversación con Golden Coast Charter. Los datos facilitados (nombre,
          teléfono y contenido del mensaje) se utilizan únicamente para atender la consulta o gestionar la reserva.
          En este caso también es de aplicación la{" "}
          <a
            href="https://www.whatsapp.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Política de Privacidad de WhatsApp / Meta
          </a>.
        </li>
        <li>
          <strong>Correo electrónico:</strong> si el usuario contacta directamente, los datos necesarios se
          tratan para gestionar y responder su consulta.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="3. Base jurídica del tratamiento">
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Ejecución de contrato o medidas precontractuales</strong> (Art. 6.1.b RGPD): gestión de
          reservas y presupuestos solicitados por el interesado.
        </li>
        <li>
          <strong>Consentimiento</strong> (Art. 6.1.a RGPD): envío de información comercial si el usuario lo
          solicita expresamente.
        </li>
        <li>
          <strong>Obligación legal</strong> (Art. 6.1.c RGPD): cumplimiento de obligaciones contables, fiscales
          y mercantiles.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="4. Conservación de los datos">
      <p>Los datos se conservarán durante el tiempo estrictamente necesario para la finalidad que motivó su recogida y, como mínimo, los plazos legalmente exigidos:</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Datos de clientes y contratos: <strong>6 años</strong> (Art. 30 Código de Comercio).</li>
        <li>Documentación fiscal: <strong>5 años</strong> (Ley General Tributaria).</li>
        <li>Consultas sin reserva formalizada: hasta <strong>1 año</strong> desde la última comunicación.</li>
      </ul>
    </LegalSection>

    <LegalSection title="5. Destinatarios y cesión de datos">
      <p>Golden Coast Charter no cede datos personales a terceros, salvo en los casos siguientes:</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Por obligación legal (Administración Tributaria, Fuerzas y Cuerpos de Seguridad, órganos judiciales).</li>
        <li>
          <strong>Meta Platforms Ireland Ltd. (WhatsApp)</strong> en calidad de encargado del tratamiento, cuando
          el usuario inicia voluntariamente el contacto por dicha plataforma.
        </li>
        <li>Gestoría o asesoría contable-fiscal, si procede, bajo contrato de encargo del tratamiento.</li>
      </ul>
      <p className="mt-2">
        <strong>No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo</strong>,
        salvo las inherentes al uso de WhatsApp (Meta), sujetas a las garantías adecuadas del RGPD.
      </p>
    </LegalSection>

    <LegalSection title="6. Derechos de los interesados">
      <p>Puede ejercer en cualquier momento los siguientes derechos frente al responsable del tratamiento:</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Acceso</strong> a sus datos personales.</li>
        <li><strong>Rectificación</strong> de datos inexactos o incompletos.</li>
        <li><strong>Supresión</strong> («derecho al olvido»).</li>
        <li><strong>Limitación</strong> del tratamiento.</li>
        <li><strong>Portabilidad</strong> de los datos.</li>
        <li><strong>Oposición</strong> al tratamiento.</li>
      </ul>
      <p className="mt-2">
        Para ejercer estos derechos, envíe un escrito a{" "}
        <strong>goldencoastcharterdenia@gmail.com</strong> indicando su nombre, apellidos y copia de DNI u otro
        documento identificativo. Responderemos en el plazo máximo de <strong>30 días hábiles</strong>.
      </p>
      <p className="mt-2">
        Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, tiene derecho a presentar
        una reclamación ante la{" "}
        <a
          href="https://www.aepd.es"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Agencia Española de Protección de Datos (AEPD)
        </a>
        .
      </p>
    </LegalSection>

    <LegalSection title="7. Seguridad">
      <p>
        Golden Coast Charter aplica las medidas técnicas y organizativas adecuadas para garantizar un nivel de
        seguridad proporcional al riesgo, de conformidad con el Art. 32 del RGPD, con el fin de evitar la
        alteración, pérdida, tratamiento o acceso no autorizado a los datos personales.
      </p>
    </LegalSection>

    <LegalSection title="8. Menores de edad">
      <p>
        Los servicios de Golden Coast Charter están dirigidos a personas mayores de 18 años. No recabamos
        conscientemente datos de menores de 14 años sin el consentimiento expreso de sus padres o tutores legales.
      </p>
    </LegalSection>

  </LegalLayout>
);

export default PoliticaPrivacidad;
