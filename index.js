import React from 'react';
import ReactDOM from 'react-dom';
import './style1.css';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={assign:0,mtt:0,mpt:0,score:'',status:''}
    }
    totalScoreCalculate=(event)=>{
		

        
        var a=this.state.assign;
        var b=this.state.mtt;
        var c=this.state.mpt;
         var x=(15*a)/100;
         var y=(15*b)/64;
         var z=(70*c)/70;
         var total=x+y+z;
         if(total<50){
             this.setState({score:'0',status:'Fail'});
         }
         else if(total>49 && total<60)
         {
            this.setState({score:'1',status:'Fail'});
         }
         else if(total>59 && total<70)
         {
            this.setState({score:'2',status:'Pass'});
         }
         else if(total>69 && total<80)
         {
            this.setState({score:'3',status:'Pass'});
         }
         else if(total>79 && total<90)
         {
            this.setState({score:'4',status:'Pass'});
         }
          else
          {
            this.setState({score:'5',status:'Pass'});
          }
          event.preventDefault();
    
    }
    render(){
        return (
              <div id="div1">

                  <form onSubmit={this.totalScoreCalculate}>
				  
                     <table>
					 <tr>
                      <th>Enter Assignment Marks :  </th>
                     <th> <input type='number' min='0' max='100' id="inp1" onChange={(g)=>{this.setState({assign:g.target.value})}}></input><br/> </th>
                     </tr>
                     <tr>
                   <td>  Enter MTT Marks :  </td>
                    <td>  <input type='number' min='0' max='64' id="#inp2"onChange={(g)=>{this.setState({mtt:g.target.value})}}></input><br/> </td>
                       </tr>
                     <tr>
                   <td>  Enter MPT Marks : </td>
                    <td>  <input type='number'  min='0' max='70' id="#inp3" onChange={(g)=>{this.setState({mpt:g.target.value})}}></input><br/>  </td>
                      </tr>  
						</table>
                      <button type='submit'>submit</button>
                  </form>
        <h1 >Score(Grade) : {this.state.score}</h1>
        <h1>Status : {this.state.status}</h1>
              </div>
        );

    }
}
ReactDOM.render(<App/>,document.querySelector("#root"));