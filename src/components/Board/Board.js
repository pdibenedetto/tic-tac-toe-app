// import React from 'react';
// import './../../index.css';
// import Square from "../Square/Square";
//
// // class Board extends React.Component {
// //   // this.squares = {Array(9).fill(null)}
// //   // constructor(props) {
// //   //   super(props);
// //   //   this.state = {
// //   //     squares: Array(9).fill(null),
// //   //     xIsNext: true,
// //   //   };
// //   // }
// //
// //   renderSquare(i) {
// //     return (
// //       <Square value={this.props.squares[i]}
// //               onClick={() => this.props.onClick(i)}/>
// //     );
// //   }
// //
// //   render() {
// //
// //     return (
// //         <div>
// //           <div className="board-row">
// //             {this.renderSquare(0)}
// //             {this.renderSquare(1)}
// //             {this.renderSquare(2)}
// //           </div>
// //           <div className="board-row">
// //             {this.renderSquare(3)}
// //             {this.renderSquare(4)}
// //             {this.renderSquare(5)}
// //           </div>
// //           <div className="board-row">
// //             {this.renderSquare(6)}
// //             {this.renderSquare(7)}
// //             {this.renderSquare(8)}
// //           </div>
// //         </div>
// //       );
// //   }
// // }
//
// const board = (props) => {
//
//
//     let renderSquare;
//     renderSquare = (index) => {
//         return (
//             <Square value={this.props.squares[index]}
//                     onClick={() => this.props.onClick(index)}
//             />
//         );
//     }
//
//     return (
//         <div>
//             <div className="board-row">
//                 {this.renderSquare(0)}
//                 {this.renderSquare(1)}
//                 {this.renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {this.renderSquare(3)}
//                 {this.renderSquare(4)}
//                 {this.renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {this.renderSquare(6)}
//                 {this.renderSquare(7)}
//                 {this.renderSquare(8)}
//             </div>
//         </div>
//     );
// }
//
//
//
// export default board;