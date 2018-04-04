var p = {
	get name() {
		return "nicholas";
	}
};

Object.defineProperty(p, "age", {
	get: function () {
		return 17;
	}
});
