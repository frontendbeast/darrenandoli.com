import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const guests = [
  { id: 'adbu', name: 'Adrian Buchan', alias: '', partner: false, plusOne: true, accom: true },
  { id: 'algo', name: 'Alan Good', alias: '', partner: false, plusOne: true, accom: false },
  { id: 'alba', name: 'Alex Baines', alias: '', partner: false, plusOne: true, accom: false },
  { id: 'cjma', name: 'CJ Martini', alias: 'Carl', partner: false, plusOne: true, accom: true },
  { id: 'maes', name: 'Makeila Estelle', alias: '', partner: 'maha', plusOne: false, accom: true },
  { id: 'maha', name: 'Martyn Hall', alias: '', partner: 'maes', plusOne: false, accom: true },
  { id: 'mafl', name: 'Martin Flynn', alias: '', partner: 'jafl', plusOne: false, accom: true },
  { id: 'iawi', name: 'Ian Wilson', alias: '', partner: false, plusOne: false, accom: true },
  { id: 'iabe', name: 'Isaac Berlin', alias: 'Ytzak', partner: false, plusOne: true, accom: false },
  { id: 'jafl', name: 'Jan Flynn', alias: 'Janet', partner: 'mafl', plusOne: false, accom: true },
  { id: 'vili', name: 'Viv Liles', alias: 'Vivienne', partner: 'stai', plusOne: false, accom: true },
  { id: 'sawa', name: 'Sasha Ward', alias: '', partner: false, plusOne: true, accom: false }, 
  { id: 'scro', name: 'Scott Robinson', alias: '', partner: 'joly', plusOne: false, accom: false },
  { id: 'stdi', name: 'Steve Dickinson', alias: 'Steven', partner: false, plusOne: false },
  { id: 'joly', name: 'Joey Lynch', alias: 'Joe', partner: 'scro', plusOne: false, accom: false },
  { id: 'stai', name: 'Stan Ainsworth', alias: 'Stanley', partner: 'vili', plusOne: false, accom: true },
]

class RSVPPage extends React.Component {
  
  state = {
    fields: {
      query: '',
      attendingGuest: false,
      attendingGuestDietary: '',
      attendingPlusOne: false,
      attendingPartner: false,
      attendingPartnerDietary: '',
    },
    results: false,
    stage: 'find',
  }

  findInvite = event => {
    event.preventDefault();

    const results = guests.filter(guest => {
      const alias = guest.alias.toLowerCase();
      const name = guest.name.toLowerCase();
      const query = this.state.fields.query.toLowerCase();

      return (
        name.split(' ').includes(query) || name === query || alias === query
      )
    })
    
    this.setState({ results });
  }

  findPartner = (id) => {
    return guests.filter(guest => guest.id === id)[0]
  }

  handleBackToConfirm = event => {
    this.setState({ stage: 'confirm' });
  }

  handleBackToFind = event => {
    this.setState({ stage: 'find' });
  }

  handleCheckboxChange = event => {
    const target = event.target;
    const name = target.name;

    const fields = this.state.fields;

    fields[name] = target.checked;

    this.setState({ fields: fields });
  }

  handleCancel = event => {
    this.setState({ results: false });
  }

  handleFound = event => {
    const fields = this.state.fields;

    fields.attendingGuest = false;
    fields.attendingGuestDietary = '';
    fields.attendingPartner = false;
    fields.attendingPartnerDietary = '';

    this.setState({ stage: 'confirm', fields });
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const fields = this.state.fields;

    fields[name] = value;

    this.setState({ fields: fields });
  }

  handleSubmit = event => {
    const data = ["form-name=RSVP form"];

    const guest = this.state.results[0];
    const partner = (this.state.results[1]) ? this.state.results[1] : (guest.partner) ? this.findPartner(guest.partner) : false;

    data.push(`${encodeURIComponent('guestName')}=${encodeURIComponent(guest.name)}`)
    data.push(`${encodeURIComponent('guestAttending')}=${encodeURIComponent(this.state.fields.attendingGuest ? 'Yes' : 'No')}`)
    data.push(`${encodeURIComponent('guestDietary')}=${encodeURIComponent(this.state.fields.attendingGuestDietary)}`)

    if(guest.plusOne && this.state.fields.attendingPlusOne) {
      data.push(`${encodeURIComponent('guestPlusOne')}=${encodeURIComponent(this.state.fields.attendingPlusOne ? 'Yes' : 'No')}`)
    }

    if(partner) {
      data.push(`${encodeURIComponent('partnerName')}=${encodeURIComponent(partner.name)}`)
      data.push(`${encodeURIComponent('partnerAttending')}=${encodeURIComponent(this.state.fields.attendingPartner ? 'Yes' : 'No')}`)
      data.push(`${encodeURIComponent('partnerDietary')}=${encodeURIComponent(this.state.fields.attendingPartnerDietary)}`)
    }

    this.setState({ stage: 'loading' });

    fetch('/rsvp', {
      body: data.join('&'),
      headers: ({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      method: 'POST',
    })
      .then(async response => {
        if(response.status === 200) {
          this.setState({ stage: 'thanks' });
        } else {
          this.setState({ stage: 'error' });
        }
      })
      .catch(response => console.error(response))

  }

  render() {
    const guest = (this.state.results) ? this.state.results[0] : false;
    const partner = (this.state.results && this.state.results[1]) ? this.state.results[1] : (guest && guest.partner) ? this.findPartner(guest.partner) : false;

    return (
      <Layout>
        <SEO title="RSVP" />

        { this.state.stage === 'find' && 
          <div className="centred bordered">
            { !guest && !this.state.results &&
              <>
                <p>Enter you name (first, last or both)<br/>and we&rsquo;ll find your invitation</p>
                <form method="POST" onSubmit={this.findInvite}>
                  <label>
                    <input type="text" name="query" id="query" placeholder="Name" onChange={this.handleInputChange} onBlur={this.handleInputChange} value={this.state.fields.query.value} />
                  </label>
                  <button className="button" type="submit">Find invite</button>
                </form>
              </>
            }
            { !guest && this.state.results &&
              <>
                <p>Sorry, we couldn't find you. <br/>Try searching by your either your first or last name.</p>
                <button className="button" onClick={this.handleCancel}>Back</button>
              </>
            }
            { guest &&
              <>
                <p>We have found an invitation for:</p>
                <p>
                  <span className="rsvp__name">{guest.name}</span>
                  {partner && <> and <span className="rsvp__name">{partner.name}</span></>}
                </p>
                <p>Is this you?</p>
                <button className="button" onClick={this.handleCancel}>No</button>
                <button className="button" onClick={this.handleFound}>Yes</button>
              </>
            }
            </div>
          }
          { this.state.stage === 'confirm' &&
            <div className="section section--narrow">
              <h2>RSVP</h2>
              <p>Will you be able to join us? Tick the box{partner && 'es '} below.</p>
              {guest.accom && <p>As{!partner && ' a '} most special guest{partner && 's'}, we have arranged accommodation for you{partner && ' both'}.</p>}
              <div className="checkbox">
                <input className="checkbox__input" type="checkbox" name="attendingGuest" id={`attending-${guest.id}`} value={guest.name} onChange={this.handleCheckboxChange} onBlur={this.handleCheckboxChange} checked={this.state.fields.attendingGuest} />
                <label className="checkbox__label" htmlFor={`attending-${guest.id}`}>{guest.name}&nbsp;{this.state.fields.attendingGuest && <em>will be attending</em>}</label>
              </div>
              {this.state.fields.attendingGuest && <div className="rsvp__indent">
                <input type="text" name="attendingGuestDietary" placeholder="Any dietary requirements?" onChange={this.handleInputChange} onBlur={this.handleInputChange} value={this.state.fields.attendingGuestDietary} />
              </div>}
              {partner && 
                <div className="checkbox">
                  <input className="checkbox__input" type="checkbox" name="attendingPartner" id={`attending-${partner.id}`} value={partner.name} onChange={this.handleCheckboxChange} onBlur={this.handleCheckboxChange} checked={this.state.fields.attendingPartner} />
              <label className="checkbox__label" htmlFor={`attending-${partner.id}`}>{partner.name}&nbsp;{this.state.fields.attendingPartner && <em>will be attending</em>}</label>
                </div>
              }
              {this.state.fields.attendingGuest && guest.plusOne &&
                <>
                  <p>If you would like to bring a guest, please let us know. We don&rsquo;t need their details just yet.</p> 
                  <div className="checkbox">
                    <input className="checkbox__input" type="checkbox" name="attendingPlusOne" id={`attending-plus-one`} value="plusOne" onChange={this.handleCheckboxChange} onBlur={this.handleCheckboxChange} checked={this.state.fields.attendingPlusOne} />
                    <label className="checkbox__label" htmlFor={`attending-plus-one`}>I would like to bring a plus one</label>
                  </div>
                </>
              }
              {this.state.fields.attendingPartner && <div className="rsvp__indent">
                <input type="text" name="attendingPartnerDietary" placeholder="Any dietary requirements?" onChange={this.handleInputChange} onBlur={this.handleInputChange} value={this.state.fields.attendingPartnerDietary} />
              </div>}
              <button className="button" onClick={this.handleBackToFind}>Back</button>
              <button className="button" onClick={this.handleSubmit}>Submit</button>
            </div>
          }
          {
            this.state.stage === 'loading' && 
            <div className="section section--narrow">
              <h2>RSVP</h2>
              <div>
                <div className="loader"></div>
                <div className="centred">Sending...</div>
              </div>
            </div>
          }
          {
            this.state.stage === 'error' && 
            <div className="section section--narrow">
              <h2>RSVP</h2>
              <p>Sorry, there was an error seding your reply.</p>
              <p>Please try again.</p>
              <button className="button" onClick={this.handleBackToConfirm}>Back</button>
            </div>
          }
          { this.state.stage === 'thanks' &&
            <div className="section section--narrow">
              <h2>RSVP</h2>
              {
                ((this.state.fields.attendingGuest && !partner) || 
                (this.state.fields.attendingGuest && this.state.fields.attendingPartner)) &&  
                <p>Thanks for letting us know, we can&rsquo;t wait to see you in Iceland!</p>
              }
              {
                ((!this.state.fields.attendingGuest && !partner) || 
                (!this.state.fields.attendingGuest && partner && !this.state.fields.attendingPartner)) && 
                <p>Thanks for letting us know, we&rsquo;re so sorry you can&rsquo;t join us in Iceland!</p>
              }
              {
                ((!this.state.fields.attendingGuest && this.state.fields.attendingPartner) ||
                (this.state.fields.attendingGuest && partner && !this.state.fields.attendingPartner)) && 
                <p>Thanks for letting us know, we&rsquo;re sorry you both can&rsquo;t make it, but we can&rsquo;t wait to see at least one of you in Iceland!</p>
              }
              {
                (this.state.fields.attendingGuest || this.state.fields.attendingPartner) && 
                <p>We&rsquo;ll be updating the website with more details as we get closer to the big day. We&rsquo;ll drop you a message when there&rsquo;s been an update.</p>
              }
              </div>
          }
          <form method="post" onSubmit={this.handleSubmit} name="RSVP form" data-netlify="true" netlify-honeypot="website" hidden>
            <input type="text" name="guestName" />
            <input type="text" name="guestAttending" />
            <input type="text" name="guestDietary" />
            <input type="text" name="guestPlusOne" />
            <input type="text" name="partnerName" />
            <input type="text" name="partnerAttending" />
            <input type="text" name="partnerDietary" />
            <input type="text" name="website" onChange={this.handleInputChange} onBlur={this.handleInputChange} value={this.state.fields.website} />
          </form>
      </Layout>
    )
  }
}

export default RSVPPage
