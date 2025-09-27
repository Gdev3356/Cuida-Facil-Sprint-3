import { useNavigate } from 'react-router-dom';
import especialidadesImg from '/assets/img/Especialidades-Botao.jpeg';
import consultaImg from '/assets/img/Marcar-Consulta.jpeg';
import unidadesImg from '/assets/img/Unidades.jpeg';

export default function Cards() {
    const navigate = useNavigate();

    const cardsData = [
        {
            tipo: 'especialidades',
            titulo: 'Especialidades',
            descricao: 'Aqui você irá encontrar mais informações sobre qual é a função de cada especialidade médica.',
            rota: '/especialidades',
            imagem: especialidadesImg
        },
        {
            tipo: 'consulta',
            titulo: 'Marcar Consulta',
            descricao: 'Marque uma consulta no momento e horário mais favorável para você.',
            rota: '/consulta',
            imagem: consultaImg
        },
        {
            tipo: 'unidades',
            titulo: 'Unidades',
            descricao: 'Encontre aqui informações importantes sobre as unidades mais próximas de você!',
            rota: '/unidades',
            imagem: unidadesImg
        }
    ];

    return (
        <main className="cards">
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className="card"
                    onClick={() => navigate(card.rota)}
                    style={{
                        backgroundImage: `url(${card.imagem})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="card-content">
                        <h2>{card.titulo}</h2>
                        <p>{card.descricao}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}