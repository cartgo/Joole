import React, { Component } from 'react';

import Aux from '../../../hoc/AUXX/Auxx';
import Button from '../../UI/Button/Button';
import './Advancedsearch.css'
import Advancedsearchelement from './Advancedsearchelement/Advancedsearchelement'
class Advancedsearch extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        // console.log('[Advancedsearch] WillUpdate');
    }






    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this)) //监听滚动
        window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
      }
    
      componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
        window.removeEventListener('scroll', this.handleScroll.bind(this)) 
        window.removeEventListener('resize', this.handleResize.bind(this))
      }
    
      handleScroll = e => {
        console.log(
          '浏览器滚动事件',
          e.srcElement.scrollingElement.scrollTop,
          e.srcElement.scrollingElement.scrollHeight
        )
        //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
        // e.srcElement.scrollingElement.scrollHeight为整个文档高度
      }
    
      handleResize = e => {
        console.log('浏览器窗口大小改变事件', e.target.innerWidth)
      }
     












    render () {
        // const ingredientSummary =  
      
        //         <span style={{ textTransform: 'capitalize' }}>asdf</span> 
      

        return (
            <Aux>
                 <div className = 'advancesearchwindow'>
                 {/* <Button btnType="Danger" clicked= {this.props.advancedsearchCancelHandler}>X</Button> */}
                
                <Advancedsearchelement
                clicked= {this.props.advancedsearchCancelHandler}
                ></Advancedsearchelement>


               
                {/* <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button> */}
                </div>
            </Aux>
        );
    }
}

export default Advancedsearch;