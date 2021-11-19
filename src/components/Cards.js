import React from 'react'

export default function Cards(props) {
    return (
        <>
            <div className="card" style={{width:" 18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.paragraph}...</p>
                    <a href="/" className="btn btn-primary">More</a>
                </div>
            </div>
        </>
    )
}
