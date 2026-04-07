import fotoPerfil from './fotodeperfil.jpg'
import './App.css'
function App() {
  return (
    <div>
     <header>
    <h1> Olá seja bem-vindo ao meu Curriculo Virtual</h1>
    <img src={fotoPerfil}></img>
    <h2>joao pedro</h2>
      </header> 

      <main>
        <section>
          <h2>Objetivo: Quero Adquerir  conhecimentos em mecanica</h2>
        </section>
         <section>
         <h1> Dados para contato</h1>
         <h2>João pedro</h2>
         <p>44 99924-8900</p>
         <p>E-mail: joao.dionisio.goncalves@escola.pr.gov.br</p>
         <p>Linkdin: xxxxxx</p>
         <p>GitHub: xxxxxx</p>
         </section>
       
       <section>
          <h1>Formação</h1>
          <div>
            <article>
              <h2>Ensino médio Profissionalizante em Desenvolvimentode Sistemas</h2>
              <p>Instituição: Colégio Santa Maria Goretti</p>
              <p>Ano de Conclusão: 2027</p>
            </article>
          </div>
       </section>
       <section>
        <h1>Experiencia Profissional</h1>
        <div>
          <article>
            <h2>empresa: Sacaria Paulista</h2>
            <p>Função/cargo: Auxialiar</p>
            <p>Periodo: desde  2025</p>
          </article>
        </div>
       </section>
       


      </main>

      <footer>
        <div>Desenvolvido por joão pedro</div>
      </footer>
    </div>
  );
}

export default App;
