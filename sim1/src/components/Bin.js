import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
//import sortinv from './um';

export default class Bin extends Component {
    constructor(props){
        super(props);

        this.state={
            bin1Empty: null,
            bin2Empty: null,
            bin3Empty: null,
            bin4Empty: null,
            bin5Empty: null
        }
        
    }


    getShelf(){
        console.log("this.props")
        return axios({
            url:`/api/inventory/${this.props.shelf}`,
            method:'get'
        })
        .then( (response) => {
            function sortinv(response, context){
                for(var i = 0; i < response.data.length; i++ ){
                    console.log(response.data[i]);
                    if(response.data[i].bin === 'Bin1'){
                        context.setState({bin1Empty:true})
                    } 
                    if(response.data[i].bin === 'Bin2'){
                        context.setState({bin2Empty:true})
                    } 
                    if(response.data[i].bin === 'Bin3'){
                        context.setState({bin3Empty:true})
                    } 
                    if(response.data[i].bin === 'Bin4'){
                        context.setState({bin4Empty:true})
                    } 
                    if(response.data[i].bin === 'Bin5'){
                        context.setState({bin5Empty:true})
                }
            }
        };
        sortinv(response, this);
            // this.setState({
            //     bin1Empty: response[0],
            //     bin2Empty: response[1],
            //     bin3Empty: response[2],
            //     bin4Empty: response[3],
            //     bin5Empty: response[4]
                
            // })

        })
        
    }

    

    componentDidMount(){
        this.getShelf()
    }

    render() {
        const bin1 = `${this.props.shelf}/Bin1`;
        const bin2 = `${this.props.shelf}/Bin2`;
        const bin3 = `${this.props.shelf}/Bin3`;
        const bin4 = `${this.props.shelf}/Bin4`;
        const bin5 = `${this.props.shelf}/Bin5`;

        const Addinv1 = `${this.props.shelf}/Bin1/Addinv`;
        const Addinv2 = `${this.props.shelf}/Bin2/Addinv`;
        const Addinv3 = `${this.props.shelf}/Bin3/Addinv`;
        const Addinv4 = `${this.props.shelf}/Bin4/Addinv`;
        const Addinv5 = `${this.props.shelf}/Bin5/Addinv`;

        console.log("console log string")

      return (
        <div>
            <div className = 'shelfholder'>
                {/* <div className = "bin">params: {this.props.shelf}</div> */}
                { this.state.bin1Empty !== null
                    ?
                <Link to = { bin1 } style = {{ textDecoration:'none' }}> <div className = "bin">Bin 1</div> </Link>
                :
                <Link to = { Addinv1 } style = {{ textDecoration:'none' }}><div className = "addinv"> + Add Inventory</div></Link>
                }
                { this.state.bin2Empty !== null
                ?
                <Link to = { bin2 } style = {{ textDecoration:'none' }}> <div className = "bin">Bin 2</div> </Link>
                :
                <Link to = { Addinv2 } style = {{ textDecoration:'none' }}><div className = "addinv"> + Add Inventory</div></Link>
                }
                { this.state.bin3Empty !== null
                ?
                <Link to = { bin3 } style = {{ textDecoration:'none' }}> <div className = "bin">Bin 3</div> </Link>
                :
                <Link to = { Addinv3 } style = {{ textDecoration:'none' }}><div className = "addinv"> + Add Inventory</div></Link>
                }
                {this.state.bin4Empty !== null
                ?
                <Link to = { bin4 } style = {{ textDecoration:'none' }}> <div className = "bin">Bin 4</div> </Link>
                :
                <Link to = { Addinv4 } style = {{ textDecoration:'none' }}><div className = "addinv"> + Add Inventory</div></Link>
                }
                {this.state.bin5Empty !== null
                ?
                <Link to = { bin5 } style = {{ textDecoration:'none' }}> <div className = "bin">Bin 5</div> </Link>
                :
                <Link to = { Addinv5 } style = {{ textDecoration:'none' }}><div className = "addinv"> + Add Inventory</div></Link>
                }
            </div>
        </div>
      );
    }
}
