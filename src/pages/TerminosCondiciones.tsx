import LegalLayout, { LegalSection, Pending } from "@/components/LegalLayout";

const TerminosCondiciones = () => (
  <LegalLayout title="Términos y Condiciones" lastUpdated="Febrero 2026">

    <p className="text-sm text-muted-foreground leading-relaxed">
      Las presentes Condiciones Generales regulan la contratación de los servicios de alquiler de embarcaciones de
      recreo ofrecidos por Golden Coast Charter en Dénia (Alicante, España), en el marco del Real Decreto
      1434/1999, de 10 de septiembre, y la Orden FOM/1144/2003, de 28 de abril, sobre náutica de recreo.
    </p>

    <LegalSection title="1. Prestador del servicio">
      <ul className="list-none space-y-1.5">
        <li><strong>Denominación comercial:</strong> Golden Coast Charter</li>
        <li><strong>NIF / CIF:</strong> <Pending label="RELLENAR NIF/CIF" /></li>
        <li><strong>Domicilio:</strong> <Pending label="DIRECCIÓN COMPLETA" />, Dénia, 03700, Alicante, España</li>
        <li><strong>Contacto:</strong> +34 676 26 26 28 | goldencoastcharterdenia@gmail.com</li>
      </ul>
    </LegalSection>

    <LegalSection title="2. Objeto del contrato">
      <p>
        Golden Coast Charter ofrece el alquiler de embarcaciones de recreo con patrón o sin patrón en aguas de
        Dénia y la Costa Blanca (Alicante). El contrato incluye el uso de la embarcación durante el período
        acordado, el equipo de seguridad obligatorio y, en su caso, los servicios del patrón.
      </p>
    </LegalSection>

    <LegalSection title="3. Proceso de reserva y confirmación">
      <p>La reserva puede realizarse a través del formulario web, por WhatsApp o por correo electrónico. Quedará
      <strong> confirmada únicamente</strong> cuando:</p>
      <ol className="list-decimal pl-5 space-y-1 mt-2">
        <li>Golden Coast Charter confirme por escrito la disponibilidad en la fecha solicitada.</li>
        <li>El cliente abone la señal o el importe acordado según la cláusula 4.</li>
      </ol>
    </LegalSection>

    <LegalSection title="4. Precios, pago y fianza">
      <p>
        Los precios publicados en la web son orientativos e incluyen el alquiler de la embarcación por el período
        contratado. <strong>No incluyen combustible</strong> salvo indicación expresa en la confirmación.
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Señal de reserva:</strong> habitualmente el 30–50 % del total, a acordar en la confirmación.</li>
        <li><strong>Pago restante:</strong> antes del embarque.</li>
        <li>
          <strong>Fianza (depósito de seguridad):</strong>{" "}
          <Pending label="IMPORTE DE LA FIANZA" />, abonada antes del inicio del servicio y devuelta al finalizar
          si la embarcación se entrega en perfecto estado.
        </li>
        <li>
          El combustible consumido se liquidará a precio de coste al finalizar la jornada, o el cliente entregará
          la embarcación con el mismo nivel que al inicio.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="5. Política de cancelación">
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Más de 30 días de antelación:</strong> reembolso del 100 % de la señal.</li>
        <li><strong>Entre 15 y 30 días:</strong> reembolso del 50 % de la señal.</li>
        <li><strong>Menos de 15 días:</strong> pérdida total de la señal.</li>
        <li>
          <strong>Cancelación por causas meteorológicas</strong> (temporal declarado, viento superior a fuerza 5
          Beaufort o aviso de Capitanía Marítima): Golden Coast Charter ofrecerá una fecha alternativa sin coste
          adicional o el reembolso íntegro si no se encuentra alternativa.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="6. Obligaciones del cliente">
      <p>Al formalizar una reserva, el cliente declara y acepta:</p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Ser mayor de 18 años y tener plena capacidad legal para contratar.</li>
        <li>
          En alquileres <strong>sin patrón</strong>: acreditar antes del embarque la titulación náutica en vigor
          requerida para la embarcación (PNB, PER, Patrón de Yate o equivalente), así como la licencia de
          conducción de motos acuáticas si aplica.
        </li>
        <li>No superar el número máximo de personas a bordo indicado para cada embarcación.</li>
        <li>
          Cumplir las normas de seguridad: uso de chalecos salvavidas, prohibición de navegar bajo los efectos del
          alcohol o sustancias estupefacientes, respeto estricto de la zona de navegación autorizada.
        </li>
        <li>Prohibición de navegar de noche salvo pacto expreso y por escrito.</li>
        <li>Prohibición de subarrendar o ceder el uso de la embarcación a terceros.</li>
        <li>
          Responsabilizarse de los daños causados por uso negligente o indebido no cubiertos por el seguro
          (cláusula 8).
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="7. Obligaciones de Golden Coast Charter">
      <p>
        Golden Coast Charter garantiza que las embarcaciones cumplen con la normativa española en materia de
        seguridad náutica, están provistas del equipo de seguridad obligatorio y cuentan con el seguro de
        responsabilidad civil exigido por la legislación vigente.
      </p>
      <p className="mt-2">
        En los servicios <strong>con patrón</strong>, Golden Coast Charter proporciona un patrón titulado y
        asume la responsabilidad de la navegación.
      </p>
    </LegalSection>

    <LegalSection title="8. Seguro">
      <p>
        Las embarcaciones disponen de seguro de casco y de responsabilidad civil frente a terceros conforme a la
        normativa española. La cobertura <strong>no incluye</strong> los efectos personales de los pasajeros, ni
        los daños causados por incumplimiento de las presentes condiciones o uso indebido por parte del cliente.
      </p>
    </LegalSection>

    <LegalSection title="9. Limitación de responsabilidad">
      <p>
        Golden Coast Charter no será responsable de los daños derivados de causas de fuerza mayor, condiciones
        meteorológicas adversas sobrevenidas durante la navegación, actos de terceros o incumplimiento por parte del
        cliente de las presentes condiciones.
      </p>
    </LegalSection>

    <LegalSection title="10. Resolución de litigios en línea">
      <p>
        Conforme al Reglamento (UE) 524/2013, en caso de litigio el consumidor puede acceder a la plataforma
        europea de resolución en línea:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          https://ec.europa.eu/consumers/odr
        </a>.
      </p>
    </LegalSection>

    <LegalSection title="11. Legislación aplicable y jurisdicción">
      <p>
        El presente contrato se rige íntegramente por la legislación española. Para la resolución de cualquier
        controversia, las partes se someten expresamente a los Juzgados y Tribunales de Dénia (Alicante), con
        renuncia a cualquier otro fuero que pudiera corresponderles.
      </p>
    </LegalSection>

  </LegalLayout>
);

export default TerminosCondiciones;
