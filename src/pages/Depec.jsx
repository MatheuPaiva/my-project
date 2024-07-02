import bg from "../assets/depec.jpg";

import { DepartamentoCover } from '../Components/DepartamentoCover'
import { DepartamentoProfile } from '../Components/DepartamentoProfile'
import { DepartamentoOperacional } from '../Components/DepartamentoOperacionais'
import { OperationItem } from '../Components/OperationItem'
import { DepartamentoDocs } from '../Components/DepartamentoDocs'

import { FaBuilding } from "react-icons/fa";
import { PiBooksLight } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";


const Depec = () => {
  return (
    <>
      <DepartamentoCover name="DEPEC" desc="Departamento de Estágios e Cursos de Qualificação" img={bg}>
        <DepartamentoProfile name="DEPEC-SH" desc="O Departamento de Estágios e Cursos de Qualificação Profissional (DEPEC) do Campus Santa Helena da UTFPR desempenha um papel crucial na preparação dos alunos para o mercado de trabalho. O DEPEC facilita estágios, promove a qualificação profissional e mantém um relacionamento contínuo com os egressos da instituição, garantindo que os alunos obtenham a experiência prática necessária para suas futuras carreiras." leader="Leader" leaderDesc="Leader Desc" />
      </DepartamentoCover>
      <DepartamentoOperacional>
        <OperationItem title="Administração de Estágios" text="Gerenciamos as oportunidades de estágio, facilitando o processo de integração dos alunos em empresas e instituições parceiras. Também fornecemos modelos de documentos para acordos de estágio internacional em diversos idiomas (Inglês, Espanhol, Francês e Italiano), atendendo às necessidades dos alunos que buscam experiências internacionais." icon={<FaBuilding size={58} className="text-teal-900" />} />
        <OperationItem title="Cursos de Qualificação" text="Oferecemos uma ampla variedade de cursos de qualificação profissional, ajudando os alunos a desenvolverem competências específicas que complementam suas formações e aumentam suas chances de sucesso no mercado de trabalho." icon={<PiBooksLight size={58} className="text-teal-900" />} reverse={true} />
        <OperationItem title="Apoio ao Egresso" text="Promovemos eventos e atividades para os ex-alunos, fortalecendo o vínculo com a UTFPR e criando uma rede de apoio profissional que beneficia tanto os egressos quanto os atuais estudantes." icon={<FaRegHandshake size={58} className="text-teal-900" />} />
      </DepartamentoOperacional>
      <DepartamentoDocs editaisLink="https://www.utfpr.edu.br/editais?query=%5B%7B%22i%22%3A%22portal_type%22%2C%22o%22%3A%22paqo.selection.any%22%2C%22v%22%3A%5B%22utf.edital%22%2C%22utf.concurso%22%5D%7D%2C%7B%22i%22%3A%22campi%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22santa-helena%22%5D%7D%2C%7B%22i%22%3A%22area_edital%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22graduacao%22%5D%7D%5D&sort_on=created&sort_order=descending"/>
    </>
  )
}

export default Depec