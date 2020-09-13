import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component {
    render() { 
        return ( 
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        
                        <h2>Rehan Ahmed</h2>
                        <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkblgjyaST3xuoZXTv1CdLezXHYk4fWa0Mog&usqp=CAU"
                        alt='avatar'
                        style={{height:'250px'}}
                        />
                        <p style={{width:'75%',margin:"auto",paddingTop:"1em" }}>
                                Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                                Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah 
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>
                            Contact me
                        </h2>
                        <hr />
                        <div className="contact-list">
                        <List>
  <ListItem>
    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
            <i className="fa fa-phone-square" aria-hidden="true"/>
            +92 349 5010406
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
            <i className="fa fa-envelope" aria-hidden="true"/>
            rehanahmed@gmail.com
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
            <i className="fa fa-skype" aria-hidden="true"/>
            My Skype Id
    </ListItemContent>
  </ListItem>
 
</List>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Contact;