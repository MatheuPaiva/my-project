import { DepartamentoCover } from "../Components/DepartamentoCover";
import { DepartamentoDocs } from "../Components/DepartamentoDocs";
import { DepartamentoOperacional } from "../Components/DepartamentoOperacionais";
import { DepartamentoProfile } from "../Components/DepartamentoProfile";
import { OperationItem } from "../Components/OperationItem";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { FaRegHandshake, FaRegNewspaper } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import bg from "../assets/derint.jpg";

const Derint = () => {
  return (
    <>
      <DepartamentoCover name="DERINT" desc="Departamento de Relações Interinstitucionais" img={bg}>
        <DepartamentoProfile name="DERINT-SH" desc="O Departamento de Relações Internacionais (DERINT–SH) da UTFPR Campus Santa Helena é responsável por coordenar e fomentar as atividades de internacionalização, buscando oportunidades de intercâmbio acadêmico e profissional, além de orientar tanto os alunos da UTFPR que desejam estudar no exterior quanto os estudantes estrangeiros que vêm para nossa instituição. Nosso objetivo é promover a integração global, proporcionando experiências enriquecedoras para todos os envolvidos." leader="Gloria Patricia Lopez Sepúlveda" leaderDesc="Diretora de Relações Empresariais" />
      </DepartamentoCover>
      <DepartamentoOperacional>
        <OperationItem title="Intercâmbio Acadêmico" text="Coordenamos e orientamos os alunos da UTFPR que desejam participar de programas de intercâmbio acadêmico, garantindo que estejam preparados e com toda a documentação necessária para estudar no exterior." icon={<FaEarthAmericas size={58} className="text-teal-900" />} />
        <OperationItem title="Recepção de Estudantes Estrangeiros" text="Apoiamos os estudantes estrangeiros que vêm à UTFPR, oferecendo orientação e suporte em relação à adaptação acadêmica e cultural, além de ajudar com a documentação e processos administrativos necessários." icon={<HiMiniAcademicCap size={58} className="text-teal-900" />} reverse={true} />
        <OperationItem title="Parcerias Internacionais" text="Estabelecemos e mantemos parcerias com instituições internacionais, promovendo cooperações que beneficiem nossos alunos e pesquisadores, facilitando o intercâmbio de conhecimentos e experiências." icon={<FaRegHandshake size={58} className="text-teal-900" />} />
        <OperationItem title="Mobilidade Estudantil" text="Gerenciamos os programas de mobilidade estudantil, incluindo a Mobilidade Internacional e a Dupla Diplomação, assegurando que os alunos possam estudar no exterior sem perder seu vínculo com a UTFPR." icon={<GiCommercialAirplane size={58} className="text-teal-900" />} reverse={true} />
      </DepartamentoOperacional>
      <DepartamentoDocs editaisLink="https://www.utfpr.edu.br/editais?query=%5B%7B%22i%22%3A%22portal_type%22%2C%22o%22%3A%22paqo.selection.any%22%2C%22v%22%3A%5B%22utf.edital%22%2C%22utf.concurso%22%5D%7D%2C%7B%22i%22%3A%22campi%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22santa-helena%22%5D%7D%2C%7B%22i%22%3A%22area_edital%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22internacionalizacao%22%5D%7D%5D&sort_on=created&sort_order=descending">
        <a href="https://www.utfpr.edu.br/internacional/noticias" className="cursor-pointer" target="_blank" rel="noreferrer">
          <div className="bg-teal-950 w-20 h-20 rounded-md flex items-center justify-center mx-auto">
            <FaRegNewspaper color="#fff" size={26} />
          </div>
          <p className="text-center mt-3 text-teal-800">Noticias</p>
        </a>
        <a href="https://www.utfpr.edu.br/internacional/cooperacao" className="cursor-pointer" target="_blank" rel="noreferrer">
          <div className="bg-teal-950 w-20 h-20 rounded-md flex items-center justify-center mx-auto">
            <FaEarthAmericas color="#fff" size={26} />
          </div>
          <p className="text-center mt-3 text-teal-800">Cooperações</p>
        </a>
      </DepartamentoDocs>
    </>
  )
}

export default Derint