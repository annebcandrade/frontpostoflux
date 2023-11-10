import { Header, Infos, NewRegister, Historic, Results, InputOne, InputTwo, Container } from "./styles";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UserResult } from './types';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})


function Home() {

    const [results, setResults] = useState<UserResult[]>([]);
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [fueltype, setFuelType] = useState('')
    const [quantity, setQuantity] = useState('')
    const [newRecordAdded, setNewRecordAdded] = useState(false); 
    const [newRecordError, setNewRecordError] = useState<string | null>(null);



    useEffect(() => {
        api.get(`/users/${cpf}`)
            .then(response => {
                console.log(response.data);
                setResults(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
            });

    }, [])


    const handleSearch = () => {
        api.get(`/users/${cpf}`)
            .then(response => {
                setResults(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
            });
    };

    function formatarData(dataString: string): string {
        const data = new Date(dataString);
        const dia = data.getUTCDate();
        const mes = data.getUTCMonth() + 1; // Os meses do ano começam do zero
        const ano = data.getUTCFullYear();
      
        return `${dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;
      }


      function newRegister() {
        // Verificar se algum campo está nulo
        if (!name || !cpf || !fueltype || !quantity) {
          setNewRecordAdded(false); // Limpar a mensagem anterior, se houver
          setNewRecordError('Preencha todos os campos para cadastrar o registro');
          return;
        }
      
        api.post('/users', {
          name,
          cpf,
          fueltype,
          quantity,
        })
        .then(response => {
          console.log('Registro cadastrado com sucesso!', response.data);
          setNewRecordError(null); // Limpar a mensagem de erro
          setNewRecordAdded(true); // Definir a mensagem ao adicionar um novo registro
          // Limpar os campos após o cadastro
          setName('');
          setCpf('');
          setFuelType('');
          setQuantity('');
        })
        .catch(error => {
          console.error("Erro ao cadastrar novo registro:", error);
          setNewRecordAdded(false); // Limpar a mensagem anterior, se houver
          setNewRecordError('Erro ao cadastrar novo registro');
        });
      }
      
    



    return (
        <div>
            <div>
                <Header>
                    <h1>AutoPosto Flux</h1>
                </Header>

                <Infos>
                    <h2>Olá, motorista! </h2>
                    <p> Bem-vindo ao Gerenciamento de Abastecimento do Posto Flux. <br />
                        Aqui você pode adicionar um novo registro de abastecimento de combustível e também acompanhar o seu histórico de compras <br />
                        no nosso posto.
                    </p>
                </Infos>

                <NewRegister>
                    <h1>Adicionar Novo Registro</h1>
                    <h3>Para adicionar um novo registro de abastecimento, preencha as informações pedidas, <br />
                        ao colocar os dados de quantidade de litros e o tipo de combustível escolhido o valor total <br />
                        será gerado e irá automaticamente para o seu histórico de compras. </h3>
                    <h3>Atente-se a preencher o campo CPF com o mesmo número em todas as compras, pois será por ele que você <br />
                        terá acesso ao seu histórico.</h3>
                    <InputTwo>
                        <p>DIGITE SEU NOME:</p>
                        <input placeholder="NOME" onChange={event => setName(event.target.value)}></input>
                        <p>DIGITE SEU CPF:</p>
                        <input placeholder="CPF" onChange={event => setCpf(event.target.value)} type="number"></input>
                        <p>DIGITE O TIPO DE COMBUSTÍVEL ABASTECIDO: < br />(Etanol, Gasolina ou Diesel.)</p>
                        <input placeholder="TIPO DE COMBUSTÍVEL" onChange={event => setFuelType(event.target.value)}></input>
                        <p>DIGITE A QUANTIDADE DE LITROS ABASTEICDOS: /<br /> (Apenas o número correspondente, exemplo: "5")</p>
                        <input placeholder="QUANTIDADE DE LITROS" onChange={event => setQuantity(event.target.value)} type="number"></input>
                        <button onClick={newRegister}>REGISTRAR</button>
                    </InputTwo>
                </NewRegister>

                <Historic>
                    <h1>Exibir Histórico de Abastecimento</h1>
                    <h3>Pesquise o seu histórico preenchendo no campo o seu CPF(número que você cadastra todas as compras). <br />
                        Serão exibidos os dados de cada registro disponibilizados e também o valor total gerado e a data de cada compra.</h3>
                    <InputOne>
                        <p>DIGITE O SEU CPF: </p>
                        <input type="number" placeholder="CPF" value={cpf}
                            onChange={(e) => setCpf(e.target.value)}></input>
                        <button onClick={handleSearch}>PESQUISAR</button>
                    </InputOne>
                </Historic>

                <Results>
                    {results.map(result => (
                        <li key={result.id}> Nome: {result.name} - CPF: {result.cpf} - Quantidade de Litros: {result.quantity} - Tipo de combustível: {result.fueltype} - Valor Total: {result.amount} - Data: {formatarData(result.createdAt)}
                         </li>
                    ))}
                </Results>
                <Container>
                {newRecordError && <p>{newRecordError}</p>}
                {newRecordAdded && <p>Novo registro adicionado com sucesso!</p>}
                </Container>
            </div>

        </div>
    )
}

export default Home
