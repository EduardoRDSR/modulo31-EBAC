import BotaoAdcicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral monstrarFiltros />
    <ListaDeTarefas />
    <BotaoAdcicionar />
  </>
)

export default Home
