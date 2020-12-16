import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

class SimpleMap extends Component {
    constructor (props) {
        super(props)
    }
    static defaultProps = {
        center: {
            lat: 40.463667,
            lng: -3.74922
        },
        zoom: 6
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBXpr3JxEaWQxjAaIJMhLXPIiUGBwA7XqY' }} //quitar clave
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.props.users.map(elm => <Marker
                        lat={elm.location.coordinates[0]}
                        lng={elm.location.coordinates[1]}
                        text={elm.username}
                    />)}
                    
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
