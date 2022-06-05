import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '../components/Form/input';


function Cadastro() {
    function handleSubmit (data, { reset }){
        console.log(data);
        reset();
    }

    return (
      
      <div id='quadro'>
        <h2>Cadastro de Funcionário</h2>
        <Form className='formClass' onSubmit={handleSubmit}>
        <h4>Nome do Funcionário</h4>
        <Input type='text' name='nome_fun'/>
        <h4>Telefone</h4>
        <Input type='tel' name='telefone_fun'/>
        <h4>CPF</h4>
        <Input type='text' name='cpf_fun'/>
        <h4>RG</h4>
        <Input type='text' name='rg_fun'/>
        <Scope path='address'>
          <h4>Endereço</h4>
          <Input type='text' name='end_fun'/>
          <h4>Bairro</h4>
          <Input type='text' name='bairro'/>
          <h4>CEP</h4>
          <Input type='text' name='cep'/>
          <h4>Número</h4>
          <Input type='text' name='numero'/>
          <h4>Cidade</h4>
          <Input type='text' name='cidade'/>  
        </Scope>
        <h4>Título de Eleitor</h4>
        <Input type='text' name='tit_eleitor_fun'/>
         
         <a href='/cadastroPg2'><button 
          type='submit'
          style={{
            backgroundcolor: '#27a337',
            border: 0,
            padding: '6px 12px',
            color: '#202d33'
          }}
          >Enviar
         </button></a>
        </Form>
      </div>
    );
};

export default Cadastro;