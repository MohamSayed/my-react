import React, { Component } from 'react'
import ArticleListItem from './ArticleListItem'

export class ArticleList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.articleNames.map(articleName =>
                        <ArticleListItem name={articleName} />

                    )
                }
            </div>
        )
    }
}

export default ArticleList
