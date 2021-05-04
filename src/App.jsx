import React from 'react'
import './App.css';


import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Cards';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
  <div className="App">
    <Card titulo="#06 Condicional v2">
       <CondicionalComIf numero={10}>

       </CondicionalComIf>
    </Card>        
    <Card titulo="#05 Condicional v1">
       <Condicional numero={25}>

       </Condicional>
    </Card>     
    <Card titulo="#04 Meus Produtos">
       <Repeticao>

       </Repeticao>
    </Card>  
    <Card titulo="#03 Com Filhos">
        <ComFilhos titulo="Opa, sou um Componente com Filhos!" subtitulo="opa, sou um subtítulo">
         <ul>
            <li>Gabi</li>
            <li>Luana</li>
            <li>Manu</li>
            <li>Anna</li>
            <li>Nico</li>
         </ul>
        </ComFilhos>
    </Card>  
  <Card titulo="#02 Componente com Parâmetros">
    <ComParametro titulo="Opa, sou um título :)" subtitulo="Já eu sou um subtítulo!" />
  </Card>  
  <Card titulo="#01 Primeiro Componente">
     <Primeiro></Primeiro> 
  </Card>
  
</div>
);