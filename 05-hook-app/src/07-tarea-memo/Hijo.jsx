import React from "react";

// Objetivo: Que este componente solo se monte la primera vez y no cada que cambie el state "value"

export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("Me volvi a generar");
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
