import React, { Component } from 'react';
import { ScrollSpy } from 'bootstrap'; // Import ScrollSpy from bootstrap

class ScrollSpyPage extends Component {
  componentDidMount() {
    const scrollSpyElement = document.querySelector("#scrollSpy");
    const scrollSpyInstance = new ScrollSpy(scrollSpyElement, {
      target: '#my-nav'
    });
    console.log(scrollSpyInstance);
  }

  render() {
    return (
      <div className="container">
        <div className="row my-3 bg-dark text-light p-3">

          <div className="col-2">
            <div id="my-nav" className="list-group">
              <a className="list-group-item list-group-item-action" href="#e1">Article 1</a>
              <a className="list-group-item list-group-item-action" href="#e2">Article 2</a>
              <a className="list-group-item list-group-item-action" href="#e3">Article 3</a>
              <a className="list-group-item list-group-item-action" href="#e4">Article 4</a>
            </div>
          </div>

          <div className="col-6">
            <div id="scrollSpy" data-bs-spy="scroll" data-bs-target="#my-nav" data-bs-smooth-scroll="true" tabIndex="0" style={{ height: '200px', overflowY: 'scroll' }}>
              <h4 id="e1">How to Create a QR Code – 4 Ways to Generate Dynamic QR Code For Free</h4>
              <p>
                Ever since UPI payment was launched in India, more than 50% of people have relied on the QR Code payment system.
                Well, this is one of the examples of how people heavily depend on QR codes to simplify their tasks. Previously,
                QR codes weren’t popular as mobile phones didn’t have the feature that has native QR scanning capabilities.
              </p>
              <h4 id="e2" className="mt-5">7 Reasons to Update Your LinkedIn Profile in 2023</h4>
              <p>
                Updating your social media handles regularly is a must to stay afloat in the digital world. LinkedIn is one
                such platform that is coming up with various new features every now and then, so it is apt to say that if you are a
                LinkedIn user and want to leverage the potential of this platform, then you have to keep your profile updated.
              </p>
              <h4 id="e3" className="mt-5">Puzzle | The Alien Extinction Riddle</h4>
              <p>
                An alien visits Earth one day. Each alien accomplishes one of the following four actions every day, with equal likelihood:
                Kill himself, Do nothing, Divide into two aliens (while killing itself), Divided itself into three aliens (while killing
                itself). What is the probability that the alien species eventually die out entirely?
              </p>
              <h4 id="e4" className="mt-5">Maximum triplets containing at least one x and one y</h4>
              <p>
                Given counts of x, y, and z, the task is to find the max number of triplets that can be made from the count of x, y,
                and z such that one triplet contains at least one x and at least one y. It is not necessary to use all x, y, and z.
              </p>
            </div>
            
          </div>

        </div>
      </div>
    );
  }
}

export default ScrollSpyPage;
