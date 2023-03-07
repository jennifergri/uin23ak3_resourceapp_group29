import React from 'react';

export default function Article(data) {
  return ( 
    <article className="innhold">
            <ul>
              <li>
                {data?.data?.title}
                <a href={data?.data?.url}>
                  {data?.data?.title}
                </a>
              </li>
            </ul>
    </article> 
    )
  }

        
      
