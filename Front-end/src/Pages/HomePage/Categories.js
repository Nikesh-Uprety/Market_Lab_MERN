import React from "react";
import './CSS/CategoriesCard.css';
import {NavLink} from 'react-router-dom'

const Categories =(props)=>{


    return(

        <div className="CategoryDevider">


                <div className="Categories-main">
                
                <h3 className="Categories-heading"> Categories </h3>


            <div className="ListOfCourses">
                    <NavLink to='/home/all' activeClassName="active-category" >Zero to Hero Trading Course</NavLink>
                    <NavLink to='/home/StockMarket' activeClassName="active-category">Stock Market Mastery Course</NavLink>
                    <NavLink to='/home/Forex' activeClassName="active-category" >Forex Fundamentals</NavLink>
                    <NavLink to='/home/ForexFunded' activeClassName="active-category">Road to Forex Funded Account	</NavLink>
                    <NavLink to='/home/Commodity' activeClassName="active-category">Commodity Elite Strategies</NavLink>
                    {/* <NavLink to='/home/CommodityElite' className="recommended" 
                  activeClassName="active-category">Recommended!</NavLink> */}
                
            </div>

       

                </div>

                <div className="Course-Devider">

                </div>

                <div className='CategoriesSlider'>
                <NavLink to='/home/all' activeClassName="active-category" >Zero to Hero Trading Course</NavLink>
                <NavLink to='/home/Web Development' activeClassName="active-category">Stock Market Mastery Course</NavLink>
                <NavLink to='/home/Web Designing' activeClassName="active-category" >Forex Fundamentals</NavLink>
                <NavLink to='/home/React' activeClassName="active-category">Road to Forex Funded Account	</NavLink>
                <NavLink to='/home/Photography' activeClassName="active-category">Commodity Elite Strategies</NavLink>
                <NavLink to='/home/preferences' className="recommended"
                    activeClassName="active-category">Recommended!</NavLink>
            </div>


        </div>

    );

}

export default Categories;