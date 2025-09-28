export default function CardsUnidades() {
    const cardsData = [
        {
            cssClass: 'card-pinheiros',
            titulo: 'HC Pinheiros',
            endereco: 'Rua Dr. Ovídio Pires de Campos, 225 - Cerqueira César',
            telefone: '(11) 2661-000',
            horario: 'Seg-Sex: 7h-19h',
            servicos: [
                '- Consultas Eletivas',
                '- Day Clinic'
            ]
        },
        {
            cssClass: 'card-central',
            titulo: 'HC Central',
            endereco: 'Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César',
            telefone: '(11) 2661-5000',
            horario: '24h',
            servicos: [
                '- Emergência',
                '- Consultas',
                '- Exames'
            ]
        },
        {
            cssClass: 'card-vila-mariana',
             titulo: 'IMREA Vila Mariana',
            endereco: 'Rua Domingo de Soto, 100 - Jardim Vila Mariana',
            telefone: '(11) 5549-0111',
            horario: 'Seg - Sex: 7h às 19h',
            servicos: [
                '- Emergência',
                '- Consultas',
                '- Exames'
            ]
        }
    ];

    return (
        <>
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className={`card-especialidades-medicas ${card.cssClass}`}
                >
                    <div className="card-link">
                        <h2>{card.titulo}</h2>
                        
                        {/* **Renderização Condicional e Mapeamento** */}
                        {card.endereco && <p><strong>Endereço:</strong> {card.endereco}</p>}
                        {card.telefone && <p><strong>Telefone:</strong> {card.telefone}</p>}
                        {card.horario && <p><strong>Horário:</strong> {card.horario}</p>}
                        
                        {card.servicos && card.servicos.length > 0 && (
                            <p>
                                <strong>Serviços:</strong>
                                <ul>
                                    {card.servicos.map((servico, i) => (
                                        <li key={i}>{servico}</li> 
                                    ))}
                                </ul>
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}