import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumber.map(index => (
                        <li key={index} className="page-item">
                            <a onClick={() => paginate(index)} href="!#" className="page-link">
                                {index}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;
