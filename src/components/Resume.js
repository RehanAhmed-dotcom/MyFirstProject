import React, { Component } from 'react';
import {Grid , Cell} from 'react-mdl';
import Education from './Education';
import SkillsDisp from './SkillsDisp';
// import Experience from './Experience';
import Skills from './Skills';
class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{backgroundColor:'black'}}>
               <Grid>
                   <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img 
                        src="data:image/png;base64,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"
                        alt="avatar"
                        style={{height:'200px'}}
                        />
                    </div>
                    <h2 style={{paddingTop:'2em',color:'white'}}>
                                Rehan Ahmed
                    </h2>
                    <h4 style={{color:'grey'}}>Programmer/Web Dev/ App Dev</h4>
                   <hr style={{borderTop:"3px solid #833fb2",width:"50%"}}/>
                   <h3 style={{color:'white'}}>
                       Profile
                   </h3>
                   <p style={{color:"white"}}>
                   Extra required skills can be polished on demand and have fast learning ability to adopt things. Friendly behavior with members.   
                   </p>
                   <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
                   <h2 style={{color:'white'}}>
                            Contact
                   </h2>
                   <h5 style={{color:'white'}}>Address</h5>
                   <p style={{color:'white'}}>
                       Shamsabad Rawalpindi Pakistan
                   </p>
                   <h5 style={{color:'white'}}>
                       Phone
                   </h5>
                   <p style={{color:'white'}}>+92 349 5010406</p>
                   <h5 style={{color:'white'}}>
                       Email
                   </h5>
                   <p style={{color:'white'}}>
                       rehanahmed@gmail.com
                   </p>
                   <hr style={{borderTop:"3px solid #833fb2", width:"50%"}}/>
                   </Cell>
                   <Cell className="resume-right-col" col={8}> 
                   <h2 style={{color:'white'}}>
                       Education
                   </h2>
                   <Education 
                   startYear={2016}
                   endYear={2020}
                   schoolName="Arid University"
                   schoolDescription=" BS(IT)"
                   />
                    <hr style={{borderTop:"3px solid #e22947"}}/>
                    <h2>
                        Experience
                    </h2>
                    <h4 style={{marginLeft:100}}>
                        No Experinece yet
                    </h4>
                    {/* <Experience 
                    startYear={2020}
                    endYear={2022}
                    jobName="Nust University"
                    jobDescription=" Blah Blah Blah Blah Blah"
                    
                    /> */}
 <hr style={{borderTop:"3px solid #e22947"}}/>
 <h2>Skills</h2>
 <Skills 
 skill="React.js"
 progress={70}
 />
  <Skills 
 skill="Python"
 progress={60}
 />
  <Skills 
 skill="React Native.js"
 progress={60}
 />

<SkillsDisp />

                   </Cell>
               </Grid>
            </div>
         );
    }
}
 
export default Resume;