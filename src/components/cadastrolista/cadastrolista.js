import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/user/cadastro`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      if (response.status !== 201) throw new Error(json);
      // setCookie("authorization", json); // Removido porque setCookie não está importado
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-transparent text-red-500">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div className="bg-gray-800 bg-opacity-60 rounded-md max-w-md p-10 border-opacity-60 z-10 text-white">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Crie sua conta</h2>
        <form onSubmit={handleForm} className="space-y-4">
          <div className={`form-control ${error ? 'is-invalid' : ''}`}>
            <label htmlFor="username" className="text-white">
              Nome de Usuário
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleFormEdit(e, "name")}
              placeholder="Digite seu Nome"
              className="bg-white text-black w-full p-3 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className={`form-control ${error ? 'is-invalid' : ''}`}>
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleFormEdit(e, "email")}
              placeholder="E-mail"
              className="bg-white text-black w-full p-3 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className={`form-control ${error ? 'is-invalid' : ''}`}>
            <label htmlFor="password" className="text-white">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(event) => handleFormEdit(event, "password")}
              placeholder="Digite sua Senha"
              className="bg-white text-black w-full p-3 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-full p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Cadastrar
          </button>
        </form>
        <a href="/" className="block mt-4 text-white hover:text-blue-500 pl-1">
          Já possui uma conta?
        </a>
      </div>
    </div>
  );
};

export default Register;
