import React from 'react'


export default class Route extends React.Component {
	constructor(props) {
		super(props)

		this.platform = null
		this.map = null
		this.state = {
			app_id: props.app_id,
			app_code: props.app_code,
			center: {
				lat: props.lat,
				lng: props.lng,
			},
			zoom: props.zoom,
			// theme: props.theme,
			// style: props.style,
			lat: null,
			lng: null,
		}
	}

	componentDidMount() {
		let platform = new window.H.service.Platform({
			'app_id': this.props.app_id,
			'app_code': this.props.app_code,
            // useCIT: true,
            useHTTPS: true,
		})

		let targetElement = document.getElementById('mapContainer')

		let defaultLayers = platform.createDefaultLayers()

		let map = new window.H.Map(
			document.getElementById('mapContainer'),
			defaultLayers.normal.map,
			{
				zoom: 10,
				center: { lat: 52.51, lng: 13.4 }
			}
		)

		let routingParameters = {
			// The routing mode:
			'mode': 'fastest;car',
			// The start point of the route:
			'waypoint0': 'geo!50.1120423728813,8.68340740740811',
			// The end point of the route:
			'waypoint1': 'geo!52.5309916298853,13.3846220493377',
			// To retrieve the shape of the route we choose the route
			// representation mode 'display'
			'representation': 'display',
		}

		// Define a callback function to process the routing response:
		let onResult = function(result) {
			let route,
				routeShape,
				startPoint,
				endPoint,
				linestring;

			if (result.response.route) {
				// Pick the first route from the response:
				route = result.response.route[0];
				// Pick the route's shape:
				routeShape = route.shape;

				// Create a linestring to use as a point source for the route line
				linestring = new window.H.geo.LineString();

				// Push all the points in the shape into the linestring:
				routeShape.forEach(function(point) {
					let parts = point.split(',');
					linestring.pushLatLngAlt(parts[0], parts[1]);
				});

				// Retrieve the mapped positions of the requested waypoints:
				startPoint = route.waypoint[0].mappedPosition;
				endPoint = route.waypoint[1].mappedPosition;

				// Create a polyline to display the route:
				let routeLine = new window.H.map.Polyline(linestring, {
					style: { strokeColor: 'blue', lineWidth: 10 }
				});

				// Create a marker for the start point:
				let startMarker = new window.H.map.Marker({
					lat: startPoint.latitude,
					lng: startPoint.longitude
				});

				// Create a marker for the end point:
				let endMarker = new window.H.map.Marker({
					lat: endPoint.latitude,
					lng: endPoint.longitude
				});

				// Add the route polyline and the two markers to the map:
				map.addObjects([routeLine, startMarker, endMarker]);

				// Set the map's viewport to make the whole route visible:
				map.setViewBounds(routeLine.getBounds());
			}
		};

		// Get an instance of the routing service:
		let router = platform.getRoutingService();

		// Call calculateRoute() with the routing parameters,
		// the callback and an error callback function (called if a
		// communication error occurs):
		router.calculateRoute(routingParameters, onResult,
		function(error) {
			alert(error.message);
		})
	}


	render() {
		return (
			<div id="mapContainer" style={ {
				width: '100%',
				height: '100%',
			} } />
		)
	}
}