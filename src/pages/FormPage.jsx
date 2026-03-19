import React, { useState } from "react";
import "../App.css";

export default function FormPage() {
  const [formData, setFormData] = useState({
    idade: "",
    origem: [],
    outro: "",
    avaliacao_servico: "otimo",
    referrer: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let novaOrigem = [...formData.origem];
      if (checked) novaOrigem.push(value);
      else novaOrigem = novaOrigem.filter((item) => item !== value);
      setFormData({ ...formData, origem: novaOrigem });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="container">
      <form action="https://formspree.io/f/meejyrkb" method="POST">
        <h1>Formulário de Avaliação de App</h1>
        <p>Por favor, preencha as informações abaixo.</p>

        <label className="pergunta">Qual a sua faixa etária?</label>
        <select
          id="idade"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
        >
          <option value="" disabled>
            Selecione...
          </option>
          <option value="menos-18">Menor de 18 anos</option>
          <option value="18-30">18 a 30 anos</option>
          <option value="31-50">31 a 50 anos</option>
          <option value="mais-50">Mais de 50 anos</option>
        </select>

        <fieldset>
          <label className="pergunta">Como você conheceu nossa empresa?</label>
          <div className="lista">
            {["instagram", "google", "youtube", "indicacao"].map((rede) => (
              <label key={rede}>
                <input
                  type="checkbox"
                  name="origem"
                  value={rede}
                  onChange={handleChange}
                />{" "}
                {rede.charAt(0).toUpperCase() + rede.slice(1)}
              </label>
            ))}
          </div>
          <label className="pergunta">Outro:</label>
          <input
            id="outro"
            name="outro"
            type="text"
            placeholder="Digite aqui..."
            value={formData.outro}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend className="pergunta">Como você avalia nosso serviço?</legend>
          <div className="lista">
            {["otimo", "bom", "medio", "ruim", "pessimo"].map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="avaliacao_servico"
                  value={item}
                  checked={formData.avaliacao_servico === item}
                  onChange={handleChange}
                />{" "}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <label className="pergunta" htmlFor="referrer">
            Qual a probabilidade de recomendar a nossa aplicação?
          </label>
          <select
            id="referrer"
            name="referrer"
            value={formData.referrer}
            onChange={handleChange}
          >
            <option value="">(Selecione uma opção)</option>
            <option value="1">Alta probabilidade</option>
            <option value="2">Baixa probabilidade</option>
            <option value="3">Talvez</option>
            <option value="4">Improvável</option>
          </select>

          <label className="pergunta" htmlFor="bio">
            Tem algum comentário?
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="3"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Digite aqui sua mensagem..."
          ></textarea>

          <button type="submit">Enviar Respostas</button>
        </fieldset>
      </form>
    </div>
  );
}
