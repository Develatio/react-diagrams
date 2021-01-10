import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@develatio/react-diagrams';

export class DiamondPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'diamond',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}
