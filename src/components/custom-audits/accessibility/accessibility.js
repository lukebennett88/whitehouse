import React from 'react';
import Markdown from 'markdown-to-jsx';

import {
  ColorContrast,
  ButtonName,
  Bypass,
  DocumentTitle,
  DuplicateID,
  HTMLHasLang,
  ImageAlt,
  Label,
  LinkName,
  List,
  ListItem,
  MetaViewport,
  TabIndex,
  FocusTraps,
  FocusableControls,
  HeadingLevels,
  InteractiveElementAffordance,
  LogicalTabOrder,
  OffscreenContentHidden,
  UseLandmarks,
  VisualOrderFollowsDOM,
} from './index';

const Performance = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-xl tracking-wide uppercase">
      Accessibility
    </h3>
    <p className="mt-4 text-lg">
      <Markdown>{lighthouse.categories.accessibility.description}</Markdown>
    </p>
    <ul>
      <ColorContrast lighthouse={lighthouse} />
      <ButtonName lighthouse={lighthouse} />
      <Bypass lighthouse={lighthouse} />
      <DocumentTitle lighthouse={lighthouse} />
      <DuplicateID lighthouse={lighthouse} />
      <HTMLHasLang lighthouse={lighthouse} />
      <ImageAlt lighthouse={lighthouse} />
      <Label lighthouse={lighthouse} />
      <LinkName lighthouse={lighthouse} />
      <List lighthouse={lighthouse} />
      <ListItem lighthouse={lighthouse} />
      <MetaViewport lighthouse={lighthouse} />
      <TabIndex lighthouse={lighthouse} />
      <FocusTraps lighthouse={lighthouse} />
      <FocusableControls lighthouse={lighthouse} />
      <HeadingLevels lighthouse={lighthouse} />
      <InteractiveElementAffordance lighthouse={lighthouse} />
      <LogicalTabOrder lighthouse={lighthouse} />
      <OffscreenContentHidden lighthouse={lighthouse} />
      <UseLandmarks lighthouse={lighthouse} />
      <VisualOrderFollowsDOM lighthouse={lighthouse} />
    </ul>
  </article>
);

export default Performance;
