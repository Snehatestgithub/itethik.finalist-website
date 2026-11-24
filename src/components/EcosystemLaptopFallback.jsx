export default function EcosystemLaptopFallback() {
  return (
    <div className="ecosystem-laptop-fallback" aria-hidden="true">
      <div className="laptop-screen">
        <div className="laptop-bezel">
          <div className="laptop-camera" />
          <div className="laptop-display">
            <div className="laptop-brand-screen">
              <span className="laptop-brand-logo">
                <img src="/logo.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="laptop-hinge" />
      </div>
      <div className="laptop-base">
        <div className="laptop-keyboard">
          {Array.from({ length: 5 }, (_, row) => (
            <div className="laptop-key-row" key={row}>
              {Array.from({ length: row === 4 ? 9 : 13 }, (_, key) => (
                <i key={key} />
              ))}
            </div>
          ))}
        </div>
        <div className="laptop-trackpad" />
        <div className="laptop-base-edge" />
      </div>
    </div>
  );
}
