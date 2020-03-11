'use strict'
import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {
   render() {
       const { onReset, onIncrement, onDelete} = this.props;
       return (
           <div>
               <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
               {this.props.counters.map(counter =>
                   <Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete} counter={counter}>
               </Counter>)}
           </div>
       );
   }

}
