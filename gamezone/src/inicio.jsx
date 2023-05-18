import '@fortawesome/fontawesome-free/css/all.min.css';
import './inicio.css'
function Inicio(){
    return(
        <div className="container">
            <div className='cabecalho'>
                <div className='iconlogo'>
                    <img className='logo' src="/controle2.png" alt="" />
                </div>
                <h1 className='titleCabecalho'>Game Zone</h1>
                <div className='itens'>
                    <i className="fa-solid fa-magnifying-glass" style={{color: '#FFFF'}}></i>
                    <i className="fa-solid fa-user " style={{color: '#FFFF'}}></i>
                </div>
            </div>
        </div>
    )
}


export default Inicio;