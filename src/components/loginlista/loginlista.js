import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch(`/api/user/login`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      if (response.status !== 200) throw new Error(json);
      setCookie("authorization", json);
      router.push("/listadetarefas");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative">
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
        <h2 className="text-3xl font-semibold mb-6 text-blue-500">
          Faça login na sua conta
        </h2>
        <form onSubmit={handleForm} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="email" className="text-base block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(event) => handleFormEdit(event, "email")}
              placeholder="E-mail"
              className="bg-white text-black w-full p-3 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-base block">
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
            Entrar
          </button>
        </form>
        <a
          href="/cadastro"
          className="block mt-4 hover:text-blue-500 text-base"
        >
          Ainda não tem uma conta? Cadastre-se
        </a>
      </div>
    </div>
  );
};

export default Login;
