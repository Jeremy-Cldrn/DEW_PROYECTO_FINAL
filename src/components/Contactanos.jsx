import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 📌 Esquema de validación con Yup
const schema = yup.object().shape({
  name: yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no puede superar los 50 caracteres")
    .required("El nombre es obligatorio"),

  email: yup.string()
    .required("El correo es obligatorio")
    .email("Formato de correo inválido"),

  celular: yup.string()
    .matches(/^[0-9]+$/, "El celular solo puede contener números")
    .min(9, "El celular debe tener al menos 9 dígitos")
    .max(15, "El celular no puede superar los 15 dígitos")
    .required("El celular es obligatorio"),

  description: yup.string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(300, "La descripción no puede superar los 300 caracteres")
    .required("La descripción es obligatoria"),
});

const Contactanos = () => {
  // ✅ useForm debe estar dentro del componente
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onData = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <section>
        <h5>“Te ofrecemos lo mejor, contáctanos”</h5>

        <form onSubmit={handleSubmit(onData)}>
          {/* Nombre */}
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" {...register("name")} />
          <p style={{ color: "red" }}>{errors.name?.message}</p>

          {/* Celular */}
          <label htmlFor="celular">Celular</label>
          <input type="text" id="celular" {...register("celular")} />
          <p style={{ color: "red" }}>{errors.celular?.message}</p>

          {/* Correo */}
          <label htmlFor="correo">Correo</label>
          <input type="email" id="correo" {...register("email")} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>

          {/* Comentarios */}
          <label htmlFor="comentarios">Comentarios</label>
          <textarea id="comentarios" {...register("description")} />
          <p style={{ color: "red" }}>{errors.description?.message}</p>

          {/* Botón */}
          <input type="submit" value="Enviar" />
        </form>
      </section>

      {/* Ubicación */}
      <section className="conten_ubicacion">
        <h5>Ubícanos</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62427.46441322061!2d-77.0296179!3d-12.0630149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c035ead921%3A0x3126d574246724aa!2sParque%20de%20la%20Exposici%C3%B3n!5e0!3m2!1ses-419!2spe!4v1740030447971!5m2!1ses-419!2spe"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </Fragment>
  );
};

export default Contactanos;