import { faqData } from '../../data/faqData';
 
export default function FaqPage() {
    return (
<main>
<h1>Perguntas Frequentes</h1>
<div className="faq-container">
                {faqData.map((item, index) => (
<details key={index}>
<summary>{item.pergunta}</summary>
                        {/* dangerouslySetInnerHTML é usado aqui para renderizar o <strong> da resposta */}
<p dangerouslySetInnerHTML={{ __html: item.resposta }}></p>
</details>
                ))}
</div>
<div className="manual-button">
<a className="button" href="https://portaldopaciente.hc.fm.usp.br/api/doc/manual-acesso-portal" target="_blank" rel="noopener noreferrer">
                    Manual de Acesso
</a>
</div>
</main>
    );
}