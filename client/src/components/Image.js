import React from 'react';

const Image = ({ image }) => {
    const url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    const title = image.title;
	return (
		<div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={url} className="card-img" alt={title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Title: {title}</h5>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Image;