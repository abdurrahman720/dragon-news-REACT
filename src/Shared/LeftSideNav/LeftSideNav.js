import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const {categoryName, setCategoryName} = useContext(AuthContext)
    useEffect(() => {
        fetch('https://dragon-news-server-zeta-one.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        
    }, [])
    

    const getName = (name) => {
        setCategoryName(name);
        
    }
    console.log(categoryName);
    return (
        <div>
            <h2>All categories </h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link onClick={()=>getName(category.name)} to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;