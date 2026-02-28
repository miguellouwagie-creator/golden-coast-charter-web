import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { Link } from "react-router-dom";

const PoliticaCookies = () => (
  <LegalLayout title="Política de Cookies" lastUpdated="Febrero 2026">

    <p className="text-sm text-muted-foreground leading-relaxed">
      En cumplimiento con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
      Comercio Electrónico (LSSI-CE), y la Directiva 2009/136/CE del Parlamento Europeo, Golden Coast Charter
      informa sobre el uso de cookies y tecnologías de almacenamiento local en este sitio web.
    </p>

    <LegalSection title="1. ¿Qué son las cookies?">
      <p>
        Las cookies son pequeños archivos de texto que un sitio web almacena en el dispositivo del usuario al
        visitarlo. Permiten recordar preferencias, analizar el comportamiento de navegación o habilitar
        funcionalidades específicas. Las tecnologías de almacenamiento local (<em>localStorage</em>,{" "}
        <em>sessionStorage</em>) funcionan de forma similar pero no se transmiten al servidor en cada petición.
      </p>
    </LegalSection>

    <LegalSection title="2. Cookies y almacenamiento utilizados en este sitio web">
      <p>
        Este sitio web hace un uso <strong>mínimo</strong> de cookies y almacenamiento local. A continuación se
        detallan todas las tecnologías empleadas:
      </p>
      <div className="overflow-x-auto mt-4 rounded-lg border border-border">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="px-3 py-2.5 text-left font-semibold text-foreground border-b border-border">Nombre</th>
              <th className="px-3 py-2.5 text-left font-semibold text-foreground border-b border-border">Tipo</th>
              <th className="px-3 py-2.5 text-left font-semibold text-foreground border-b border-border">Finalidad</th>
              <th className="px-3 py-2.5 text-left font-semibold text-foreground border-b border-border">Duración</th>
              <th className="px-3 py-2.5 text-left font-semibold text-foreground border-b border-border">Titular</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-3 py-2.5 font-mono text-foreground">gcc_language</td>
              <td className="px-3 py-2.5 text-muted-foreground">Funcional (localStorage)</td>
              <td className="px-3 py-2.5 text-muted-foreground">Guarda el idioma seleccionado (ES / EN)</td>
              <td className="px-3 py-2.5 text-muted-foreground">Persistente</td>
              <td className="px-3 py-2.5 text-muted-foreground">Golden Coast Charter</td>
            </tr>
            <tr className="border-b border-border bg-muted/30">
              <td className="px-3 py-2.5 font-mono text-foreground">gcc_cookie_consent</td>
              <td className="px-3 py-2.5 text-muted-foreground">Técnica (localStorage)</td>
              <td className="px-3 py-2.5 text-muted-foreground">Guarda la respuesta al aviso de cookies</td>
              <td className="px-3 py-2.5 text-muted-foreground">1 año</td>
              <td className="px-3 py-2.5 text-muted-foreground">Golden Coast Charter</td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 font-mono text-foreground">_vercel_*</td>
              <td className="px-3 py-2.5 text-muted-foreground">Técnica / Análisis</td>
              <td className="px-3 py-2.5 text-muted-foreground">Métricas de rendimiento del servidor de alojamiento (Vercel Inc.)</td>
              <td className="px-3 py-2.5 text-muted-foreground">Sesión</td>
              <td className="px-3 py-2.5 text-muted-foreground">Vercel Inc.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 font-medium text-foreground">
        Este sitio web <strong>no utiliza cookies publicitarias, de rastreo ni de perfilado de usuarios</strong>. No
        se instalan cookies de terceros con fines de marketing o seguimiento.
      </p>
    </LegalSection>

    <LegalSection title="3. Cookies técnicas y exención de consentimiento">
      <p>
        Las cookies técnicas y las tecnologías de almacenamiento local utilizadas en este sitio son{" "}
        <strong>estrictamente necesarias</strong> para el funcionamiento básico de la web. Conforme al artículo 22.2
        de la LSSI-CE y las directrices de la Agencia Española de Protección de Datos (AEPD), están exentas del
        requisito de consentimiento previo, ya que no se utilizan con fines publicitarios ni analíticos avanzados.
      </p>
    </LegalSection>

    <LegalSection title="4. Cómo gestionar o eliminar las cookies">
      <p>
        Puede configurar su navegador para rechazar, eliminar o recibir avisos antes de instalar cookies. Tenga en
        cuenta que desactivarlas puede afectar al funcionamiento del sitio:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-preferencias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p className="mt-3">
        Para eliminar los datos de almacenamiento local de este sitio: abra las herramientas de desarrollador
        (F12) → pestaña <em>Application</em> → <em>Local Storage</em> → elimine las entradas del dominio.
      </p>
    </LegalSection>

    <LegalSection title="5. Actualizaciones">
      <p>
        Golden Coast Charter puede actualizar esta Política de Cookies para adaptarla a cambios normativos o
        modificaciones técnicas. Se recomienda revisarla periódicamente.
      </p>
      <p className="mt-2">
        Para más información sobre el tratamiento de datos personales, consulte nuestra{" "}
        <Link to="/privacidad" className="text-primary hover:underline">
          Política de Privacidad
        </Link>.
      </p>
    </LegalSection>

  </LegalLayout>
);

export default PoliticaCookies;
