import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import Input from '../components/Form/input';
import { experiencia } from '../components/Form/options';
import { grau_estudo } from '../components/Form/options';
import { estado_civil } from '../components/Form/options';
import Select from 'react-select';

function CadastroPg2() {
    function handleSubmit (data, { reset }){
        console.log(data);
        reset();
    }
    
    return (
      
      <div id='quadro'>
        <h2>Cadastro de Funcionário</h2>
        <Form className='formClass' onSubmit={handleSubmit}>
        <h4>Função</h4>
        <Input type='text' name='funcao'/>
        <h4>Salário</h4>
        <Input type='tel' name='salario'/>
        <h4>Data de Admissão</h4>
        <Input type='date' name='data'/>
        <h4>Horário de Trabalho</h4>
        <Input type='time' name='hora_trabalho'/>
        <h4>Intervalo</h4>
        <Input type='time' name='intervalo'/>
        <h4>Contrato de Experiência</h4>
        <Select className='opcao' name='experiencia' options={experiencia}/>
        <h4>Grau de Instrução</h4>
        <Select name='grau-instrucao' options={grau_estudo}/>
        <h4>Estado Civil</h4>
        <Select name='estado-civil' options={estado_civil}/>
        <h4>Vale Transporte</h4>
        <Input type='number' name='vale-trans'/>
        <h4>Vale Alimentação</h4>
        <Input type='number' name='vale-alimento'/>
        <Scope path='carteira'>
            <h4>N° Carteira de Trabalho</h4>
            <Input type='text' name='cart-trabalho'/>  
            <h4>Série Carteira de Trabalho</h4>
            <Input type='text' name='serie-cart-trabalho'/>
            <h4>Estado Carteira de Trabalho</h4>
            <Input type='text' name='estado-cart-trabalho'/>
         </Scope>
         
         <a href='/cadastro'><button 
          style={{
            backgroundcolor: '#27a337',
            border: 0,
            padding: '6px 12px',
            color: '#202d33'
          }}
          >Voltar
         </button></a>

         <a href='/'><button 
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

export default CadastroPg2;