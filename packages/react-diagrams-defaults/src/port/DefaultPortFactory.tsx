import { DefaultPortModel } from './DefaultPortModel';
import { AbstractModelFactory } from '@develatio/react-canvas-core';
import { DiagramEngine } from '@develatio/react-diagrams-core';

export class DefaultPortFactory extends AbstractModelFactory<DefaultPortModel, DiagramEngine> {
	constructor() {
		super('default');
	}

	generateModel(): DefaultPortModel {
		return new DefaultPortModel({
			name: 'unknown'
		});
	}
}
