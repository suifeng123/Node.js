function Module(id,parent) {
	this.id = id;
	this.parent = parent;
	if(parent && parent.children){
		parent.children(this);
	}
	this.filename = null;
	this.loaded = false;
	this.children =[];
}
