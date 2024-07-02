import bg from "../assets/depet.jpg";
import { DepartamentoCover } from "../Components/DepartamentoCover"
import { DepartamentoDocs } from "../Components/DepartamentoDocs"
import { DepartamentoOperacional } from "../Components/DepartamentoOperacionais"
import { DepartamentoProfile } from "../Components/DepartamentoProfile"
import { OperationItem } from "../Components/OperationItem"

import { AiFillTool } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

const Depet = () => {
  return (
    <>
      <DepartamentoCover name="DEPET" desc="Departamento de Apoio e Projetos Tecnológicos" img={bg}>
        <DepartamentoProfile name="DEPET-SH" desc="O Departamento de Apoio e Projetos Tecnológicos (DEPET) do Campus Santa Helena da UTFPR tem como missão estabelecer e fortalecer parcerias com o setor empresarial, facilitando a transferência de tecnologias essenciais para o processo de inovação. Através de procedimentos bem definidos, o DEPET assegura a eficiência e a qualidade na concretização dessas parcerias, garantindo a satisfação e a confiança dos seus parceiros." leader="Leader" leaderDesc="Leader Desc" />
      </DepartamentoCover>
      <DepartamentoOperacional>
        <OperationItem title="Projetos Tecnológicos" text="Desenvolvimento e aplicação de conhecimentos tecnológicos em projetos que envolvem a inovação, criação de novos produtos, sistemas ou processos. Esses projetos são formalizados por meio de documentos jurídicos baseados em planos de trabalho e planilhas financeiras, quando necessário." icon={<AiFillTool size={58} className="text-teal-900" />} />
        <OperationItem title="Consultoria Tecnológica" text="Oferecemos consultoria especializada para empresas, instituições públicas e privadas, empreendedores e startups, auxiliando na implementação de soluções tecnológicas inovadoras." icon={<GiBrain size={58} className="text-teal-900" />} reverse={true} />
        <OperationItem title="Propriedade Intelectual" text="Orientação e suporte no registro de patentes, marcas e outros ativos de propriedade intelectual, garantindo a proteção e a valorização das inovações desenvolvidas." icon={<FaRegLightbulb size={58} className="text-teal-900" />} />
        <OperationItem title="Empreendedorismo e Inovação" text="Fomento à cultura empreendedora através de programas e iniciativas que incentivam a criação de startups e o desenvolvimento de novos negócios baseados em tecnologia." icon={<IoRocketSharp size={58} className="text-teal-900" />} reverse={true} />
      </DepartamentoOperacional>
      <DepartamentoDocs editaisLink="https://www.utfpr.edu.br/editais?query=%5B%7B%22i%22%3A%22portal_type%22%2C%22o%22%3A%22paqo.selection.any%22%2C%22v%22%3A%5B%22utf.edital%22%2C%22utf.concurso%22%5D%7D%2C%7B%22i%22%3A%22campi%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22santa-helena%22%5D%7D%2C%7B%22i%22%3A%22area_edital%22%2C%22o%22%3A%22paqo.list.contains%22%2C%22v%22%3A%5B%22empreendedorismo%22%2C%22relacoes-empresariais%22%5D%7D%5D&sort_on=created&sort_order=descending"/>
    </>
  )
}

export default Depet