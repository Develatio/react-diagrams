import * as React from 'react';
import { DiagramEngine } from '@develatio/react-diagrams';
import { CanvasWidget } from '@develatio/react-canvas-core';

export interface BodyWidgetProps {
	engine: DiagramEngine;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	render() {
		return <CanvasWidget className="diagram-container" engine={this.props.engine} />;
	}
}
