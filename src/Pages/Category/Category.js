import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import NewsSummaryCard from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    const categoryNews = useLoaderData();
    const {categoryName} = useContext(AuthContext)
    
    return (
        <div>
            <h2> {categoryName} category has {categoryNews.length} news today! </h2>
            {
                categoryNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard> )
            }
        </div>
    );
};

export default Category;