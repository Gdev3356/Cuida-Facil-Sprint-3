import CardsEspecialidades from "../../components/Cards/CardsEspecialidades";
import Voltar from "../../components/Voltar/Voltar";

export default function EspecialidadesPage(){
    return(
        <main className="cards">
            <Voltar/>
            <CardsEspecialidades/>
        </main>
    );
}