import LegalLayout from "./LegalLayout"

export default function Support() {
  return (
    <LegalLayout title="Soporte" lastUpdated="13 de junio de 2026">
      <p>
        Estamos aquí para ayudarte con <strong>Repp</strong>. Si tienes problemas con tu cuenta,
        entrenamientos, acceso a la app, datos personales o cualquier otra duda, escríbenos a{" "}
        <a href="mailto:support@repp.community">support@repp.community</a>.
      </p>

      <h2>Contacto</h2>
      <p>
        Para recibir ayuda, envíanos un correo a{" "}
        <a href="mailto:support@repp.community">support@repp.community</a> con una descripción del
        problema. Si puedes, incluye el correo asociado a tu cuenta, el modelo de tu dispositivo, la
        versión de iOS o Android y capturas de pantalla relevantes.
      </p>
      <p>
        Intentamos responder dentro de 2 a 3 días hábiles. Los tiempos pueden variar según el
        volumen de solicitudes.
      </p>

      <h2>Temas frecuentes</h2>
      <ul>
        <li>Problemas para iniciar sesión o recuperar acceso a tu cuenta.</li>
        <li>Dudas sobre rutinas, historial de entrenamientos o progreso.</li>
        <li>Errores técnicos, fallos de sincronización o comportamiento inesperado.</li>
        <li>Solicitudes relacionadas con privacidad, datos personales o eliminación de cuenta.</li>
        <li>Comentarios, sugerencias o reportes para mejorar la app.</li>
      </ul>

      <h2>Privacidad y datos</h2>
      <p>
        Si quieres solicitar acceso, corrección o eliminación de tus datos personales, escríbenos a{" "}
        <a href="mailto:support@repp.community">support@repp.community</a>. También puedes revisar
        nuestra <a href="/privacy-policy">Política de Privacidad</a> para conocer cómo recopilamos,
        usamos y protegemos tu información.
      </p>

      <h2>Compras y suscripciones</h2>
      <p>
        Si tu solicitud está relacionada con pagos, compras dentro de la app o suscripciones,
        incluye cualquier detalle útil para ubicar el caso. Los reembolsos y la facturación pueden
        depender de las políticas de la tienda donde realizaste la compra.
      </p>

      <h2>Información legal</h2>
      <p>
        Para conocer las reglas de uso de Repp, revisa nuestros{" "}
        <a href="/terms-and-conditions">Términos y Condiciones</a>.
      </p>
    </LegalLayout>
  )
}
