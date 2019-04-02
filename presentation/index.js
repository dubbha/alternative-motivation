// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Image,
  Notes,
  Quote,
  Slide,
  Text,
  Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  start: require('../assets/start.jpg'),
  weldingMachine: require('../assets/welding-machine.jpg'),
  drywallLift: require('../assets/drywall-lift.jpg'),
  demotivatedIt: require('../assets/demotivated-it.png'),
  jsFatigue: require('../assets/js-fatigue.jpg'),
  disasterGirl: require('../assets/disaster-girl.jpg'),
  matrix: require('../assets/matrix.jpg'),
  ukrsat: require('../assets/ukrsat.jpg'),
  ukrsat2: require('../assets/ukrsat2.jpg'),
  taxiDriver: require('../assets/taxi-driver.jpg'),
  busDriver: require('../assets/bus-driver.jpg'),
  mazay: require('../assets/mazay.png'),
  metro: require('../assets/metro.jpg'),
  ded: require('../assets/ded.jpg'),
  hadfield: require('../assets/hadfield.png'),
  ships: require('../assets/ships.jpg'),
  steel: require('../assets/steel.jpg'),
  sulfur: require('../assets/sulfur.jpg'),
  workingmansDeath: require('../assets/workingmans-death.jpg'),
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
    secondary: 'black',
    blood: '#bb0a1e',
    bronze: '#cd7f32',
    asphalt: '#222f38',
    fire: '#c2261f'
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
  src,
  align = 'center',
  style = {}
}) => {
  let margin;
  switch (align) {
    case 'left':
      margin = '0 auto 0 0';
      break;
    case 'right':
      margin = '0 0 0 auto';
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
      <Image
        src={src}
        style={{
          height: '100%',
          margin
        }}
      />
    </div>
  );
};

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '' // replaceable text
    };
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {/* <Slide transition={['zoom']} bgColor="primary">
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
        </Slide> */}
        <Slide bgImage={images.start} />
        <Slide>
          <Image src={images.weldingMachine} height="80vh" />
        </Slide>
        <Slide>
          <Image src={images.drywallLift} height="85vh" />
          <Notes>Подъемник для гипсокартона</Notes>
        </Slide>
        <Slide>
          <Image src={images.demotivatedIt} height="60vh" />
          <Notes>Demotivated IT</Notes>
        </Slide>
        <Slide>
          <FullScreenImage
            src={images.jsFatigue}
            style={{ paddingBottom: 30 }}
          />
          <Notes>JavaScript Fatigue</Notes>
        </Slide>
        <Slide bgColor="asphalt">
          <FullScreenImage
            src={images.disasterGirl}
            align="right"
          />
          <Text
            textColor="fire"
            textSize={'3.5em'}
            bold
            style={{
              position: 'absolute',
              bottom: 50,
              left: 50
            }}
          >
            ВЫГОРАНИЕ
          </Text>
          <Notes>Выгорание</Notes>
        </Slide>
        <Slide>
          <FullScreenImage src={images.matrix} />
          <Appear>
            <Text textColor="primary" fit bold>
              Альтернативная Мотивация
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Appear>
            <Text textColor="blue" fit bold>
              <span style={{ color: 'black' }}>NON-</span>STEVE
            </Text>
          </Appear>
          <Appear>
            <Text textColor="fire" fit bold>
              JOBS
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <FullScreenImage src={images.ukrsat} />
        </Slide>
        <Slide bgColor="secondary">
          <FullScreenImage src={images.ukrsat2} />
        </Slide>
        <Slide bgColor="secondary" bgImage={images.taxiDriver} />
        <Slide bgColor="secondary" bgImage={images.busDriver} />
        <Slide bgColor="secondary" bgImage={images.mazay} />
        <Slide bgColor="secondary" bgImage={images.metro} />
        <Slide bgColor="secondary" bgImage={images.ded} />
        <Slide bgColor="secondary" bgImage={images.hadfield} />
        <Slide bgColor="secondary" bgImage={images.steel} />
        <Slide bgColor="secondary" bgImage={images.ships} />
        <Slide bgColor="secondary" bgImage={images.sulfur}>
          <Notes>Серный Карьер, Индонезия</Notes>
        </Slide>
        <Slide bgColor="secondary">
          <FullScreenImage src={images.workingmansDeath} />
        </Slide>
        <Slide bgColor="secondary">
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
            src={images.plagueDoctor}
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
