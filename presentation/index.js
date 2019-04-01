// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  executioner: require('../assets/executioner.jpg'),
  theTriumphOfDeath: require('../assets/the-triumph-of-death.jpg'),
  plagueDoctor: require('../assets/plague-doctor.png'),
  gladiator: require('../assets/gladiator2.jpg')
};

/* eslint-disable import/no-unresolved */
const videos = {
  locdoc: require('file-loader!../assets/locdoc.webm')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    contrast: 'black',
    blood: '#bb0a1e',
    bronze: '#cd7f32'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

/* eslint-disable react/prop-types */
const FullScreenVideo = ({ name, format = 'webm' }) => (
  <video
    // controls
    autoPlay
    width="100%"
    height="100%"
    style={{
      position: 'absolute',
      top: 0,
      left: 0
    }}
  >
    <source src={videos[name]} type={`video/${format}`} />
  </video>
);

const FullScreenImage = ({
  name,
  align = 'center',
  style = {}
}) => {
  let margin;
  switch (align) {
    case 'left':
      margin = '0 50% 0 0';
      break;
    case 'right':
      margin = '0 0 0 50%';
      break;
    case 'center':
    default:
      margin = '0 auto';
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        ...style
      }}
    >
      <Image src={name} style={{ margin }} />
    </div>
  );
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        {/* <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={'100%'} />
          <Notes>gifs work too</Notes>
        </Slide>
        <Slide bgImage={images.goodWork}>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
          <Notes>background image</Notes>
        </Slide> */}
        <Slide
          bgColor="contrast"
        >
          <FullScreenVideo name="locdoc" />
          <Notes>Fullscreen video</Notes>
        </Slide>
        <Slide bgImage={images.gladiator}>
          <Notes>Gladiator</Notes>
        </Slide>
        <Slide
          bgImage={images.theTriumphOfDeath}
          bgDarken={0.6}
        >
          <FullScreenImage
            name={images.plagueDoctor}
            align="left"
            style={{ paddingLeft: 100 }}
          />
          <Notes>Plague Doctor</Notes>
        </Slide>
        <Slide
          transition={['fade']}
          bgImage={images.executioner}
          bgDarken={0.5}
          textColor="primary"
        >
          <BlockQuote
            bgColor="rgba(0,0,0,.5)"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              padding: '1.4em',
              margin: '1.4em'
            }}
          >
            <Quote textSize={'1.4em'} height={'1.2em'}>Палач не знает роздыха!..</Quote>
            <Quote textSize={'1.4em'} height={'1.2em'}>Но все же, черт возьми,</Quote>
            <Quote textSize={'1.4em'} height={'1.2em'}>Работа-то на воздухе,</Quote>
            <Quote textSize={'1.4em'} height={'1.2em'}>Работа-то с людьми.</Quote>
            <Cite margin="10px 0 0 30px" textColor="bronze">Владимир Вишневский</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
