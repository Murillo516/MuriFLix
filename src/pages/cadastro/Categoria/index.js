import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFIeld';

function CadastroCategoria () {
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'', 
  }
  const [categorias, setCategorias] = useState(['']);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(key, valor) {
    setValues({
      ...values,
      [key]: valor,
    })
  }
  
  function handleChange (infosDoEvento) {
    //const { getAttribute, value } = infosDoEvento.target; -- it's not working
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          console.log('Você tentou')
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
      }}>

        <FormField
         label="Nome da categoria"
         type="text"
         name="nome"
         value={values.nome}
         onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
              />
          </label>
        </div>
        
        <FormField
         label="Cor"
         type="color"
         name="cor"
         value={values.cor}
         onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) =>{
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
    )
  }

  export default CadastroCategoria;