import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsa
      nihil. Expedita sed quam doloribus ab quia voluptatibus iusto, provident
      ea laudantium veritatis at ipsa animi pariatur esse mollitia. Eius.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=RedSkull7&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RedSkull7&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
