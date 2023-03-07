import React from 'react';

export default function Article(props) {
  return ( 
    <article className="innhold">
            <ul>
              <li>
                {props?.data?.title}
                <a href={props?.data?.url}>
                  {props?.data?.title}
                </a>
              </li>
            </ul>
    </article> 
    )
  }

        
      
