import React, {useState, useEffect} from "react";
import TypingTest from "./typing-test";
import parseRoute from "../lib/parse-route";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

const App = () => {
  const [route, setRoute] = useState(parseRoute(window.location.hash))

  useEffect(()=> {
     window.addEventListener('hashchange', ()=> {
      setRoute(parseRoute(window.location.hash))
    })
  })

  if (route.path === 'thrones') {
    return <TypingTest quote='thrones'/>
  }

  if (route.path === 'swanson') {
    return <TypingTest quote='swanson'/>
  }

  return(
    <div className="container">
      <h1 className="text-center">
        Typing Tutor
      </h1>
      <h4 className="text-center mb-4">
        Select a category
      </h4>
      <Row className="justify-content-center">
        <Column xs={12} sm={12} md={6} lg={5} className='my-5'>
          <Card className='typing-card'>
            <Card.Img src="http://cdn1.vox-cdn.com/assets/4229567/game-of-thrones-poster_85627-1920x1200.jpg" alt="Iron Throne" />
            <Card.Body>
              <Card.Title className='my-2 text-primary'>Game of Thrones</Card.Title>
              <Card.Text>
                Use quotes from George R.R. Martin's Game of Thrones to practice your typing skills.
              </Card.Text>
              <a className="btn btn-primary" href="#thrones">Game of Thrones Quotes </a>
            </Card.Body>
          </Card>
        </Column>
        <Column xs={12} md={6} lg={5}>
          <Card>
            <Card.Img src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc4NDc4NDg3Nzc0MzMz/ron-swanson-from-parks-and-recreation.jpg" alt="Iron Throne" />
            <Card.Body>
              <Card.Title className='my-2 text-danger'>Ron Swanson</Card.Title>
              <Card.Text>
                Use quotes from Parks and Recreation's Ron Swanson to practice your typing skills.
              </Card.Text>
              <a className="btn btn-danger" href="#swanson">Ron Swanson Quotes </a>
            </Card.Body>
          </Card>
        </Column>
      </Row>
    </div>
  )
}

export default App;
