import bg from "../assets/depex.jpg";
import { DepartamentoCover } from '../Components/DepartamentoCover'
import { DepartamentoProfile } from '../Components/DepartamentoProfile'
import { DepartamentoOperacional } from '../Components/DepartamentoOperacionais'
import { OperationItem } from '../Components/OperationItem'
import { DepartamentoDocs } from '../Components/DepartamentoDocs'

import { PiBooksLight } from "react-icons/pi";
import { FaHammer } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdScience } from "react-icons/md";

const Depex = () => {
  return (
    <>
      <DepartamentoCover name="DEPEX" desc="Departamento de Extensão" img={bg}>
        <DepartamentoProfile name="DEPEX-SH" desc="A Extensão Universitária na UTFPR Campus Santa Helena é um processo multifacetado que combina aspectos educativos, culturais, científicos e políticos para promover a interação transformadora entre a universidade e a sociedade. Este processo busca ampliar o impacto do ensino e da pesquisa através de iniciativas que abordam diretamente as realidades e necessidades sociais, contribuindo para o desenvolvimento cultural e educacional da população, especialmente daqueles que têm menos acesso à educação formal." leader="Leader" leaderDesc="Leader Desc" />
      </DepartamentoCover>
      <DepartamentoOperacional>
        <OperationItem title="Administração de Cursos e Oficinas" text="Oferecemos cursos e oficinas voltados para diversas áreas do conhecimento, proporcionando oportunidades de aprendizado contínuo para a comunidade acadêmica e externa." icon={<PiBooksLight size={58} className="text-teal-900" />} />
        <OperationItem title="Prestação de Serviços" text="Administramos a prestação de serviços tecnológicos e de consultoria, atendendo às demandas da sociedade e contribuindo para o desenvolvimento regional." icon={<FaHammer size={58} className="text-teal-900" />} reverse={true} />
        <OperationItem title="Organização de Eventos" text=" Organizamos eventos de diversos tipos e tamanhos, como congressos, seminários, ciclos de debates, exposições e espetáculos, que promovem a disseminação do conhecimento e a integração entre a universidade e a sociedade." icon={<FaCalendarAlt size={58} className="text-teal-900" />} />
        <OperationItem title="Projetos de Extensão" text="Conduzimos projetos de caráter educativo, social, cultural, científico e tecnológico, integrando ensino e pesquisa para promover o impacto positivo na comunidade." icon={<MdScience size={58} className="text-teal-900" />} reverse={true} />
      </DepartamentoOperacional>
      <DepartamentoDocs editaisLink="https://www.utfpr.edu.br/editais?query=%5B%7B%22i%22%3A%22portal_type%22%2C%22o%22%3A%22paqo.selection.any%22%2C%22v%22%3A%5B%22utf.edital%22%2C%22utf.concurso%22%5D%7D%2C%7B%22i%22%3A%22campi%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22santa-helena%22%5D%7D%2C%7B%22i%22%3A%22area_edital%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22extensao%22%5D%7D%5D&sort_on=created&sort_order=descending"/>
    </>
  )
}

export default Depex