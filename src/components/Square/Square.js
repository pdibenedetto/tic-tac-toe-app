import React from 'react';
import './../../index.css';

// class Square extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   render() {
//     return (
//       <button className="square"
//               onClick={() => this.props.onClick({value: 'X'})}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

// function Square(props) {
//     return(
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     )
// }

const Square = (props) => {
  return (
    <button className="square"
            onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

export default Square;