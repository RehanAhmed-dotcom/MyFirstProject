import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class SkillsDisp extends Component{
    render(){
        return(
           <Grid>
               <Cell cell={8}>
                    <h2>
                        Python :
                    </h2>
                    <h5>
                    • Machine Learning
                    </h5>
                    <h5>
                    • Data Science
                    </h5>
                    <h5>
                    • OOP
                    </h5>
                    <h5>
                    • Open CV
                    </h5>
                    
               </Cell>
               <Cell cell={8}>
                    <h2>
                        App Development :
                    </h2>
                    <h2>
                        React Native.js
                    </h2>
                    <h5>
                    • Front End
                    </h5>
                    <h5>
                    • Back End
                    </h5>
                    <h5>
                    • API
                    </h5>
</Cell>
<Cell cell={8}>
                <h2>
                    Web Development :
                </h2>
                <h2>
                    React.js
                </h2>
                <h5>
                • Front End
                </h5>
                <h5>
                • Back End
                </h5>
                <h3>
                Html & CSS | Bootstrap:
                </h3>
                <h5>
                • Front End
                </h5>
                <h5>
                • Back End
                </h5>
                <h2>
                    WordPress :
                </h2>
                <h5>
                • Front End  
                </h5>
               </Cell>
              
           </Grid>
        )
    }
}
export default SkillsDisp;