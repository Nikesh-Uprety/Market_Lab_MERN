import React,{Component} from "react";
import {Link} from 'react-router-dom';
import './CSS/HomeBanner.css';
import Url from '../../ApiServices/BackendUrl';

class HomepageBanner extends Component{

    render(){
        let text=null;
        let Banner=null;

        if(this.props.img === 'all'){
             text = ( <p className="Banner-text">Be a Better Trader <br/>Welcome to Market Lab</p> );
             Banner=( <div className="BannerSection">

             <img className="BannerImage" 
             src={Url + this.props.img +".jpg"} alt="banner1"/>

            </div>);
            }

        if(this.props.img){
            Banner=( <div className="BannerSection">

                     <img className="BannerImage" 
                    //  src={"/images/banner/4.jpg" + this.props.img +".jpg"} alt="banner1"/>
                     src={"/images/banner/6.jpg"} alt="banner1"/>

                    </div>);
        }

        if(this.props.img === null){
            
            text = (
                    
                    <div className="Teacher-banner">
            
                        {/* <p className="Teacher-text">Share Your Knowlegde 
                        <br/>with the whole World!</p>  */}

                       <Link to="teacher"> <button className="createCourse">
                            Create New Course</button></Link>
                        
                    </div>
            );
        }

    

    return(
        <>
           
           {Banner}
            {text}

        </>
     


    );
  }
}

export default HomepageBanner;