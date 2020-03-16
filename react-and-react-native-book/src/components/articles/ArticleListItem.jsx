import React, { Component } from 'react'

export class ArticleListItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default ArticleListItem
