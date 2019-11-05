import React from 'react';
import PropTypes from 'prop-types';

import { AudioCaption } from './audio-caption';
import { VideoCaption } from './video-caption';
import { VideoDescription } from './video-description';

const A11yAudioVideo = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-audio-video'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="a11y-audio-video" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          Audio and video
        </span>{' '}
        — These are opportunities to provide alternative content for audio and
        video. This may improve the experience for users with hearing or vision
        impairments.
      </h4>
      <ul>
        <AudioCaption lighthouse={lighthouse} />
        <VideoCaption lighthouse={lighthouse} />
        <VideoDescription lighthouse={lighthouse} />
      </ul>
    </>
  );

A11yAudioVideo.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yAudioVideo;
