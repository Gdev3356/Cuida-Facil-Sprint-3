import { useNavigate } from 'react-router-dom';

export default function Cards() {
    const navigate = useNavigate();

    const cardsData = [
        {
            cssClass: 'card-especialidades',
            titulo: 'Especialidades',
            descricao: 'Aqui você irá encontrar mais informações sobre qual é a função de cada especialidade médica.',
            rota: '/especialidades',
        },
        {
            cssClass: 'card-consulta',
            titulo: 'Marcar Consulta',
            descricao: 'Marque uma consulta no momento e horário mais favorável para você.',
            rota: '/consulta',
        },
        {
            cssClass: 'card-unidades',
            titulo: 'Unidades',
            descricao: 'Encontre aqui informações importantes sobre as unidades mais próximas de você!',
            rota: '/unidades',
        }
    ];

    return (
        <main className="cards"> 
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className={`card ${card.cssClass}`}
                    onClick={() => navigate(card.rota)}
                >
                    <a href={card.rota} className="card-link">
                        <h2>{card.titulo}</h2>
                        <p>{card.descricao}</p>
                    </a>
                </div>
            ))}
        </main>
    );
}