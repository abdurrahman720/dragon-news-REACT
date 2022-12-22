import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is the category has news: {categoryNews.length} news</h2>
            {
                categoryNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard> )
            }
        </div>
    );
};

export default Category;