import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Header, Image, Loader, Segment} from 'semantic-ui-react';

import * as paths from '../constants/RouterConstants';

class Playlists extends Component {
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
    const {playlists} = this.props;

    if (!playlists) {
      return <Loader active/>;
    }

    return (
      <Segment>
        <Header as='h2'>Playlists</Header>
        <Segment.Group horizontal>
          {
            playlists.map((playlist, i) => (
              <Segment key={i}>
                <Image size='tiny' src={playlist.songs[0].pictureUrl}/>
                <Header as='h5'>
                  <Link to={paths.PLAYLIST_PATH.replace(':playlistId', playlist.id)}>{playlist.name}</Link>
                </Header>
              </Segment>
            ))
          }
        </Segment.Group>
        <div>
          {isShowingAll || <Button onClick={this.handleShowAll}>Show All</Button>}
        </div>
      </Segment>
    )
  }
}

Playlists.defaultProps = {
  playlists: null
};

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({})),
  onShowAll: PropTypes.func.isRequired
};

export default Playlists;