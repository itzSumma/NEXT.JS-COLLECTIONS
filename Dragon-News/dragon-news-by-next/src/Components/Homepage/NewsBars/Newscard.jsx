import React from 'react';

const Newscard = ({news}) => {
    console.log(news, "news");
    return <div>
{news?.title}
    </div>
   
};

export default Newscard;