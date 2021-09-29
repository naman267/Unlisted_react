import React,{Component} from 'react'
import Auxillary from '../Auxillary'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component{
    
    render()
    { var classe=[classes.Modal]
        return (
            <Auxillary>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
                <div className={classe.join(' ')}
            style={{
            
                transform:this.props.show?'translateY(0)':'translateY(-100vh)',
                opacity:this.props.show?'1':'0'
            }}
            >
                {this.props.children}
            </div>
            </Auxillary>
            
        )
        
    }

}

export default Modal