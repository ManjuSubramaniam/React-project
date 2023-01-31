import React from 'react';
import './Content.css';
import MainBar from './main-bar/MainBar';
import SideBar from './sidebar/SideBar';
import TrendingToday from './trending-today/TrendingToday';

export default function Content(){
    return (
    <div className="content">
        <TrendingToday/>
        <div className='bars-wrapper'>
            <span className='popular-posts-title'>Popular posts</span>
            <div className='bars-wrapper-inside'>
              <MainBar/>
              <SideBar/>
            </div>
            
        </div>
    </div>
    );
}