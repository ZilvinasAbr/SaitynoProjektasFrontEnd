import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlackLink from '../common/BlackLink';
import {Header, Image, Loader, Segment} from 'semantic-ui-react';

import MainButton from '../common/MainButton';

class ShowAllList extends Component {
  state = {
    isShowingAll: false
  };

  handleShowAll = () => {
    const {onShowAll} = this.props;
    onShowAll();
    this.setState({isShowingAll: true})
  };

  render() {
    const {isShowingAll} = this.state;
    const {title, elements} = this.props;

    if (!elements) {
      return (
        <Segment>
          <Header as='h2'>{title}</Header>
          <Loader active inline/>
        </Segment>
      );
    }

    return (
      <Segment>
        <Header as='h2'>{title}</Header>
        <Segment.Group horizontal>
          {
            elements.map((element, i) => (
              <Segment key={i}>
                <Image size='tiny' src={element.pictureUrl || 'http://via.placeholder.com/1024x1024'}/>
                <Header as='h5'>
                  <BlackLink
                    to={element.linkUrl}
                  >
                    {element.title}
                  </BlackLink>
                </Header>
              </Segment>
            ))
          }
        </Segment.Group>
        <div>
          {isShowingAll || <MainButton onClick={this.handleShowAll}>Show All</MainButton>}
        </div>
      </Segment>
    )
  }
}

ShowAllList.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      linkUrl: PropTypes.string.isRequired
    })
  ),
  onShowAll: PropTypes.func.isRequired
};

export default ShowAllList;