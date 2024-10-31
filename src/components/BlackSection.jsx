import React from "react";

const BlackSection = () => {
  return (
    <>
      <div style={{ backgroundColor: "black", padding: "50px" }}>
        <div
          className="blackSection"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "300px",
          }}
        >
          <span style={{ textAlign: "left" }}>Ephémère</span>
          <img
            src="/ephemere.png"
            alt="Ephémère"
            style={{ width: "400px", marginLeft: "20px" }}
          />
        </div>

        <div
          className="blackSection"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "300px",
            marginTop: "20px",
          }}
        >
          <img
            src="/eternel.png"
            style={{ width: "400px", marginRight: "-100px" }}
          />
          <span>Eternel</span>
        </div>
      </div>

      <div style={{ backgroundColor: "black", textAlign: "right" }}>
        <div
          style={{
            display: "inline-block",
            textAlign: "left",
            paddingRight: "20vh",
            paddingBottom: "20vh",
          }}
        >
          Dans ce monde d&apos;éphémères, Molten incarne la beauté
          <br /> précieuse de l&apos;instant
        </div>
      </div>
    </>
  );
};

export default BlackSection;
