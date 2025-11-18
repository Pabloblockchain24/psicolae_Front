import "./whatsAppButton.css"

function whatsAppButton() {
  const phoneNumber = "56926061550";
  const message = "Hola, necesito información";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
        alt="WhatsApp"
      />
    </a>
  );
}

export default whatsAppButton;
