Shuttler.GraphMarking.bySelectedTarget = {
	afterLink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelected(linked)) 
			Shuttler.GraphMarking.byTarget.afterLink.apply(this, arguments);
	},
	afterUnlink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelected(unlinked)) 
			Shuttler.GraphMarking.byTarget.afterUnlink.apply(this, arguments);
	}
};
Shuttler.GraphMarking.bySelectedSource = {
	afterLink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelected(linked)) 
			Shuttler.GraphMarking.bySource.afterLink.apply(this, arguments);
	},
	afterUnlink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelected(unlinked)) 
			Shuttler.GraphMarking.bySource.afterUnlink.apply(this, arguments);
	}
};
Shuttler.GraphMarking.bySelectorTarget = {
	afterLink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelector(linked)) 
			Shuttler.GraphMarking.byTarget.afterLink.apply(this, arguments);
	},
	afterUnlink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelector(unlinked)) 
			Shuttler.GraphMarking.byTarget.afterUnlink.apply(this, arguments);
	}
};
Shuttler.GraphMarking.bySelectorSource = {
	afterLink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelector(linked)) 
			Shuttler.GraphMarking.bySource.afterLink.apply(this, arguments);
	},
	afterUnlink: function(userId, unlinked, linked, fieldNames, modifier, options, marking) {
		if (marking._selection.isSelector(unlinked)) 
			Shuttler.GraphMarking.bySource.afterUnlink.apply(this, arguments);
	}
};

// (name: String, options: Options) => Shuttler.GraphMarking
Shuttler.Selection.prototype.marking = function(name, options) {
	var marking = new Shuttler.GraphMarking(this._selects, name, options);
	marking._selection = this;
	return marking;
};