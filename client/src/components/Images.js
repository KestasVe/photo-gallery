import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

class Images extends Component {

    constructor() {
        super();
        this.state = {
            images: [],
            page: 0,
            isAlphabetically: false
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages = () => {
        this.setState({page: this.state.page + 1})
        const { page } = this.state;
        fetch(`/images/api/?page=${page}}`, {
            method: 'get',
            headers: {'Content-type': 'application/json'},
        }).then(response => response.json())
            .then(data => this.setState({ images: this.state.images.concat(JSON.parse(data).photos.photo) }));
    }

    handleClick = () => {
        this.setState({
            isAlphabetically: true
        })
    }

    render() {
        let imageArray = this.state.images;
        if (this.state.isAlphabetically) {
            imageArray.sort((a, b) => a.title.localeCompare(b.title));
        }
        return (
            <div className="row d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Sort</button>
                <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.fetchImages}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {
                    imageArray.map((image, index) => {
                        return <Image key={index} image={image} />
                    })}
                </InfiniteScroll>
            </div>
        )
    }
}

export default Images;