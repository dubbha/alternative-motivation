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
  Appear,
  Heading
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import { fontFace } from 'emotion';

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
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
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
        <Slide bgColor="secondary" bgImage={images.ded}>
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              left: 50
            }}
          >
            <Text textColor="primary" textSize={'1.2em'} italic style={{ textAlign: 'right' }}>
              Александр Дубовик
            </Text>
            <Text textColor="primary" textSize={'1.2em'} italic style={{ textAlign: 'right' }}>
              советский летчик
            </Text>
          </div>
        </Slide>
        <Slide bgColor="secondary" bgImage={images.hadfield}>
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              left: 50
            }}
          >
            <Text textColor="primary" textSize={'1.2em'} italic style={{ textAlign: 'right' }}>
              Крис Хэдфилд
            </Text>
            <Text textColor="primary" textSize={'1.2em'} italic style={{ textAlign: 'right' }}>
              канадский астронавт
            </Text>
          </div>
        </Slide>
        <Slide bgColor="secondary" bgImage={images.steel}>
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              left: 50
            }}
          >
            <Text textColor="primary" textSize={'1.2em'} italic>
              Металлургический завод
            </Text>
            <Text textColor="primary" textSize={'1.2em'} italic style={{ textAlign: 'right' }}>
              Ляонин, Китай
            </Text>
          </div>
          <Appear>
            <BlockQuote
              bgColor="rgba(0,0,0,.7)"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '.5em',
                margin: '1em'
              }}
            >
              <Quote textSize="1em" height={'1.4em'}>Мы готовы принести себя в жертву,</Quote>
              <Quote textSize="1em" height={'1.4em'}>как герои труда прошлого,</Quote>
              <Quote textSize="1em" height={'1.4em'}>во имя сталелитейной индустрии.</Quote>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide bgColor="secondary" bgImage={images.ships}>
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: 200
            }}
          >
            <Text textColor="primary" textSize={'1.2em'} italic>
              Кладбище кораблей
            </Text>
            <Text textColor="primary" textSize={'1.2em'} italic style={{ textAlign: 'right' }}>
              Гадани, Пакистан
            </Text>
          </div>
        </Slide>
        <Slide bgColor="secondary" bgImage={images.sulfur}>
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 50
            }}
          >
            <Text textColor="primary" textSize={'1.2em'} italic>
              Действующий вулкан Иджен
            </Text>
            <Text textColor="primary" textSize={'1.2em'} italic style={{ textAlign: 'right' }}>
              Индонезия
            </Text>
          </div>
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
        <Slide bgImage={images.start}>
          <div
            style={{
              position: 'absolute',
              bottom: 250,
              left: 250
            }}
          >
            <Text textColor="primary" textSize={'1.6em'} bold>
              да пребудет
            </Text>
            <Text textColor="primary" textSize={'1.6em'} bold>
              с вами искра
            </Text>
          </div>
        </Slide>
      </Deck>
    );
  }
}
