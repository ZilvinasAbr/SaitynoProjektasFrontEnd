import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Menu
} from 'semantic-ui-react';

import SongInfo from './SongInfo';
import MusicPlayer from './MusicPlayer';

const Player = ({isPlaying, currentSong, onPause, onPlay}) =>
  currentSong && (
    <Menu fixed='bottom'>
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={4}>
            <SongInfo
              title={currentSong.title}
              uploaderName={currentSong.user.name}
              pictureUrl={currentSong.pictureUrl}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <MusicPlayer
              audioUrl={currentSong.filePath}
              isPlaying={isPlaying}
              onPause={onPause}
              onPlay={onPlay}
            />
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu>
  );

Player.propTypes = {
  currentSong: PropTypes.shape({}),
  isPlaying: PropTypes.bool.isRequired,
  onPause: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired
};

export default Player;